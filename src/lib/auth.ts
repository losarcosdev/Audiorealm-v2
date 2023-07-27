import { db } from "@/database";
import User from "@/models/User";
import { compareSync, hashSync } from "bcryptjs";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in" || "/sign-up",
    newUser: "/sign-up",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "John Doe",
        },
        email: {
          label: "Email",
          type: "text",
          placeholder: "johnDoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "*********",
        },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("Please add your credentials");
        await db.connect();

        const foundUser = await User.findOne({ email: credentials.email });

        // If the user enters a name, it means that he is trying to create an account.
        if (credentials.name) {
          //Sign Up
          if (foundUser) {
            await db.disconnect();
            throw new Error(
              `User with email: ${credentials.email} already exist`
            );
          }

          const newUser = await User.create({
            email: credentials.email,
            password: hashSync(credentials.password),
            role: "client",
            name: credentials.name,
          });

          await newUser.save();
          await db.disconnect();

          const user = {
            name: newUser.name,
            email: newUser.email,
            id: newUser._id,
          };

          return user;
        }

        // If not, he is trying to sign in.
        //Sign In
        if (!foundUser) {
          await db.disconnect();
          throw new Error(`User with email: ${credentials.email} not found`);
        }

        if (!compareSync(credentials.password, foundUser.password!)) {
          await db.disconnect();
          throw new Error("Wrong password");
        }

        const user = {
          name: foundUser.name,
          email: foundUser.email,
          id: foundUser.id,
        };

        return user;
      },
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async session({ token, session }: { token: any; session: any }) {
      if (token) {
        session.id = token.id;
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.addresses = token.addresses;
      }

      return session;
    },

    async jwt({ token, user }) {
      if (token) {
        await db.connect();
        const foundUser = await User.findOne({ email: token.email });

        if (foundUser) {
          await db.disconnect();
          token.picture = foundUser.image;
          token.name = foundUser.name;
          token.email = foundUser.email;
          token.id = foundUser.id;
          token.role = foundUser.role;
          token.addresses = foundUser.addresses;
          return token;
        }

        const newUser = await User.create({
          email: token.email,
          image: token.picture,
          password: hashSync("###############"),
          role: "client",
          name: token.name,
        });

        token.picture = newUser.image;
        token.name = newUser.name;
        token.email = newUser.email;
        token.id = newUser.id;
        token.role = newUser.role;
        token.addresses = newUser.addresses;

        await newUser.save();
        await db.disconnect();

        return token;
      }
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

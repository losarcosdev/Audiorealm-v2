"use client";
import { Button, Icons, Input, Label } from "@/components";
import { useToast } from "@/components/use-toast";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  name?: string;
}

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const { toast } = useToast();
  const pathname = usePathname();
  const router = useRouter();
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isCredentialsLoading, setIsCredentialsLoading] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loginWithGoogle = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { redirect: true, callbackUrl: "/" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
      console.log(error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const onSignIn = async ({ email, password, name }: FormData) => {
    setIsCredentialsLoading(true);

    try {
      type Payload = {
        name?: string;
        email: string;
        password: string;
      };

      let payload: Payload = {
        email,
        password,
      };

      if (name) payload.name = name;

      const result = await signIn("credentials", {
        ...payload,
        redirect: false,
      });

      if (result?.error) {
        return toast({
          title: "Error",
          description: `${result.error}`,
          variant: "destructive",
        });
      } else {
        router.replace("/");
        setTimeout(() => {
          toast({
            title: "Logged In",
            description: "You logged in successfully!",
            variant: "default",
          });
        }, 500);
      }
    } catch (error) {
      const description = name
        ? "An error occurred while creating an account - try again"
        : "There was an error logging in - try again";

      toast({
        title: "Error",
        description,
        variant: "destructive",
      });
    } finally {
      setIsCredentialsLoading(false);
    }
  };

  return (
    <div className="grid items-center gap-1.5">
      <Button
        isLoading={isGoogleLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
      <div className="relative my-3">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      {/* Credentials */}
      <form
        className="flex flex-col gap-3"
        id="auth-form"
        onSubmit={handleSubmit(onSignIn)}
      >
        {pathname === "/sign-up" && (
          <>
            <Label htmlFor="name">Full Name</Label>
            <Input
              {...register("name", {
                required: pathname === "/sign-up" ? true : false,
              })}
              type="text"
              placeholder="John Doe"
            />
            {errors.email && (
              <span className="text-sm text-red-700">
                Please enter your full name
              </span>
            )}
          </>
        )}

        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="email"
          placeholder="johnDoe@gmail.com"
        />
        {errors.email && (
          <span className="text-sm text-red-700">
            Please enter a valid email
          </span>
        )}

        <Label htmlFor="password">Password</Label>
        <Input
          {...register("password", { required: true, minLength: 8 })}
          type="password"
          placeholder="*********"
        />
        {errors.password && (
          <span className="text-sm text-red-700">
            Password must be at least 8 characters long
          </span>
        )}

        <Button
          type="submit"
          form="auth-form"
          variant={"subtle"}
          isLoading={isCredentialsLoading}
        >
          {pathname === "/sign-in" ? "Sign In" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

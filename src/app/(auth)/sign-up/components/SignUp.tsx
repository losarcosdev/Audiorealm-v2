import Link from "next/link";
import { AuthForm } from "../../components";

export const SignUp = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] bg-zinc-50 rounded-sm p-7">
      <div className="flex flex-col space-y-2 gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs">Choose your preferred sign up method</p>

        {/* sign in form */}
        <AuthForm className="w-full" />

        <p className="px-8 text-center text-sm text-zinc-700  items-center justify-center gap-4 hidden sm:flex">
          Already have an account?
          <Link
            href={"/sign-in"}
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign In
          </Link>
        </p>
        <Link
          href={"/sign-in"}
          className="hover:text-zinc-800 text-sm underline underline-offset-4 flex sm:hidden justify-end"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

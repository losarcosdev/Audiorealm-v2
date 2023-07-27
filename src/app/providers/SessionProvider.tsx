"use client";
import { SessionProvider as NextSessionProvider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: Props) => {
  return <NextSessionProvider>{children}</NextSessionProvider>;
};

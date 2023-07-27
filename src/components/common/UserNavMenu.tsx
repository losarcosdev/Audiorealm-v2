"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/DropdownMenu";
import { Icons } from "./Icons";
import Image from "next/image";
import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface Props {
  user: Session["user"];
}

export const UserNavMenu = ({ user }: Props) => {
  if (!user) return <></>;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="text-white flex items-center gap-2">
          {user.image ? (
            <Image
              alt={`${user.name}`}
              src={`${user.image}`}
              height={40}
              width={40}
              className="rounded-full"
            />
          ) : (
            <Icons.user />
          )}
          {user.name && (
            <p className="hidden md:block">{user.name.split(" ", 1)}</p>
          )}
          <Icons.arrowDownFill />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuLabel className="font-medium tracking-tighter text-center flex flex-col">
          <span>Welcome</span>
          <p>{user?.name}!</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/user-profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={"/user-profile/orders"}>Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <button
            onClick={() => signOut()}
            className="font-normal border-none w-full"
          >
            Sign Out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

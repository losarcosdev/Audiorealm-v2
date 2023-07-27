"use client";
import { Separator } from "@radix-ui/react-separator";
import { MenuIcon } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetClose,
} from "../ui/Sheet";
import { links } from "@/utils";
import { usePathname, useRouter } from "next/navigation";

export const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex md:hidden text-white hover:bg-zinc-800 p-2 px-4 rounded-md duration-150">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-full flex-col sm:max-w-lg bg-zinc-900 border-zinc-800 border-[2px] text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-white">AudioRealm</SheetTitle>
          <Separator className="bg-zinc-600 mt-2" />
        </SheetHeader>
        <div className="flex h-full flex-col items-center space-y-2">
          {links.map(({ name, route }) => (
            <SheetClose
              className={`hover:bg-zinc-800 duration-100 rounded-sm w-full ${
                route === `${pathname}` ? "bg-zinc-800" : "bg-transparent"
              }`}
              key={route}
              onClick={() => router.push(route)}
            >
              {name.toUpperCase()}
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

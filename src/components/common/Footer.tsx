"use client";
import { links } from "@/utils";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
  return (
    <>
      {/* //!Desktop version */}
      <footer className="bg-zinc-950 mt-8 justify-between px-7 hidden lg:flex">
        <div className="p-12 max-w-xl flex flex-col gap-4">
          <h4 className="font-bold text-3xl text-white">AudioRealm</h4>
          <p className="text-zinc-400">
            Audiorealm is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
          <p className="text-zinc-600 font-semibold">
            Copyright © 2022. All Rights Reserved
          </p>
        </div>
        <div className="p-12 flex flex-col gap-5">
          <div>
            {links.map(({ name, route }) => (
              <Link
                href={route}
                key={route}
                className="text-sm tracking-tighter font-semibold"
              >
                <button
                  className={`${
                    pathName === route ? "text-teal-700" : "text-white"
                  } px-4 py-2 rounded uppercase`}
                >
                  {name.toUpperCase()}
                </button>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 text-white justify-end">
            <FacebookIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
            <TwitterIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
            <InstagramIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* //!Mobile version */}
      <footer className="flex flex-col lg:hidden bg-zinc-950 mt-4 items-center justify-center p-5 gap-3">
        <h4 className="font-bold text-3xl text-white">AudioRealm</h4>
        <div className="flex flex-col gap-4 text-center">
          {links.map(({ name, route }) => (
            <Link
              href={route}
              key={route}
              className="text-sm tracking-tighter font-semibold"
            >
              <button
                className={`${
                  pathName === route ? "text-teal-700" : "text-white"
                } px-4 py-2 rounded uppercase`}
              >
                {name.toUpperCase()}
              </button>
            </Link>
          ))}
        </div>
        <p className="text-zinc-400 text-center">
          Audiorealm is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <p className="text-zinc-600 font-semibold">
          Copyright © 2022. All Rights Reserved
        </p>
        <div className="flex gap-3 text-white justify-end">
          <FacebookIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
          <TwitterIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
          <InstagramIcon className="hover:text-teal-700 duration-100 cursor-pointer" />
        </div>
      </footer>
    </>
  );
};

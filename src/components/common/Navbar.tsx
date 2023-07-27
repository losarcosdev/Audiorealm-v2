import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { NavLinks, NavButtons } from "..";
import { getServerSession } from "next-auth";

export const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className="bg-zinc-900 border-b-zinc-800 border-[1px] border-t-transparent border-r-transparent border-l-transparent py-1 px-1 md:px-10 w-full">
      <div className="mx-auto px-4 py-2">
        <div className="flex sm:flex-row md:flex-col lg:flex-row flex-wrap items-center justify-between">
          <Link
            href="/"
            className="hidden md:flex items-center font-bold text-3xl text-white"
          >
            AudioRealm
          </Link>
          <NavLinks />

          {/* Only appears in mobile devices */}
          <MobileNav />

          <NavButtons session={session} />
        </div>
      </div>
    </nav>
  );
};

"use client";
import { links } from "@/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export const NavLinks = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useLayoutEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <div className="hidden md:flex space-x-1 relative items-center justify-center xl:pl-44">
      {links.map(({ name, route }) => (
        <Link
          href={route}
          key={route}
          onClick={() => setActiveTab(route)}
          className={`${
            activeTab === route ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === route && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white/5 mix-blend-difference"
              style={{ borderRadius: "calc(var(--radius) - 4px)" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          {name.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

"use client";
import { useState, useEffect, useCallback, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Session } from "next-auth";
import axios from "axios";
import { SearchIcon } from "lucide-react";
import { buttonVariants } from "../ui/Button";
import { CartSheet } from "./CartSheet";
import { UserNavMenu } from "./UserNavMenu";
import { Button } from "@/components/ui/Button";
import { CommandDialog } from "@/components/ui/Command";
import { CommandList } from "@/components/ui/Command";
import { CommandInput } from "@/components/ui/Command";
import { CommandEmpty } from "@/components/ui/Command";
import { CommandGroup } from "@/components/ui/Command";
import { CommandItem } from "@/components/ui/Command";
import { Skeleton } from "../ui/Skeleton";
import { IProduct } from "../../interfaces";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  session: Session | null;
}

export const NavButtons = ({ session }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = useState<IProduct[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (debouncedQuery.length === 0) setData(null);

    if (debouncedQuery.length > 0) {
      const getProductsByQuery = async () => {
        try {
          setIsLoading(true);
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/search/${debouncedQuery}`
          );
          setData(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      getProductsByQuery();
    }
  }, [debouncedQuery]);

  const handleSelect = useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <div className="flex items-center justify-center gap-4 mt-1">
      {pathname !== "/checkout" && <CartSheet />}
      <Button
        className={buttonVariants({
          variant: "custom",
          className:
            "relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start  bg-transparent border-[1px] border-zinc-700",
        })}
        onClick={() => setIsOpen(true)}
      >
        <SearchIcon className="text-white w-9 h-8 py-2" />
        <span className="hidden xl:inline-flex text-white">
          Search products...
        </span>
        <span className="sr-only text-white">Search products</span>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Search products..."
          className="bg-zinc-900 text-white"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(
              isLoading || data?.length ? "hidden" : "py-6 text-center text-sm"
            )}
          >
            No products found.
          </CommandEmpty>
          {isLoading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            <div className="flex flex-col">
              {data?.map((item) => (
                <div
                  className="cursor-pointer flex items-center hover:bg-zinc-100 duration-150 p-2 gap-5"
                  key={item._id}
                  onClick={() =>
                    handleSelect(() => router.push(`/${item.slug}`))
                  }
                >
                  <Image
                    alt={item.title}
                    src={item.images[0]}
                    height={50}
                    width={50}
                    className="rounded-sm"
                  />
                  <p className="font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </CommandList>
      </CommandDialog>
      {session?.user ? (
        <UserNavMenu user={session.user} />
      ) : (
        <Link
          href={"/sign-in"}
          className={`${buttonVariants({
            variant: "custom",
            className: "bg-teal-700 text-white",
            size: "default",
          })}`}
        >
          Login
        </Link>
      )}
    </div>
  );
};

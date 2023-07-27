"use client";
import { ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";
import { Separator } from "../ui/Separator";
import { Icons } from "./Icons";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SheetCardProduct } from "./SheetCardProduct";
import { SheetCartSummary } from "./SheetCartSummary";

export const CartSheet = () => {
  const { cart } = useContext(CartContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          <ShoppingCartIcon className="text-white w-10 h-9 border-[1px] border-zinc-700 p-2 px-3 rounded-sm hover:bg-zinc-700 duration-100 cursor-pointer" />
          {!cart.length ? (
            <></>
          ) : (
            <p className="rounded-full text-white font-semibold text-xs bg-zinc-700 text-center w-fit px-1 absolute top-0 right-0">
              {cart.length}
            </p>
          )}
        </div>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="w-full flex-col sm:max-w-lg bg-zinc-900 border-zinc-800 border-[2px] text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-white">
            {cart.length ? `Cart (${cart.length})` : `Cart`}
          </SheetTitle>
          <Separator className="bg-zinc-600 mt-2" />
        </SheetHeader>
        {cart.length ? (
          <div className="flex flex-col gap-5 h-full overflow-hidden">
            {/* Products */}
            <div className="flex-1">
              <ScrollArea className="h-[500px] md:h-[450px] lg:h-[400px] overflow-scroll pr-6">
                {cart.map((product) => (
                  <SheetCardProduct product={product} key={product._id} />
                ))}
              </ScrollArea>
            </div>

            {/* Summary */}
            <SheetCartSummary cart={cart} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <Icons.cart
              className="h-12 w-12 text-zinc-600"
              aria-hidden="true"
            />
            <span className="text-lg font-medium text-zinc-600">
              Your cart is empty
            </span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

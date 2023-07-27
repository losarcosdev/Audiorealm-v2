import { ICartProduct } from "@/interfaces";
import { Button, buttonVariants } from "../ui/Button";
import { Separator } from "../ui/Separator";
import { SheetClose, SheetFooter } from "../ui/Sheet";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import { SignIn } from "@/app/(auth)/sign-in/components";
import {
  AlertDialogHeader,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
} from "../ui/AlertDialog";

interface Props {
  cart: ICartProduct[];
}

export const SheetCartSummary = ({ cart }: Props) => {
  const session = useSession();

  let total = 0;
  let subTotal = 0;

  cart.forEach((product) => {
    total += product.quantity * product.price;
    subTotal += product.quantity * product.price;
  });

  return (
    <div className="flex flex-col gap-1 text-sm pb-5">
      <Separator className="mb-2 bg-zinc-600" />

      <div className="flex">
        <span className="flex-1">Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>
      <div className="flex">
        <span className="flex-1">Taxes</span>
        <span>Calculated at checkout</span>
      </div>
      <Separator className="mt-2 bg-zinc-600" />
      <div className="flex">
        <span className="flex-1">Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <SheetFooter className="mt-2">
        {!session.data?.user ? (
          <SheetClose asChild>
            <Link
              href={"/sign-in"}
              aria-label="Proceed to checkout"
              className={buttonVariants({
                variant: "subtle",
                className: "w-full",
              })}
            >
              Proceed to Checkout
            </Link>
          </SheetClose>
        ) : (
          <SheetClose asChild>
            <Link
              href={"/checkout"}
              aria-label="Proceed to checkout"
              className={buttonVariants({
                variant: "subtle",
                className: "w-full",
              })}
            >
              Proceed to Checkout
            </Link>
          </SheetClose>
        )}
      </SheetFooter>
    </div>
  );
};

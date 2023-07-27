"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Button, Icons, Separator } from "@/components";
import { IAddress, IOrder } from "@/interfaces";
import Link from "next/link";
import { useToast } from "@/components/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { formatCamelCaseToDisplay } from "@/utils";

interface Props {
  userId: string;
  addresses: IAddress[];
}

export const CheckoutSummary = ({ addresses, userId }: Props) => {
  const { cart, clearCart } = useContext(CartContext);
  const [creatingOrder, setCreatingOrder] = useState(false);
  const [activeAddress, setActiveAddress] = useState<IAddress>();
  const router = useRouter();
  const { toast } = useToast();

  let subtotal = 0;
  const tax = 1 + +process.env.NEXT_PUBLIC_TAXT_RATE!;

  cart.forEach((product) => {
    subtotal += product.quantity * product.price;
  });

  const onSelectAddress = (value: string) => {
    const address = addresses.find((address) => address.location === value);

    setActiveAddress(() => address);
  };

  const onCreateOrder = async () => {
    if (!activeAddress) {
      return toast({
        title: "Missing address",
        description: "Please add a valid address",
        variant: "destructive",
      });
    }

    try {
      setCreatingOrder(true);
      const order: IOrder = {
        orderItems: cart.map((product) => ({
          ...product,
          image: product.images,
        })),
        shippingAddress: activeAddress as IAddress,
        subtotal,
        tax,
        totalNumberOfItems: cart.length,
        total: +(subtotal * tax).toFixed(2),
        isPaid: false,
      };

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/orders`,
        {
          userId,
          ...order,
        }
      );

      router.push(`checkout/${data._id}`);
      clearCart();
    } catch (error) {
      console.error(error);
      setCreatingOrder(false);
      return toast({
        title: "Something went wrong",
        description: "Something went wrong, try again",
        variant: "destructive",
      });
    } finally {
      setCreatingOrder(false);
    }
  };

  return (
    <div className="rounded-lg flex items-center flex-col shadow-sm border-zinc-200 border-[1px] mx-auto lg:mx-0 px-7 pt-3 pb-1 w-96 h-fit gap-4">
      {cart.length ? (
        <>
          <div className="w-full">
            <h2 className="text-center text-4xl tracking-tighter font-bold">
              PAYMENT INFO
            </h2>
            <Separator className="bg-zinc-200 mt-3" />
          </div>
          <div className="flex flex-col w-full">
            <h4 className="py-2 text-lg tracking-tighter font-bold">
              Shipping Address:
            </h4>
            <select
              className="w-full rounded-sm"
              onChange={({ target }) => onSelectAddress(target.value)}
            >
              <option value={""} unselectable="off">
                Select Address
              </option>
              {addresses.map((address, idx) => (
                <option value={address.location} key={idx}>
                  {address.location}
                </option>
              ))}
            </select>
            {activeAddress && (
              <div className="py-6">
                {Object.entries(activeAddress).map(([key, value]) => {
                  if (key === "_id") return <></>;
                  return (
                    <div className="flex text-sm" key={key}>
                      <span className="flex-1 font-medium">
                        {formatCamelCaseToDisplay(key)}:
                      </span>
                      <span className="text-zinc-500">{value || "Empty"}</span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="flex items-center gap-1">
              <p>No address?</p>
              <Link
                href={"/user-profile"}
                className="font-semibold hover:underline"
              >
                Add a new one
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm pb-5 justify-end rounded-sm p-2 w-full">
            <div className="flex">
              <span className="flex-1 font-semibold">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex">
              <span className="flex-1 font-semibold">Taxes</span>
              <span className="font-semibold">15%</span>
            </div>
            <Separator className="mt-2 bg-zinc-600" />
            <div className="flex">
              <span className="flex-1 font-semibold">Total</span>
              <span className="font-semibold">
                ${(subtotal * tax).toFixed(2)}
              </span>
            </div>
            <Button
              className="w-full"
              onClick={onCreateOrder}
              isLoading={creatingOrder}
            >
              Create Order
            </Button>
          </div>
        </>
      ) : (
        <div className="flex h-[500px] flex-col items-center justify-center space-y-2">
          <Icons.cart className="h-12 w-12 text-zinc-600" aria-hidden="true" />
          <span className="text-lg font-medium text-zinc-600">
            Your cart is empty
          </span>
        </div>
      )}
    </div>
  );
};

import { db } from "@/database";
import Order from "@/models/Order";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components";
import { formatCamelCaseToDisplay } from "@/utils";
import { PayPalActions } from "./components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/models/User";

interface Props {
  params: {
    orderId: string;
  };
}

const OrderPage = async ({ params }: Props) => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
  }

  await db.connect();
  const order = await Order.findOne({ _id: params.orderId }).lean();
  const dbUser = await User.findOne({ email: session.user.email }).lean();
  await db.disconnect();

  if (!order) return <div>Order not found</div>;

  if (order.user?.toString() !== dbUser?._id.toString()) {
    redirect("/");
  }

  return (
    <section className="p-3 lg:container max-w-7xl py-5">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <h1 className="font-semibold text-xl flex-wrap text-center lg:text-left">
          Order: {order._id}
        </h1>
        {order.isPaid ? (
          <span className="p-1 rounded-[999px] border-green-500 border-[1.5px] text-green-500 font-medium w-full lg:w-44 text-center text-sm">
            Paid
          </span>
        ) : (
          <span className="p-1 rounded-[999px] border-orange-500 border-[1.5px] text-orange-500 font-medium w-full lg:w-44 text-center text-sm">
            Pending payment
          </span>
        )}
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10 pt-9">
        {/* Product list */}
        <div className="w-full overflow-scroll">
          {order.orderItems.map((product) => (
            <div className="flex flex-col" key={product._id}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    alt="Titulo del producto"
                    src={product.image}
                    height={80}
                    width={80}
                    className="rounded-sm"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-zinc-300">{product.category}</p>
                  </div>
                </div>
                x{product.quantity}
                <p className="font-semibold">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <Separator className="my-3" />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-lg flex items-center flex-col shadow-sm border-zinc-200 border-[1px] mx-auto lg:mx-0 px-7 py-3 w-full lg:w-[60%] h-fit gap-4">
          <div className="w-full">
            <h2 className="text-center text-4xl tracking-tighter font-bold">
              PAYMENT INFO
            </h2>
            <Separator className="bg-zinc-200 mt-3" />
          </div>

          {/* Shipping address */}
          <div className="flex flex-col w-full">
            <h4 className="py-2 text-lg tracking-tighter font-bold">
              Shipping Address:
            </h4>
            {Object.entries(order.shippingAddress!).map(([key, value]) => (
              <div className="flex text-sm" key={key}>
                <span className="flex-1 font-medium">
                  {formatCamelCaseToDisplay(key)}:
                </span>
                <span className="text-zinc-500">{value || "Empty"}</span>
              </div>
            ))}
            <Separator className="bg-zinc-200 mt-3" />
          </div>
          {/*Summary*/}
          <div className="flex flex-col gap-2 text-sm pb-5 justify-end rounded-sm p-2 w-full">
            <div className="flex">
              <span className="flex-1 font-semibold">Subtotal</span>
              <span className="font-semibold">
                ${order.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex">
              <span className="flex-1 font-semibold">Taxes</span>
              <span className="font-semibold">15%</span>
            </div>
            <Separator className="mt-2 bg-zinc-600" />
            <div className="flex">
              <span className="flex-1 font-semibold">Total</span>
              <span className="font-semibold">${order.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Paypal buttons */}
          {order.isPaid ? (
            <div className="w-full flex flex-col items-center justify-center">
              <span className="p-2 rounded-[999px] border-green-500 border-[1.5px] text-green-500 font-medium w-full text-center">
                Paid
              </span>
            </div>
          ) : (
            <div className="w-full">
              <PayPalActions order={order} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderPage;

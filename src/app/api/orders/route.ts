import { db } from "@/database";
import { IOrder } from "@/interfaces";
import Order from "@/models/Order";
import Product from "@/models/Product";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { isValidObjectId } from "mongoose";

export const POST = async (request: Request) => {
  const { userId, ...order } = await request.json();

  const productOrder = order as IOrder;

  if (!isValidObjectId(userId)) {
    return NextResponse.json(
      {
        message: "Unauthorized - You must be logged in to perform this action",
      },
      { status: 401 }
    );
  }

  await db.connect();
  const user = await User.findById(userId);

  if (!user) {
    await db.disconnect();
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const productsIds = productOrder.orderItems.map((product) => product._id);

  const dbProducts = await Product.find({ _id: { $in: productsIds } });

  try {
    let subtotal = 0;

    for (const product of productOrder.orderItems) {
      const dbProductPrice = dbProducts.find(
        (dbProduct) => dbProduct.id === product._id
      )?.price;

      if (dbProductPrice !== product.price) {
        return NextResponse.json(
          {
            message: "Price manipulated - cancelling operation",
          },
          { status: 400 }
        );
      }

      subtotal += dbProductPrice * product.quantity;
    }

    const taxRate = Number(process.env.NEXT_PUBLIC_TAXT_RATE);
    const totalBackend = +Number(subtotal * (taxRate + 1)).toFixed(2);

    if (productOrder.total !== totalBackend) {
      return NextResponse.json(
        {
          message: "Price manipulated - cancelling operation",
        },
        { status: 400 }
      );
    }

    const newOrder = new Order({
      ...productOrder,
      isPaid: false,
      user,
    });

    await newOrder.save();
    await db.disconnect();

    return NextResponse.json(newOrder);
  } catch (error) {
    console.log(error);
  }
};

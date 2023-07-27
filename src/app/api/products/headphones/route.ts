import { db } from "@/database";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import { IProduct } from "@/interfaces/products-2";

export const GET = async (): Promise<NextResponse<IProduct[]> | undefined> => {
  try {
    await db.connect();

    const headphones = await Product.find({ category: "headphone" })
      .lean()
      .select("title images price inStock slug category -_id");

    await db.disconnect();

    return NextResponse.json(headphones);
  } catch (error) {
    console.log(error);
  }
};

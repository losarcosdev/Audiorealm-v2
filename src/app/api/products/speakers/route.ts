import { db } from "@/database";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import { IProduct } from "@/interfaces/products-2";

export const GET = async (): Promise<NextResponse<IProduct[]> | undefined> => {
  try {
    await db.connect();

    const speakers = await Product.find({ category: "speaker" })
      .lean()
      .select("title images price inStock slug category -_id");

    await db.disconnect();

    return NextResponse.json(speakers);
  } catch (error) {
    console.log(error);
  }
};

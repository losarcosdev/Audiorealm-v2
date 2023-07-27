import { db } from "@/database";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import { IProduct } from "../../../interfaces/products-2";

export const GET = async (): Promise<NextResponse<IProduct[]> | undefined> => {
  try {
    db.connect();
    const products = await Product.find()
      .lean()
      .select("title images price inStock slug category -_id");

    db.disconnect;

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
  }
};

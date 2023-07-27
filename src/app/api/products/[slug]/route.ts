import { db } from "@/database";
import { IProduct } from "@/interfaces";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

interface Params {
  params: {
    slug: string;
  };
}

export const GET = async (
  request: Request,
  { params }: Params
): Promise<
  | NextResponse<{
      message: string;
    }>
  | NextResponse<IProduct>
> => {
  const { slug } = params;
  try {
    await db.connect();
    const product = await Product.findOne({ slug }).lean();

    if (!product) {
      await db.disconnect();
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    await db.disconnect();

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: "Database error" }, { status: 500 });
  }
};

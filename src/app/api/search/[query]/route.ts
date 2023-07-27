import { db } from "@/database";
import { IProduct } from "../../../../interfaces/products-2";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

interface Params {
  params: {
    query: string;
  };
}

export const GET = async (
  request: Request,
  { params }: Params
): Promise<
  | NextResponse<{
      message: string;
    }>
  | NextResponse<IProduct[]>
  | undefined
> => {
  try {
    let { query = "" } = params;

    query = query.toString().toLowerCase();

    await db.connect();
    const products: IProduct[] = await Product.find({
      $text: { $search: query },
    })
      .lean()
      .select("title images price inStock slug -_id");

    if (!products.length) {
      return NextResponse.json(
        { message: "Products not found" },
        { status: 404 }
      );
    }

    await db.disconnect();

    return NextResponse.json(products);
  } catch (error) {
    // console.log(error);
  }
};

import { db } from "@/database";
import { initialData } from "@/database/seedData";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (): Promise<
  | NextResponse<{
      message: string;
    }>
  | undefined
> => {
  try {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(initialData.products);
    await db.disconnect();

    return NextResponse.json({ message: "DB Populated" });
  } catch (error) {
    console.log(error);
    await db.disconnect();
  }
};

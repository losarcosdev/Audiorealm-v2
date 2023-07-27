import { db } from "@/database";
import Product from "@/models/Product";
import { ProductList } from "../(products)/components";
import { IProduct, ProductResponse } from "@/interfaces";

export const Featured = async () => {
  await db.connect();

  const products = (await Product.find()
    .limit(3)
    .lean()
    .select(
      "title images price inStock slug category -_id"
    )) as ProductResponse[];

  await db.disconnect();

  return (
    <section className="container max-w-7xl lg:h-screen">
      <h1 className="text-3xl lg:text-4xl font-semibold tracking-tighter text-center lg:text-left">
        FEATURED PRODUCTS
      </h1>
      <ProductList products={products} />
    </section>
  );
};

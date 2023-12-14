import { db } from "@/database";
import Product from "@/models/Product";
import { ProductList } from "../(products)/components";
import { ProductResponse } from "@/interfaces";

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
    <section className="md:px-12 max-w-7xl lg:h-screen md:mx-auto">
      <h1 className="md:px-10 text-3xl lg:text-4xl font-semibold tracking-tighter text-center lg:text-left">
        FEATURED PRODUCTS
      </h1>
      <ProductList products={products} />
    </section>
  );
};

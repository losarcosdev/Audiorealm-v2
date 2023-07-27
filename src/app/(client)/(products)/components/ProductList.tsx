import { ProductResponse } from "@/interfaces";
import { ProductCard } from "./";

interface Props {
  products: ProductResponse[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <section className="container pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto w-[100%] justify-center items-center gap-5">
        {products.map((product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </section>
  );
};

import { SingleProductResponse } from "@/interfaces";
import { FC } from "react";
import { AddToCartLogic } from "./AddToCartLogic";

interface Props {
  product: SingleProductResponse;
}

export const ProductDetails: FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col gap-10 max-w-xl">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-center text-3xl md:text-left md:text-5xl">
          {product.title}
        </h1>
        <p className="text-zinc-400 text-sm p-3">{product.description}</p>
        <p className="font-bold p-3">${product.price}</p>
      </div>

      {!product.inStock ? (
        <p className="rounded-sm w-full text-center font-semibold bg-zinc-100 p-2">No stock</p>
      ) : (
        <AddToCartLogic product={product} />
      )}
    </div>
  );
};

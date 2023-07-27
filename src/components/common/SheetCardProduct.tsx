"use client";
import { ICartProduct } from "@/interfaces";
import { MinusIcon, PlusIcon, Trash } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/Separator";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";

interface Props {
  product: ICartProduct;
}

export const SheetCardProduct = ({ product }: Props) => {
  const { removeProductFromCart, updateProductQuantityInCart } =
    useContext(CartContext);

  console.log(product);

  const handleQuantity = (quantity: number, product: ICartProduct) => {
    if (
      quantity + product.quantity < 1 ||
      quantity + product.quantity > product.inStock
    )
      return;

    updateProductQuantityInCart({
      ...product,
      quantity: quantity + product.quantity,
    });
  };

  return (
    <div key={product._id} className="flex flex-col">
      <div className="flex items-center justify-between py-3 gap-1">
        <Image
          alt={product.title}
          src={product.images}
          height={70}
          width={70}
          className="rounded-sm"
        />

        {/* Product info */}
        <div>
          <h5 className="text-white font-semibold">{product.title}</h5>
          <p className="text-zinc-500 text-sm hidden lg:block">
            ${product.price} x {product.quantity} = $
            {(product.price * product.quantity).toFixed(2)}
          </p>
          <p className="text-zinc-500 text-sm">{product.category}</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-1">
          <button
            className="rounded-sm border-zinc-600 border-[1px] py-2 px-3"
            onClick={() => handleQuantity(-1, product)}
          >
            <MinusIcon className="h-3 w-3" />
          </button>
          <p className="rounded-sm border-zinc-600 border-[1px] py-[0.35rem] px-3 text-xs">
            {product.quantity}
          </p>
          <button
            className="rounded-sm border-zinc-600 border-[1px] py-2 px-3"
            onClick={() => handleQuantity(1, product)}
          >
            <PlusIcon className="h-3 w-3" />
          </button>
          <button
            className="rounded-sm border-zinc-600 border-[1px] py-2 px-3"
            onClick={() => removeProductFromCart(product._id)}
          >
            <Trash className="h-3 w-3" />
          </button>
        </div>
      </div>
      <Separator className="bg-zinc-600" />
    </div>
  );
};

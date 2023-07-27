"use client";
import { CartContext } from "@/app/context/CartContext";
import { Input, Separator } from "@/components";
import { ICartProduct } from "@/interfaces";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

interface Props {
  product: ICartProduct;
}

export const CheckoutProductCard = ({ product }: Props) => {
  const { updateProductQuantityInCart, removeProductFromCart } =
    useContext(CartContext);

  const handleQuantity = (value: string) => {
    updateProductQuantityInCart({
      ...product,
      quantity: +value,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            alt="Titulo del producto"
            src={product.images}
            height={80}
            width={80}
            className="rounded-sm"
          />
          <div className="flex flex-col">
            <p className="font-semibold">{product.title}</p>
            <p className="text-zinc-300">{product.category}</p>
          </div>
        </div>
        <Input
          onChange={({ target }) => handleQuantity(target.value)}
          type="number"
          defaultValue={product.quantity}
          max={product.inStock}
          min={1}
          className="w-fit text-center font-semibold"
          placeholder="Quantity"
        />
        <p className="font-semibold">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
        <TrashIcon
          className="p-2 rounded-[999px] hover:bg-red-200 duration-150 cursor-pointer w-9 h-9"
          onClick={() => removeProductFromCart(product._id)}
        />
      </div>
      <Separator className="my-3" />
    </div>
  );
};

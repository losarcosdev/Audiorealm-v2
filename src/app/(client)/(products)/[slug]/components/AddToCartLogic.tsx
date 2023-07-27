"use client";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Button, Input, Separator } from "@/components";
import { ICartProduct, ICategory, SingleProductResponse } from "@/interfaces";
import Image from "next/image";
import { useToast } from "@/components/use-toast";

interface Props {
  product: SingleProductResponse;
}

export const AddToCartLogic = ({ product }: Props) => {
  const { addProductToCart } = useContext(CartContext);
  const [localProductQuantity, setlocalProductQuantity] = useState<number>(1);
  const { toast } = useToast();

  const [localCartProduct, setLocalCartProduct] = useState<ICartProduct>({
    _id: product._id,
    category: product.category as ICategory,
    images: product.images[0],
    price: product.price,
    quantity: localProductQuantity,
    slug: product.slug,
    title: product.title,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    inStock: product.inStock,
  });

  const handleQuantity = (value: string) => {
    setlocalProductQuantity(() => +value);
    setLocalCartProduct((prevCart) => ({
      ...prevCart,
      quantity: localProductQuantity,
    }));
  };

  const handleAddToCart = (product: ICartProduct) => {
    addProductToCart({ ...product, quantity: localProductQuantity });

    return toast({
      variant: "default",
      action: (
        <div className="flex flex-col gap-5 w-96">
          <h5 className="font-semibold">Added to cart</h5>
          <Separator />
          <div className="flex items-center gap-5">
            <Image
              alt={product.title}
              src={product.images}
              height={80}
              width={80}
            />
            <p className="font-semibold">{product.title}</p>
          </div>
        </div>
      ),
    });
  };

  return (
    <div className="flex flex-col gap-2 w-full md:w-52 px-4 md:px-0">
      <span>Quantity</span>
      <Input
        type="number"
        onChange={({ target }) => handleQuantity(target.value)}
        defaultValue={1}
        min={1}
        max={product.inStock}
      />
      <Button
        variant={"custom"}
        className="bg-teal-700 text-white rounded-sm"
        onClick={() => handleAddToCart(localCartProduct)}
      >
        Add to cart
      </Button>
    </div>
  );
};

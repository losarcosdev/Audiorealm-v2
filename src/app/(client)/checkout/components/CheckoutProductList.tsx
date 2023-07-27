"use client";
import { useContext } from "react";
import { CheckoutProductCard } from "./CheckoutProductCard";
import { CartContext } from "@/app/context/CartContext";

export const CheckoutProductList = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-full overflow-scroll pr-3 flex-1 rounded-md">
      <div className="flex flex-col flex-1">
        {cart.map((product) => (
          <CheckoutProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

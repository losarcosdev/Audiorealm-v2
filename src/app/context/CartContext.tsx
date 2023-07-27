"use client";
import { ICartProduct } from "@/interfaces";
import { createContext, useContext } from "react";

interface ContextProps {
  cart: ICartProduct[];
  isLoaded: boolean;
  orderSummary?: {
    totalNumberOfItems: number;
    subtotal: number;
    taxRate: number;
    tax: number;
    total: number;
  };
  addProductToCart: (cart: ICartProduct) => void;
  removeProductFromCart: (productId: string) => void;
  clearCart: () => void;
  updateProductQuantityInCart: (product: ICartProduct) => void;
}

export const CartContext = createContext<ContextProps>({} as ContextProps);

export const useCartContext = () => useContext(CartContext);

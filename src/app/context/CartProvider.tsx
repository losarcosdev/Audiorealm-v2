"use client";
import { IAddress, ICartProduct } from "@/interfaces";
import { CartContext } from "./CartContext";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import Cookies from "js-cookie";

interface Props {
  children: React.ReactNode;
}

export interface CartState {
  isLoaded: boolean;
  cart: ICartProduct[];
  orderSummary?: {
    totalNumberOfItems: number;
    subtotal: number;
    taxRate: number;
    tax: number;
    total: number;
  };
  shippingAddress?: IAddress;
}

const CART_INITIAL_STATE: CartState = {
  isLoaded: false,
  cart: [],
  orderSummary: undefined,
  shippingAddress: undefined,
};

export const CartContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  // Load cart from cookies
  useEffect(() => {
    try {
      const cookieCart: ICartProduct[] = Cookies.get("cart")
        ? JSON.parse(Cookies.get("cart")!)
        : [];

      dispatch({
        type: "[Cart] - Get cart from cookies",
        payload: cookieCart,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "[Cart] - Get cart from cookies",
        payload: [],
      });
    }
  }, []);

  // Save cart in cookies
  useEffect(() => {
    if (state.cart.length) {
      Cookies.set("cart", JSON.stringify(state.cart));
    }
  }, [state.cart, state.cart.length]);

  const addProductToCart = (newProduct: ICartProduct) => {
    const productInCart = state.cart.find(
      (product) => product._id === newProduct._id
    );

    if (!productInCart) {
      dispatch({
        type: "[Cart] - AddProductToCart",
        payload: [...state.cart, newProduct],
      });
    }

    if (productInCart) {
      const updatedCart: ICartProduct[] = state.cart.map((product) => {
        if (newProduct._id !== product._id) return product;
        product.quantity = newProduct.quantity;
        return product;
      });

      dispatch({ type: "[Cart] - AddProductToCart", payload: updatedCart });
    }
  };

  const removeProductFromCart = (productId: string) => {
    const updatedCart = state.cart.filter(
      (productInCart) => productInCart._id !== productId
    );

    Cookies.set("cart", JSON.stringify(updatedCart));

    dispatch({ type: "[Cart] - RemoveProductFromCart", payload: updatedCart });
  };

  const updateProductQuantityInCart = (product: ICartProduct) => {
    const foundedProduct = state.cart.some(
      (productInCart) => productInCart._id === product._id
    );

    if (foundedProduct) {
      const updatedProduct = state.cart.map((productInCart) => {
        if (productInCart._id !== product._id) return productInCart;
        productInCart.quantity = product.quantity;
        return productInCart;
      });
      dispatch({
        type: "[Cart] - UpdateProductQuantityInCart",
        payload: updatedProduct,
      });
    }
  };

  const clearCart = () => {
    Cookies.remove("cart")
    dispatch({ type: "[Cart] - ClearCart" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantityInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

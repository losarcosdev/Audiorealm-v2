import { ICartProduct } from "@/interfaces";
import { CartState } from "./CartProvider";

type CartActionType =
  | { type: "[Cart] - AddProductToCart"; payload: ICartProduct[] }
  | { type: "[Cart] - UpdateProductQuantityInCart"; payload: ICartProduct[] }
  | { type: "[Cart] - RemoveProductFromCart"; payload: ICartProduct[] }
  | {
      type: "[Cart] - Get cart from cookies";
      payload: ICartProduct[];
    }
  | {
      type: "[Cart] - ClearCart";
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - AddProductToCart":
      return {
        ...state,
        cart: [...action.payload],
      };

    case "[Cart] - Get cart from cookies":
      return {
        ...state,
        isLoaded: true,
        cart: [...action.payload],
      };

    case "[Cart] - UpdateProductQuantityInCart":
      return {
        ...state,
        cart: [...action.payload],
      };

    case "[Cart] - RemoveProductFromCart":
      return {
        ...state,
        cart: [...action.payload],
      };

    case "[Cart] - ClearCart":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

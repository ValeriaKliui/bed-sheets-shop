import { selectCartItems } from "@lib/redux/features/cart/cartSelectors";
import {
  decreaseAmount,
  increaseAmount,
  resetCart,
} from "@lib/redux/features/cart/cartSlice";
import { CartItem } from "@lib/redux/features/cart/interfaces";
import getSameItemInCart from "@lib/utils/getSameItemInCart";
import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks";

export default function useCart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemToAdd: CartItem) =>
    dispatch(increaseAmount(itemToAdd));

  const removeFromCart = (itemToRemove: CartItem, isTotalDelete?: boolean) =>
    dispatch(decreaseAmount({ itemToRemove, isTotalDelete }));

  const getTotalAmountInCart = useCallback(() => {
    return cartItems.reduce((acc, curr) => {
      return curr.amount ? acc + curr.amount : acc;
    }, 0);
  }, [cartItems]);

  const getItemAmountInCart = (itemToCheck: CartItem) => {
    const { amountInCart } = getSameItemInCart(cartItems, itemToCheck);
    return amountInCart;
  };

  const cleanCart = () => {
    dispatch(resetCart());
  };

  return {
    removeFromCart,
    getTotalAmountInCart,
    addToCart,
    cleanCart,
    cartItems,
    getItemAmountInCart,
  };
}

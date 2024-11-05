import { selectCartInfo } from "@lib/redux/features/cart/cartSelectors";
import { updateCart as updateCartInStore } from "@lib/redux/features/cart/cartSlice";
import loopThroughObject from "@lib/utils/loopThroughObject";
import { useCallback, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks";

export default function useCart() {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector(selectCartInfo);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartInfo));
  }, [cartInfo]);

  const updateCart = (
    clickedID: string,
    size?: string,
    isIncreasing?: boolean
  ) => {
    if (size) {
      const itemInCartSize = cartInfo && cartInfo?.[clickedID]?.[size];
      const prevSize = cartInfo[clickedID];

      dispatch(
        updateCartInStore({
          ...cartInfo,
          [clickedID]: {
            ...prevSize,
            [size]: itemInCartSize
              ? itemInCartSize + (isIncreasing ? 1 : -1)
              : 1,
          },
        })
      );
    } else {
      const itemInCartAmount = cartInfo?.[clickedID];

      dispatch(
        updateCartInStore({
          ...cartInfo,
          [clickedID]: itemInCartAmount
            ? itemInCartAmount + (isIncreasing ? 1 : -1)
            : 1,
        })
      );
    }
  };

  const addToCart = (clickedID: string, size?: string) =>
    updateCart(clickedID, size, true);

  const removeFromCart = (clickedID: string, size?: string) =>
    updateCart(clickedID, size);

  const getAmountInCart = useCallback(
    (id: string) => {
      const itemInCartAmount = cartInfo?.[id] ?? 0;
      return itemInCartAmount;
    },
    [cartInfo]
  );

  const getTotalAmountInCart = useCallback(() => {
    const cartEntries = Object.entries(cartInfo);
    console.log(cartEntries);

    return cartEntries.reduce((acc, curr) => {
      if (typeof curr[1] === "number") return (acc += curr[1]);
      else return (acc += loopThroughObject(curr[1]));
    }, 0);
  }, [cartInfo]);

  const getAmountInCartByParams = useCallback(
    (id: string, { size }) => {
      const item = cartInfo[id];

      if (!item) return;

      if (typeof item === "number") return cartInfo[id];
      else return item[size];
    },
    [cartInfo]
  );

  const cleanCart = () => {
    dispatch(updateCartInStore({}));
  };

  return {
    removeFromCart,
    getAmountInCart,
    getTotalAmountInCart,
    addToCart,
    cleanCart,
    getAmountInCartByParams,
  };
}

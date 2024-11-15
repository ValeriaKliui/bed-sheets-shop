"use client";

import { useAppDispatch } from "@hooks/hooks";
import useCart from "@hooks/useCart";
import { fetchItemsByIDs } from "@lib/fetchItemsByIDs";
import { setFullCartItems } from "@lib/redux/features/cart/cartSlice";
import Loader from "@ui/Loader";
import { PropsWithChildren, useEffect, useState } from "react";

export default function CartProvider({ children }: PropsWithChildren) {
  const { getTotalAmountInCart, cartItems, getItemAmountInCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const cartItemsIDs = cartItems.map(({ id }) => id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(false);
    const fetchItemsData = async () => {
      if (getTotalAmountInCart() > 0) {
        const foundItems = await fetchItemsByIDs({ id: cartItemsIDs });
        const itemsWithSizes = foundItems.map(({ sizes, id, ...item }) => {
          const amount = sizes?.map((size) => ({
            size,
            amount: getItemAmountInCart({ size, id }),
          }));

          return { id, sizes, amount, ...item };
        });
        dispatch(setFullCartItems(itemsWithSizes));
      }
    };
    fetchItemsData();
  }, [
    cartItems,
    getItemAmountInCart,
    cartItemsIDs,
    getTotalAmountInCart,
    dispatch,
  ]);

  return <>{isLoading ? <Loader /> : children}</>;
}

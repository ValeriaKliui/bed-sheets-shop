import { fetchItemsByIDs } from "@lib/fetchItemsByIDs";
import { setFullCartItems } from "@lib/redux/features/cart/cartSlice";
import { useEffect, useState } from "react";

import { useAppDispatch } from "./hooks";
import useCart from "./useCart";

export default function useFullCartInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const { getTotalAmountInCart, cartItems, getItemAmountInCart } = useCart();
  const cartItemsIDs = cartItems.map(({ id }) => id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(false);
    const fetchItemsData = async () => {
      if (getTotalAmountInCart() > 0) {
        const foundItems = await fetchItemsByIDs({ id: cartItemsIDs });
        const itemsWithSizes = foundItems.map(({ sizes, id, ...item }) => {
          const amount = sizes
            ? sizes?.flatMap((size) => {
                const amount = getItemAmountInCart({ size, id });
                if (!amount) return [];
                return {
                  size,
                  amount,
                };
              })
            : getItemAmountInCart({ id });

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

  return { isLoading };
}

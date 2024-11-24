import { fetchItemsByIDs } from '@lib/fetchItemsByIDs';
import { setFullCartItems } from '@lib/redux/features/cart/cartSlice';
import { useEffect, useState } from 'react';

import { useAppDispatch } from './hooks';
import useCart from './useCart';

export default function useFullCartInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    getTotalAmountInCart,
    cartItems,
    getItemAmountInCart,
    cleanCart,
  } = useCart();
  const cartItemsIDs = cartItems.map(({ id }) => id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(false);
    const fetchItemsData = async () => {
      if (getTotalAmountInCart() > 0) {
        const foundItems = await fetchItemsByIDs({
          id: cartItemsIDs,
        });

        const itemsFullInfo = cartItems.map(({ id, ...item }) => {
          const { additionalProperties, ...foundItem } =
            foundItems.find(({ id: itemID }) => id === itemID);
          return { ...item, ...foundItem };
        });

        dispatch(setFullCartItems(itemsFullInfo));
      } else dispatch(setFullCartItems([]));
    };
    fetchItemsData();
  }, [
    cartItems,
    getItemAmountInCart,
    cartItemsIDs,
    getTotalAmountInCart,
    dispatch,
    cleanCart,
  ]);

  return { isLoading };
}

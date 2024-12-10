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
    clearCart,
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

        const itemsFullInfo = cartItems.flatMap(({ id, ...item }) => {
          const foundItem = foundItems.find(
            ({ id: itemID }) => id === itemID
          );

          if (foundItem) {
            const { additionalProperties, ...itemWithoutProperties } =
              foundItem;
            return { ...item, ...itemWithoutProperties };
          } else return [];
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
    clearCart,
  ]);

  return { isLoading };
}

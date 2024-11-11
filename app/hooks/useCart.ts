import { selectCartInfo } from '@lib/redux/features/cart/cartSelectors';
import { updateCart as updateCartInStore } from '@lib/redux/features/cart/cartSlice';
import { ItemsWithSize } from '@lib/redux/features/cart/interfaces';
import loopThroughObject from '@lib/utils/loopThroughObject';
import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './hooks';

export default function useCart(cartItems) {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector(selectCartInfo);

  useEffect(() => {
    console.log(JSON.stringify(cartInfo));
    localStorage.setItem('cart', JSON.stringify(cartInfo));
  }, [cartInfo]);

  const updateCart = (
    clickedID: string,
    size: string = '',
    isIncreasing?: boolean
  ) => {
    const item = cartInfo?.[clickedID];
    const isOneSizedItem = typeof item === 'number';

    const itemAmount = isOneSizedItem ? item : item?.[size];
    const prevItemSize = cartInfo[clickedID] as ItemsWithSize;

    if (itemAmount === 1 && !isIncreasing) {
      const { [clickedID]: _, cartWithoutItem = {} } = cartInfo;

      dispatch(updateCartInStore(cartWithoutItem));
    } else {
      console.log('itemAmount', itemAmount);
      const updatedCartItem = isOneSizedItem
        ? {
            [clickedID]: itemAmount
              ? itemAmount + (isIncreasing ? 1 : -1)
              : 0,
          }
        : {
            [clickedID]: {
              ...prevItemSize,
              [size]: itemAmount
                ? itemAmount + (isIncreasing ? 1 : -1)
                : 1,
            },
          };

      dispatch(
        updateCartInStore({ ...cartInfo, ...updatedCartItem })
      );
    }
  };

  const addToCart = (clickedID: string, size?: string) =>
    updateCart(clickedID, size, true);

  const removeFromCart = (clickedID: string, size?: string) =>
    updateCart(clickedID, size);

  const getTotalAmountInCart = useCallback(() => {
    const cartEntries = Object.entries(cartInfo);

    return cartEntries.reduce((acc, curr) => {
      if (typeof curr[1] === 'number') return (acc += curr[1]);
      else return (acc += loopThroughObject(curr[1]));
    }, 0);
  }, [cartInfo]);

  const getAmountInCartByParams = useCallback(
    (id: string, params: { size?: string }) => {
      const item = cartInfo[id];

      if (!item) return 0;

      if (typeof item === 'number') return cartInfo[id] as number;
      else return params?.size ? item[params.size] : 0;
    },
    [cartInfo]
  );

  const cleanCart = () => {
    dispatch(updateCartInStore({}));
  };

  return {
    removeFromCart,
    getTotalAmountInCart,
    addToCart,
    cleanCart,
    getAmountInCartByParams,
    cartInfo,
  };
}

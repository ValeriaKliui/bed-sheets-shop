import { selectCartItems } from '@lib/redux/features/cart/cartSelectors';
import {
  decreaseAmount,
  increaseAmount,
  resetCart,
} from '@lib/redux/features/cart/cartSlice';
import { CartItemShort } from '@lib/redux/features/cart/interfaces';
import getSameItemInCart from '@lib/utils/getSameItemInCart';
import sumObjectParam from '@lib/utils/sumObjectParam';
import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './hooks';

export default function useCart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback(
    (itemToAdd: CartItemShort) => dispatch(increaseAmount(itemToAdd)),
    [dispatch]
  );

  const removeFromCart = useCallback(
    (itemToRemove: CartItemShort, isTotalDelete?: boolean) => {
      dispatch(decreaseAmount({ itemToRemove, isTotalDelete }));
    },
    [dispatch]
  );

  const getTotalAmountInCart = useCallback(
    // @ts-ignore: TODO
    () => sumObjectParam(cartItems, 'amount'),
    [cartItems]
  );

  const getItemAmountInCart = useCallback(
    (itemToCheck: CartItemShort) =>
      getSameItemInCart(cartItems, itemToCheck).amountInCart,
    [cartItems]
  );

  const clearCart = useCallback(
    () => dispatch(resetCart()),
    [dispatch]
  );

  return {
    removeFromCart,
    getTotalAmountInCart,
    addToCart,
    clearCart,
    cartItems,
    getItemAmountInCart,
  };
}

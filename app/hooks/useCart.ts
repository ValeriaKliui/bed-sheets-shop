import { useCallback, useEffect, useState } from 'react';

import { CartInfo } from './interfaces';

const getInitialCart = () => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) return JSON.parse(savedCart);
};

export default function useCart() {
  const [cartInfo, setCartInfo] = useState<CartInfo>({});

  useEffect(() => {
    setCartInfo(getInitialCart());
  }, []);

  useEffect(() => {
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'cart',
        newValue: JSON.stringify(cartInfo),
      })
    );
  }, [cartInfo]);

  const onIncreaseInCart = useCallback(
    (clickedID: string) => {
      const itemInCartAmount = cartInfo?.[clickedID] ?? 0;

      setCartInfo((prev) => {
        const newCart = {
          ...prev,
          [clickedID]: itemInCartAmount + 1,
        };

        localStorage.setItem('cart', JSON.stringify(newCart));

        return newCart;
      });
    },
    [cartInfo]
  );

  const onDecreaseInCart = useCallback(
    (id: string) => {
      const itemInCartAmount = cartInfo?.[id] ?? 0;
      if (itemInCartAmount)
        setCartInfo((prev) => {
          const newCart = { ...prev, [id]: itemInCartAmount - 1 };
          localStorage.setItem('cart', JSON.stringify(newCart));
          return newCart;
        });
    },
    [cartInfo]
  );

  const getAmountInCart = useCallback(
    (id: string) => {
      const itemInCartAmount = cartInfo?.[id] ?? 0;

      return itemInCartAmount;
    },
    [cartInfo]
  );

  const cleanCart = () => {
    setCartInfo({});
    localStorage.removeItem('cart');
  };

  return {
    onIncreaseInCart,
    getAmountInCart,
    onDecreaseInCart,
    cartInfo,
    cleanCart,
  };
}

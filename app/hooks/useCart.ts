import { CartInfo } from '@lib/redux/features/cart/interfaces';
import { useCallback, useEffect, useState } from 'react';

// const getInitialCart = () => {
//   const savedCart = localStorage.getItem('cart');
//   if (savedCart) return JSON.parse(savedCart);
// };

export default function useCart() {
  const [cartInfo, setCartInfo] = useState<CartInfo>({});

  const addToCart = useCallback(
    (clickedID: string, size?: string) => {
      console.log(cartInfo?.[clickedID], size);
      if (size) {
        const itemInCartSize =
          cartInfo && cartInfo?.[clickedID]?.[size];
        console.log(
          'itemInCartSize',
          cartInfo,
          cartInfo?.[clickedID],
          size,
          itemInCartSize
        );
        setCartInfo((prev) => ({
          ...prev,
          [clickedID]: {
            [size]: itemInCartSize ? itemInCartSize + 1 : 1,
          },
        }));

        //   {[clickedID]: {
        //   [size]: itemInCartSize? itemInCartSize+1: 1
        // }}))
      }

      // ;

      // if (itemInCart) {
      //   const isSizeInCart =size&& itemInCart[size]
      //   setCartInfo((prev) => ({
      //     ...prev,
      //     [clickedID]: isSizeInCart ?
      //   }));
      // } else {
      //   setCartInfo((prev) => ({
      //     ...prev,
      //     [clickedID]: size ? { [size]: 1 } : 1,
      //   }));
      // }

      // if (itemInCart) {
      //   if (!size) console.log(itemInCart);
      // } else
      //
    },
    [cartInfo]
  );
  console.log(cartInfo);

  // useEffect(() => {
  //   setCartInfo(getInitialCart());
  // }, []);

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

  const getAmountInCart = useCallback(() => {
    // const itemInCartAmount = cartInfo?.[id] ?? 0;
    // return itemInCartAmount;
  }, []);

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
    addToCart,
  };
}

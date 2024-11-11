"use client";

import useCart from "@hooks/useCart";
import { fetchItemsByIDs } from "@lib/fetchItemsByIDs";
import { CartItemI } from "@ui/CartItem/interfaces";
import CartItems from "@ui/CartItems";
import Gap from "@ui/Gap";
import Loader from "@ui/Loader";
import { useEffect, useMemo, useState } from "react";

import CartHeader from "./CartHeader";

export default function CartInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItemI[] | null>(null);
  const { cartInfo, getTotalAmountInCart } = useCart(cartItems);
  const amountInCart = getTotalAmountInCart();
  const cartItemsIDs = useMemo(() => Object.keys(cartInfo), [cartInfo]);

  useEffect(() => {
    setIsLoading(false);
    const fetchItemsData = async () => {
      if (amountInCart > 0) {
        const foundItems = await fetchItemsByIDs({ id: cartItemsIDs });

        const itemsWithSizes = foundItems.map(({ id, ...item }) => {
          console.log(cartInfo[id])
          return {
            id,
            cartInfo: cartInfo[id],
            ...item,
          }
        });

        setCartItems(itemsWithSizes);
      }

    };
    fetchItemsData();
  }, [amountInCart, cartItemsIDs, cartInfo]);

  return (
    <>
      <CartHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <Gap direction="vertical" size="large">
          <CartItems cartItems={cartItems} />
        </Gap>
      )}
    </>
  );
}

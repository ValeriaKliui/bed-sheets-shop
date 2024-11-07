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
  const { cartInfo, getTotalAmountInCart } = useCart();

  const amountInCart = getTotalAmountInCart();
  const cartItemsIDs = useMemo(() => Object.keys(cartInfo), [cartInfo]);

  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemI[] | null>(null);

  useEffect(() => {
    const fetchItemsData = async () => {
      setIsLoading(true);
      if (amountInCart > 0) {
        const foundItems = await fetchItemsByIDs({ id: cartItemsIDs });

        const itemsWithSizes = foundItems.map(({ id, ...item }) => ({
          id,
          cartInfo: cartInfo[id],
          ...item,
        }));

        setCartItems(itemsWithSizes);
      }
      setIsLoading(false);
    };
    fetchItemsData();
  }, [amountInCart, cartItemsIDs, cartInfo]);

  return (
    <>
      <CartHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <Gap direction="vertical">
          <CartItems cartItems={cartItems} />
        </Gap>
      )}
    </>
  );
}

"use client";

import { useAppSelector } from "@hooks/hooks";
import useCart from "@hooks/useCart";
import getItemsText from "@lib/getItemsText";
import { selectFullCartItems } from "@lib/redux/features/cart/cartSelectors";
import getTotalPriceOfCart from "@lib/utils/getTotalPriceOfCart";
import Button from "@ui/Button";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";
import { useState } from "react";
import Modal from "@ui/Modal";
import useModal from "@hooks/useModal";
import CallForm from "@ui/CallForm";
import CallLinkModal from "@ui/CallLinkModal";

export default function CartBottom() {
  const [isPurchased, setIsPurchased] = useState(false)
  const { getTotalAmountInCart, clearCart } = useCart();
  const { closeModal } = useModal()
  const totalAmount = getTotalAmountInCart();
  const cartItemsFull = useAppSelector(selectFullCartItems);

  if (!totalAmount) return false;

  const itemsText = getItemsText(totalAmount);

  const totalPrice = getTotalPriceOfCart(cartItemsFull)

  const onPurchase = () => {
    setIsPurchased(true)
    // clearCart()
  }

  return (
    <Gap
      direction="vertical"
      alignItems="flex-start"
      className={styles.container}
    >
      <p> Итого</p>
      <p className={clsx("text_primary", "text_big")}>
        {(totalPrice)}
      </p>
      <Gap size="large" direction="vertical" className={styles.cartInfo}>
        <Gap
          direction="vertical"
          alignItems="flex-start"
          className={styles.cartInfo}
        >
          <Gap justifyContent="space-between" className={styles.cartInfo}>
            <p className="text_secondary">
              <span className={clsx("text_medium", "text_primary")}>
                {totalAmount}{" "}
              </span>
              {itemsText} на сумму
            </p>
            <p> {totalPrice}</p>
          </Gap>
          <Link className="link" href="#">
            Информация о доставке
          </Link>
        </Gap>
        <Button className={styles.orderButton} onClick={onPurchase}>Оформить заказ</Button>
        {isPurchased && <CallLinkModal />}
      </Gap>
    </Gap>
  );
}

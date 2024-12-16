"use client";

import { useAppSelector } from "@hooks/hooks";
import useCart from "@hooks/useCart";
import useModal from "@hooks/useModal";
import getItemsText from "@lib/getItemsText";
import { selectFullCartItems } from "@lib/redux/features/cart/cartSelectors";
import getTotalPriceOfCart from "@lib/utils/getTotalPriceOfCart";
import Button from "@ui/Button";
import CallModal from "@ui/CallModal";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function
  () {
  const { getTotalAmountInCart, clearCart } = useCart();
  const { closeModal, openModal, isModalOpen } = useModal();
  const totalAmount = getTotalAmountInCart();
  const cartItemsFull = useAppSelector(selectFullCartItems);

  const itemsText = getItemsText(totalAmount);

  const totalPrice = getTotalPriceOfCart(cartItemsFull);

  const onPurchase = () => {
    setTimeout(() => clearCart(), 2000)
  };

  const onClose = () => {
    closeModal();
  };

  if (!totalAmount || !totalPrice) return false;

  return (
    <Gap
      direction="vertical"
      alignItems="flex-start"
      className={styles.container}
    >
      <p> Итого</p>
      <p className={clsx("text_primary", "text_big")}>{totalPrice}</p>
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
        <Button className={styles.orderButton} onClick={openModal}>
          Оформить заказ
        </Button>
        <CallModal
          isOpened={isModalOpen}
          closeModal={onClose}
          title="Оформить заказ"
          onSubmit={onPurchase}
          successText="Ваш заказ успешно оформлен!"
        />
      </Gap>
    </Gap>
  );
}

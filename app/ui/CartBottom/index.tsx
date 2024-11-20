"use client";

import useCart from "@hooks/useCart";
import formatPrice from "@lib/utils/formatPrice";
import Button from "@ui/Button";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function CartBottom() {
  const { getTotalAmountInCart } = useCart();

  const totalAmount = getTotalAmountInCart();

  if (!totalAmount) return false;

  return (
    <Gap
      direction="vertical"
      alignItems="flex-start"
      className={styles.container}
    >
      <p> Итого</p>
      <p className={clsx("text_primary", "text_big")}>{formatPrice(1000)}</p>
      <Gap size="large" direction="vertical" className={styles.cartInfo}>
        <Gap
          direction="vertical"
          alignItems="flex-start"
          className={styles.cartInfo}
        >
          <Gap justifyContent="space-between" className={styles.cartInfo}>
            <p className="text_secondary">
              <span className={clsx("text_medium", "text_primary")}>
                {totalAmount}
              </span>
              товаров на
            </p>
            <p> {formatPrice(1000)}</p>
          </Gap>
          <Link className="link" href="#">
            Информация о доставке
          </Link>
        </Gap>
        <Button className={styles.orderButton}>Оформить заказ</Button>
      </Gap>
    </Gap>
  );
}

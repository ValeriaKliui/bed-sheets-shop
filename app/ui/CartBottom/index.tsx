"use client";

import { useAppSelector } from "@hooks/hooks";
import useCart from "@hooks/useCart";
import getItemsText from "@lib/getItemsText";
import { selectFullCartItems } from "@lib/redux/features/cart/cartSelectors";
import formatPrice from "@lib/utils/formatPrice";
import sumObjectParam from "@lib/utils/sumObjectParam";
import Button from "@ui/Button";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function CartBottom() {
  const { getTotalAmountInCart } = useCart();
  const totalAmount = getTotalAmountInCart();
  const cartItemsFull = useAppSelector(selectFullCartItems);

  if (!totalAmount) return false;

  const itemsText = getItemsText(totalAmount);

  const totalPrice = cartItemsFull.reduce((sum, { amount = 0, price }) => {
    const priceNum = Number(price);
    if (typeof amount === "number") {
      return sum + amount * priceNum;
    } else {
      const itemAmount = sumObjectParam(amount, "amount");
      return sum + itemAmount * priceNum;
    }
  }, 0);

  return (
    <Gap
      direction="vertical"
      alignItems="flex-start"
      className={styles.container}
    >
      <p> Итого</p>
      <p className={clsx("text_primary", "text_big")}>
        {formatPrice(totalPrice)}
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
            <p> {formatPrice(totalPrice)}</p>
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

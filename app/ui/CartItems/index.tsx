import Button from "@ui/Button";
import CartItem from "@ui/CartItem";
import { CartItemProps } from "@ui/CartItem/interfaces";
import Gap from "@ui/Gap";
import Link from "next/link";

import { CartItemsProps } from "./interfaces";
import styles from "./styles.module.scss";

function DefaultCartItem({ id, category, size, ...cartItem }: CartItemProps) {
  return (
    <Link href={`/catalog/${category}/${id}`} key={id + size}>
      <CartItem id={id} size={size} {...cartItem} />
    </Link>
  );
}

export default function CartItems({ cartItems }: CartItemsProps) {
  if (!cartItems || !cartItems.length)
    return (
      <Gap direction="vertical" className={styles.cartEmpty}>
        <p className="text_medium">В корзине отсутствуют товары</p>
        <Button href="catalog">Перейти в каталог</Button>
      </Gap>
    );

  const cartItemsWithDiffSizes = cartItems?.map(
    ({ id, amount, ...cartItem }) => {
      if (typeof amount === "number")
        return (
          <DefaultCartItem {...cartItem} id={id} amount={amount} key={id} />
        );
      else
        return amount?.map(({ size, amount }) => (
          <DefaultCartItem
            {...cartItem}
            id={id}
            amount={amount}
            size={size}
            key={id}
          />
        ));
    }
  );

  return <div>{cartItemsWithDiffSizes}</div>;
}

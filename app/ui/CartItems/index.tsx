import Button from "@ui/Button";
import CartItem from "@ui/CartItem";
import Gap from "@ui/Gap";

import { CartItemsProps } from "./interfaces";
import styles from "./styles.module.scss";

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
        return <CartItem key={id} id={id} amount={amount} {...cartItem} />;
      else
        return amount?.map(({ size, amount }) => (
          <CartItem
            key={id}
            id={id}
            amount={amount}
            size={size}
            {...cartItem}
          />
        ));
    }
  );

  return <div>{cartItemsWithDiffSizes}</div>;
}

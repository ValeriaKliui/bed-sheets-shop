import Button from "@ui/Button";
import CartItem from "@ui/CartItem";
import { CartItemProps } from "@ui/CartItem/interfaces";
import Gap from "@ui/Gap";

import { CartItemsProps } from "./interfaces";
import styles from "./styles.module.scss";

function DefaultCartItem({ id, ...cartItem }: CartItemProps) {
  return (
    <CartItem id={id} {...cartItem} />
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
    ({ id, amount, cartID, ...cartItem }) => {
      return (
        <DefaultCartItem {...cartItem} id={id} amount={amount} key={cartID} />
      );
    }
  );

  return <div>{cartItemsWithDiffSizes}</div>;
}

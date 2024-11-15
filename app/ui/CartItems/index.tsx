import CartItem from "@ui/CartItem";
import { CartItemProps } from "@ui/CartItem/interfaces";

import { CartItemsProps } from "./interfaces";

const DefaultCartItem = ({ id, ...cartProps }: CartItemProps) => (
  <CartItem key={id} id={id} {...cartProps} />
);

export default function CartItems({ cartItems }: CartItemsProps) {
  console.log(cartItems);
  const cartItemsWithDiffSizes = cartItems?.map(
    ({ amount, id, ...cartItemProps }) => {
      if (!amount)
        return <DefaultCartItem {...cartItemProps} id={id} key={id} />;
      else {
        // const diffSizes = Object.entries(cartInfo);

        return <div key={id}>sdfsdf</div>;
        // diffSizes.map(([size, amount]) => (
        //   <DefaultCartItem
        //     {...cartItemProps}
        //     size={size}
        //     amount={amount}
        //     id={id}
        //     key={id + size}
        //   />
        // ));
      }
    }
  );

  return <>{cartItemsWithDiffSizes}</>;
}

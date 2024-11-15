import CartItem from "@ui/CartItem";
import { CartItemProps } from "@ui/CartItem/interfaces";

import { CartItemsProps } from "./interfaces";

const DefaultCartItem = ({ id, ...cartProps }: CartItemProps) => (
  <CartItem key={id} id={id} {...cartProps} />
);

export default function CartItems({ cartItems }: CartItemsProps) {
  const cartItemsWithDiffSizes = cartItems?.map(({ id, amount, ...cartItem }) => {
    if (typeof amount === 'number') return <CartItem key={id} id={id} amount={amount}{...cartItem} />
  })

  // const cartItemsWithDiffSizes = cartItems?.map(
  //   ({ amount, id, ...cartItemProps }) => {
  //     if (typeof amount === 'number')
  //       return <DefaultCartItem {...cartItemProps} amount={amount} id={id} key={id} />;
  //     else {
  //       // const diffSizes = Object.entries(cartInfo);

  //       return <div key={id}>sdfsdf</div>;
  //       // diffSizes.map(([size, amount]) => (
  //       //   <DefaultCartItem
  //       //     {...cartItemProps}
  //       //     size={size}
  //       //     amount={amount}
  //       //     id={id}
  //       //     key={id + size}
  //       //   />
  //       // ));
  //     }
  //   }
  // );

  return <>
    {cartItemsWithDiffSizes}
  </>;
}

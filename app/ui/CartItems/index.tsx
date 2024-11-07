import CartItem from '@ui/CartItem';
import { CartItemProps } from '@ui/CartItem/interfaces';

import { CartItemsProps } from './interfaces';

const DefaultCartItem = ({ id, ...cartProps }: CartItemProps) => (
    <CartItem key={id} id={id} {...cartProps} />
);

export default function CartItems({ cartItems }: CartItemsProps) {
    const cartItemsWithDiffSizes = cartItems?.map(
        ({ cartInfo, id, ...cartItemProps }) => {
            if (typeof cartInfo === 'number')
                return (
                    <DefaultCartItem
                        {...cartItemProps}
                        id={id}
                        key={id}
                        amount={cartInfo}
                    />
                );
            else {
                const diffSizes = Object.entries(cartInfo);

                return diffSizes.map(([size, amount]) => (
                    <DefaultCartItem
                        {...cartItemProps}
                        size={size}
                        amount={amount}
                        id={id}
                        key={id}
                    />
                ));
            }
        }
    );

    return <>{cartItemsWithDiffSizes}</>;
}

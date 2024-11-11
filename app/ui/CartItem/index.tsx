import useCart from '@hooks/useCart';
import formatPrice from '@lib/utils/formatPrice';
import ButtonPlusMinus from '@ui/ButtonPlusMinus';
import Gap from '@ui/Gap';
import clsx from 'clsx';
import Image from 'next/image';

import { CartItemProps } from './interfaces';
import styles from './styles.module.scss';

export default function CartItem({
  amount,
  photo,
  title,
  price,
  size,
  id
}: CartItemProps) {
  const { addToCart, removeFromCart } = useCart()
  const onAddClick = () => addToCart(id, size)
  const onRemoveClick = () => removeFromCart(id, size)

  const finalPrice = amount * Number(price);

  return (
    <div className={styles.container}>
      <Image src={photo} width={100} height={60} alt={title} className={styles.photo} />
      <Gap className={styles.info} direction='vertical'>
        <h4> {title}</h4>
        <p>{size}</p>
      </Gap>
      <ButtonPlusMinus
        amount={amount}
        onMinusClick={onRemoveClick}
        onPlusClick={onAddClick}
        className={styles.buttonAmount}
      />
      <p className={clsx("text_medium", styles.price)}>{formatPrice(finalPrice)}</p>
    </div>
  );
}

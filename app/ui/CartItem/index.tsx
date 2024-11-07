import formatPrice from '@lib/utils/formatPrice';
import ButtonPlusMinus from '@ui/ButtonPlusMinus';
import Gap from '@ui/Gap';
import Image from 'next/image';

import { CartItemProps } from './interfaces';
import styles from './styles.module.scss';

export default function CartItem({
  amount,
  photo,
  title,
  price,
  size,
}: CartItemProps) {
  const finalPrice = amount * Number(price);

  return (
    <Gap justifyContent="space-between" className={styles.container}>
      <Gap size="medium">
        <Image src={photo} width={280} height={150} alt={title} />
        <Gap direction="vertical" alignItems="flex-start">
          <h4> {title}</h4>
          <p>{size}</p>
        </Gap>
      </Gap>
      <Gap size='huge'>
        <ButtonPlusMinus
          amount={amount}
          onMinusClick={() => { }}
          onPlusClick={() => { }}
          className={styles.buttonAmount}
        />
        <p className="text_medium">{formatPrice(finalPrice)}</p>
      </Gap>
    </Gap>
  );
}

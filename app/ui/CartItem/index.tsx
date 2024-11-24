import useCart from "@hooks/useCart";
import formatPrice from "@lib/utils/formatPrice";
import ButtonPlusMinus from "@ui/ButtonPlusMinus";
import CircledIcon from "@ui/CircledIcon";
import Gap from "@ui/Gap";
import colors from "@variables.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { CartItemProps } from "./interfaces";
import styles from "./styles.module.scss";

const { bg } = colors;

export default function CartItem({
  amount = 1,
  photo,
  title,
  price,
  additionalProperties,
  id, category
}: CartItemProps) {
  const { sizes, aromas, textiles, colors } = additionalProperties
  const { addToCart, removeFromCart } = useCart();
  const onAddClick = () => addToCart({ id, additionalProperties });
  const onRemoveClick = () => removeFromCart({ id, additionalProperties });
  const onTotalDelete = () => removeFromCart({ id, additionalProperties }, true)

  const finalPrice = amount * Number(price);

  return (
    <div className={styles.container}>
      <Link href={`/catalog/${category}/${id}`} >
        <Image
          src={photo}
          width={100}
          height={60}
          alt={title}
          className={styles.photo}
        />
      </Link>
      <Gap className={styles.info} direction="vertical" alignItems="flex-start">
        <Link href={`/catalog/${category}/${id}`} >
          <h4> {title}</h4>
        </Link>
        <p>{sizes}</p>
        <p>{aromas}</p>
        <p>{textiles}</p>
        <p>{colors}</p>
      </Gap>
      <ButtonPlusMinus
        amount={amount}
        onMinusClick={onRemoveClick}
        onPlusClick={onAddClick}
        className={styles.buttonAmount}
      />
      <Gap justifyContent="space-between">
        <p className={clsx("text_medium", styles.price)}>
          {formatPrice(finalPrice)}
        </p>
        <CircledIcon
          src="/icons/clean.svg"
          alt={"clean cart"}
          color={bg}
          className={styles.deleteIcon}
          onClick={onTotalDelete}
        />
      </Gap>
    </div>
  );
}

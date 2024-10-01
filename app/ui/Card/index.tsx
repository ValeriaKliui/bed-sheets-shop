import { CURRENCY } from "@lib/constants/catalogItems";
import { getDiscountInfo } from "@lib/utils/getDiscountInfo";
import ButtonWithCardActions from "@ui/ButtonWithCardActions";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";
import { CSSProperties, forwardRef } from "react";

import { CardProps } from "./interfaces";
import styles from "./styles.module.scss";

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { article, info, photo, price, title, actionButton, id }: CardProps,
    ref
  ) => {
    const priceNum = Number(price);
    const discountInfo = getDiscountInfo(priceNum);

    return (
      <Gap
        className={styles.container}
        direction="vertical"
        justifyContent={"space-between" as CSSProperties}
        ref={ref}
      >
        <Gap
          className={styles.top}
          justifyContent={"space-between" as CSSProperties}
        >
          <Gap direction="vertical">
            <p className={clsx("text_small", styles.article)}>{article}</p>
            <p className="text_small">{info}</p>
          </Gap>
          {actionButton}
        </Gap>
        <Image
          src={photo}
          alt={title}
          width={220}
          height={150}
          layout="responsive"
          sizes="(min-width: 0) 30vw"
        />
        <h5>{title}</h5>
        <Gap direction="vertical">
          <p>{discountInfo}</p>
          <h4>
            {priceNum.toFixed(1)} {CURRENCY}
          </h4>
          <ButtonWithCardActions id={id} className={styles.button} />
        </Gap>
      </Gap>
    );
  }
);

Card.displayName = "Card";

export default Card;

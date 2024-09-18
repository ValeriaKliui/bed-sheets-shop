import { CURRENCY } from "@lib/constants/catalogItems";
import { getDiscountInfo } from "@lib/utils/getDiscountInfo";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef } from "react";

import { CardProps } from "./interfaces";
import styles from "./styles.module.scss";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ article, info, photo, price, title, actionButton }: CardProps, ref) => {
    const priceNum = Number(price);
    const discountInfo = getDiscountInfo(priceNum);

    return (
      <Gap className={styles.container} direction="vertical" justify ref={ref}>
        <Gap className={styles.top} justify>
          <Gap direction="vertical">
            <p className={clsx("text_small", styles.article)}>{article}</p>
            <p className="text_small">{info}</p>
          </Gap>
          {actionButton}
        </Gap>
        <Image src={photo} alt={title} width={220} height={150} />
        <h5>{title}</h5>
        <Gap direction="vertical">
          <p>{discountInfo}</p>
          <h4>
            {priceNum.toFixed(1)} {CURRENCY}
          </h4>
        </Gap>
      </Gap>
    );
  }
);

Card.displayName = "Card";

export default Card;

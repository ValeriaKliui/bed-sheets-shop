import { Availability } from "@lib/constants/types";
import formatPrice from "@lib/utils/formatPrice";
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
    const isAvailable = info === Availability.available

    return (
      <Gap
        className={clsx(styles.container, !isAvailable && styles.unavailable)}
        direction="vertical"
        justifyContent={"space-between"}
        ref={ref}
      >
        <Gap className={styles.top} justifyContent={"space-between"}>
          <Gap direction="vertical" alignItems="flex-start">
            <p className={clsx("text_small", "text_secondary", styles.article)}>
              {article}
            </p>
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
          sizes="100vw"
        />
        <h5>{title}</h5>
        <Gap direction="vertical">
          <p>{discountInfo}</p>
          <h4 className="text_primary">{formatPrice(price)}</h4>
        </Gap>
      </Gap>
    );
  }
);

Card.displayName = "Card";

export default Card;

import { CURRENCY } from "@lib/constants/catalogItems";
import { CatalogItem } from "@lib/constants/types";
import { getDiscountInfo } from "@lib/utils/getDiscountInfo";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef } from "react";

import { CardProps } from "./interfaces";
import styles from "./styles.module.scss";

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      article,
      info,
      photo,
      price,
      title,
      id,
      isShowcase,
      actionButton,
    }: CardProps,
    ref
  ) => {
    const articleShowed = isShowcase ? "" : article;
    const infoShowed = isShowcase ? "комплект" : info;
    const discountInfo = getDiscountInfo(price);

    return (
      <Gap
        className={styles.container}
        direction="vertical"
        justify={true}
        ref={ref}
      >
        <Gap justify>
          <div>
            <p className="text_small">{infoShowed}</p>
            <p className={clsx("text_small", styles.article)}>
              {articleShowed}
            </p>
          </div>
          {actionButton}
        </Gap>
        <Image src={photo} alt={title} width={220} height={150} />
        <h5>{title}</h5>
        <Gap size="small" direction="vertical">
          <p>{discountInfo}</p>
          <h5 className="text_primary">
            {price.toFixed(1)} {CURRENCY}
          </h5>
        </Gap>
      </Gap>
    );
  }
);

Card.displayName = "Card";

export default Card;

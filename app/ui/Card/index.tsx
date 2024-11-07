import formatPrice from "@lib/utils/formatPrice";
import { getDiscountInfo } from "@lib/utils/getDiscountInfo";
import ButtonWithCartActions from "@ui/ButtonWithCartActions";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";
import { forwardRef } from "react";

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
        justifyContent={"space-between"}
        ref={ref}
      >
        <Gap className={styles.top} justifyContent={"space-between"}>
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
          sizes="100vw"
        />
        <h5>{title}</h5>
        <Gap direction="vertical">
          <p>{discountInfo}</p>
          <h4>
            {formatPrice(price)}
          </h4>
          <ButtonWithCartActions id={id} className={styles.button} />
        </Gap>
      </Gap>
    );
  }
);

Card.displayName = "Card";

export default Card;

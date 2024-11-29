import { SLIDER_VERTICAL } from "@lib/constants";
import { CURRENCY } from "@lib/constants/catalogItems";
import { Availability } from "@lib/constants/types";
import repeatArray from "@lib/utils/repeatArray";
import Breadcrumbs from "@ui/Breadcrumbs";
import Gap from "@ui/Gap";
import VerticalSlider from "@ui/Sliders/VerticalSlider";
import clsx from "clsx";

import DotImage from "./DotImage";
import FormAddToCart from "./FormAddToCart";
import { CatalogItemProps } from "./interfaces";
import ItemSliderCard from "./ItemSliderCard";
import styles from "./styles.module.scss";

export default function ItemBlock({
  title,
  article,
  price,
  id,
  category,
  photo,
  additionalProperties,
  info,
}: CatalogItemProps) {
  const isAvailable = info === Availability.available;

  const cardsSrc = repeatArray(SLIDER_VERTICAL, 2);
  cardsSrc.unshift({ src: photo });

  const cards = cardsSrc.map(({ src }) => (
    <ItemSliderCard src={src} key={src} />
  ));
  const dots = cardsSrc.map(({ src }) => <DotImage src={src} key={src} />);

  return (
    <div className={clsx("wrapper", styles.layout)}>
      <VerticalSlider cards={cards} dots={dots} className={styles.slider} />
      <Gap
        direction="vertical"
        size="medium"
        className={styles.topInfo}
        alignItems="flex-start"
      >
        <Breadcrumbs
          extraLinks={[{ title, path: `catalog/${category}/${id}` }]}
        />
        <p className={clsx("text_big")}>{title}</p>
        <p className="text_secondary">Артикул: {article}</p>
      </Gap>
      <Gap direction="vertical" size="medium" className={styles.info_container}>
        <p>
          Наволочка двухсторонняя: светло-серый сатин и шелк с узором
          &quot;волшебный лес&quot; 50*70 см
        </p>
        <p className={clsx("text_big", "text_primary", styles.price)}>
          {price} {CURRENCY}
        </p>
        <FormAddToCart
          additionalProperties={additionalProperties}
          id={id}
          isAvailable={isAvailable}
        />
      </Gap>
    </div>
  );
}

import { SLIDER_VERTICAL } from "@lib/constants";
import { CURRENCY } from "@lib/constants/catalogItems";
import repeatArray from "@lib/utils/repeatArray";
import Accordion from "@ui/Accordion";
import Breadcrumbs from "@ui/Breadcrumbs";
import ButtonWithCartActions from "@ui/ButtonWithCartActions";
import Gap from "@ui/Gap";
import VerticalSlider from "@ui/Sliders/VerticalSlider";
import clsx from "clsx";
import Image from "next/image";

import CharacteristicBottom from "./CharacteristicBottom";
import CharacteristicHeader from "./CharacteristicHeader";
import { CatalogItemProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ItemBlock({
  title,
  article,
  price,
  id,
  category,
  sizes,
  photo,
}: CatalogItemProps) {
  const characteristics = [
    {
      header: <CharacteristicHeader title="Размер" />,
      bottom: <CharacteristicBottom options={sizes} />,
    },
  ];

  const cardsSrc = repeatArray(SLIDER_VERTICAL, 2);
  cardsSrc.unshift({ src: photo });

  const cards = cardsSrc.map(({ src }) => (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{
        width: "490px",
        height: "100%",
        objectFit: "cover",
        maxHeight: "90%",
      }}
      key={src}
      alt={""}
    />
  ));
  const dots = cardsSrc.map(({ src }) => (
    <Image
      key={src}
      src={src}
      width={55}
      height={55}
      alt=""
      style={{ display: "block" }}
    />
  ));

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
      <Gap direction="vertical" size="medium" className={styles.bottomInfo}>
        <p>
          Наволочка двухсторонняя: светло-серый сатин и шелк с узором
          &quot;волшебный лес&quot; 50*70 см
        </p>
        <p className={clsx("text_big", "text_primary", styles.price)}>
          {price} {CURRENCY}
        </p>
        <ButtonWithCartActions id={id} />
        <Accordion items={characteristics} className={styles.characteristics} />
      </Gap>
    </div>
  );
}

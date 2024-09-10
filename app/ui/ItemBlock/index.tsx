import { CURRENCY } from "@lib/constants/catalogItems";
import { CatalogItem } from "@lib/constants/types";
import Accordion from "@ui/Accordion";
import Breadcrumbs from "@ui/Breadcrumbs";
import Gap from "@ui/Gap";
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
}: CatalogItemProps) {
  const characteristics = [
    {
      header: <CharacteristicHeader title="Размер" />,
      bottom: <CharacteristicBottom options={sizes} />,
    },
    {
      header: <CharacteristicHeader title="Цвета" />,
      bottom: <CharacteristicBottom options={sizes} />,
    },
  ];

  return (
    <div className={clsx("wrapper", styles.layout)}>
      <Image
        src="/images/bed.png"
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Gap direction="vertical">
        <Breadcrumbs
          extraLinks={[{ title, path: `catalog/${category}/${id}` }]}
        />
        <p className="text_big">{title}</p>
        <p className="text_secondary">Артикул: {article}</p>
        <p>
          Наволочка двухсторонняя: светло-серый сатин и шелкс узором
          &quot;волшебный лес&quot; 50*70 см
        </p>
        <p className={clsx("text_big", "text_primary")}>
          {price} {CURRENCY}
        </p>
        <Accordion items={characteristics} />
      </Gap>
    </div>
  );
}

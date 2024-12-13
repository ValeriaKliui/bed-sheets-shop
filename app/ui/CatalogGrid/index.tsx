"use client";

import useCatalog from "@hooks/useCatalog";
import { CatalogItem } from "@lib/constants/types";
import Gap from "@ui/Gap";
import Slider from "@ui/Sliders/DefaultSlider";

import { CustomButtonGroupAsArrows } from "./CustomButtonGroupAsArrows";
import { CatalogGridProps } from "./interaces";
import styles from "./styles.module.scss";

export default function CatalogGrid<T extends Pick<CatalogItem, "id">>({
  cardItems,
  dimensions,
}: CatalogGridProps<T>) {
  const { currStyles, gridStyle } = useCatalog(dimensions);

  if (!cardItems.length)
    return (
      <Gap className={styles.containerEmpty}>
        <p className="text_medium">
          Товары с заданными параметрами в каталоге отсутствуют.
        </p>
      </Gap>
    );

  return (
    <>
      {currStyles && currStyles.slider ? (
        <Slider
          cards={cardItems}
          className={styles.containerSlider}
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroupAsArrows />}
          partialVisible={false}
          gapped={false}
          overflowed={true}
          containerClass={styles.containerClass}
        />
      ) : (
        <div className={styles.containerItems} style={gridStyle}>
          {cardItems}
        </div>
      )}
    </>
  );
}

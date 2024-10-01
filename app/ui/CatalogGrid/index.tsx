"use client";

import useCatalog from "@hooks/useCatalog";
import Slider from "@ui/Sliders/DefaultSlider";

import { CatalogGridProps } from "./interaces";
import styles from "./styles.module.scss";

export default function CatalogGrid<T>({
  cardItems,
  dimensions,
}: CatalogGridProps<T>) {
  const { currStyles, gridStyle } = useCatalog(dimensions);

  return (
    <>
      {currStyles && currStyles.slider ? (
        <Slider cards={cardItems} />
      ) : (
        <div className={styles.container} style={gridStyle}>
          {cardItems}
        </div>
      )}
    </>
  );
}

"use client";

import useCatalog from "@hooks/useCatalog";
import { CatalogItem } from "@lib/constants/types";
import Slider from "@ui/Sliders/DefaultSlider";

import { CatalogGridProps } from "./interaces";
import styles from "./styles.module.scss";

export default function CatalogGrid<T extends Pick<CatalogItem, "id">>({
  cardItems,
  dimensions,
}: CatalogGridProps<T>) {
  const { currStyles, gridStyle } = useCatalog(dimensions);

  return (
    <>
      {currStyles && currStyles.slider ? (
        <Slider cards={cardItems} withArrowsMobile />
      ) : (
        <div className={styles.container} style={gridStyle}>
          {cardItems}
        </div>
      )}
    </>
  );
}

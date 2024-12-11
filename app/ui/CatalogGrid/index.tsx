'use client';

import useCatalog from '@hooks/useCatalog';
import { CatalogItem } from '@lib/constants/types';
import Slider from '@ui/Sliders/DefaultSlider';

import { CatalogGridProps } from './interaces';
import styles from './styles.module.scss';
import Carousel from 'react-multi-carousel';
import { CustomButtonGroupAsArrows } from './CustomButtonGroupAsArrows';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
  },
};

export default function CatalogGrid<
  T extends Pick<CatalogItem, 'id'>
>({ cardItems, dimensions }: CatalogGridProps<T>) {
  const { currStyles, gridStyle } = useCatalog(dimensions);

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
        <div className={styles.container} style={gridStyle}>
          {cardItems}
        </div>
      )}
    </>
  );
}

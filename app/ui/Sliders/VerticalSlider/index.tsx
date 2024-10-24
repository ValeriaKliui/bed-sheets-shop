"use client";

import "react-multi-carousel/lib/styles.css";

import clsx from "clsx";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import CustomArrowTop from "../Addons/CustomArrowTop";
import CustomDot from "../Addons/CustomDot";
import { SliderProps } from "../interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    
  },
};

export default function VerticalSlider({ cards, dots, className }: SliderProps) {
  const CarouselCustom = () => (
    <Carousel
      arrows
      customDot={<CustomDot items={dots} />}
      infinite
      containerClass={clsx(styles.container, !dots && "wrapper", className)}
      responsive={responsive}
      showDots
      slidesToSlide={1}
      customRightArrow={
        <CustomArrowTop
          direction="right"
          className={clsx(!dots && styles.centeredDot)}
        />
      }
      customLeftArrow={
        <CustomArrowTop
          direction="left"
          className={clsx(!dots && styles.centeredDot)}
        />
      }
      dotListClass={styles.dots}
      itemClass={styles.inter}
    >
      {cards}
    </Carousel>
  );

  if (!dots)
    return (
      <div>
        <CarouselCustom />
      </div>
    );

  return <CarouselCustom />;
}

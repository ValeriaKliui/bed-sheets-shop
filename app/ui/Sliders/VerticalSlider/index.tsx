"use client";

import "react-multi-carousel/lib/styles.css";

import Arrow from "@ui/Arrow";
import clsx from "clsx";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import CustomDot from "../Addons/CustomDot";
import { SliderProps } from "../interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

export default function VerticalSlider({
  cards,
  dots,
  className,
  isTextSlider,
}: SliderProps) {
  const CarouselCustom = () => (
    <Carousel
      arrows
      customDot={<CustomDot items={dots} />}
      infinite
      containerClass={clsx(styles.container, !dots && "wrapper", className)}
      responsive={responsive}
      showDots
      slidesToSlide={1}
      customLeftArrow={
        <Arrow
          className={clsx(
            !isTextSlider ? styles.defArrows : styles.textArrows,
            isTextSlider && styles.left
          )}
          direction="top"
        />
      }
      customRightArrow={
        <Arrow
          className={clsx(!isTextSlider ? styles.defArrows : styles.textArrows)}
          direction="bottom"
        />
      }
      dotListClass={styles.dots}
      itemClass={styles.inter}
    >
      {cards}
    </Carousel>
  );

  return <CarouselCustom />;
}

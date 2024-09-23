"use client";

import "react-multi-carousel/lib/styles.css";

import clsx from "clsx";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import CustomArrowBottom from "../CustomArrowBottom";
import { SliderProps } from "../interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  xs: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
  },
};

export default function Slider({
  cards,
  overflowed = false,
  withArrows = false,
  beforeChange,
  afterChange,
}: SliderProps) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={withArrows}
        partialVisible
        containerClass={clsx(
          "wrapper",
          styles.container,
          overflowed && styles.overflowed,
          withArrows && styles.withArrows
        )}
        rewindWithAnimation
        renderArrowsWhenDisabled
        slidesToSlide={2}
        beforeChange={beforeChange}
        afterChange={afterChange}
        customRightArrow={<CustomArrowBottom direction="right" />}
        customLeftArrow={<CustomArrowBottom direction="left" />}
      >
        {cards}
      </Carousel>
    </div>
  );
}

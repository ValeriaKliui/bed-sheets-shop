"use client";

import "react-multi-carousel/lib/styles.css";

import clsx from "clsx";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import CustomArrowBottom from "../Addons/CustomArrowBottom";
import { SliderProps } from "../interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  lg: {
    breakpoint: { max: 10000, min: 992 },
    items: 3,
    partialVisibilityGutter: 10,
    slidesToSlide: 2,
  },
  md: {
    breakpoint: { max: 991, min: 576 },
    items: 2,
    partialVisibilityGutter: 50,
    slidesToSlide: 2,
  },
  xs: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    partialVisibilityGutter: 100,
    slidesToSlide: 1,
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

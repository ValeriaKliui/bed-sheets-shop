"use client";

import "react-multi-carousel/lib/styles.css";

import clsx from "clsx";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import CustomArrow from "./CustomArrow";
import { SliderProps } from "./interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
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
          overflowed && styles.overflowed,
          withArrows && styles.withArrows
        )}
        rewindWithAnimation
        renderArrowsWhenDisabled
        slidesToSlide={2}
        beforeChange={beforeChange}
        afterChange={afterChange}
        customRightArrow={<CustomArrow direction="right" />}
        customLeftArrow={<CustomArrow direction="left" />}
      >
        {cards}
      </Carousel>
    </div>
  );
}

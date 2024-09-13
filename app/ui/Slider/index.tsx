"use client";

import "react-multi-carousel/lib/styles.css";

import CircledIcon from "@ui/CircledIcon";
import clsx from "clsx";
import Carousel, { ArrowProps } from "react-multi-carousel";

import CustomArrow from "./CustomArrow";
import { SliderProps } from "./interfaces";
import styles from "./styles.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 9000, min: 0 },
    items: 4,
    partialVisibilityGutter: 40,
  },
};

export default function Slider({
  cards,
  overflowed = false,
  withArrows = false,
}: SliderProps) {
  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable
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
        customRightArrow={<CustomArrow direction="right" />}
        customLeftArrow={<CustomArrow direction="left" />}
      >
        {cards}
      </Carousel>
    </div>
  );
}

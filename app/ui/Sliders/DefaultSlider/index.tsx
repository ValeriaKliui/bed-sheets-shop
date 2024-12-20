"use client";

import "react-multi-carousel/lib/styles.css";

import Arrow from "@ui/Arrow";
import clsx from "clsx";
import React from "react";
import Carousel, { ResponsiveType } from "react-multi-carousel";

import { SliderProps } from "../interfaces";
import styles from "./styles.module.scss";

const responsive: ResponsiveType = {
  xsl: {
    breakpoint: { max: 10000, min: 1200 },
    items: 3,
    partialVisibilityGutter: 0,
    slidesToSlide: 2,
  },
  lg: {
    breakpoint: { max: 1199, min: 992 },
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
  className,
  containerClass,
  renderButtonGroupOutside,
  customButtonGroup,
  gapped = true,
  partialVisible = true,
  renderArrowsWhenDisabled = false,
}: SliderProps) {
  return (
    <div className={className}>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={withArrows}
        partialVisible={partialVisible}
        renderButtonGroupOutside={renderButtonGroupOutside}
        customButtonGroup={customButtonGroup}
        renderArrowsWhenDisabled={renderArrowsWhenDisabled}
        containerClass={clsx(
          "wrapper_small",
          styles.container,
          overflowed && styles.notOverflowed,
          containerClass
        )}
        rewindWithAnimation
        beforeChange={beforeChange}
        afterChange={afterChange}
        customRightArrow={
          <Arrow
            direction="right"
            className={clsx(!withArrows && styles.withoutArrows)}
            imgClassName={clsx(styles.arrows, styles.right)}
          />
        }
        customLeftArrow={
          <Arrow
            direction="left"
            className={clsx(!withArrows && styles.withoutArrows)}
            imgClassName={clsx(styles.arrows, styles.left)}
          />
        }
        itemClass={clsx(styles.item, gapped && styles.gapped)}
      >
        {cards}
      </Carousel>
    </div>
  );
}

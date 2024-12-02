'use client';

import 'react-multi-carousel/lib/styles.css';

import clsx from 'clsx';
import React, { useRef } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

import CustomArrowBottom from '../Addons/CustomArrow';
import { SliderProps } from '../interfaces';
import styles from './styles.module.scss';

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
  withArrowsMobile,
}: SliderProps) {
  const isOverflowUnset = overflowed || withArrowsMobile;
  const hasArrows = withArrows || withArrowsMobile

  const oneItem = useRef<HTMLDivElement>(<></>)

  console.log(oneItem.current.offsetWidth)

  return (
    <div>
      <Carousel
        responsive={responsive}
        draggable={true}
        arrows={hasArrows}
        partialVisible
        containerClass={clsx(
          'wrapper_small',
          styles.container,
          isOverflowUnset && styles.notOverflowed,
          withArrows && styles.withArrows
        )}
        rewindWithAnimation
        renderArrowsWhenDisabled
        beforeChange={beforeChange}
        afterChange={afterChange}
        customRightArrow={
          <CustomArrowBottom
            direction="right"
            className={clsx(!hasArrows && styles.withoutArrows)}
          />
        }
        customLeftArrow={
          <CustomArrowBottom
            direction="left"
            className={clsx(!hasArrows && styles.withoutArrows)}
          />
        }
        itemClass={clsx(
          styles.item,
          withArrowsMobile && styles.withArrowsMobile
        )}
      >
        {cards.map((item, index) => {
          return <div ref={oneItem} key={index}>{item}</div>
        })}
      </Carousel>
    </div>
  );
}

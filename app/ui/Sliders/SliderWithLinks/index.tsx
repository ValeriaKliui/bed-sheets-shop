"use client";

import PhotoCard from "@ui/PhotoCard";
import { useState } from "react";

import Slider from "../DefaultSlider";
import { SliderWithLinksProps } from "./interfaces";

export default function SliderWithLinks({
  sliderCards,
  ...props
}: SliderWithLinksProps) {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <Slider
      {...props}
      beforeChange={() => setIsMoving(true)}
      afterChange={() => setIsMoving(false)}
      cards={sliderCards.map(({ src, title }, index) => (
        <a
          onClick={(e) => {
            if (isMoving) {
              e.preventDefault();
            }
          }}
          target="_blank"
          draggable={false}
          href="#sfd"
          key={index}
        >
          <PhotoCard info={{ src, title }} />
        </a>
      ))}
    />
  );
}

"use client";

import useSlider from "@hooks/useSlider";
import Gap from "@ui/Gap";
import clsx from "clsx";
import { useRef } from "react";

import { SliderProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Slider({ cards, overflowed = false }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useSlider({ containerRef, sliderRef });

  return (
    <div
      ref={containerRef}
      className={clsx(styles.container, "container", "wrapper")}
      style={{ overflow: overflowed ? "" : "hidden" }}
    >
      <Gap size="large" ref={sliderRef} className={styles.track}>
        {cards && cards.map((card, index) => <div key={index}>{card}</div>)}
      </Gap>
    </div>
  );
}

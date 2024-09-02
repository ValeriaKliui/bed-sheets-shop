"use client";

import useSlider from "@hooks/useSlider";
import Button from "@ui/Button";
import Gap from "@ui/Gap";
import clsx from "clsx";

import { SliderProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Slider({ cards, overflowed = false }: SliderProps) {
  const {
    onLeftArrowClick,
    onRightArrowClick,
    containerRef,
    sliderRef,
    cardRef,
  } = useSlider();

  return (
    <div className="wrapper">
      <div
        ref={containerRef}
        className={clsx(styles.container)}
        style={{ overflow: overflowed ? "" : "hidden" }}
      >
        <Gap size="large" ref={sliderRef} className={styles.track}>
          {cards &&
            cards.map((card, index) => (
              <div key={index} ref={cardRef}>
                {card}
              </div>
            ))}
        </Gap>
      </div>
      <div className={styles.controls}>
        <Button onClick={onLeftArrowClick}>onLeftArrowClick</Button>
        <Button onClick={onRightArrowClick}>onRightArrowClick</Button>
      </div>
    </div>
  );
}

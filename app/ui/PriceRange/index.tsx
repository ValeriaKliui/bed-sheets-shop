"use client";

import usePriceRange from "@hooks/usePriceRange";
import { PricesNum } from "@lib/interfaces";

import styles from "./styles.module.scss";

export default function PriceRange({ min, max }: PricesNum) {
  const {
    onRangeChange,
    containerRef,
    leftTextOffset,
    rightTextOffset,
    currMax,
    currMin,
  } = usePriceRange({
    min,
    max,
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <input
        value={currMin}
        onChange={onRangeChange}
        style={{ left: `${leftTextOffset}px` }}
        className={styles.price}
        type="number"
        name="minPrice"
        min={min}
      />
      <input
        value={currMax}
        onChange={onRangeChange}
        style={{ left: `${rightTextOffset}px` }}
        type="number"
        max={max}
        name="maxPrice"
        className={styles.price}
      />
      <div className={styles.slider} />
      <div className={styles.range_input}>
        <input
          type="range"
          name="minPrice"
          min={min}
          max={max}
          value={currMin}
          onChange={onRangeChange}
        />
        <input
          type="range"
          value={currMax}
          name="maxPrice"
          min={min}
          max={max}
          onChange={onRangeChange}
        />
      </div>
    </div>
  );
}

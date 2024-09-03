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
        min={min}
      />
      <input
        value={currMax}
        onChange={onRangeChange}
        style={{ left: `${rightTextOffset}px` }}
        type="number"
        max={max}
        className={styles.price}
      />
      <div className={styles.slider} />
      <div className={styles.range_input}>
        <input
          type="range"
          name="minPrice"
          min={min}
          max={max}
          defaultValue={currMin || min}
          onChange={onRangeChange}
        />
        <input
          type="range"
          name="maxPrice"
          min={min}
          max={max}
          defaultValue={currMax || max}
          onChange={onRangeChange}
        />
      </div>
    </div>
  );
}

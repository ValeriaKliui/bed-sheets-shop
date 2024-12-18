"use client";

import usePriceRange from "@hooks/usePriceRange";
import useRangeLabels from "@hooks/useRangeLabels";
import useRangeURLParams from "@hooks/useRangeURLParams";
import { PricesNum } from "@lib/interfaces";
import { ChangeEvent, useCallback } from "react";

import styles from "./styles.module.scss";

export default function PriceRange({ min, max }: PricesNum) {
  const { onValueChange } = useRangeURLParams();
  const { onRangeChange, currMax, currMin } = usePriceRange({
    min,
    max,
    onValueChange,
  });

  const { containerRef, styleMax, styleMin, onStyleChange, inputRef } =
    useRangeLabels({
      currMax,
      currMin,
      max,
    });

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onRangeChange(event);
      onStyleChange(event.target.name);
    },
    [onRangeChange, onStyleChange]
  );

  return (
    <div className={styles.container} ref={containerRef}>
      <input
        value={currMin}
        onChange={onChange}
        style={styleMin}
        className={styles.price}
        type="number"
        name="minPrice"
        min={min}
        ref={inputRef}
      />
      <input
        value={currMax}
        onChange={onChange}
        style={styleMax}
        type="number"
        max={max}
        name="maxPrice"
        className={styles.price}
        ref={inputRef}
      />
      <div className={styles.slider} />
      <div className={styles.range_input}>
        <input
          type="range"
          name="minPrice"
          min={min}
          max={max}
          value={currMin}
          onChange={onChange}
        />
        <input
          type="range"
          value={currMax}
          name="maxPrice"
          min={min}
          max={max}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

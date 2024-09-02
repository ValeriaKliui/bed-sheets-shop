"use client";

import { PricesNum } from "@lib/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./styles.module.scss";

export default function PriceRange({ min, max }: PricesNum) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currMin = searchParams.get("min") ?? min;
  const currMax = searchParams.get("max") ?? max;

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    const params = new URLSearchParams(searchParams);

    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      {currMin} {currMax}
      <div className={styles.slider}>
        <div className={styles.progress}></div>
      </div>
      <div className={styles.range_input}>
        <input
          type="range"
          name="min"
          defaultValue={searchParams.get("min")?.toString() || min}
          onChange={onChange}
        />
        <input
          type="range"
          name="max"
          defaultValue={searchParams.get("max")?.toString() || max}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

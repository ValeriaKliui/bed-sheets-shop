import { PricesNum } from "@lib/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import useRangeLabels from "./useRangeLabels";

export default function usePriceRange({ min, max }: PricesNum) {
  const searchParams = useSearchParams();
  const minPriceFromParams = Number(searchParams.get("minPrice"));
  const maxPriceFromParams = Number(searchParams.get("maxPrice"));

  const [currMin, setCurrMin] = useState(minPriceFromParams ?? min);
  const [currMax, setCurrMax] = useState(maxPriceFromParams ?? max);

  const pathname = usePathname();
  const { replace } = useRouter();

  const { containerRef, leftTextOffset, rightTextOffset } = useRangeLabels({
    currMax,
    currMin,
    max,
  });

  const onRangeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const valueNum = Number(value);
    const params = new URLSearchParams(searchParams);

    if (name === "minPrice") setCurrMin(valueNum);
    else setCurrMax(valueNum);

    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (minPriceFromParams === 0) setCurrMin(min);
  }, [minPriceFromParams, min]);

  useEffect(() => {
    if (maxPriceFromParams === 0) setCurrMax(max);
  }, [maxPriceFromParams, max]);

  return {
    onRangeChange,
    containerRef,
    leftTextOffset,
    rightTextOffset,
    currMax,
    currMin,
  };
}

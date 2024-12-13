import { PricesNum } from "@lib/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

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

  const onRangeChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const updateParams = () => {
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
      };

      const { name, value } = target;
      const valueNum = Number(value);
      const params = new URLSearchParams(searchParams);

      const isItMin = name === "minPrice";
      const isInRange = (valueNum >= min && valueNum <= max) || valueNum === 0;

      if (isInRange) {
        if (isItMin) setCurrMin(valueNum);
        else setCurrMax(valueNum);
      }
      updateParams();
    },
    [pathname, replace, searchParams, min, max]
  );

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

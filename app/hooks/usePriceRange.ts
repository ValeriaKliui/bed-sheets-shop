import { useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

export default function usePriceRange({
  min,
  max,
  onValueChange,
}: {
  min: number;
  max: number;
  onValueChange: (
    event: ChangeEvent<HTMLInputElement>,
    currValValidated: number
  ) => void;
}) {
  const searchParams = useSearchParams();
  const [currMin, setCurrMin] = useState(
    min || Number(searchParams.get("minPrice"))
  );
  const [currMax, setCurrMax] = useState(
    max || Number(searchParams.get("minPrice"))
  );

  const onRangeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const rangeGap = max / 10;

      const { name, value, type } = event.target;
      const valueNum = Number(value);

      const isRange = type === "range";
      const isInRange = (valueNum >= min && valueNum <= max) || valueNum === 0;

      if (isInRange)
        switch (name) {
          case "minPrice":
            if (isRange) {
              if (valueNum < currMax - rangeGap) {
                setCurrMin(valueNum);
                onValueChange(event, valueNum);
              } else onValueChange(event, currMin);
            } else {
              if (valueNum >= currMax) {
                setCurrMin(currMin);
                onValueChange(event, currMin);
              } else {
                setCurrMin(valueNum);
                onValueChange(event, valueNum);
              }
            }
            break;
          case "maxPrice":
            if (isRange) {
              if (valueNum > currMin + rangeGap) {
                setCurrMax(valueNum);
                onValueChange(event, valueNum);
              } else onValueChange(event, currMax);
            } else {
              setCurrMax(valueNum);
              onValueChange(event, valueNum);
            }
            break;
        }
    },
    [currMax, currMin, min, max, onValueChange]
  );

  return {
    onRangeChange,
    currMax,
    currMin,
  };
}

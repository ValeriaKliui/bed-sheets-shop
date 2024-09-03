import { PricesNum } from "@lib/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function usePriceRange({ min, max }: PricesNum) {
  const searchParams = useSearchParams();

  const [currMin, setCurrMin] = useState(
    Number(searchParams.get("minPrice") ?? min)
  );

  const [currMax, setCurrMax] = useState(
    Number(searchParams.get("maxPrice") ?? max)
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [leftTextOffset, setLeftOffset] = useState(0);
  const [rightTextOffset, setRightOffset] = useState(0);

  const pathname = usePathname();
  const { replace } = useRouter();

  const onRangeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const valueNum = Number(value);

    const params = new URLSearchParams(searchParams);

    if (
      (name === "minPrice" && valueNum >= currMax) ||
      (name === "maxPrice" && valueNum <= currMin)
    ) {
      return;
    }

    if (name === "minPrice") setCurrMin(valueNum);
    else setCurrMax(valueNum);

    params.set(name, value);

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (containerRef.current) {
      const widthContainer = containerRef.current.offsetWidth;

      setLeftOffset(0.8 * Math.round((widthContainer * currMin) / max));
      setRightOffset(0.8 * Math.round((widthContainer * currMax) / max));
    }
  }, [currMin, max, currMax]);

  return {
    onRangeChange,
    containerRef,
    leftTextOffset,
    rightTextOffset,
    currMax,
    currMin,
  };
}

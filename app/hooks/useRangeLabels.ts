import { useEffect, useRef, useState } from "react";

import { RangeLabelsProps } from "./interfaces";

export default function useRangeLabels({
  currMin,
  currMax,
  max,
}: RangeLabelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftTextOffset, setLeftOffset] = useState(0);
  const [rightTextOffset, setRightOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const widthContainer = containerRef.current.offsetWidth;

      setLeftOffset(0.8 * Math.round((widthContainer * currMin) / max));
      setRightOffset(0.8 * Math.round((widthContainer * currMax) / max));
    }
  }, [currMin, max, currMax]);

  return { containerRef, leftTextOffset, rightTextOffset };
}

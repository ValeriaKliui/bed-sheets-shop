import getOneOfMultipleRefs from "@lib/utils/getOneOfMultipleRefs";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { RangeLabelsProps } from "./interfaces";

export default function useRangeLabels({
  currMin,
  currMax,
  max,
}: RangeLabelsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputsRef = useRef(null);

  const inputRef = (node: HTMLInputElement) =>
    getOneOfMultipleRefs<HTMLInputElement>(node, inputsRef);

  const [styleMin, setStyleMin] = useState({ zIndex: 1 });
  const [styleMax, setStyleMax] = useState({ zIndex: 1 });
  const [currInputName, setCurrInputName] = useState("");

  const { width } = useWindowSize();

  const onStyleChange = useCallback(
    (name: string) => setCurrInputName(name),
    []
  );

  useEffect(() => {
    if (currInputName === "minPrice") {
      setStyleMin((prevStyle) => ({ ...prevStyle, zIndex: 2 }));
      setStyleMax((prevStyle) => ({ ...prevStyle, zIndex: 1 }));
    } else {
      setStyleMax((prevStyle) => ({ ...prevStyle, zIndex: 2 }));
      setStyleMin((prevStyle) => ({ ...prevStyle, zIndex: 1 }));
    }
  }, [currInputName]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const widthContainer = containerRef.current.offsetWidth;

      setStyleMin((prev) => ({
        ...prev,
        left: `${0.8 * Math.round((widthContainer * currMin) / max)}px`,
      }));
      setStyleMax((prev) => ({
        ...prev,
        left: `${0.8 * Math.round((widthContainer * currMax) / max)}px`,
      }));
    }
  }, [currMin, max, currMax, width]);

  return {
    containerRef,
    width,
    inputRef,
    onStyleChange,
    styleMin,
    styleMax,
  };
}

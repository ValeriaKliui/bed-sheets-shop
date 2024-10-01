import { useCallback, useEffect, useRef } from "react";

import { OnArrowProps } from "./interfaces";

export default function useSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const boundSlides = () => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    const containerRect = container?.getBoundingClientRect();
    const sliderRect = slider?.getBoundingClientRect();

    if (slider && sliderRect && containerRect) {
      if (parseInt(slider.style.left) > 0) {
        slider.style.left = "0";
      } else if (sliderRect.right < containerRect.right) {
        slider.style.left = `-${sliderRect.width - containerRect.width}px`;
      }
    }
  };

  const onArrowClick = useCallback(({ left }: OnArrowProps) => {
    const slider = sliderRef.current;
    const card = cardRef.current;

    if (slider && card) {
      slider.style.left = left
        ? `${card.offsetWidth + slider.offsetLeft}px`
        : `-${card.offsetWidth - slider.offsetLeft}px`;

      boundSlides();
    }
  }, []);

  const onLeftArrowClick = useCallback(
    () => onArrowClick({ left: true }),
    [onArrowClick]
  );
  const onRightArrowClick = useCallback(
    () => onArrowClick({ left: false }),
    [onArrowClick]
  );

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    let isPressed = false;
    let totalOffsetOfTrack = 0;

    if (container && slider) {
      container.addEventListener("mousedown", ({ offsetX }) => {
        isPressed = true;
        totalOffsetOfTrack = offsetX - slider.offsetLeft;
      });

      container.addEventListener("mousemove", (e) => {
        if (!isPressed) return;
        e.preventDefault();
        slider.style.left = `${e.offsetX - totalOffsetOfTrack}px`;
        boundSlides();
      });

      window.addEventListener("mouseup", () => {
        isPressed = false;
      });
    }
  }, []);

  return {
    onLeftArrowClick,
    onRightArrowClick,
    containerRef,
    sliderRef,
    cardRef,
  };
}

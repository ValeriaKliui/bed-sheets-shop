import { useEffect } from "react";

import { UseSliderProps } from "./interfaces";

export default function useSlider({ containerRef, sliderRef }: UseSliderProps) {
  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    const boundSlides = () => {
      const containerRect = container?.getBoundingClientRect();
      const sliderRect = slider?.getBoundingClientRect();

      const leftOffset = containerRect?.left || 0;

      if (slider && sliderRect && containerRect) {
        if (parseInt(slider.style.left) > 0) {
          slider.style.left = "0";
        } else if (sliderRect.right < containerRect.right) {
          slider.style.left = `-${
            sliderRect.width - containerRect.width + leftOffset
          }px`;
        }
      }
    };

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
  }, [containerRef, sliderRef]);
}

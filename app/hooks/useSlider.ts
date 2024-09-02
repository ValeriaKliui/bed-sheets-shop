import { useEffect, useRef } from "react";

export default function useSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onArrowClick = ({ left, right }) => {
    const slider = sliderRef.current;
    const card = cardRef.current;

    if (slider && card) {
      if (left) slider.style.left = `${card.offsetWidth + slider.offsetLeft}px`;
      if (right)
        slider.style.left = `-${card.offsetWidth - slider.offsetLeft}px`;
    }
  };

  const onLeftArrowClick = () => onArrowClick({ left: true });
  const onRightArrowClick = () => onArrowClick({ right: true });

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
  }, []);

  return {
    onLeftArrowClick,
    onRightArrowClick,
    containerRef,
    sliderRef,
    cardRef,
  };
}
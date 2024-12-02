import { ReactNode } from "react";
import { CarouselProps } from "react-multi-carousel";

interface CustomSliderProps {
  cards: JSX.Element[];
  overflowed?: boolean;
  withArrows?: boolean;
  withArrowsMobile?: boolean;
}

export type SliderProps = CustomSliderProps &
  Partial<Pick<CarouselProps, "beforeChange" | "afterChange">> & {
    dots?: ReactNode[];
    className?: string;
    isTextSlider?: boolean;
  };

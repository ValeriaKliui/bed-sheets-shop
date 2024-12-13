import { ReactNode } from "react";
import { CarouselProps } from "react-multi-carousel";

interface CustomSliderProps {
  cards: JSX.Element[];
  overflowed?: boolean;
  withArrows?: boolean;
}

export type SliderProps = CustomSliderProps &
  Partial<
    Pick<
      CarouselProps,
      | "beforeChange"
      | "afterChange"
      | "renderButtonGroupOutside"
      | "customButtonGroup"
      | "partialVisible"
      | "renderArrowsWhenDisabled"
    >
  > & {
    dots?: ReactNode[];
    className?: string;
    isTextSlider?: boolean;
    containerClass?: string;
    gapped?: boolean;
  };

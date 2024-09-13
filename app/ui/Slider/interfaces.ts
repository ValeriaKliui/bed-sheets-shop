import { CarouselProps } from "react-multi-carousel";

interface CustomSliderProps {
  cards: JSX.Element[];
  overflowed?: boolean;
  withArrows?: boolean;
}

export type SliderProps = CustomSliderProps &
  Pick<CarouselProps, "beforeChange" | "afterChange">;

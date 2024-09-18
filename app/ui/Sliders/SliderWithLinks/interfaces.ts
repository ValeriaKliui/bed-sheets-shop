import { SliderProps } from "../interfaces";

export interface SliderWithLinksProps extends Omit<SliderProps, "cards"> {
  sliderCards: { src: string; title: string }[];
}

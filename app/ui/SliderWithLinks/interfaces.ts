import { SliderProps } from "@ui/Slider/interfaces";

export interface SliderWithLinksProps extends Omit<SliderProps, "cards"> {
  sliderCards: { src: string; title: string }[];
}

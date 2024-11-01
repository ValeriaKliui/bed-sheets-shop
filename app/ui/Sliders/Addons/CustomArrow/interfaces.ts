import { ArrowProps } from "react-multi-carousel";

export type Direction = "left" | "right" | "top" | "bottom";

export interface CustomArrowProps extends ArrowProps {
  direction: Direction;
  className?: string;
}

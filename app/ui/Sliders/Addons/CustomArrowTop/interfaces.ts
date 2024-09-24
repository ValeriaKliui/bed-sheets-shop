import { ArrowProps } from "react-multi-carousel";

export interface CustomArrowProps extends ArrowProps {
  direction: "right" | "left";
  className: string;
}

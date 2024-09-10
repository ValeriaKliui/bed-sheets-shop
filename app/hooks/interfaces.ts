import { PricesNum } from "@lib/interfaces";

export interface OnArrowProps {
  left?: boolean;
  right?: boolean;
}
export interface RangeLabelsProps extends Pick<PricesNum, "max"> {
  currMin: number;
  currMax: number;
}

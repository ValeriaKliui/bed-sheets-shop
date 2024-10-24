import { PricesNum } from '@lib/interfaces';

export interface OnArrowProps {
  left?: boolean;
}
export interface RangeLabelsProps extends Pick<PricesNum, 'max'> {
  currMin: number;
  currMax: number;
}
export type CartInfo = null | { [key: string]: number };

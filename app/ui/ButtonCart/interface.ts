import { PropsWithChildren } from "react";

export interface ButtonCartProps extends PropsWithChildren {
  amountInCart: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
  className?: string;
}

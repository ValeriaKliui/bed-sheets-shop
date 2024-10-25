import { ReactNode } from "react";

export interface ButtonCartProps {
  children: ReactNode;
  amountInCart: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
  className?: string;
}

import { ReactNode } from "react";

export interface ButtonCardProps {
  children: ReactNode;
  amountInCard: number;
  onIncreaseClick: () => void;
  onDecreaseClick: () => void;
  className?: string;
}

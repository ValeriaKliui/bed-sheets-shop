import { MouseEvent, ReactNode } from "react";

type Direction = "vertical" | "horizontal";
type Size = "small" | "medium" | "large" | "huge";

export interface GapProps {
  children: ReactNode;
  size?: Size;
  direction?: Direction;
  justifyContent?: string;
  alignItems?: string;
  className?: string;
  wrap?: boolean;
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
  alignSelf?: string;
}

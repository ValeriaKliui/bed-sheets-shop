import { ReactNode } from "react";

type Direction = "vertical" | "horizontal";
type Size = "small" | "medium" | "large" | "huge";

export interface GapProps {
  children: ReactNode;
  size?: Size;
  direction?: Direction;
  justify?: boolean;
  className?: string;
  wrap?: boolean;
  onClick?: () => void;
}

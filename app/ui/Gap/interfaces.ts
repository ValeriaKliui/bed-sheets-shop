import { ReactNode } from "react";

export interface GapProps {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  direction?: "vertical" | "horizontal";
  justify?: boolean;
  className?: string;
  wrap?: boolean;
}

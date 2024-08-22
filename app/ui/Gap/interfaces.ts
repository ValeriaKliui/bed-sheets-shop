import { ReactNode } from "react";

export interface GapProps {
  children: ReactNode;
  size: "small" | "medium" | "large";
  alignment?: "center" | "normal";
  direction?: "vertical" | "horizontal";
}

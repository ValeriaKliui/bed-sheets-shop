import { ReactNode } from "react";

export interface ButtonWithIndicatorProps {
  children: ReactNode;
  onClick: () => void;
  isPressed: boolean | null;
}

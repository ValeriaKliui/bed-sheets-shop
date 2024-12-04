import { PropsWithChildren } from "react";

export interface ButtonWithIndicatorProps extends PropsWithChildren {
  onClick: () => void;
  isPressed: boolean | null;
}

import { ReactNode } from "react";
import { DotProps } from "react-multi-carousel";

export interface CustomDotProps extends DotProps {
  items?: ReactNode[];
}

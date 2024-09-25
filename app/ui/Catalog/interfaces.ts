import breakpoints from "@breakpoints.module.scss";
import { CatalogItem } from "@lib/constants/types";
import { CardProps } from "@ui/Card/interfaces";

type Breakpoints = keyof typeof breakpoints;

export type Dimension = {
  [key in Breakpoints]?: {
    columns?: number;
    rows?: number;
    slider?: boolean;
  };
};
export interface CatalogProps {
  fetch: () => Promise<CatalogItem[]>;
  dimensions?: Dimension;
  Card: (props: CardProps) => JSX.Element;
}

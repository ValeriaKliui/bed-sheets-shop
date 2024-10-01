import breakpoints from "@breakpoints.module.scss";
import { CatalogItem } from "@lib/constants/types";

type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};
type Either<T, U> = Only<T, U> | Only<U, T>;

type Breakpoints = keyof typeof breakpoints;

export type OnlySlider = {
  slider: boolean;
};

export type DimensionProperties = {
  columns: number;
  rows?: number;
};

export type DimensionValue = Either<OnlySlider, DimensionProperties>;
export type Dimension = {
  [key in Breakpoints]?: DimensionValue;
};

export interface CatalogProps<T> {
  fetch: () => Promise<CatalogItem[]>;
  dimensions: Dimension;
  Card: (props: T) => JSX.Element;
}

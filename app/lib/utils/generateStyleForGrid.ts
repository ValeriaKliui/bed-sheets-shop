import { DimensionValue } from "@ui/Catalog/interfaces";
import { CSSProperties } from "react";

export default function generateStyleForGrid({
  columns,
}: DimensionValue): CSSProperties {
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };
}

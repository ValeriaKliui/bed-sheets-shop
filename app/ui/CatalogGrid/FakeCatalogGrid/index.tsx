"use client";

import useCatalog from "@hooks/useCatalog";
import CardSkeleton from "@ui/Card/CardSkeleton";

import { FakeCatalogGridProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function FakeCatalogGrid({ dimensions }: FakeCatalogGridProps) {
  const { currStyles, gridStyle } = useCatalog(dimensions);

  const columns = currStyles?.columns || 3;

  return (
    <div className={styles.containerItems} style={gridStyle}>
      {Array.from({ length: columns }, (_, i) => i).map((column) => (
        <CardSkeleton key={column} />
      ))}
    </div>
  );
}

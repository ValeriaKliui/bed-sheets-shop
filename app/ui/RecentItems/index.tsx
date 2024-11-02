"use client";

import useRecentItems from "@hooks/useRecentItems";
import CardShort from "@ui/Card/CardShort";
import CatalogGrid from "@ui/CatalogGrid";
import Gap from "@ui/Gap";
import Loader from "@ui/Loader";
import clsx from "clsx";

import styles from './styles.module.scss';

export default function RecentItems() {
  const { isLoading, recentItems } = useRecentItems();
  const cardItems = recentItems?.map(({ title, id, photo, category }) => (
    <CardShort
      title={title}
      photo={photo}
      key={id}
      id={id}
      category={category}
    />
  ));

  if (isLoading) return <Loader />;
  if (!recentItems?.length) return <></>;

  return (
    <Gap direction="vertical" className={clsx("wrapper", styles.container)}>
      <h5>Недавно смотрели</h5>
      <CatalogGrid
        cardItems={cardItems ?? []}
        dimensions={{ xs: { slider: true }, md: { columns: 4 } }}
      />
    </Gap>
  );
}

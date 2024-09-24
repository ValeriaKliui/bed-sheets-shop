"use client";

import useRecentItems from "@hooks/useRecentItems";
import CardShort from "@ui/Card/CardShort";
import Gap from "@ui/Gap";
import Loader from "@ui/Loader";

import styles from "./styles.module.scss";

export default function RecentItems() {
  const { isLoading, recentItems } = useRecentItems();
  if (isLoading) return <Loader />;
  if (!recentItems?.length) return <></>;

  return (
    <Gap direction="vertical" className="wrapper">
      <h5>Недавно смотрели</h5>
      <div className={styles.container}>
        {recentItems?.map(({ title, id, photo, category }) => (
          <CardShort
            title={title}
            photo={photo}
            key={id}
            id={id}
            category={category}
          />
        ))}
      </div>
    </Gap>
  );
}

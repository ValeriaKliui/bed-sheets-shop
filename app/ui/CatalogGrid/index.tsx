import Card from "@ui/Card";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { CatalogGridProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function CatalogGrid({
  columns,
  cards,
  isShowcase = false,
  rows,
}: CatalogGridProps) {
  if (!cards.length) return <p>Items weren&apos;t found</p>;

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns},1fr)`,
        gridTemplateRows: rows ? `repeat(${rows},1fr)` : "unset",
      }}
      className={clsx(styles.grid, rows && styles.rows)}
    >
      {cards.map(({ title, price, article, photo, info, id, category }) => (
        <Link href={`/catalog/${category}/${id}`} key={id}>
          <Card
            isShowcase={isShowcase}
            title={title}
            price={price}
            photo={photo}
            article={article}
            info={info}
            id={id}
            actionButton={
              <Image
                src="/icons/logo.svg"
                alt="to catalog"
                width={0}
                height={0}
                priority
                className={styles.icon}
              />
            }
          />
        </Link>
      ))}
    </div>
  );
}

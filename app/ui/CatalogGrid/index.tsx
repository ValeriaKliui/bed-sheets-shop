"use client";

import Card from "@ui/Card";
import Image from "next/image";
import Link from "next/link";

import { CatalogGridProps } from "./interfaces";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function CatalogGrid({
  columns,
  cards,
  isShowcase = false,
}: CatalogGridProps) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
      className={styles.grid}
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
                width={30}
                height={30}
                priority
              />
            }
          />
        </Link>
      ))}
    </div>
  );
}

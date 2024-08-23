import Card from "@ui/Card";

import { CatalogGridProps } from "./interfaces";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

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
      {cards.map(({ title, price, article, photo, info, id }) => (
        <Link href={id} key={id}>
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
              />
            }
          />
        </Link>
      ))}
    </div>
  );
}

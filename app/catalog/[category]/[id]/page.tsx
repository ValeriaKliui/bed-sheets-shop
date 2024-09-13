import { SLIDER_ITEM } from "@lib/constants";
import { PageProps } from "@lib/constants/types";
import { fetchItemByID, fetchLatestCatalogItems } from "@lib/data";
import repeatArray from "@lib/utils/repeatArray";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import ConstructorPreview from "@ui/ConstructorPreview";
import CatalogCategorized from "@ui/FullCatalog/CatalogCategorized";
import Gap from "@ui/Gap";
import InfoPicBlock from "@ui/InfoPicBlock";
import ItemBlock from "@ui/ItemBlock";
import PhotoCard from "@ui/PhotoCard";
import RecentItems from "@ui/RecentItems";
import Slider from "@ui/Slider";
import Link from "next/link";

import styles from "./styles.module.scss";

export default async function Page({ params: { id } }: PageProps) {
  const {
    title,
    article,
    price,
    id: itemID,
    category,
    sizes,
    photo,
  } = await fetchItemByID({ id });

  const fetchLatestItems = async () => await fetchLatestCatalogItems();
  const sliderCards = repeatArray(SLIDER_ITEM, 5);

  return (
    <main>
      <Gap direction="vertical" size="large" className={styles.layout}>
        <ItemBlock
          title={title}
          article={article}
          price={price}
          id={itemID}
          category={category}
          sizes={sizes}
          photo={photo}
        />
        <Slider
          cards={sliderCards.map(({ src, title }, index) => (
            <PhotoCard info={{ src, title }} key={index} />
          ))}
          overflowed
        />
        <InfoPicBlock>
          <ConstructorPreview
            title="С этим товаром покупают"
            imageSrc={"/images/room.png"}
            buttonLink=""
          />
          <CatalogGridWithSuspense fetch={fetchLatestItems} columns={2} />
        </InfoPicBlock>
        <Gap direction="vertical" className="wrapper">
          <h5>Другие товары</h5>
          <CatalogCategorized columns={4} rows={1} />
        </Gap>
        <Gap direction="vertical" className="wrapper">
          <h5>Недавно смотрели</h5>
          <RecentItems />
        </Gap>
      </Gap>
    </main>
  );
}

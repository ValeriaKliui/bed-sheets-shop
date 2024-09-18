import { SLIDER_ITEM, SLIDER_PERSONS } from "@lib/constants";
import { PageProps } from "@lib/constants/types";
import { fetchItemByID, fetchLatestCatalogItems } from "@lib/data";
import repeatArray from "@lib/utils/repeatArray";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import ConstructorPreview from "@ui/ConstructorPreview";
import CatalogCategorized from "@ui/FullCatalog/CatalogCategorized";
import Gap from "@ui/Gap";
import InfoPicBlock from "@ui/InfoPicBlock";
import ItemBlock from "@ui/ItemBlock";
import PersonBlock from "@ui/PersonBlock";
import PhotoCard from "@ui/PhotoCard";
import RecentItems from "@ui/RecentItems";
import Slider from "@ui/Sliders/DefaultSlider";
import VerticalSlider from "@ui/Sliders/VerticalSlider";
import clsx from "clsx";

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

  const persons = SLIDER_PERSONS.map(({ src, title, text }) => (
    <PersonBlock src={src} key={src} title={title} text={text} />
  ));

  return (
    <main>
      <Gap direction="vertical" size="huge" className={styles.layout}>
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
        <VerticalSlider cards={persons} />
        <div className={clsx("wrapper_small", styles.info)}>
          <p>
            При выборе варианта оплаты наличными, вы дожидаетесь приезда курьера
            и передаёте ему сумму за товар в рублях. Курьер предоставляет товар,
            который можно осмотреть на предмет повреждений, соответствие
            указанным условиям. Покупатель подписывает товаросопроводительные
            документы, вносит денежные средства и получает чек. Также оплата
            наличными доступна при самовывозе из магазина, оплаты по почте или
            использовании постамата.
          </p>
        </div>{" "}
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
        <RecentItems />
      </Gap>
    </main>
  );
}

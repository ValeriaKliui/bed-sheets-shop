import { SLIDER_ITEM, SLIDER_PERSONS } from "@lib/constants";
import { CatalogItem, PageProps } from "@lib/constants/types";
import { fetchLatestCatalogItems } from "@lib/fetch";
import { fetchItemsByIDs } from "@lib/fetchItemsByIDs";
import repeatArray from "@lib/utils/repeatArray";
import Card from "@ui/Card";
import CardShort from "@ui/Card/CardShort";
import { CardShortProps } from "@ui/Card/interfaces";
import Catalog from "@ui/Catalog";
import ConstructorPreview from "@ui/ConstructorPreview";
import Gap from "@ui/Gap";
import InfoPicBlock from "@ui/InfoPicBlock";
import ItemBlock from "@ui/ItemBlock";
import PersonBlock from "@ui/PersonBlock";
import PhotoCard from "@ui/PhotoCard";
import RecentItems from "@ui/RecentItems";
import Slider from "@ui/Sliders/DefaultSlider";
import VerticalSlider from "@ui/Sliders/VerticalSlider";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default async function ItemPage({ params: { id } }: PageProps) {
  const item = await fetchItemsByIDs({ id });
  const {
    title,
    article,
    price,
    id: itemID,
    category,
    photo,
    additionalProperties,
    info,
  } = item[0];

  const fetchLatestItems = async () => await fetchLatestCatalogItems();
  const sliderCards = repeatArray(SLIDER_ITEM, 5);

  const persons = SLIDER_PERSONS.map(({ src, title, text }) => (
    <PersonBlock src={src} key={src} title={title} text={text} />
  ));

  return (
    <Gap direction="vertical" size="huge" className={"page_layout"}>
      <ItemBlock
        title={title}
        article={article}
        price={price}
        id={itemID}
        category={category}
        photo={photo}
        additionalProperties={additionalProperties}
        info={info}
      />
      <Slider
        cards={sliderCards.map(({ src, title }, index) => (
          <PhotoCard info={{ src, title }} key={index} />
        ))}
        overflowed
      />
      <VerticalSlider cards={persons} isTextSlider />
      <div className={clsx("wrapper_small", styles.info)}>
        <p>
          При выборе варианта оплаты наличными, вы дожидаетесь приезда курьера и
          передаёте ему сумму за товар в рублях. Курьер предоставляет товар,
          который можно осмотреть на предмет повреждений, соответствие указанным
          условиям. Покупатель подписывает товаросопроводительные документы,
          вносит денежные средства и получает чек. Также оплата наличными
          доступна при самовывозе из магазина, оплаты по почте или использовании
          постамата.
        </p>
      </div>
      <InfoPicBlock>
        <ConstructorPreview
          title="С этим товаром покупают"
          imageSrc={"/images/room.png"}
          buttonLink=""
        />
        <Catalog<CardShortProps>
          fetch={fetchLatestItems}
          Card={({ id, title, category, photo }) => (
            <CardShort
              id={id}
              title={title}
              category={category}
              photo={photo}
            />
          )}
          dimensions={{
            xs: { slider: true },
            md: {
              columns: 2,
            },
          }}
        />
      </InfoPicBlock>
      <Gap direction="vertical" className={clsx("wrapper", styles.others)}>
        <h5>Другие товары</h5>
        <Catalog<CatalogItem>
          fetch={fetchLatestItems}
          dimensions={{ xs: { slider: true }, sm: { columns: 4 } }}
          Card={({ category, id, title, price, photo, article, info }) => (
            <Link href={`/catalog/${category}/${id}`} key={id}>
              <Card
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
                  />
                }
              />
            </Link>
          )}
        />
      </Gap>
      <RecentItems />
    </Gap>
  );
}

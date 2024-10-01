import { SLIDER_ITEM, SLIDER_PERSONS } from "@lib/constants";
import { PageProps } from "@lib/constants/types";
import { fetchItemByID, fetchLatestCatalogItems } from "@lib/data";
import repeatArray from "@lib/utils/repeatArray";
import Card from "@ui/Card";
import CardShort from "@ui/Card/CardShort";
import { CardProps, CardShortProps } from "@ui/Card/interfaces";
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
        <Gap direction="vertical" className="wrapper">
          <h5>Другие товары</h5>
          <Catalog<CardProps>
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
                      className={styles.icon}
                    />
                  }
                />
              </Link>
            )}
          />
        </Gap>
        <RecentItems />
      </Gap>
    </main>
  );
}

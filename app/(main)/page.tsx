import { SLIDER_MAIN } from "@lib/constants";
import { CatalogItem } from "@lib/constants/types";
import { fetchLatestCatalogItems } from "@lib/fetch";
import repeatArray from "@lib/utils/repeatArray";
import Card from "@ui/Card";
import Catalog from "@ui/Catalog";
import ConstructorPreview from "@ui/ConstructorPreview";
import Gap from "@ui/Gap";
import InfoCatalog from "@ui/InfoCatalog";
import PhotoCard from "@ui/PhotoCard";
import PhotoScreen from "@ui/PhotoScreen";
import Slider from "@ui/Sliders/DefaultSlider";
import SliderWithLinks from "@ui/Sliders/SliderWithLinks";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default async function Home() {
  const fetchLatestItems = async () => await fetchLatestCatalogItems();

  const sliderCards = repeatArray(SLIDER_MAIN, 5);

  return (
    <div>
      <PhotoScreen />
      <Gap direction="vertical" size="large">
        <SliderWithLinks
          sliderCards={sliderCards}
          overflowed
          className={styles.slider}
          withArrows
          containerClass={styles.withArrows}
          renderArrowsWhenDisabled={true}
        />
        <div className={clsx(styles.container, styles.catalog_wrapper)}>
          <ConstructorPreview
            title="Собери свой комплект на конструкторе"
            buttonLink="#"
            imageSrc="/images/bed.png"
          />
          <Catalog<CatalogItem>
            fetch={fetchLatestItems}
            dimensions={{ xs: { columns: 2 } }}
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
          <InfoCatalog />
          <Image
            src="/images/girl_on_sheets.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="girl on sheets"
            className={styles.photo}
          />
        </div>
        <Slider
          cards={sliderCards.map(({ src }, index) => (
            <PhotoCard info={{ src }} equal key={index} />
          ))}
        />
      </Gap>
    </div>
  );
}

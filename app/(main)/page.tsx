import { SLIDER_MAIN } from "@lib/constants";
import { fetchLatestCatalogItems } from "@lib/data";
import repeatArray from "@lib/utils/repeatArray";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import ConstructorPreview from "@ui/ConstructorPreview";
import Gap from "@ui/Gap";
import InfoCatalog from "@ui/InfoCatalog";
import InfoPicBlock from "@ui/InfoPicBlock";
import PhotoCard from "@ui/PhotoCard";
import PhotoScreen from "@ui/PhotoScreen";
import Slider from "@ui/Sliders/DefaultSlider";
import SliderWithLinks from "@ui/Sliders/SliderWithLinks";
import Image from "next/image";

import styles from "./styles.module.scss";

export default async function Home() {
  const fetchLatestItems = async () => await fetchLatestCatalogItems();

  const sliderCards = repeatArray(SLIDER_MAIN, 5);

  return (
    <main>
      <PhotoScreen />
      <Gap direction="vertical" size="large">
        <SliderWithLinks sliderCards={sliderCards} overflowed withArrows />
        <span>
          <InfoPicBlock>
            <ConstructorPreview
              title="Собери свой комплект на конструкторе"
              buttonLink="#"
              imageSrc="/images/bed.png"
            />
            <CatalogGridWithSuspense fetch={fetchLatestItems} columns={2} />
          </InfoPicBlock>
          <InfoPicBlock>
            <InfoCatalog />
            <Image
              src="/images/girl_on_sheets.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="girl on sheets"
              className={styles.photo}
            />
          </InfoPicBlock>
        </span>
        <Slider
          cards={sliderCards.map(({ src }, index) => (
            <PhotoCard info={{ src }} equal key={index} />
          ))}
        />
      </Gap>
    </main>
  );
}

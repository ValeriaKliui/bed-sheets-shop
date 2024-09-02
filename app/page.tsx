import { SLIDER_MAIN } from "@lib/constants";
import { fetchLatestCatalogItems } from "@lib/data";
import getAvailableItems from "@lib/utils/getAvailableItems";
import repeatArray from "@lib/utils/repeatArray";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import ConstructorPreview from "@ui/ConstructorPreview";
import InfoCatalog from "@ui/InfoCatalog";
import InfoPicBlock from "@ui/InfoPicBlock";
import PhotoCard from "@ui/PhotoCard";
import PhotoScreen from "@ui/PhotoScreen";
import Slider from "@ui/Slider";
import Image from "next/image";

export default async function Home() {
  const fetchLatestItems = async () => await fetchLatestCatalogItems();

  const sliderCards = repeatArray(SLIDER_MAIN, 5);

  return (
    <main>
      <PhotoScreen />
      <Slider
        cards={sliderCards.map(({ src, title }, index) => (
          <PhotoCard info={{ src, title }} key={index} />
        ))}
        overflowed
      />

      <InfoPicBlock>
        <ConstructorPreview />
        <CatalogGridWithSuspense fetch={fetchLatestItems} columns={2} />
      </InfoPicBlock>
      <InfoPicBlock>
        <InfoCatalog />
        <Image
          src="/images/girl_on_sheets.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="girl on sheets"
        />
      </InfoPicBlock>
    </main>
  );
}

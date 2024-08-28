import { fetchLatestCatalogItems } from "@lib/data";
import CatalogGridWithSuspense from "@ui/CatalogGrid/CatalogGridWithSuspense";
import ConstructorPreview from "@ui/ConstructorPreview";
import InfoCatalog from "@ui/InfoCatalog";
import InfoPicBlock from "@ui/InfoPicBlock";
import PhotoScreen from "@ui/PhotoScreen";
import Slider from "@ui/Slider";
import Image from "next/image";

export default async function Home() {
  const fetchLatestItems = async () => await fetchLatestCatalogItems();

  return (
    <main>
      <PhotoScreen />
      <Slider />
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

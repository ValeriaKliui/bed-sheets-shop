import { catalogItems } from "@lib/constants/catalogItems";
import getAvailableItems from "@lib/utils/getAvailableItems";
import CatalogGrid from "@ui/CatalogGrid";
import ConstructorPreview from "@ui/ConstructorPreview";
import InfoCatalog from "@ui/InfoCatalog";
import InfoPicBlock from "@ui/InfoPicBlock";
import PhotoScreen from "@ui/PhotoScreen";
import Image from "next/image";

export default function Home() {
  const availableItems = getAvailableItems(catalogItems, 4);

  return (
    <main>
      <PhotoScreen />
      <InfoPicBlock>
        <ConstructorPreview />
        <CatalogGrid columns={2} cards={availableItems} isShowcase />
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

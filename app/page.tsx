import InfoCatalog from "@ui/InfoCatalog";
import InfoPicBlock from "@ui/InfoPicBlock";
import PhotoScreen from "@ui/PhotoScreen";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <PhotoScreen />
      <InfoPicBlock>
        <Image
          src="/images/bad.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="girl on sheets"
        />
        <p>sdfsdf</p>
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

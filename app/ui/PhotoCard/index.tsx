import Gap from "@ui/Gap";
import Image from "next/image";

import { PhotoCardProps } from "./interfaces";

export default function PhotoCard({ info, equal = false }: PhotoCardProps) {
  if (typeof info === "string") {
    return <Image src={info} width={40} height={40} alt="info" />;
  }

  const { src, title } = info;

  return (
    <Gap direction="vertical">
      <Image
        src={src}
        width={300}
        height={0}
        sizes="100vw"
        style={{
          height: !equal ? "auto" : 300,
          objectFit: equal ? "cover" : "initial",
          alignSelf: equal ? "flex-start" : "inherit",
          pointerEvents: "none",
        }}
        alt={title ?? src}
      />
      {title && <h5>{title}</h5>}
    </Gap>
  );
}

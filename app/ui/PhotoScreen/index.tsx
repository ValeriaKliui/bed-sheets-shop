"use client";

import { CATALOG_ITEMS } from "@lib/constants/catalogItems";
import DotsLinks from "@ui/DotsLinks";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ImageSrc from "../../../public/images/big_screen.png";
import styles from "./styles.module.scss";

export default function PhotoScreen() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    if (!imgRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      if (imgRef.current?.offsetHeight)
        setImgHeight(imgRef.current?.offsetHeight);
    });
    resizeObserver.observe(imgRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div>
      <Image
        src={ImageSrc}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
        alt="preview photo"
        className={styles.photo}
        priority
        ref={imgRef}
      />
      <DotsLinks imgHeight={imgHeight} />
    </div>
  );
}

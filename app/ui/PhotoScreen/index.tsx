"use client";

import DotsLinks from "@ui/DotsLinks";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import ImageSrc from "../../../public/images/big_screen.png";
import styles from "./styles.module.scss";

export default function PhotoScreen() {
  const photoRef = useRef<HTMLImageElement>(null);
  const [photoDimensions, setPhotoDimensions] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;

    const resizeObserver = new ResizeObserver(() => {
      if (photo) {
        setPhotoDimensions({
          width: photo.offsetWidth,
          height: photo.offsetHeight,
        });
      }
    });
    resizeObserver.observe(photo);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div>
      <Image
        src={ImageSrc}
        width={0}
        height={0}
        sizes="100vw"
        alt="preview photo"
        className={styles.photo}
        priority
        ref={photoRef}
      />
      <DotsLinks
        photoHeight={photoDimensions.height}
        photoWidth={photoDimensions.width}
      />
    </div>
  );
}

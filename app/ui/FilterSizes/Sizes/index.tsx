"use client";

import sortSizes from "@lib/utils/sortSizes";
import Gap from "@ui/Gap";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { SizesParams } from "./interfaces";
import styles from "./styles.module.scss";

export default function Sizes({ sizes }: SizesParams) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [choosenSize, setChoosenSize] = useState(
    searchParams.get("size") ?? null
  );

  const onClick = (size: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("size", size);
    setChoosenSize(size);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Gap wrap>
      {sizes.map((size) => (
        <div
          onClick={() => onClick(size)}
          className={clsx(styles.size, choosenSize === size && styles.choosen)}
          key={size}
        >
          {size}
        </div>
      ))}
    </Gap>
  );
}

"use client";

import getSortDirectionByParams from "@lib/utils/getSortDirectionByParams";
import Gap from "@ui/Gap";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { ByDirectionProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function ByDirection({ title, value }: ByDirectionProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [direction, setDirection] = useState<null | "ASC" | "DESC">(
    getSortDirectionByParams(searchParams.get("sort")) || null
  );

  const onSort = () => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (!direction || direction === "ASC") {
      setDirection("DESC");
      params.set("sort", `DESC_${value}`);
    } else {
      setDirection("ASC");
      params.set("sort", `ASC_${value}`);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Gap onClick={onSort} className={clsx('pointer', styles.container)}>
      <p>{title}</p>
      {direction && (
        <Image
          src="/icons/arrow_long.svg"
          width={10}
          height={10}
          alt="sort"
          className={clsx(direction === "ASC" && styles.asc)}
        />
      )}
    </Gap>
  );
}

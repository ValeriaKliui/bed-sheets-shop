"use client";

import sortSizes from "@lib/utils/sortSizes";
import Gap from "@ui/Gap";
import { usePathname, useRouter,useSearchParams } from "next/navigation";

import { SizesParams } from "./interfaces";
import styles from "./styles.module.scss";

export default function Sizes({ sizes }: SizesParams) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onClick = (size: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("size", size);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Gap wrap>
      {sizes.map((size) => (
        <div onClick={() => onClick(size)} className={styles.size} key={size}>
          {size}
        </div>
      ))}
    </Gap>
  );
}

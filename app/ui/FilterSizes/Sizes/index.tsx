"use client";

import Options from "@ui/Options";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { SizesParams } from "./interfaces";

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
    if (size === choosenSize) params.delete("size");

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setChoosenSize(searchParams.get("size"));
  }, [searchParams]);

  return (
    <Options options={sizes} onClick={onClick} choosenOption={choosenSize} />
  );
}

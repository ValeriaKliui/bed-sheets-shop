"use client";

import { PHOTO_LINKS } from "@lib/constants";
import Dot from "@ui/Dot";
import NoSSR from "@ui/NoSSR";
import { useWindowSize } from "usehooks-ts";

import { DotsLinksProps } from "./interfaces";

export default function DotsLinks({ imgHeight }: DotsLinksProps) {
  const { width } = useWindowSize();
  const BASE_WIDTH = 1440;

  return (
    <NoSSR>
      <div >{PHOTO_LINKS.map(({ title, x, y, category }) => {
        const xResized = Math.round((width * x) / BASE_WIDTH);
        const yResized = Math.round((imgHeight * y) / BASE_WIDTH);

        return (
          <Dot
            title={title}
            x={xResized}
            y={yResized}
            url={`/catalog/${category}`}
            key={title}
          />
        );
      })}</div>
    </NoSSR>
  );
}

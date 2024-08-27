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
      {PHOTO_LINKS.map(({ title, x, y, url }) => {
        const xResized = Math.round((width * x) / BASE_WIDTH);
        const yResized = Math.round((imgHeight * y) / BASE_WIDTH);

        return (
          <Dot title={title} x={xResized} y={yResized} url={url} key={title} />
        );
      })}
    </NoSSR>
  );
}

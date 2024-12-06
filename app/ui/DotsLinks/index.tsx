"use client";

import { BASE_SCREEN_WIDTH, PHOTO_LINKS } from "@lib/constants";
import Dot from "@ui/Dot";
import NoSSR from "@ui/NoSSR";

import { DotsLinksProps } from "./interfaces";

export default function DotsLinks({ photoHeight, photoWidth }: DotsLinksProps) {
  return (
    <NoSSR>
      <div>
        {PHOTO_LINKS.map(({ title, x, y, category }) => {
          const xResized = Math.round((photoWidth * x) / BASE_SCREEN_WIDTH);
          const yResized = Math.round((photoHeight * y) / BASE_SCREEN_WIDTH);

          return (
            <Dot
              title={title}
              x={xResized}
              y={yResized}
              url={`/catalog/${category}`}
              key={title}
            />
          );
        })}
      </div>
    </NoSSR>
  );
}

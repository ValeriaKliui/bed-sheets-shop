import { CatalogItem } from "@lib/constants/types";
import CatalogGrid from "@ui/CatalogGrid";

import { CatalogProps } from "../interfaces";

export default async function CatalogGridFetching<
  T extends Pick<CatalogItem, "id">
>({ fetch, dimensions, Card }: CatalogProps<T>) {
  const cards = await fetch();
  const cardItems = cards.map((props) => {
    return <Card {...props} key={props?.id} />;
  });

  return <CatalogGrid dimensions={dimensions} cardItems={cardItems} />;
}

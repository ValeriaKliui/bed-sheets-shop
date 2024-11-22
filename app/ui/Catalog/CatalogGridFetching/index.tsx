import CatalogGrid from "@ui/CatalogGrid";

import { CatalogProps } from "../interfaces";

export default async function CatalogGridFetching<T>({
  fetch,
  dimensions,
  Card,
}: CatalogProps<T>) {
  const cards = await fetch();
  const cardItems = cards.map(({ id, ...props }) => (
    <Card {...props} key={id} id={id} />
  ));

  return <CatalogGrid dimensions={dimensions} cardItems={cardItems} />;
}

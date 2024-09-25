import CATALOGDFD from "@ui/CATALOGDFD";

import { CatalogGridWithSuspenseProps } from "../CatalogGridWithSuspense/interfaces";

export default async function CatalogGridFetching({
  fetch,
  dimensions,
  Card,
}: CatalogGridWithSuspenseProps) {
  const cards = await fetch();
  const cardItems = cards.map(({ ...props, id }) => (
    <Card {...props} key={id} id={id} />
  ));

  return <CATALOGDFD dimensions={dimensions} cardItems={cardItems} />;
}

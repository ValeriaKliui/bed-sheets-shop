import CatalogGrid from "..";
import { CatalogGridWithSuspenseProps } from "../CatalogGridWithSuspense/interfaces";

export default async function CatalogGridFetching({
  fetch,
  columns,
}: CatalogGridWithSuspenseProps) {
  const cards = await fetch();

  return <CatalogGrid columns={columns} cards={cards} isShowcase />;
}

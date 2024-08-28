import CatalogGrid from "..";

export default async function CatalogGridFetching({ fetch, columns }) {
  const cards = await fetch();

  return <CatalogGrid columns={columns} cards={cards} isShowcase />;
}

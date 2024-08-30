import { CATEGORIES } from "@lib/constants";

import CatalogCategorized from "./CatalogCategorized";
import { FullCatalogParams } from "./interfaces";

export default function FullCatalog({ searchParams }: FullCatalogParams) {
  const URLcategory = searchParams.category;
  const hasCategory = !!URLcategory;

  const title = hasCategory
    ? CATEGORIES.find(({ category }) => category === URLcategory)?.title
    : "Популярные товары";

  return (
    <div>
      <h2>{title}</h2>
      <CatalogCategorized category={URLcategory} />
    </div>
  );
}

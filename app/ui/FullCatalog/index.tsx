import { CATEGORIES } from "@lib/constants";

import CatalogCategorized from "./CatalogCategorized";
import { FullCatalogParams } from "./interfaces";

export default function FullCatalog({
  searchParams: { category, minPrice, maxPrice, page, size },
}: FullCatalogParams) {
  const URLcategory = category;
  const hasCategory = !!URLcategory;

  const title = hasCategory
    ? CATEGORIES.find(({ category }) => category === URLcategory)?.title
    : "Популярные товары";

  return (
    <div>
      <h2>{title}</h2>
      <CatalogCategorized
        category={URLcategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        page={page}
        size={size}
      />
    </div>
  );
}

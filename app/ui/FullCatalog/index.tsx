import { CATEGORIES } from "@lib/constants";
import Sorts from "@ui/Sorts";

import CatalogCategorized from "./CatalogCategorized";
import { FullCatalogParams } from "./interfaces";

export default function FullCatalog({
  searchParams: { minPrice, maxPrice, page, size, inStock, sort },
  params,
}: FullCatalogParams) {
  const category = params?.category;
  const URLcategory = category;
  const hasCategory = !!URLcategory;

  const title = hasCategory
    ? CATEGORIES.find(({ category }) => category === URLcategory)?.title
    : "Популярные товары";

  return (
    <div>
      <p className="text_big">{title}</p>
      <Sorts />
      <CatalogCategorized
        category={URLcategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        page={page}
        size={size}
        inStock={inStock}
        sort={sort}
      />
    </div>
  );
}

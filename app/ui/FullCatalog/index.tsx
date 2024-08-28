import { CATEGORIES } from "@lib/constants";
import { useSearchParams } from "next/navigation";
import CatalogCategorized from "./CatalogCategorized";

export default function FullCatalog({ searchParams }) {
  const category = searchParams.category;
  const hasCategory = !!category;

  const title = hasCategory
    ? CATEGORIES.find(({ value }) => value === category)?.title
    : "Популярные товары";

  return (
    <div>
      <h2>{title}</h2>
      <CatalogCategorized category={category} />
    </div>
  );
}

import { fetchFilteredCatalogItems } from "@lib/data";
import Breadcrumbs from "@ui/Breadcrumbs";
import CatalogGrid from "@ui/CatalogGrid";

export default async function Page() {
  const cards = await fetchFilteredCatalogItems({
    currentPage: 1,
    category: "'aromas'",
  });

  return (
    <div>
      <Breadcrumbs />
      <CatalogGrid columns={3} cards={cards} />
    </div>
  );
}

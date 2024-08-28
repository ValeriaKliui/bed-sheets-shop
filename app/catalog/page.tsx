import Breadcrumbs from "@ui/Breadcrumbs";
import FullCatalog from "@ui/FullCatalog";

export default function Page({ params, searchParams }) {
  return (
    <div>
      <Breadcrumbs />
      <FullCatalog searchParams={searchParams} />
      {/* <CatalogGrid columns={3} cards={cards} /> */}
    </div>
  );
}

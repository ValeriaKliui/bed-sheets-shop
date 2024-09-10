import { PageProps } from "@lib/constants/types";
import { fetchCatalogPages } from "@lib/data";
import Breadcrumbs from "@ui/Breadcrumbs";
import FullCatalog from "@ui/FullCatalog";
import Pagination from "@ui/Pagination";
import SidebarFilters from "@ui/SidebarFilters";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default async function CatalogPage({ params, searchParams }: PageProps) {
  const totalItems = await fetchCatalogPages({ ...searchParams, ...params });
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className={clsx(styles.layout, "wrapper")}>
      <SidebarFilters params={params} searchParams={searchParams} />
      <div>
        <Breadcrumbs />
        <FullCatalog searchParams={searchParams} params={params} />
        <Pagination totalItems={totalItems} currentPage={currentPage} />
      </div>
    </div>
  );
}

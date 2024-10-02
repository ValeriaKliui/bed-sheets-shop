import { PageProps } from "@lib/constants/types";
import { fetchCatalogPages, fetchFilteredCatalogItems } from "@lib/data";
import Breadcrumbs from "@ui/Breadcrumbs";
import Card from "@ui/Card";
import { CardProps } from "@ui/Card/interfaces";
import Catalog from "@ui/Catalog";
import Gap from "@ui/Gap";
import Pagination from "@ui/Pagination";
import RecentItems from "@ui/RecentItems";
import SidebarFilters from "@ui/SidebarFilters";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export default async function CatalogPage({ params, searchParams }: PageProps) {
  const { category, minPrice, maxPrice, page, size, inStock, sort } =
    searchParams;
  const totalItems = await fetchCatalogPages({ ...searchParams, ...params });
  const currentPage = Number(searchParams?.page) || 1;
  const fetchByCategory = async () =>
    await fetchFilteredCatalogItems({
      category,
      minPrice,
      maxPrice,
      page,
      size,
      inStock,
      sort,
    });

  return (
    <div className={clsx(styles.layout, "wrapper")}>
      <SidebarFilters params={params} searchParams={searchParams} />
      <div>
        <Breadcrumbs />
        <Gap direction="vertical" size="large">
          <Catalog<CardProps>
            fetch={fetchByCategory}
            dimensions={{
              xs: { columns: 2 },
              md: { columns: 3 },
            }}
            Card={({ category, id, title, price, photo, article, info }) => (
              <Link href={`/catalog/${category}/${id}`} key={id}>
                <Card
                  title={title}
                  price={price}
                  photo={photo}
                  article={article}
                  info={info}
                  id={id}
                  actionButton={
                    <Image
                      src="/icons/logo.svg"
                      alt="to catalog"
                      width={0}
                      height={0}
                      priority
                      className={styles.icon}
                    />
                  }
                />
              </Link>
            )}
          />
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            className={styles.pagination}
          />
          <RecentItems />
        </Gap>
      </div>
    </div>
  );
}

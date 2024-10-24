"use client";

import useSearch from "@hooks/useSearch";
import { CatalogItem } from "@lib/constants/types";
import { fetchItemsByTitle } from "@lib/fetchItemsByTitle";
import CircledIcon from "@ui/CircledIcon";
import FoundItems from "@ui/FoundItems";
import Gap from "@ui/Gap";
import SearchIcon from "@ui/icons/SearchIcon";
import colors from "@variables.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import styles from "./styles.module.scss";

const { text, bg } = colors;

export default function SearchWindow() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundItems, setFoundItems] = useState<CatalogItem[] | null>(null);
  const { search, onChange, onClear, isSearchOpened, closeSearch } = useSearch();

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  useEffect(() => {
    const fetchItemsData = async () => {
      setIsLoading(true);
      if (search.length > 0) {
        const foundItems = await fetchItemsByTitle({ title: search, limit: 2 });
        setFoundItems(foundItems);
      }
      setIsLoading(false);
    };
    fetchItemsData();
  }, [search]);

  return (
    <div className={clsx(styles.container)}>
      <Gap className={clsx(styles.window, isSearchOpened && styles.window_opened)}>
        <Link
          href={{ pathname: "search", query: { search } }}
        >
          <CircledIcon src="/icons/search_black.svg" alt="search" />
        </Link>
        <form className={styles.form}>
          <input
            name="search"
            onChange={onSearch}
            value={search}
            className={styles.input}
            placeholder="поиск"
          />
        </form>
        <div className={styles.icon} onClick={onClear}>
          <CircledIcon src="/icons/close.svg" alt="clear search" color={bg} />
        </div>
      </Gap>
      {!isLoading && isSearchOpened && (
        <FoundItems
          items={foundItems}
          search={search}
          closeSearch={closeSearch}
        />
      )}
    </div>
  );
}

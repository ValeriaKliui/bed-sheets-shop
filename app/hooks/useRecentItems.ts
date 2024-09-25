import { CatalogItem } from "@lib/constants/types";
import { fetchRecentItems } from "@lib/fetchRecentItems";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const getRecent = () => {
  if (typeof window !== "undefined") {
    const recentLS = localStorage.getItem("recent");
    if (recentLS) return JSON.parse(recentLS);
  }
  return [];
};

export default function useRecentItems() {
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const itemID = Number(pathnames[pathnames.length - 1]);

  const recentIDs = useRef<number[]>(getRecent());

  const [recentItems, setRecentItems] = useState<CatalogItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLastVisited = itemID === recentIDs.current[0];

    if (itemID && !isLastVisited) {
      if (!recentIDs.current.includes(itemID)) {
        localStorage.setItem(
          "recent",
          JSON.stringify([...recentIDs.current, itemID].reverse().slice(0, 4))
        );
      } else {
        const seenIDs = recentIDs.current.filter((id) => id !== itemID);
        seenIDs.unshift(itemID);

        localStorage.setItem("recent", JSON.stringify(seenIDs.slice(0, 5)));
      }
    }
  }, [recentIDs, itemID]);

  useEffect(() => {
    const fetchItemsData = async () => {
      setIsLoading(true);
      if (recentIDs.current.length > 0) {
        const recentItems = await fetchRecentItems(recentIDs.current);
        setRecentItems(recentItems);
      }
      setIsLoading(false);
    };
    fetchItemsData();
  }, [recentIDs]);

  return { isLoading, recentItems };
}

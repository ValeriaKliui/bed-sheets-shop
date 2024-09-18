import { CatalogItem } from "@lib/constants/types";
import { fetchRecentItems } from "@lib/fetchRecentItems";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const getPrevSavedItems = () => {
  const prevSaved = localStorage.getItem("recent");
  if (prevSaved) return JSON.parse(prevSaved);
  return [];
};

export default function useRecentItems() {
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const itemID = pathnames[pathnames.length - 1];
  const [IDs, setIDs] = useState([]);
  const [recentItems, setRecentItems] = useState<CatalogItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const prevIDs = getPrevSavedItems();

    if (itemID !== prevIDs[0] && Number(itemID)) {
      prevIDs.unshift(itemID);
    }
    setIDs(prevIDs);

    localStorage.setItem("recent", JSON.stringify(prevIDs));
  }, [itemID]);

  useEffect(() => {
    const fetchItemsData = async () => {
      setIsLoading(true);
      if (IDs.length > 0) {
        const recentItems = await fetchRecentItems(IDs);
        setRecentItems(recentItems);
      }
      setIsLoading(false);
    };
    fetchItemsData();
  }, [IDs]);

  return { isLoading, recentItems };
}

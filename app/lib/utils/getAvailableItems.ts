import { Availability, CatalogItem } from "@lib/constants/types";

export default function getAvailableItems(
  items: CatalogItem[],
  finalAmount = items.length
) {
  const finalitems = [];
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.info === Availability.available) {
      finalitems.push(item);
    }

    if (finalAmount === i - 1) break;
  }

  return finalitems;
}

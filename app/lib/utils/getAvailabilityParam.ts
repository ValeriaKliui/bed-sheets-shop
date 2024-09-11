import { Availability } from "@lib/constants/types";

import getDefaultField from "./getDefaulttField";

export default function getAvailabilityParam(inStock?: "false" | "true") {
  if (inStock === "true") return `'${Availability.available}'`;
  if (inStock === "false") return `'${Availability.unavailable}'`;
  const inStockWithDefault = getDefaultField("info", inStock);

  return inStockWithDefault;
}

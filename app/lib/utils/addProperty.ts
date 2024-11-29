import { AdditionalPropertiesKeys } from "@lib/constants/types";

export default function addProperty(
  property: AdditionalPropertiesKeys,
  value?: string
) {
  return value ? ` AND '${value}' = ANY(${property})` : "";
}

import { DB_ITEMS_NAME } from "@lib/constants";

export default function getDefaultField(name, value) {
  let categoryWithDefault = value ? `'${value}'` : `${DB_ITEMS_NAME}.${name}`;
  return categoryWithDefault;
}

import { CatalogItem } from "@lib/constants/types";
import { CardShortProps } from "@ui/Card/interfaces";

export type SearchedItemProps = CardShortProps & Pick<CatalogItem, "article">;

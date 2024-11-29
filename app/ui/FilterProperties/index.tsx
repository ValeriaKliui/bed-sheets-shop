import {
  ADDITIONAL_PROPERTIES,
  AdditionalPropertiesKeys,
  PageProps,
} from "@lib/constants/types";
import { fetchAvailableProperties } from "@lib/fetch";
import Gap from "@ui/Gap";

import Properties from "./Properties";

export default async function FilterProperties({
  searchParams,
}: Pick<PageProps, "searchParams">) {
  const allProperties = Object.keys(
    ADDITIONAL_PROPERTIES
  ) as AdditionalPropertiesKeys[];
  const availableProperties = await fetchAvailableProperties(
    allProperties,
    searchParams
  );

  if (!searchParams.category) return;

  return (
    <Gap direction="vertical" alignItems="flex-start">
      <Properties availableProperties={availableProperties} />
    </Gap>
  );
}

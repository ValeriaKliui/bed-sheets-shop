import { PageProps } from "@lib/constants/types";
import { fetchAvailableSizes } from "@lib/data";

import Sizes from "./Sizes";
import Gap from "@ui/Gap";

export default async function FilterSizes({
  searchParams,
}: Pick<PageProps, "searchParams">) {
  const sizes = await fetchAvailableSizes(searchParams);

  if (!searchParams.category || !sizes.length) return;

  return (
    <Gap direction="vertical" alignItems="flex-start">
      <p>Размер</p>
      <Sizes sizes={sizes} />
    </Gap>
  );
}

import { PageProps } from "@lib/constants/types";
import { fetchAvailableSizes } from "@lib/data";

import Sizes from "./Sizes";

export default async function FilterSizes({
  searchParams,
}: Pick<PageProps, "searchParams">) {
  const sizes = await fetchAvailableSizes(searchParams);

  if (!searchParams.category || !sizes.length) return;

  return (
    <div>
      <p>Размер</p>
      <Sizes sizes={sizes} />
    </div>
  );
}

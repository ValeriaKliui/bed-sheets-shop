import { PageParams } from "@catalog/interfaces";
import { fetchAvailableSizes } from "@lib/data";

import Sizes from "./Sizes";

export default async function FilterSizes({ searchParams }: PageParams) {
  const sizes = await fetchAvailableSizes(searchParams);

  if (!searchParams.category || !sizes.length) return;

  return (
    <div>
      <p>Размер</p>
      <Sizes sizes={sizes} />
    </div>
  );
}

import { PageParams } from "@catalog/interfaces";
import { CURRENCY } from "@lib/constants/catalogItems";
import { fetchMinMaxPrices } from "@lib/data";
import Gap from "@ui/Gap";
import PriceRange from "@ui/PriceRange";

export default async function FilterPrice({ searchParams }: PageParams) {
  const { min, max } = await fetchMinMaxPrices(searchParams);

  return (
    <Gap direction="vertical">
      <p>Цена, {CURRENCY}</p>
      <PriceRange min={min} max={max} />
    </Gap>
  );
}

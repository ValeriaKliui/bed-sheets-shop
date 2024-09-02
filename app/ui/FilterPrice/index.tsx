import { CURRENCY } from "@lib/constants/catalogItems";
import { getMinMaxPrices } from "@lib/data";
import PriceRange from "@ui/PriceRange";

export default async function FilterPrice() {
  const { min, max } = await getMinMaxPrices();

  return (
    <>
      <p>Цена, {CURRENCY}</p>
      <PriceRange min={min} max={max} />
    </>
  );
}

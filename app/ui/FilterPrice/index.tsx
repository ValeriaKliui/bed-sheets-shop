import { CURRENCY } from "@lib/constants/catalogItems";
import { PageProps } from "@lib/constants/types";
import { fetchMinMaxPrices } from "@lib/data";
import Gap from "@ui/Gap";
import PriceRange from "@ui/PriceRange";

import styles from "./styles.module.scss";

export default async function FilterPrice({
  searchParams,
}: Pick<PageProps, "searchParams">) {
  const { min, max } = await fetchMinMaxPrices(searchParams);

  return (
    <Gap direction="vertical" alignItems={"unset"} className={styles.container}>
      <p>Цена, {CURRENCY}</p>
      <PriceRange min={min} max={max} />
    </Gap>
  );
}

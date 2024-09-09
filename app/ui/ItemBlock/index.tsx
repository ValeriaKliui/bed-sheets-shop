import { CURRENCY } from "@lib/constants/catalogItems";
import { CatalogItem } from "@lib/constants/types";
import Breadcrumbs from "@ui/Breadcrumbs";
import clsx from "clsx";

export default function ItemBlock({
  title,
  article,
  price,
  id,
  category,
}: CatalogItem) {
  return (
    <div className="wrapper">
      <Breadcrumbs
        extraLinks={[{ title, path: `catalog/${category}/${id}` }]}
      />
      <p className="text_big">{title}</p>
      <p className="text_secondary">Артикул: {article}</p>
      <p>
        Наволочка двухсторонняя: светло-серый сатин и шелкс узором
        &quot;волшебный лес&quot; 50*70 см
      </p>
      <p className={clsx("text_big", "text_primary")}>
        {price} {CURRENCY}
      </p>
    </div>
  );
}

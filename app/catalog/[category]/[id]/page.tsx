import { PageProps } from "@lib/constants/types";
import { fetchItemByID } from "@lib/data";
import Gap from "@ui/Gap";
import ItemBlock from "@ui/ItemBlock";

import styles from "./styles.module.scss";

export default async function Page({ params: { id } }: PageProps) {
  const {
    title,
    article,
    price,
    id: itemID,
    category,
    sizes,
    photo,
  } = await fetchItemByID({ id });

  return (
    <Gap direction="vertical" size="large" className={styles.layout}>
      <ItemBlock
        title={title}
        article={article}
        price={price}
        id={itemID}
        category={category}
        sizes={sizes}
        photo={photo}
      />
    </Gap>
  );
}

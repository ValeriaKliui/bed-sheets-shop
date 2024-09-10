import { PageProps } from "@lib/constants/types";
import { fetchItemByID } from "@lib/data";
import ItemBlock from "@ui/ItemBlock";

export default async function Page({ params: { id } }: PageProps) {
  const {
    title,
    article,
    price,
    id: itemID,
    category,
    sizes,
  } = await fetchItemByID({ id });

  return (
    <ItemBlock
      title={title}
      article={article}
      price={price}
      id={itemID}
      category={category}
      sizes={sizes}
    />
  );
}
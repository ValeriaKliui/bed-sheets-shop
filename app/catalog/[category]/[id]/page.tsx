import { PageProps } from "@lib/constants/types";
import { fetchItemByID } from "@lib/data";
import Breadcrumbs from "@ui/Breadcrumbs";

export default async function Page({ params: { id, category } }: PageProps) {
  const { title } = await fetchItemByID({ id });

  return (
    <div>
      <Breadcrumbs
        extraLinks={[{ title, path: `catalog/${category}/${id}` }]}
      />
    </div>
  );
}

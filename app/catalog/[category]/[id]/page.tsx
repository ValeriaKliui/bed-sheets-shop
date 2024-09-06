import { PageProps } from "@lib/constants/types";
import Breadcrumbs from "@ui/Breadcrumbs";

export default function Page({ params: { id } }: PageProps) {
  return (
    <div>
      <Breadcrumbs />
    </div>
  );
}

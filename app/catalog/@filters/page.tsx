import { PageParams } from "@catalog/interfaces";
import SidebarFilters from "@ui/SidebarFilters";

export default function Page({ searchParams }: PageParams) {
  return <SidebarFilters searchParams={searchParams} />;
}

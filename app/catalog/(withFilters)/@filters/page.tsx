import { PageProps } from "@lib/constants/types";
import SidebarFilters from "@ui/SidebarFilters";

export default function Page({ searchParams }: PageProps) {
  return <SidebarFilters searchParams={searchParams} />;
}

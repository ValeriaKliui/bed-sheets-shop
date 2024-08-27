import FilterCategories from "@ui/Categories";
import { Suspense } from "react";

export default function SidebarFilters() {
  return (
    <aside>
      <h5>Категории</h5>
      <Suspense>
        <FilterCategories />
      </Suspense>
    </aside>
  );
}

import ButtonClearFilters from "@ui/ButtonClearFilters";
import FilterCategories from "@ui/Categories";
import Gap from "@ui/Gap";
import { Suspense } from "react";

export default function SidebarFilters() {
  return (
    <aside>
      <Gap direction="vertical" size="medium">
        <h5>Категории</h5>
        <Suspense>
          <FilterCategories />
          <ButtonClearFilters />
        </Suspense>
      </Gap>
    </aside>
  );
}

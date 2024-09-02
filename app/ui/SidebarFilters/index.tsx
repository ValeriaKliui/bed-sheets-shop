import ButtonClearFilters from "@ui/ButtonClearFilters";
import FilterCategories from "@ui/Categories";
import FilterPrice from "@ui/FilterPrice";
import Gap from "@ui/Gap";
import { Suspense } from "react";

export default function SidebarFilters() {
  return (
    <aside>
      <Gap direction="vertical" size="medium">
        <h5>Категории</h5>
        <Suspense>
          <FilterCategories />
          <FilterPrice />
          <ButtonClearFilters />
        </Suspense>
      </Gap>
    </aside>
  );
}

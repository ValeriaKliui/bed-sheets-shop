import { PageProps } from "@lib/constants/types";
import ButtonClearFilters from "@ui/ButtonClearFilters";
import FilterCategories from "@ui/Categories";
import FilterPrice from "@ui/FilterPrice";
import FilterSizes from "@ui/FilterSizes";
import Gap from "@ui/Gap";
import { Suspense } from "react";

export default function SidebarFilters({ searchParams, params }: PageProps) {
  return (
    <aside>
      <Gap direction="vertical" size="medium">
        <h5>Категории</h5>
        <Suspense>
          <FilterCategories />
          <FilterSizes searchParams={{ ...searchParams, ...params }} />
          <FilterPrice searchParams={{ ...searchParams, ...params }} />
          <ButtonClearFilters />
        </Suspense>
      </Gap>
    </aside>
  );
}

import { PageProps } from "@lib/constants/types";
import ButtonClearFilters from "@ui/ButtonClearFilters";
import FilterCategories from "@ui/Categories";
import FilterPrice from "@ui/FilterPrice";
import FilterSizes from "@ui/FilterSizes";
import { Suspense } from "react";

export default function Filters({ searchParams, params }: PageProps) {
  return (
    <Suspense>
      <FilterCategories />
      <FilterSizes searchParams={{ ...searchParams, ...params }} />
      <FilterPrice searchParams={{ ...searchParams, ...params }} />
      <ButtonClearFilters />
    </Suspense>
  );
}

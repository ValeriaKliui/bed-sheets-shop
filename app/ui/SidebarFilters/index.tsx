import DataForFilters from "@ui/DataForFilters/index";
import Gap from "@ui/Gap";

export default function SidebarFilters() {
  return (
    <aside>
      <Gap direction="vertical" size="medium">
        <h5>Категории</h5>
        <DataForFilters />
      </Gap>
    </aside>
  );
}

import { PageProps } from "@lib/constants/types";
import Filters from "@ui/Filters";
import Gap from "@ui/Gap";

import styles from "./styles.module.scss";

export default function SidebarFilters({ searchParams, params }: PageProps) {
  return (
    <aside className={styles.aside}>
      <Gap direction="vertical" size="medium" alignItems={"flex-start"}>
        <Filters searchParams={searchParams} params={params} />
      </Gap>
    </aside>
  );
}

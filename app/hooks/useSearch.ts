import { useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";

export default function useSearch() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const onChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchQ = target.value;
    setSearch(searchQ);
  }, []);

  const onClear = useCallback(() => {
    setSearch("");
  }, []);

  return { search, onChange, onClear };
}

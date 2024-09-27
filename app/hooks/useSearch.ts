import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function useSearch() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchQ = target.value;
    setSearch(searchQ);
  };

  const onClear = () => {
    setSearch("");
  };

  return { search, onChange, onClear };
}

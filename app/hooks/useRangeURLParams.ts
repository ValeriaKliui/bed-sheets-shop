import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback, useRef } from "react";

import useDebounce from "./useDebounce";

export default function useRangeURLParams() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const debounce =
    useDebounce<
      (event: ChangeEvent<HTMLInputElement>, currValValidated: number) => void
    >();

  const onValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>, currValValidated: number) => {
      const { name } = event.target;

      const params = new URLSearchParams(searchParams.toString());
      params.set(name, `${currValValidated}`);

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, replace, pathname]
  );

  const debouncedOnValueChange = useRef(debounce(onValueChange)).current;

  return {
    onValueChange: debouncedOnValueChange,
  };
}

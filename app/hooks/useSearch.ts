import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback, useState } from 'react';

export default function useSearch() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get('search') || ''
  );
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const closeSearch = () => setIsSearchOpened(false);

  const onChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const searchQ = target.value;
      setSearch(searchQ);
      setIsSearchOpened(true);
    },
    []
  );

  const onClear = useCallback(() => {
    setSearch('');
    closeSearch();
  }, []);

  return { search, onChange, onClear, isSearchOpened, closeSearch };
}

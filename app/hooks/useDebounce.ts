import { useCallback } from "react";

export default function useDebounce<T extends (...args: any[]) => void>() {
  const debounce = useCallback((func: T, delay = 1000) => {
    let timer: ReturnType<typeof setTimeout>;

    return function (...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }, []);

  return debounce;
}

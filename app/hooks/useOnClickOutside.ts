import { RefObject, useCallback, useEffect } from "react";

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void
) {
  const onClickOutsideCallback = useCallback(onClickOutside, [onClickOutside]);

  useEffect(() => {
    const onClick = (e: Event) => {
      const isClickInsideTarget = ref.current?.contains(e.target as Node);

      if (!isClickInsideTarget) onClickOutsideCallback();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ref, onClickOutsideCallback]);
}

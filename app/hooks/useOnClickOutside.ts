import { RefObject, useEffect, MouseEvent } from 'react';

export default function useOnClickOutside<
  T extends HTMLElement = HTMLElement
>(ref: RefObject<T>, onClickOutside: () => void) {
  useEffect(() => {
    const onClick = (e: Event) => {
      const isClickInsideTarget = ref.current?.contains(
        e.target as Node
      );

      if (!isClickInsideTarget) onClickOutside();
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [ref]);
}

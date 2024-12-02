import { useEffect } from 'react';

export default function useFreezeScroll(isFreezed: boolean) {
  useEffect(() => {
    if (isFreezed) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = `${window.innerHeight}px`;
    } else {
      document.body.style.overflowY = 'unset';
      document.body.style.height = 'unset';
    }
  }, [isFreezed]);
}

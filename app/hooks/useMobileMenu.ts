import { useState } from 'react';

import useFreezeScroll from './useFreezeScroll';

export default function useMobileMenu() {
  const [isMenuOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened((prev) => !prev);

  const closeMenu = () => setIsOpened(false);

  useFreezeScroll(isMenuOpened);

  return {
    isMenuOpened,
    closeMenu,
    toggleMenu,
  };
}

import { useCallback, useState } from "react";

export default function useMobileMenu() {
  const [isMenuOpened, setIsOpened] = useState(false);

  const toggleMenu = useCallback(() => setIsOpened((prev) => !prev), []);

  const closeMenu = useCallback(() => setIsOpened(false), []);

  return {
    isMenuOpened,
    closeMenu,
    toggleMenu,
  };
}

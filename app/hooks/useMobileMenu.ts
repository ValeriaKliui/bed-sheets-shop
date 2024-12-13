import { useState } from "react";

export default function useMobileMenu() {
  const [isMenuOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened((prev) => !prev);

  const closeMenu = () => setIsOpened(false);

  return {
    isMenuOpened,
    closeMenu,
    toggleMenu,
  };
}

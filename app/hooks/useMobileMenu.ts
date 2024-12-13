import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useMobileMenu() {
  const [isMenuOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened((prev) => !prev);

  const closeMenu = () => setIsOpened(false);

  useLockBodyScroll();
  // useFreezeScroll();

  return {
    isMenuOpened,
    closeMenu,
    toggleMenu,
  };
}

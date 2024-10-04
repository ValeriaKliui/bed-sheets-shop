import { useEffect, useState } from "react";

export default function useMobileMenu() {
  const [isMenuOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened((prev) => !prev);

  const closeMenu = () => setIsOpened(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "1px";
    } else document.body.style.overflowY = "unset";
  }, [isMenuOpened]);

  return {
    isMenuOpened,
    closeMenu,
    toggleMenu,
  };
}
import { useEffect } from "react";

export default function useFreezeScroll(isFreezed: boolean) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflowY;
    if (isFreezed) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = `${window.innerHeight}px`;
    }
    return () => {
      document.body.style.overflowY = originalStyle;
      document.body.style.height = "unset";
    };
  }, [isFreezed]);
}

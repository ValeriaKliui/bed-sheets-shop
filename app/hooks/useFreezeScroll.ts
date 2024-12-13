import { useLayoutEffect } from "react";

export default function useFreezeScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflowY;
    document.body.style.overflowY = "hidden";
    document.body.style.height = `${window.innerHeight}px`;
    return () => {
      document.body.style.overflowY = originalStyle;
      document.body.style.height = "unset";
    };
  }, []);
}

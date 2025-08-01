import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  function onScrollChange() {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  }

  function scrollTo(y) {
    if (y) {
      window.scroll(scroll.x, y);
    }
  }

  useWindowEvent("scroll", onScrollChange, { passive: true });

  return [scroll, scrollTo];
}

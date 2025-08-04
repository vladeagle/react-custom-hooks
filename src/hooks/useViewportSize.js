import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent.js";

export function useViewportSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  function reportWindowSize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  useWindowEvent("resize", reportWindowSize, { passive: true });

  return { height, width };
}

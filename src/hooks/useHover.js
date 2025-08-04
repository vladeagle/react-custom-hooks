import { useLayoutEffect, useRef, useState } from "react";

export function useHover() {
  const [hovered, setHover] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    el.addEventListener("mouseover", onMouseOverEl);
    el.addEventListener("mouseout", onMouseOutOfEl);

    function onMouseOverEl() {
      setHover(true);
    }

    function onMouseOutOfEl() {
      setHover(false);
    }
  }, [hovered]);

  return { hovered, ref };
}

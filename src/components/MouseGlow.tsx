import { useEffect, useRef, useState } from "react";

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let raf = 0;
    const move = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.left = e.clientX + "px";
          ref.current.style.top = e.clientY + "px";
        }
        if (!active) setActive(true);
      });
    };
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active]);

  return <div ref={ref} className={`mouse-glow ${active ? "active" : ""}`} aria-hidden="true" />;
}

import { useEffect, useRef } from "react";

/**
 * Egendefinert peker: en prikk og en ring som henger etter. Over elementer med
 * `data-cursor` vokser ringen til en farget pille med teksten fra attributtet.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const d = dot.current!;
    const r = ring.current!;
    document.body.classList.add("cc");
    d.style.display = "block";
    r.style.display = "flex";

    let mx = -999;
    let my = -999;
    let rx = innerWidth / 2;
    let ry = innerHeight / 2;
    let label: string | null = null;
    let raf = 0;

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      d.style.transform = `translate(${mx}px,${my}px)`;
      r.style.left = rx + "px";
      r.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onOver = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest?.("[data-cursor]");
      const l = t ? t.getAttribute("data-cursor") : null;
      if (l === label) return;
      label = l;
      if (l) {
        r.textContent = l;
        r.style.width = Math.max(64, l.length * 9 + 28) + "px";
        r.style.height = "64px";
        r.style.background = "var(--acc)";
        r.style.borderColor = "var(--acc)";
        d.style.opacity = "0";
      } else {
        r.textContent = "";
        r.style.width = "34px";
        r.style.height = "34px";
        r.style.background = "transparent";
        r.style.borderColor = "var(--ink)";
        d.style.opacity = "1";
      }
    };
    const onLeave = () => {
      mx = -999;
      my = -999;
    };

    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("cc");
      removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        style={{
          display: "none",
          position: "fixed",
          left: 0,
          top: 0,
          width: 6,
          height: 6,
          margin: "-3px 0 0 -3px",
          borderRadius: "50%",
          background: "var(--acc)",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      />
      <div
        ref={ring}
        style={{
          display: "none",
          position: "fixed",
          left: 0,
          top: 0,
          width: 34,
          height: 34,
          borderRadius: 999,
          border: "1px solid var(--ink)",
          pointerEvents: "none",
          zIndex: 999,
          alignItems: "center",
          justifyContent: "center",
          font: "500 11px/1 'JetBrains Mono',monospace",
          letterSpacing: ".04em",
          color: "var(--onacc)",
          transition:
            "width .25s, height .25s, background .25s, border-color .25s",
          transform: "translate(-50%,-50%)",
        }}
      />
    </>
  );
}

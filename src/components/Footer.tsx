import { useEffect, useRef } from "react";

const NAME = "Tomine Zakariassen";

/** Stort navn i omriss; et lyskjegle følger musen og fargelegger bokstavene. */
function BigName() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let r = 0;
    let target = 0;
    let raf = 0;
    const step = () => {
      r += (target - r) * 0.15;
      el.style.setProperty("--fr", r.toFixed(1) + "px");
      raf = Math.abs(target - r) > 0.5 ? requestAnimationFrame(step) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };
    const move = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      el.style.setProperty("--fx", e.clientX - b.left + "px");
      el.style.setProperty("--fy", e.clientY - b.top + "px");
    };
    const enter = () => {
      target = Math.max(140, el.clientHeight * 0.9);
      kick();
    };
    const leave = () => {
      target = 0;
      kick();
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  const mask =
    "radial-gradient(circle var(--fr) at var(--fx) var(--fy),#000 60%,transparent 100%)";
  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={
        {
          position: "relative",
          margin: "clamp(40px,6vw,80px) 0 0",
          font: "400 clamp(64px,14.5vw,260px)/.8 'Instrument Serif',serif",
          letterSpacing: "-.04em",
          whiteSpace: "nowrap",
          textAlign: "center",
          "--fx": "50%",
          "--fy": "50%",
          "--fr": "0px",
        } as React.CSSProperties
      }
    >
      <div
        style={{
          color: "transparent",
          WebkitTextStroke: "1px var(--ink)",
          opacity: 0.35,
        }}
      >
        {NAME}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          color: "var(--acc)",
          WebkitTextStroke: "1px var(--acc)",
          pointerEvents: "none",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        {NAME}
      </div>
    </div>
  );
}

export default function Footer() {
  const label = { color: "var(--mute)" };
  const col = { display: "flex", flexDirection: "column" } as const;
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--ink)",
        padding: "40px clamp(20px,4vw,56px) 24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: 28,
          font: "400 13px/1.8 'JetBrains Mono',monospace",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={col}>
          <span style={label}>Base</span>
          <span>Oslo</span>
        </div>
        <div style={col}>
          <span style={label}>Telefon</span>
          <a href="tel:98858944">98858944</a>
        </div>
        <div style={col}>
          <span style={label}>Født</span>
          <span>17.10.1999</span>
        </div>
        <div style={col}>
          <span style={label}>Kontakt meg:</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px" }}>
            <a
              href="https://github.com/tominezak"
              target="_blank"
              rel="noopener"
              data-cursor="Åpne"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomine-zakariassen-390022327/"
              target="_blank"
              rel="noopener"
              data-cursor="Åpne"
            >
              LinkedIn
            </a>
            <a href="mailto:tominezak@gmail.com" data-cursor="Send">
              E-post
            </a>
            <a
              href="https://www.strava.com/athletes/61033275"
              target="_blank"
              rel="noopener"
              data-cursor="Åpne"
            >
              Strava
            </a>
          </div>
        </div>
      </div>
      <BigName />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          marginTop: 24,
          font: "400 12px/1 'JetBrains Mono',monospace",
          color: "var(--mute)",
        }}
      >
        <span>© {new Date().getFullYear()} Alle rettigheter forbeholdt</span>
        <span style={{ opacity: 0.6 }}>↑↑↓↓←→←→BA</span>
        <a href="#hjem" data-cursor="Topp" style={{ color: "var(--ink)" }}>
          ↑ Topp
        </a>
      </div>
    </footer>
  );
}

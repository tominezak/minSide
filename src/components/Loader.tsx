import { useEffect, useState } from "react";

const seen = () => {
  try {
    return !!sessionStorage.getItem("tzak-loaded");
  } catch {
    return true;
  }
};

/** Laster-skjerm som teller til 100 %. Vises én gang per økt. */
export default function Loader() {
  const [loading, setLoading] = useState(() => !seen());
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (!loading) return;
    let p = 0;
    let done: ReturnType<typeof setTimeout>;
    const t = setInterval(() => {
      p = Math.min(100, p + 1 + Math.floor(Math.random() * 7));
      setPct(p);
      if (p >= 100) {
        clearInterval(t);
        try {
          sessionStorage.setItem("tzak-loaded", "1");
        } catch {
          /* privat modus */
        }
        done = setTimeout(() => setLoading(false), 350);
      }
    }, 45);
    return () => {
      clearInterval(t);
      clearTimeout(done);
    };
  }, [loading]);

  if (!loading) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "var(--ink)",
        color: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(20px,4vw,56px)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          opacity: 0.7,
        }}
      >
        <span>tzak</span>
        <span>Laster inn portefølje</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            font: "400 clamp(96px,22vw,320px)/.85 'Instrument Serif',serif",
            letterSpacing: "-.02em",
          }}
        >
          {pct}
          <span style={{ color: "var(--acc)" }}>%</span>
        </div>
        <div style={{ height: 2, background: "rgba(128,128,128,.3)" }}>
          <div
            style={{ height: 2, background: "var(--acc)", width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

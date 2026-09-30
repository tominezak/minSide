import { useEffect, useRef } from "react";

const WORDS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "SQL",
  "HTML/CSS",
  "Spring Boot",
  "jQuery",
  "Bootstrap",
  "React",
  "Tailwind",
  "Git",
  "GitHub",
  "IntelliJ",
  "VS Code",
  "Linux",
  "Bash",
  "Docker",
  "Wireshark",
  "Node.js",
  "API",
  "PyQt5",
  "Teamarbeid",
];

/** Kule av ferdigheter som roterer av seg selv og kan dras rundt. */
export default function SkillSphere() {
  const sphere = useRef<HTMLDivElement>(null);
  const words = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = sphere.current!;
    const n = WORDS.length;
    const pts = WORDS.map((_, i) => {
      const y = 1 - ((i + 0.5) * 2) / n;
      const r = Math.sqrt(1 - y * y);
      const th = i * 2.39996;
      return [Math.cos(th) * r, y, Math.sin(th) * r];
    });
    let ax = 0.3;
    let ay = 0;
    let vx = 0;
    let vy = 0.004;
    let drag = false;
    let lx = 0;
    let ly = 0;
    let raf = 0;

    const down = (e: PointerEvent) => {
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      vy = (e.clientX - lx) * 0.005;
      // På touch styrer bare sidelengs sveip kula, så siden fortsatt kan scrolles
      vx = e.pointerType === "touch" ? 0 : -(e.clientY - ly) * 0.005;
      lx = e.clientX;
      ly = e.clientY;
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);

    const loop = () => {
      if (!drag) {
        vx *= 0.96;
        vy = vy * 0.96 + 0.004 * 0.04;
      }
      ax += vx;
      ay += vy;
      const R = el.clientWidth * 0.36;
      const cx = Math.cos(ax),
        sx = Math.sin(ax),
        cy = Math.cos(ay),
        sy = Math.sin(ay);
      words.current.forEach((w, i) => {
        const [x, y, z] = pts[i];
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;
        const s = 0.65 + (z2 + 1) * 0.3;
        w.style.transform = `translate(-50%,-50%) translate3d(${x1 * R}px,${y2 * R}px,0) scale(${s})`;
        w.style.opacity = String(0.2 + (z2 + 1) * 0.4);
        w.style.zIndex = String(Math.round(z2 * 100) + 100);
        w.style.color = z2 > 0.6 ? "var(--acc)" : "var(--ink)";
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <div
      ref={sphere}
      data-cursor="Dra"
      style={{
        position: "relative",
        width: "min(100%,520px)",
        aspectRatio: "1",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 35% 30%,var(--bg2),var(--bg) 70%)",
        border: "1px dashed var(--line)",
        touchAction: "pan-y",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {WORDS.map((s, i) => (
        <span
          key={s}
          ref={(el) => {
            if (el) words.current[i] = el;
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            whiteSpace: "nowrap",
            font: "500 clamp(12px,1.4vw,16px)/1 'JetBrains Mono',monospace",
            willChange: "transform,opacity",
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

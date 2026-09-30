import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SiteContext } from "./site";

function confetti() {
  for (let i = 0; i < 80; i++) {
    const d = document.createElement("div");
    const s = 6 + Math.random() * 8;
    d.style.cssText = `position:fixed;top:-20px;left:${Math.random() * 100}vw;width:${s}px;height:${s * 0.5}px;background:oklch(0.65 0.19 ${Math.random() * 360});z-index:1500;pointer-events:none`;
    document.body.appendChild(d);
    d.animate(
      [
        { transform: "translateY(0) rotate(0)" },
        {
          transform: `translate(${(Math.random() - 0.5) * 200}px,${innerHeight + 40}px) rotate(${Math.random() * 720}deg)`,
        },
      ],
      {
        duration: 1800 + Math.random() * 1600,
        easing: "cubic-bezier(.3,.6,.5,1)",
        delay: Math.random() * 400,
      },
    ).onfinish = () => d.remove();
  }
}

const readTheme = () => {
  try {
    return localStorage.getItem("tzak-theme") === "dark";
  } catch {
    return false;
  }
};

/** Tema (lys/mørk), festmodus og toast-meldinger som deles av hele siden. */
export function SiteProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(readTheme);
  const [toast, setToast] = useState("");
  const darkRef = useRef(dark);
  const festRef = useRef(false);
  const festTimer = useRef<ReturnType<typeof setInterval>>();
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const showToast = useCallback((text: string) => {
    setToast(text);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }, []);

  const toggleTheme = useCallback(() => {
    const next = !darkRef.current;
    darkRef.current = next;
    setDark(next);
    try {
      localStorage.setItem("tzak-theme", next ? "dark" : "light");
    } catch {
      /* privat modus */
    }
    return next;
  }, []);

  const toggleFest = useCallback(() => {
    const fest = !festRef.current;
    festRef.current = fest;
    showToast(
      "✦ Du fant easter egg-et! Festmodus er " + (fest ? "på" : "av") + ".",
    );
    clearInterval(festTimer.current);
    if (fest) {
      let h = 260;
      festTimer.current = setInterval(() => {
        h = (h + 3) % 360;
        document.body.style.setProperty("--acc", `oklch(0.62 0.19 ${h})`);
      }, 40);
      confetti();
    } else document.body.style.removeProperty("--acc");
    return fest;
  }, [showToast]);

  // Konami-kode, fanetittel og hilsen i konsollen
  useEffect(() => {
    const code = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = k === code[pos] ? pos + 1 : k === code[0] ? 1 : 0;
      if (pos === code.length) {
        pos = 0;
        toggleFest();
      }
    };
    const onVis = () => {
      document.title = document.hidden ? "← Kom tilbake!" : "tzak";
    };
    addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVis);
    console.log(
      "%c> Hei, utvikler! Ser du etter kildekoden? Prøv Konami-koden på siden: ↑ ↑ ↓ ↓ ← → ← → B A",
      "font:14px monospace;color:#2E6BE4",
    );
    return () => {
      removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVis);
      clearInterval(festTimer.current);
    };
  }, [toggleFest]);

  return (
    <SiteContext.Provider value={{ dark, toggleTheme, toggleFest, showToast }}>
      {children}
      {toast && (
        <div
          role="status"
          style={{
            position: "fixed",
            left: "50%",
            bottom: 28,
            transform: "translateX(-50%)",
            zIndex: 900,
            background: "var(--ink)",
            color: "var(--bg)",
            padding: "14px 20px",
            borderRadius: 999,
            font: "500 13px/1.2 'JetBrains Mono',monospace",
            boxShadow: "0 20px 40px -16px rgba(0,0,0,.4)",
          }}
        >
          {toast}
        </div>
      )}
    </SiteContext.Provider>
  );
}

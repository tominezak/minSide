import { useEffect, useRef } from "react";
import { useSite } from "../site";

/** Fast meny øverst, pluss den tynne scroll-linjen. Får glassbakgrunn når man scroller. */
export default function Nav() {
  const { dark, toggleTheme } = useSite();
  const nav = useRef<HTMLElement>(null);
  const prog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - innerHeight);
      if (prog.current) prog.current.style.width = p * 100 + "%";
      const n = nav.current;
      if (n) {
        const s = h.scrollTop > 40;
        n.style.background = s
          ? "color-mix(in oklab, var(--bg) 82%, transparent)"
          : "transparent";
        n.style.backdropFilter = s ? "blur(12px)" : "none";
        n.style.borderBottomColor = s ? "var(--line)" : "transparent";
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const themeLabel = dark ? "Lys" : "Mørk";

  return (
    <>
      <div
        ref={prog}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: 0,
          background: "var(--acc)",
          zIndex: 60,
        }}
      />
      <nav ref={nav} className="nav">
        <a
          href="#hjem"
          data-cursor="Topp"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            fontSize: 15,
          }}
        >
          tzak
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 15,
              background: "var(--acc)",
              marginLeft: 3,
              animation: "blink 1.1s steps(1) infinite",
            }}
          />
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px,2.4vw,28px)",
          }}
        >
          <a href="#hjem" data-cursor="Se" className="hide-xs">
            Hjem
          </a>
          <a href="#prosjekter" data-cursor="Se">
            Prosjekter
          </a>
          <button
            onClick={toggleTheme}
            data-cursor={themeLabel}
            className="theme"
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "1.5px solid var(--ink)",
                background:
                  "linear-gradient(90deg,var(--ink) 50%,transparent 50%)",
              }}
            />
            {themeLabel}
          </button>
          <a
            href="mailto:tominezak@gmail.com"
            data-cursor="Send"
            className="contact"
          >
            Kontakt
          </a>
        </div>
      </nav>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { go, useSite } from "../site";

type Line = { text: string; cmd: boolean };

const START: Line[] = [
  { text: "whoami", cmd: true },
  { text: "tomine — fullstack-utvikler", cmd: false },
  { text: "cat stack.txt", cmd: true },
  { text: "React · TypeScript · Kotlin", cmd: false },
  { text: "Skriv «help» for å se kommandoer.", cmd: false },
];

const MENU = [
  "om",
  "reise",
  "ferdigheter",
  "prosjekter",
  "kontakt",
  "tema",
  "fest",
  "ls",
  "clear",
];

const PROMPT = "tzak@oslo:~$ ";

/** Interaktiv terminal i toppen av siden. Kommandoene kan skrives eller klikkes. */
export default function Terminal() {
  const { toggleTheme, toggleFest } = useSite();
  const [lines, setLines] = useState<Line[]>(START);
  const [input, setInput] = useState("");
  const body = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
    const out: string[] = [];
    const cmds: Record<string, () => void> = {
      help: () =>
        out.push(
          "om · reise · ferdigheter · prosjekter · kontakt · tema · fest · clear",
        ),
      om: () => {
        out.push(
          "Dataingeniør fra OsloMet, utvikler hos Politiets IT-enhet. Bachelor i sykepleie i bagasjen.",
        );
        go("om");
      },
      reise: () => {
        out.push(
          "01 Sykepleie → 02 Butikk → 03 OsloMet → 04 Politiets IT-enhet",
        );
        go("reise");
      },
      ferdigheter: () => {
        out.push(
          "JavaScript/TypeScript · Python · Java · C# · SQL · React · Spring Boot · Docker",
        );
        go("ferdigheter");
      },
      prosjekter: () => {
        out.push("01 Handleliste", "02 Kino-booking", "03 Weather API App");
        go("prosjekter");
      },
      kontakt: () => out.push("tominezak@gmail.com · 98858944"),
      tema: () => out.push("Tema: " + (toggleTheme() ? "mørk" : "lys")),
      fest: () => out.push("Festmodus: " + (toggleFest() ? "på" : "av")),
      whoami: () => out.push("gjest@tzak"),
      sudo: () => out.push("Tilgang nektet. Fint forsøk."),
      ls: () => out.push("om/  reise/  ferdigheter/  prosjekter/  kontakt.txt"),
    };
    setInput("");
    if (c === "clear") return setLines([]);
    if (!c) return setLines((l) => [...l, { text: "", cmd: true }]);
    const fn = cmds[c.split(" ")[0]];
    if (fn) fn();
    else out.push(`kommando ikke funnet: ${c} — prøv «help»`);
    setLines((l) => [
      ...l,
      { text: raw, cmd: true },
      ...out.map((text) => ({ text, cmd: false })),
    ]);
  };

  return (
    <div
      onClick={() => {
        // På touch ville dette åpnet tastaturet ved hvert trykk i terminalen
        if (matchMedia("(pointer:fine)").matches)
          field.current?.focus({ preventScroll: true });
      }}
      style={{
        background: "#15140F",
        color: "#E8E2D6",
        borderRadius: 14,
        boxShadow: "0 30px 80px -30px rgba(0,0,0,.45),0 0 0 1px rgba(0,0,0,.2)",
        overflow: "hidden",
        font: "400 13px/1.65 'JetBrains Mono',monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          color: "#8C857A",
          fontSize: 12,
        }}
      >
        <span>tzak@oslo — zsh</span>
        <span style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 9, height: 9, border: "1px solid #5C574E" }} />
          <span style={{ width: 9, height: 9, border: "1px solid #5C574E" }} />
          <span style={{ width: 9, height: 9, background: "#6F9BFF" }} />
        </span>
      </div>
      <div className="term-grid">
        <div className="term-cmds">
          <span className="term-cmds-label">KOMMANDOER</span>
          {MENU.map((name) => (
            <button
              key={name}
              data-cursor="Kjør"
              className="term-cmd"
              onClick={(e) => {
                e.stopPropagation();
                run(name);
              }}
            >
              <span style={{ color: "#6F9BFF" }}>›</span> {name}
            </button>
          ))}
        </div>
        <div ref={body} className="term-out">
          {lines.map((l, i) => (
            <div key={i} style={{ display: "flex", wordBreak: "break-word" }}>
              {l.cmd ? (
                <>
                  <span
                    style={{
                      color: "#6F9BFF",
                      whiteSpace: "pre",
                      flex: "none",
                    }}
                  >
                    {PROMPT}
                  </span>
                  <span style={{ whiteSpace: "pre-wrap" }}>{l.text}</span>
                </>
              ) : (
                <span style={{ color: "#A9A193", whiteSpace: "pre-wrap" }}>
                  {l.text}
                </span>
              )}
            </div>
          ))}
          <label style={{ display: "flex", gap: 0, alignItems: "center" }}>
            <span style={{ color: "#6F9BFF", whiteSpace: "pre" }}>
              {PROMPT}
            </span>
            <input
              ref={field}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  run(e.currentTarget.value);
                }
              }}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal"
              placeholder="skriv help"
              className="term-input"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

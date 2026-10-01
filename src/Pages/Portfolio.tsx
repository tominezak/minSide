import { useEffect, useState, type ReactNode } from "react";
import Portrett from "../images/Portrett.jpeg";
import Terminal from "../components/Terminal";
import SkillSphere from "../components/SkillSphere";

const ROLES = [
  "Utvikler i Politiets IT-enhet",
  "Dataingeniør",
  "Sykepleier",
  "Problemløser",
  "Lagspiller",
];

const BAND1 = [
  "Dataingeniør",
  "Sykepleier",
  "React",
  "TypeScript",
  "Java",
  "Python",
  "Spring Boot",
  "Lagspiller",
];
const BAND2 = [
  "Git",
  "Docker",
  "Linux",
  "SQL",
  "C#",
  "Tailwind",
  "IntelliJ",
  "Wireshark",
];

const ABOUT: ReactNode[] = [
  "Jeg er en 26 år gammel jente som har fullført bachelor i dataingeniør på OsloMet, og jobber nå som utvikler hos Politiets IT-enhet. Gjennom ingeniørstudiet opparbeidet jeg meg et grunnlag innen programmering og teknologi.",
  "Jeg har en genuin interesse for fagområdet data og programmering, og jeg er veldig motivert til å lære mer. I løpet av dataingeniør bacheloren jobbet jeg med flere spennende prosjekter, og arbeidet med ulike programmeringsspråk. Jeg har også erfaring med å jobbe i team, og trives godt med dette. Disse erfaringene har bidratt til at jeg har utviklet gode samarbeidsevner.",
  "Fra min tidligere fullførte bachelor i sykepleie tar jeg med meg kunnskap og ferdigheter innenfor problemløsning, kommunikasjon, arbeid med mennesker og samarbeid. Dette tar jeg med meg i hverdagen som utvikler. Arbeidserfaring fra butikk har gitt meg erfaringer rundt service, salg, samarbeid, kommunikasjon med kunder og forstå deres behov.",
  <>
    Jeg er svært motivert til å videreutvikle mine ferdigheter og tilegne nye
    kunnskaper. Vil du ta en prat, ta gjerne{" "}
    <a
      href="mailto:tominezak@gmail.com"
      data-cursor="Send"
      style={{ color: "var(--acc)", borderBottom: "1px solid var(--acc)" }}
    >
      kontakt
    </a>
    .
  </>,
];

const JOURNEY = [
  {
    title: "Bachelor i sykepleie",
    text: "Problemløsning, kommunikasjon, arbeid med mennesker og samarbeid – under press og med mennesket i sentrum.",
    tag: "Fullført",
  },
  {
    title: "Butikk",
    text: "Service, salg, samarbeid og kommunikasjon med kunder – og å forstå hva de faktisk trenger.",
    tag: "Arbeidserfaring",
  },
  {
    title: "Dataingeniør, OsloMet",
    text: "Et solid grunnlag i programmering og teknologi, spennende prosjekter og mange programmeringsspråk.",
    tag: "Fullført",
  },
  {
    title: "Utvikler, Politiets IT-enhet",
    text: "Jobber som utvikler og lager løsninger som brukes i politiet – og fortsetter å lære noe nytt hver dag.",
    tag: "Nå",
    now: true,
  },
];

const SKILLS = [
  {
    title: "Programmeringsspråk",
    items: ["JavaScript/TypeScript", "Python", "Java", "C#", "SQL", "HTML/CSS"],
  },
  {
    title: "Rammeverk/bibliotek",
    items: ["Spring Boot", "jQuery", "Bootstrap", "React", "Tailwind CSS"],
  },
  { title: "Versjonskontroll", items: ["Git", "GitHub"] },
  {
    title: "Utviklingsverktøy",
    items: [
      "IntelliJ",
      "Visual Studio Code",
      "Linux (Bash-scripting)",
      "Docker",
      "Wireshark",
    ],
  },
];

const PROJECTS = [
  {
    title: "Handleliste",
    host: "handleliste.tzak.no",
    description:
      "En handleliste-app der brukere kan legge til, redigere og slette varer. Bygget med Java, JavaScript, HTML og CSS.",
    tags: [
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Spring Boot",
      "SQL",
    ],
    link: "https://handleliste.tzak.no",
    image:
      "https://images.unsplash.com/photo-1515706886582-54c73c5eaf41?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Kino-booking",
    host: "github.com/tominezak",
    description:
      "Applikasjon utviklet gjennom en obligatorisk oppgave på studie som lar brukere velge en film, angi billetter og registrere informasjon for kjøp. Bygget med HTML, JavaScript og utvidet med Spring Boot og Java for serverlagring, med Bootstrap for styling.",
    tags: ["Java", "JavaScript", "HTML", "Bootstrap", "Spring Boot", "SQL"],
    link: "https://github.com/tominezak/Oblig-repo",
    image:
      "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Weather API App",
    host: "github.com/tominezak",
    description:
      "En vær-app som henter data fra OpenWeatherMap API for å vise nåværende vær. Bygget i Python.",
    tags: ["Python", "API"],
    link: "https://github.com/tominezak/WheaterAPI-app",
    image:
      "https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1600&auto=format&fit=crop",
  },
];

const PAD = "clamp(20px,4vw,56px)";
const SECTION_PAD = "clamp(100px,12vw,160px)";
const MONO = "'JetBrains Mono',monospace";

function useRole() {
  const [role, setRole] = useState("");
  useEffect(() => {
    let ri = 0;
    let ci = 0;
    let del = false;
    let t: ReturnType<typeof setTimeout>;
    const type = () => {
      const word = ROLES[ri];
      ci += del ? -1 : 1;
      setRole(word.slice(0, ci));
      let wait = del ? 35 : 70;
      if (!del && ci === word.length) {
        del = true;
        wait = 1700;
      } else if (del && ci === 0) {
        del = false;
        ri = (ri + 1) % ROLES.length;
        wait = 300;
      }
      t = setTimeout(type, wait);
    };
    type();
    return () => clearTimeout(t);
  }, []);
  return role;
}

function useOsloTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("nb-NO", {
      timeZone: "Europe/Oslo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/** Elementer med `data-reveal` som ligger under skjermen glir inn når de blir synlige. */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition =
        "opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Band({ items, dark }: { items: string[]; dark?: boolean }) {
  const all = [...items, ...items, ...items, ...items];
  return dark ? (
    <div
      style={{
        background: "var(--ink)",
        color: "var(--bg)",
        overflow: "hidden",
        padding: "18px 0",
        borderBlock: "1px solid var(--ink)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marq 38s linear infinite",
          font: "400 clamp(26px,3.4vw,44px)/1 'Instrument Serif',serif",
          whiteSpace: "nowrap",
        }}
      >
        {all.map((b, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ padding: "0 28px" }}>{b}</span>
            <span style={{ color: "var(--acc)", fontSize: ".6em" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  ) : (
    <div
      style={{
        overflow: "hidden",
        padding: "22px 0",
        borderBlock: "1px solid var(--line)",
        transform: "rotate(-1.2deg)",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marq 46s linear infinite reverse",
          font: `500 clamp(18px,2vw,26px)/1 ${MONO}`,
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          letterSpacing: ".04em",
        }}
      >
        {all.map((b, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ padding: "0 26px" }}>{b}</span>
            <span style={{ color: "var(--acc)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const role = useRole();
  const time = useOsloTime();
  return (
    <section
      id="hjem"
      style={{
        position: "relative",
        minHeight: "100svh",
        boxSizing: "border-box",
        padding: `120px ${PAD} 96px`,
        display: "flex",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        backgroundPosition: "-1px -1px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1320,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,480px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
      >
        <div
          data-cursor="Hei!"
          style={{ display: "flex", flexDirection: "column", gap: 28 }}
        >
          <div
            style={{
              font: `500 12px/1 ${MONO}`,
              color: "var(--mute)",
              letterSpacing: ".06em",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--acc)",
                animation: "pulse 2s infinite",
              }}
            />
            ~/portefølje
          </div>
          <h1
            style={{
              margin: 0,
              font: "400 clamp(60px,9.5vw,148px)/.88 'Instrument Serif',serif",
              letterSpacing: "-.025em",
              textWrap: "balance",
            }}
          >
            Tomine Garborg <em>Zakariassen</em>
          </h1>
          <div
            style={{
              font: `400 clamp(16px,1.6vw,20px)/1.3 ${MONO}`,
              minHeight: "1.3em",
            }}
          >
            <span style={{ color: "var(--acc)" }}>&gt; </span>
            {role}
            <span
              style={{
                display: "inline-block",
                width: ".55em",
                height: "1.05em",
                verticalAlign: "-.15em",
                background: "var(--ink)",
                marginLeft: 2,
                animation: "blink 1s steps(1) infinite",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              font: `400 12px/1 ${MONO}`,
            }}
          >
            <span className="chip">React</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Node.js</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#om" data-cursor="Se" className="btn">
              Les mer om meg <span>↓</span>
            </a>
            <a href="#prosjekter" data-cursor="Se" className="btn-ghost">
              Prosjekter
            </a>
          </div>
        </div>
        <Terminal />
      </div>
      <div
        style={{
          position: "absolute",
          left: PAD,
          right: PAD,
          bottom: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          font: `400 12px/1 ${MONO}`,
          color: "var(--mute)",
        }}
      >
        <span>Portefølje © {new Date().getFullYear()}</span>
        <a
          href="#om"
          data-cursor="Scroll"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            color: "var(--mute)",
          }}
        >
          Scroll
          <span
            style={{
              width: 1,
              height: 36,
              background: "var(--ink)",
              animation: "drop 2s ease-in-out infinite",
            }}
          />
        </a>
        <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--acc)",
            }}
          />
          Oslo, Norge · {time}
        </span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="om"
      style={{ scrollMarginTop: 60, padding: `${SECTION_PAD} ${PAD}` }}
    >
      <div className="wrap">
        <div
          data-reveal
          className="sec-head"
          style={{ marginBottom: "clamp(48px,6vw,80px)" }}
        >
          <span className="eyebrow">// Om meg</span>
          <h2 className="h2">
            Fra sykepleie <em>til kode.</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
            gap: "clamp(40px,6vw,96px)",
            alignItems: "start",
          }}
        >
          <div
            data-reveal
            style={{ position: "sticky", top: 96, maxWidth: 440 }}
          >
            <div className="polaroid">
              <div
                style={{
                  aspectRatio: "4/5",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <img
                  src={Portrett}
                  alt="Portrett av Tomine"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 12,
                  padding: "16px 6px 0",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <strong style={{ fontWeight: 600, fontSize: 16 }}>
                    Tomine G. Zakariassen
                  </strong>
                  <span
                    style={{
                      font: `400 12px/1.3 ${MONO}`,
                      color: "var(--mute)",
                    }}
                  >
                    Utvikler • Politiets IT-enhet
                  </span>
                </div>
                <span
                  style={{
                    font: "400 italic 30px/1 'Instrument Serif',serif",
                    color: "var(--acc)",
                  }}
                >
                  tz
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {ABOUT.map((text, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 16,
                  padding: "28px 0",
                  borderBottom:
                    i < ABOUT.length - 1 ? "1px solid var(--line)" : undefined,
                }}
              >
                <span
                  style={{ font: `500 13px/1.7 ${MONO}`, color: "var(--acc)" }}
                >
                  0{i + 1}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(17px,1.5vw,20px)",
                    lineHeight: 1.6,
                    textWrap: "pretty",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section
      id="reise"
      style={{ scrollMarginTop: 60, padding: `0 ${PAD} ${SECTION_PAD}` }}
    >
      <div className="wrap">
        <div
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            borderTop: "1px solid var(--ink)",
            paddingTop: 20,
            marginBottom: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span className="eyebrow">Min reise</span>
            <h2 className="h2">
              Kapittel for <em>kapittel</em>
            </h2>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {JOURNEY.map((j, i) => (
            <div
              key={j.title}
              data-reveal
              className="row"
              style={j.now ? { borderBottomColor: "var(--ink)" } : undefined}
            >
              <span
                style={{
                  font: "400 clamp(28px,3vw,40px)/1 'Instrument Serif',serif",
                  color: j.now ? "var(--acc)" : "var(--mute)",
                }}
              >
                0{i + 1}
              </span>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <h3>{j.title}</h3>
                <p>{j.text}</p>
              </div>
              {j.now ? (
                <span
                  style={{
                    font: `500 12px/1 ${MONO}`,
                    background: "var(--acc)",
                    color: "var(--onacc)",
                    padding: "7px 10px",
                    borderRadius: 999,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--onacc)",
                      animation: "blink 1.4s steps(1) infinite",
                    }}
                  />
                  {j.tag}
                </span>
              ) : (
                <span className="pill">{j.tag}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="ferdigheter"
      style={{ scrollMarginTop: 60, padding: `${SECTION_PAD} ${PAD}` }}
    >
      <div className="wrap">
        <div data-reveal className="sec-head" style={{ marginBottom: 56 }}>
          <span className="eyebrow">Verktøykassa</span>
          <h2 className="h2">
            Mine tekniske <em>ferdigheter</em>
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
          }}
        >
          <div
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 1,
              background: "var(--line)",
              border: "1px solid var(--line)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {SKILLS.map((g, i) => (
              <div
                key={g.title}
                style={{
                  background: "var(--bg)",
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <span
                  style={{ font: `500 12px/1 ${MONO}`, color: "var(--mute)" }}
                >
                  [0{i + 1}] {g.title}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    fontSize: 17,
                  }}
                >
                  {g.items.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ font: `400 12px/1 ${MONO}`, color: "var(--mute)" }}>
              Tips: dra i kula ↓
            </span>
            <SkillSphere />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cube() {
  const faces = [
    { t: "Java", tr: "translateZ(75px)" },
    { t: "Python", tr: "rotateY(90deg) translateZ(75px)" },
    { t: "React", tr: "rotateY(180deg) translateZ(75px)" },
    { t: "SQL", tr: "rotateY(-90deg) translateZ(75px)" },
    { t: "Spring", tr: "rotateX(90deg) translateZ(75px)", acc: true },
    { t: "HTML", tr: "rotateX(-90deg) translateZ(75px)" },
  ];
  return (
    <div
      style={{
        width: 150,
        height: 150,
        perspective: 700,
        marginRight: "clamp(0px,4vw,60px)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 150,
          height: 150,
          transformStyle: "preserve-3d",
          animation: "spin 16s linear infinite",
          font: `500 15px/1 ${MONO}`,
        }}
      >
        {faces.map((f) => (
          <span
            key={f.t}
            className="cube-face"
            style={{
              transform: f.tr,
              ...(f.acc
                ? { background: "var(--acc)", color: "var(--onacc)" }
                : null),
            }}
          >
            {f.t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const total = String(PROJECTS.length + 1).padStart(2, "0");
  return (
    <section
      id="prosjekter"
      style={{
        scrollMarginTop: 40,
        padding: `clamp(80px,10vw,140px) ${PAD} ${SECTION_PAD}`,
        background: "var(--bg2)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
            marginBottom: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 640,
            }}
          >
            <span className="eyebrow">Utvalgt arbeid</span>
            <h2
              style={{
                margin: 0,
                font: "400 clamp(56px,8vw,120px)/.92 'Instrument Serif',serif",
                letterSpacing: "-.02em",
              }}
            >
              Mine <em>Prosjekter</em>
            </h2>
            <p
              style={{
                margin: 0,
                color: "var(--mute)",
                fontSize: 18,
                lineHeight: 1.55,
                textWrap: "pretty",
              }}
            >
              Et utvalg av det jeg har bygget – fra studieoppgaver til egne
              apper. Scroll for å bla gjennom stabelen.
            </p>
          </div>
          <Cube />
        </div>

        <div className="stack">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="card"
              style={{ top: 88 + i * 18 }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    font: `500 12px/1 ${MONO}`,
                    color: "var(--mute)",
                  }}
                >
                  <span>
                    0{i + 1} / {total}
                  </span>
                  <span>{p.host}</span>
                </div>
                <h3>{p.title}</h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "var(--mute)",
                    maxWidth: "52ch",
                  }}
                >
                  {p.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    font: `400 12px/1 ${MONO}`,
                  }}
                >
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  data-cursor="Åpne"
                  className="card-link"
                >
                  Se prosjekt <span>↗</span>
                </a>
              </div>
              <div
                style={{
                  minHeight: 280,
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                }}
              >
                <img
                  src={p.image}
                  alt={`Illustrasjon: ${p.title}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </article>
          ))}
          <article
            style={{
              top: 88 + PROJECTS.length * 18,
              background: "var(--ink)",
              color: "var(--bg)",
              borderRadius: 20,
              padding: "clamp(20px,3vw,36px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 32,
              minHeight: 440,
              boxSizing: "border-box",
              boxShadow: "0 -20px 50px -30px rgba(0,0,0,.25)",
              backgroundImage:
                "repeating-linear-gradient(-45deg,transparent 0 22px,rgba(128,128,128,.12) 22px 23px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                font: `500 12px/1 ${MONO}`,
                opacity: 0.7,
              }}
            >
              <span>
                {total} / {total}
              </span>
              <span>under arbeid</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                maxWidth: 720,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  font: "400 clamp(44px,6vw,88px)/.95 'Instrument Serif',serif",
                  letterSpacing: "-.02em",
                }}
              >
                Flere prosjekter kommer <em>snart!</em>
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  opacity: 0.75,
                }}
              >
                Jeg jobber kontinuerlig med nye prosjekter og vil oppdatere
                siden min fortløpende.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText("tominezak@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <section
      id="kontakt"
      style={{
        padding: `clamp(120px,16vw,220px) ${PAD}`,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 36,
      }}
    >
      <span
        data-reveal
        style={{ font: `500 13px/1 ${MONO}`, color: "var(--mute)" }}
      >
        Har du en idé eller et spørsmål?
      </span>
      <h2
        data-reveal
        style={{
          margin: 0,
          font: "400 clamp(72px,14vw,240px)/.85 'Instrument Serif',serif",
          letterSpacing: "-.035em",
        }}
      >
        La oss <em>snakke</em>
      </h2>
      <div
        data-reveal
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <a
          href="mailto:tominezak@gmail.com"
          data-cursor="Send"
          className="mail-btn"
        >
          tominezak@gmail.com <span>→</span>
        </a>
        <button onClick={copy} data-cursor="Kopier" className="copy">
          {copied ? "Kopiert ✓" : "Kopier"}
        </button>
      </div>
    </section>
  );
}

export default function Portfolio() {
  useReveal();
  return (
    <>
      <Hero />
      <Band items={BAND1} dark />
      <About />
      <Journey />
      <Band items={BAND2} />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

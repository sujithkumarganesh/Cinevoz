import { Fraunces, Space_Grotesk } from "next/font/google";

/*
 * Fonts are loaded here via next/font/google so the component is fully
 * self-contained. If your root layout already loads Fraunces + Space Grotesk
 * with the same configuration, these imports are safe to keep — next/font
 * deduplicates identical font instances at build time, so they will NOT be
 * downloaded twice.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/*
 * Each entry is keyed by the aspect ratio / format ACTUALLY used for that
 * kind of shoot instead of a generic 01/02/03 index. This is a deliberate
 * design decision — the list is meant to read like a real production
 * document (a director's shot list), not a numbered decoration.
 */
const SHOT_LIST = [
  {
    format: "1:1 · STUDIO STILL",
    name: "Product Shoots",
    description:
      "One product, one concept — studio frames lit to sell it without a word.",
  },
  {
    format: "3:2 · LOCATION FILM",
    name: "Pre-Wedding Shoots",
    description:
      "Location films that let a couple's real chemistry lead the frame.",
  },
  {
    format: "2.39:1 · CINEMATIC",
    name: "Wedding Shoots",
    description:
      "The full day shot live, then cut into a story worth keeping for years.",
  },
  {
    format: "16:9 · EVENT COVERAGE",
    name: "Sangeet",
    description:
      "Candid, high-energy coverage that catches every reaction the music earns.",
  },
  {
    format: "4:5 · VERTICAL / REEL",
    name: "Haldi",
    description:
      "Sun-drenched closeups in bold color, framed and cut for the vertical feed.",
  },
  {
    format: "— · POST-PRODUCTION",
    name: "All Types of Edit",
    description:
      "Every format above, cut to each platform's rhythm — sound and subtitles dialed in.",
  },
];

/**
 * The Shot List — a work-profile section listing shoot categories as entries
 * in a director's shot list. Self-contained, default export, no props.
 *
 * Hover/focus effects are pure CSS (:hover, :focus-visible) scoped per row,
 * so there is no React state and no re-render of the list on hover.
 */
export default function WorkProfileSection() {
  return (
    <section
      aria-labelledby="shot-list-title"
      className={`tsl-section ${spaceGrotesk.className}`}
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-20 md:py-32">
        <header>
          {/* Small mono-style eyebrow, split left/right, hairline underneath */}
          <div className="tsl-eyebrow flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <span>Production — Sujith Suriya</span>
            <span className="md:text-right">Department — Camera + Edit</span>
          </div>

          <h2
            id="shot-list-title"
            className={`tsl-title ${fraunces.className}`}
          >
            The Shot List
          </h2>

          <p className="tsl-subhead">
            Six formats, one crew — the exact way we shoot and cut every job
            that comes through.
          </p>
        </header>

        <ul className="tsl-list" role="list">
          {SHOT_LIST.map((row) => (
            <li key={row.name} className="tsl-row">
              {/* The format code + tag replace a generic index (see SHOT_LIST note) */}
              <span className="tsl-format">{row.format}</span>
              <h3 className={`tsl-name ${fraunces.className}`}>{row.name}</h3>
              <p className="tsl-desc">{row.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/*
       * Custom hex colors live in this scoped <style> block instead of
       * Tailwind arbitrary-value classes (which may not be configured).
       * Hover states, media queries and prefers-reduced-motion can only be
       * expressed in CSS, so a single style block keeps one source of truth.
       */}
      <style>{`
        .tsl-section{
          --tsl-black: #0B0B0B;
          --tsl-white: #F7F7F5;
          --tsl-graphite: #1E1E1E;
          --tsl-silver: #9A9A9A;
          --tsl-hairline: rgba(255,255,255,0.10);
          background: var(--tsl-black);
          color: var(--tsl-white);
        }

        /* Eyebrow row */
        .tsl-eyebrow{
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tsl-silver);
          padding-bottom: 16px;
          border-bottom: 1px solid var(--tsl-hairline);
        }

        /* Heading + subhead */
        .tsl-title{
          font-size: clamp(2.75rem, 7vw, 4.75rem);
          font-weight: 400;
          letter-spacing: -0.015em;
          line-height: 1.02;
          margin: 40px 0 0;
        }
        .tsl-subhead{
          color: var(--tsl-silver);
          font-size: 15px;
          line-height: 1.7;
          max-width: 36rem;
          margin: 20px 0 0;
        }

        /* List */
        .tsl-list{
          margin: 64px 0 0;
          padding: 0;
          list-style: none;
        }
        .tsl-row{
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
          padding: 22px 0;
          border-top: 1px solid var(--tsl-hairline);
        }

        /* Row cells */
        .tsl-format{
          color: var(--tsl-silver);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: color 280ms ease;
        }
        .tsl-name{
          font-size: clamp(1.75rem, 4.5vw, 2.5rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0;
          transition: transform 280ms ease;
        }
        .tsl-desc{
          color: var(--tsl-silver);
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
          max-width: 44ch;
          transition: color 280ms ease;
        }

        /* Desktop: format / name / description side by side */
        @media (min-width: 768px){
          .tsl-row{
            grid-template-columns: 220px minmax(0, 1fr) minmax(0, 1.05fr);
            align-items: baseline;
            gap: 32px;
            padding: 34px 0;
          }
          .tsl-format{ font-size: 12.5px; }
          .tsl-desc{ font-size: 15px; max-width: 38ch; }
        }

        /*
         * Hover effects are gated to devices that actually have a hover
         * pointer, so touch/mobile never shows a stuck transform — no
         * window.innerWidth needed in JS.
         */
        @media (hover: hover) and (pointer: fine){
          .tsl-row:hover .tsl-format,
          .tsl-row:hover .tsl-desc{ color: var(--tsl-white); }
          .tsl-row:hover .tsl-name{ transform: translateX(14px); }
        }

        /*
         * Keyboard/focus equivalent for the hover state. Rows are not
         * interactive today, but if any row is later wrapped in a link or
         * given tabindex, the focus styles are already in place.
         */
        .tsl-row:focus-visible .tsl-format,
        .tsl-row:focus-visible .tsl-desc,
        .tsl-row:focus-within .tsl-format,
        .tsl-row:focus-within .tsl-desc{ color: var(--tsl-white); }
        .tsl-row:focus-visible .tsl-name,
        .tsl-row:focus-within .tsl-name{ transform: translateX(14px); }

        @media (prefers-reduced-motion: reduce){
          .tsl-row *,
          .tsl-row *::before,
          .tsl-row *::after{ transition-duration: 0.01ms !important; }
          .tsl-row:hover .tsl-name,
          .tsl-row:focus-visible .tsl-name,
          .tsl-row:focus-within .tsl-name{ transform: none; }
        }
      `}</style>
    </section>
  );
}

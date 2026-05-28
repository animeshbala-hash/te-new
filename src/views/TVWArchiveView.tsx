import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroImg from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { getLiveEdition, getArchiveEditions, type TVWEdition } from "@/data/tvwEditionsData";
import { B_BLUE, B_YELLOW, ACCENT_NAVY, P_INDIGO } from "@/data/homeSharedData";

// ── Design tokens ─────────────────────────────────────────────────────────────
const FONT  = "'DM Sans', ui-sans-serif, system-ui, sans-serif";

// Accent colour wheel — approved palette (no yellow except CTAs)
const ACCENT_WHEEL = [
  "#135EA9", // B_BLUE
  "#803998", // purple
  "#00A896", // teal
  "#307FE2", // light blue
  "#F4838A", // pink
  "#333399", // B_INDIGO
  "#D84926", // red/orange
  "#13BBB4", // cyan-teal
];

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px", pointerEvents: "none",
};

const SECTIONS = [
  { id: "archive-hero",    label: "Overview" },
  { id: "archive-live",    label: "Live Now" },
  { id: "archive-history", label: "History"  },
];

// ── Season pip ────────────────────────────────────────────────────────────────
function SeasonPip({ season, accent }: { season: "Mar" | "Sep"; accent: string }) {
  return (
    <span style={{
      fontFamily: FONT, fontSize: 9, fontWeight: 800, letterSpacing: "1px",
      textTransform: "uppercase",
      background: `${accent}18`, color: accent,
      borderRadius: 4, padding: "3px 7px",
    }}>
      {season === "Mar" ? "Mar" : "Sep"}
    </span>
  );
}

// ── Archive tile ──────────────────────────────────────────────────────────────
function EditionTile({ edition, accent, onClick }: { edition: TVWEdition; accent: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: "pointer", borderRadius: 14, overflow: "hidden",
        border: `1px solid ${accent}20`,
        background: "#fff",
        boxShadow: hov ? `0 8px 28px ${accent}22` : "0 2px 8px rgba(13,27,62,0.05)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.18s, box-shadow 0.18s",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", width: "100%", paddingTop: "56%", overflow: "hidden", background: `${accent}12` }}>
        {edition.bannerUrl ? (
          <img src={edition.bannerUrl} alt={edition.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
              transform: hov ? "scale(1.04)" : "scale(1)", transition: "transform 0.4s ease" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* TVW diamond GeoIcon per §15 */}
            <svg width="64" height="64" viewBox="0 0 100 100">
              <polygon points="50,4 96,50 50,96 4,50" fill={`${accent}18`} stroke={`${accent}44`} strokeWidth="1.5" />
              <text x="50" y="58" textAnchor="middle" fontFamily={FONT} fontSize="22" fontWeight="900" fill={`${accent}66`}>{edition.id}</text>
            </svg>
          </div>
        )}
        {/* Edition badge */}
        <div style={{ position: "absolute", top: 10, left: 10, background: ACCENT_NAVY, color: "#fff", borderRadius: 5, padding: "3px 9px", fontFamily: FONT, fontSize: 9, fontWeight: 800, letterSpacing: "0.6px" }}>
          TVW {edition.id}
        </div>
        {/* Accent stripe on hover */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: accent, opacity: hov ? 1 : 0, transition: "opacity 0.18s" }} />
      </div>

      {/* Card body */}
      <div style={{ padding: "14px 16px 18px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <SeasonPip season={edition.season} accent={accent} />
          <span style={{ fontFamily: FONT, fontSize: 10, color: "#94A3B8", fontWeight: 500 }}>{edition.year}</span>
        </div>
        <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 800, color: ACCENT_NAVY, lineHeight: 1.3, marginBottom: 4 }}>
          {edition.title}
        </div>
        {edition.theme && (
          <div style={{ fontFamily: FONT, fontSize: 11, color: "#64748B", lineHeight: 1.5, fontStyle: "italic", marginBottom: 6 }}>
            "{edition.theme}"
          </div>
        )}
        <div style={{ fontFamily: FONT, fontSize: 10, color: "#94A3B8", marginBottom: 10 }}>{edition.dateRange}</div>
        <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, color: accent }}>
          Read about this edition →
        </div>
      </div>
    </div>
  );
}

// ── Live edition hero card ────────────────────────────────────────────────────
function LiveEditionCard({ edition, onView }: { edition: TVWEdition; onView: () => void }) {
  return (
    <div style={{
      borderRadius: 18, overflow: "hidden",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      border: `1px solid ${B_BLUE}22`,
      boxShadow: "0 4px 32px rgba(13,27,62,0.08)",
    }}>
      <div style={{ position: "relative", minHeight: 340, background: P_INDIGO }}>
        <img src={edition.bannerUrl || tvwHeroImg} alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 55%, rgba(255,255,255,0.02))" }} />
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", alignItems: "center", gap: 7, background: "rgba(13,27,62,0.72)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "5px 12px" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", animation: "te-pulse 1.6s ease-in-out infinite", display: "inline-block" }} />
          <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "1.2px", textTransform: "uppercase" }}>Live Now</span>
        </div>
      </div>
      <div style={{ padding: "44px 40px", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p style={{ fontFamily: FONT, fontSize: 10, fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: B_BLUE, marginBottom: 12 }}>
          Edition {edition.id} · Currently Active
        </p>
        <h2 style={{ fontFamily: FONT, fontSize: 28, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", margin: "0 0 8px" }}>
          {edition.title}
        </h2>
        <div style={{ width: 48, height: 3, borderRadius: 2, background: B_BLUE, marginTop: 10, marginBottom: 16 }} />
        {edition.theme && (
          <p style={{ fontFamily: FONT, fontSize: 14, fontStyle: "italic", color: "#475569", marginBottom: 12, lineHeight: 1.5 }}>
            "{edition.theme}"
          </p>
        )}
        <p style={{ fontFamily: FONT, fontSize: 11, color: "#94A3B8", marginBottom: 28 }}>{edition.dateRange}</p>
        <button onClick={onView} style={{
          background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10,
          padding: "13px 24px", fontWeight: 800, fontSize: 14,
          cursor: "pointer", fontFamily: FONT, alignSelf: "flex-start",
        }}>
          View TVW {edition.id} →
        </button>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function TVWArchiveView() {
  const rawNavigate = useNavigate();
  const liveEdition = getLiveEdition();
  const archiveEditions = getArchiveEditions(); // already newest-first

  function go(path: string) { rawNavigate(path); window.scrollTo(0, 0); }

  return (
    <div style={{
      background: "transparent", minHeight: "100vh", position: "relative", fontFamily: FONT,
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* ══ HERO ══ */}
      <div id="archive-hero" style={{ position: "relative", minHeight: "52vh", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={tvwHeroImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,12,22,0.88) 0%, rgba(8,12,22,0.72) 40%, rgba(8,12,22,0.28) 75%, rgba(8,12,22,0.10) 100%)" }} />
        <div style={DIAG} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 48px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 14px" }}>
            Tata Volunteering Week · Since 2014
          </p>
          <div style={{ height: 2, width: 80, borderRadius: 2, background: B_YELLOW, margin: "0 0 22px" }} />
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 16px" }}>
            Scroll Down<br />Memory Lane
          </h1>
          <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 460 }}>
            Twenty-five editions. Over 25,00,000 volunteering hours across the Tata Group since 2014.
          </p>
        </div>
      </div>

      {/* ══ LIVE ══ */}
      {liveEdition && (
        <section id="archive-live" style={{ padding: "72px 48px", background: "transparent" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: `${B_BLUE}b3`, marginBottom: 8 }}>Currently Active</p>
            <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>TVW is Live</h2>
            <div style={{ width: 48, height: 3, borderRadius: 2, background: B_BLUE, marginTop: 10, marginBottom: 32 }} />
            <LiveEditionCard edition={liveEdition} onView={() => go(`/tvw/edition/${liveEdition.slug}`)} />
          </div>
        </section>
      )}

      {/* ══ ARCHIVE — 3-col grid, L→R newest first ══ */}
      <section id="archive-history" style={{ padding: "72px 48px 96px", background: "#F7F9FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: `${B_BLUE}b3`, marginBottom: 8 }}>All Editions</p>
          <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>The Complete History</h2>
          <div style={{ width: 48, height: 3, borderRadius: 2, background: B_BLUE, marginTop: 10, marginBottom: 44 }} />

          {/* 3-column grid — fills L→R so newest editions land in row 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {archiveEditions.map((edition, i) => (
              <EditionTile
                key={edition.id}
                edition={edition}
                accent={ACCENT_WHEEL[i % ACCENT_WHEEL.length]}
                onClick={() => go(`/tvw/edition/${edition.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

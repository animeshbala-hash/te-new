import { useNavigate } from "react-router-dom";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroImg from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { getLiveEdition, getArchiveEditions, type TVWEdition } from "@/data/tvwEditionsData";

const ACCENT_NAVY  = "#0D1B3E";
const B_YELLOW     = "#F79425";
const COLOUR       = "#135EA9";
const COLOUR_LIGHT = "#EEF4FF";
const FONT         = "'DM Sans', 'Noto Sans', ui-sans-serif, system-ui, sans-serif";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const SECTIONS = [
  { id: "archive-hero",    label: "Overview" },
  { id: "archive-live",    label: "Live Now" },
  { id: "archive-history", label: "History"  },
];

// Heights alternate to create an uneven masonry-like feel
const TILE_HEIGHTS = [220, 260, 200, 280, 240, 210, 270, 230, 250, 215, 265, 235];

function SeasonPip({ season }: { season: "Mar" | "Sep" }) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 800, letterSpacing: "0.8px", textTransform: "uppercase",
      background: season === "Mar" ? COLOUR_LIGHT : "#FFF7ED",
      color: season === "Mar" ? COLOUR : "#C2410C",
      borderRadius: 4, padding: "3px 8px", fontFamily: FONT,
    }}>
      {season === "Mar" ? "Mar" : "Sep"}
    </span>
  );
}

function EditionTile({ edition, index, onClick }: { edition: TVWEdition; index: number; onClick: () => void }) {
  const h = TILE_HEIGHTS[index % TILE_HEIGHTS.length];
  const hasBanner = !!edition.bannerUrl;

  return (
    <button
      onClick={onClick}
      style={{
        all: "unset", cursor: "pointer", display: "block",
        borderRadius: 14, overflow: "hidden",
        border: `1px solid rgba(19,94,169,0.10)`,
        background: "#fff",
        boxShadow: "0 2px 10px rgba(13,27,62,0.05)",
        transition: "transform 0.18s, box-shadow 0.18s",
        breakInside: "avoid",
        marginBottom: 16,
        width: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow = "0 8px 28px rgba(13,27,62,0.12)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 10px rgba(13,27,62,0.05)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", width: "100%", height: h, background: COLOUR_LIGHT, overflow: "hidden" }}>
        {hasBanner ? (
          <img src={edition.bannerUrl} alt={edition.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${COLOUR}18, ${COLOUR}30)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: FONT, fontSize: 36, fontWeight: 900, color: `${COLOUR}40` }}>
              {edition.id}
            </span>
          </div>
        )}
        {/* Edition badge */}
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: ACCENT_NAVY, color: "#fff",
          borderRadius: 6, padding: "3px 9px",
          fontSize: 10, fontWeight: 800, letterSpacing: "0.5px", fontFamily: FONT,
        }}>TVW {edition.id}</div>
      </div>

      {/* Text */}
      <div style={{ padding: "14px 16px 18px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <SeasonPip season={edition.season} />
          <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: FONT }}>{edition.year}</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: ACCENT_NAVY, lineHeight: 1.3, fontFamily: FONT, marginBottom: 4 }}>
          {edition.title}
        </div>
        {edition.theme && (
          <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.5, fontStyle: "italic", fontFamily: FONT, marginBottom: 6 }}>
            "{edition.theme}"
          </div>
        )}
        <div style={{ fontSize: 11, color: "#94A3B8", fontFamily: FONT }}>{edition.dateRange}</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: COLOUR, fontFamily: FONT, marginTop: 10 }}>
          Read about this edition →
        </div>
      </div>
    </button>
  );
}

function LiveEditionCard({ edition, onView }: { edition: TVWEdition; onView: () => void }) {
  return (
    <div style={{
      borderRadius: 18, overflow: "hidden",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      border: `1px solid ${B_YELLOW}55`,
      boxShadow: "0 4px 32px rgba(13,27,62,0.10)",
    }}>
      <div style={{ position: "relative", minHeight: 340, background: COLOUR_LIGHT }}>
        {edition.bannerUrl ? (
          <img src={edition.bannerUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        ) : (
          <img src={tvwHeroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 55%, rgba(255,255,255,0.04))" }} />
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", alignItems: "center", gap: 7, background: "rgba(13,27,62,0.72)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "5px 12px" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", animation: "te-pulse 1.6s ease-in-out infinite", display: "inline-block" }} />
          <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", fontFamily: FONT, letterSpacing: "1px", textTransform: "uppercase" }}>Live Now</span>
        </div>
      </div>
      <div style={{ padding: "44px 40px", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "1.8px", textTransform: "uppercase", color: B_YELLOW, fontFamily: FONT, marginBottom: 10 }}>
          Edition {edition.id} · Currently Active
        </div>
        <h2 style={{ fontFamily: FONT, fontSize: 24, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", margin: "0 0 8px" }}>
          {edition.title}
        </h2>
        <div style={{ width: 32, height: 3, background: B_YELLOW, borderRadius: 2, margin: "10px 0 16px" }} />
        {edition.theme && (
          <div style={{ fontSize: 14, fontStyle: "italic", color: "#475569", marginBottom: 14, fontFamily: FONT, lineHeight: 1.5 }}>
            "{edition.theme}"
          </div>
        )}
        <div style={{ fontSize: 12, color: "#94A3B8", fontFamily: FONT, marginBottom: 24 }}>{edition.dateRange}</div>
        <button onClick={onView} style={{
          background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10,
          padding: "13px 24px", fontWeight: 800, fontSize: 14, cursor: "pointer",
          fontFamily: FONT, alignSelf: "flex-start",
        }}>
          View TVW {edition.id} →
        </button>
      </div>
    </div>
  );
}

export default function TVWArchiveView() {
  const rawNavigate = useNavigate();
  const liveEdition = getLiveEdition();
  const archiveEditions = getArchiveEditions();

  function go(path: string) {
    rawNavigate(path);
    window.scrollTo(0, 0);
  }

  return (
    <div style={{
      background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px", fontFamily: FONT,
    }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* Top accent line */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${COLOUR}, ${B_YELLOW})`, zIndex: 100 }} />

      {/* ══════ HERO ══════ */}
      <div id="archive-hero" style={{ position: "relative", minHeight: "52vh", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={tvwHeroImg} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, ${COLOUR}e8 0%, ${COLOUR}cc 40%, ${COLOUR}88 70%, ${COLOUR}44 100%)` }} />
        <div style={DIAG} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", margin: "0 0 12px" }}>
            Tata Volunteering Week · Since 2014
          </p>
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", margin: "0 0 16px" }}>
            Scroll Down<br />Memory Lane
          </h1>
          <div style={{ height: 2, width: 48, borderRadius: 2, background: "rgba(255,255,255,0.45)", margin: "0 0 20px" }} />
          <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.72, color: "rgba(255,255,255,0.65)", maxWidth: 460 }}>
            Twenty-five editions. Over 25,00,000 volunteering hours. The complete history of Tata Volunteering Week.
          </p>
        </div>
      </div>

      {/* ══════ LIVE EDITION ══════ */}
      {liveEdition && (
        <section id="archive-live" style={{ padding: "72px 56px", background: "transparent" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: B_YELLOW, marginBottom: 8 }}>Currently Active</p>
            <h2 style={{ fontFamily: FONT, fontSize: 24, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 28 }}>TVW is Live</h2>
            <LiveEditionCard
              edition={liveEdition}
              onView={() => go(`/tvw/edition/${liveEdition.slug}`)}
            />
          </div>
        </section>
      )}

      {/* ══════ ARCHIVE — continuous masonry scroll ══════ */}
      <section id="archive-history" style={{ padding: "72px 56px 96px", background: "#F0F4FA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 8 }}>All Editions</p>
          <h2 style={{ fontFamily: FONT, fontSize: 24, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 6 }}>The Complete History</h2>
          <div style={{ height: 3, width: 40, background: COLOUR, borderRadius: 2, marginBottom: 44 }} />

          {/* Masonry — 3 columns, continuous, uneven heights */}
          <div style={{
            columnCount: 3,
            columnGap: 18,
          }}>
            {archiveEditions.map((edition, i) => (
              <EditionTile
                key={edition.id}
                edition={edition}
                index={i}
                onClick={() => go(`/tvw/edition/${edition.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

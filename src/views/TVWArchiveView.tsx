import { useAppNavigate } from "@/hooks/useAppNavigate";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroImg from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { TVW_EDITIONS, getLiveEdition, getArchiveEditions, type TVWEdition } from "@/data/tvwEditionsData";

// ── Tokens (match system) ─────────────────────────────────────────────────────
const ACCENT_NAVY  = "#0D1B3E";
const B_YELLOW     = "#F79425";
const COLOUR       = "#135EA9";
const COLOUR_LIGHT = "#EEF4FF";
const FONT         = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const SECTIONS = [
  { id: "tvw-archive-hero",    label: "Overview"  },
  { id: "tvw-archive-live",    label: "Live Now"  },
  { id: "tvw-archive-history", label: "History"   },
];

// ── Pill badge ────────────────────────────────────────────────────────────────
function SeasonBadge({ season }: { season: "Mar" | "Sep" }) {
  const isMar = season === "Mar";
  return (
    <span style={{
      display: "inline-block",
      fontSize: 10, fontWeight: 700, letterSpacing: "0.8px",
      textTransform: "uppercase",
      background: isMar ? "#EEF4FF" : "#FFF7ED",
      color: isMar ? COLOUR : "#C2410C",
      borderRadius: 100, padding: "3px 9px",
    }}>
      {isMar ? "Mar Edition" : "Sep Edition"}
    </span>
  );
}

// ── Archive tile ──────────────────────────────────────────────────────────────
function EditionTile({ edition, onClick }: { edition: TVWEdition; onClick: () => void }) {
  const hasBanner = !!edition.bannerUrl;

  return (
    <button
      onClick={onClick}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid rgba(19,94,169,0.12)`,
        background: "#fff",
        boxShadow: "0 2px 12px rgba(13,27,62,0.06)",
        transition: "transform 0.18s, box-shadow 0.18s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(13,27,62,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(13,27,62,0.06)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: COLOUR_LIGHT, overflow: "hidden" }}>
        {hasBanner ? (
          <img
            src={edition.bannerUrl}
            alt={edition.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          /* Placeholder when no banner */
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${COLOUR}22, ${COLOUR}44)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: FONT, fontSize: 40, fontWeight: 900, color: `${COLOUR}55` }}>
              TVW{edition.id}
            </span>
          </div>
        )}
        {/* Edition number badge */}
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: ACCENT_NAVY, color: "#fff",
          borderRadius: 8, padding: "4px 10px",
          fontSize: 11, fontWeight: 800, letterSpacing: "0.5px",
          fontFamily: FONT,
        }}>
          Edition {edition.id}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <SeasonBadge season={edition.season} />
          <span style={{ fontSize: 11, color: "#94A3B8", fontFamily: FONT }}>{edition.year}</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 800, color: ACCENT_NAVY, lineHeight: 1.3, fontFamily: FONT, marginTop: 2 }}>
          {edition.title}
        </div>
        {edition.theme && (
          <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5, fontStyle: "italic", fontFamily: FONT }}>
            "{edition.theme}"
          </div>
        )}
        <div style={{ fontSize: 11, color: "#94A3B8", fontFamily: FONT, marginTop: 4 }}>{edition.dateRange}</div>
        <div style={{
          marginTop: 10, fontSize: 12, fontWeight: 700, color: COLOUR, fontFamily: FONT,
          display: "flex", alignItems: "center", gap: 4,
        }}>
          Read about this edition →
        </div>
      </div>
    </button>
  );
}

// ── Live Edition card ─────────────────────────────────────────────────────────
function LiveEditionCard({ edition, onView }: { edition: TVWEdition; onView: () => void }) {
  return (
    <div style={{
      borderRadius: 20, overflow: "hidden",
      boxShadow: "0 4px 32px rgba(13,27,62,0.12)",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      border: `1px solid ${B_YELLOW}44`,
    }}>
      {/* Image side */}
      <div style={{ position: "relative", minHeight: 360, background: COLOUR_LIGHT }}>
        {edition.bannerUrl ? (
          <img src={edition.bannerUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${COLOUR}, ${ACCENT_NAVY})`, position: "absolute", inset: 0 }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 50%, rgba(255,255,255,0.05))" }} />
        {/* Live pulse */}
        <div style={{ position: "absolute", top: 16, left: 16, display: "flex", alignItems: "center", gap: 8, background: "rgba(13,27,62,0.7)", backdropFilter: "blur(6px)", borderRadius: 100, padding: "6px 14px" }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%", background: "#22C55E",
            animation: "te-pulse 1.6s ease-in-out infinite",
            display: "inline-block",
          }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: FONT, letterSpacing: "0.5px" }}>LIVE NOW</span>
        </div>
      </div>

      {/* Text side */}
      <div style={{ padding: "44px 40px", background: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: B_YELLOW, fontFamily: FONT, marginBottom: 10 }}>
          Edition {edition.id} · Currently Active
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", margin: "0 0 6px", fontFamily: FONT }}>
          {edition.title}
        </h2>
        <div style={{ width: 36, height: 3, background: B_YELLOW, borderRadius: 2, margin: "10px 0 18px" }} />
        {edition.theme && (
          <div style={{ fontSize: 15, fontStyle: "italic", color: "#475569", marginBottom: 18, fontFamily: FONT, lineHeight: 1.5 }}>
            "{edition.theme}"
          </div>
        )}
        <div style={{ fontSize: 13, color: "#64748B", fontFamily: FONT, marginBottom: 28, lineHeight: 1.7 }}>
          {edition.dateRange}
          {edition.description && <><br /><br />{edition.description.slice(0, 120)}…</>}
        </div>
        <button
          onClick={onView}
          style={{
            background: B_YELLOW, color: ACCENT_NAVY,
            border: "none", borderRadius: 10,
            padding: "13px 24px", fontWeight: 800,
            fontSize: 14, cursor: "pointer", fontFamily: FONT,
            alignSelf: "flex-start",
          }}
        >
          View TVW {edition.id} →
        </button>
      </div>
    </div>
  );
}

// ── Main View ─────────────────────────────────────────────────────────────────
export default function TVWArchiveView() {
  const navigate = useAppNavigate();
  const liveEdition = getLiveEdition();
  const archiveEditions = getArchiveEditions();

  // Group archive by year for display
  const byYear: Record<number, TVWEdition[]> = {};
  archiveEditions.forEach((e) => {
    if (!byYear[e.year]) byYear[e.year] = [];
    byYear[e.year].push(e);
  });
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div style={{
      background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* ══════ HERO ══════ */}
      <div id="tvw-archive-hero" style={{ position: "relative", minHeight: "52vh", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={tvwHeroImg} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, ${COLOUR}e8 0%, ${COLOUR}cc 40%, ${COLOUR}99 65%, ${COLOUR}55 100%)` }} />
        <div style={DIAG} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", margin: "0 0 10px" }}>
            Tata Volunteering Week · Since 2014
          </p>
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 16px" }}>
            Scroll Down<br />Memory Lane
          </h1>
          <div style={{ height: 2, width: 48, borderRadius: 2, background: "rgba(255,255,255,0.5)", margin: "0 0 22px" }} />
          <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.72, color: "rgba(255,255,255,0.7)", maxWidth: 480 }}>
            Twenty-five editions of Tata Volunteering Week. The group has collectively clocked over 25,00,000 volunteering hours through TVW since inception.
          </p>
        </div>
      </div>

      {/* ══════ LIVE EDITION ══════ */}
      {liveEdition && (
        <section id="tvw-archive-live" style={{ padding: "72px 56px", background: "transparent" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: B_YELLOW, marginBottom: 8 }}>
              Currently Active
            </p>
            <h2 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 32 }}>
              TVW is Live
            </h2>
            <LiveEditionCard
              edition={liveEdition}
              onView={() => navigate(`tvw/edition/${liveEdition.slug}`)}
            />
          </div>
        </section>
      )}

      {/* ══════ ARCHIVE GRID ══════ */}
      <section id="tvw-archive-history" style={{ padding: "72px 56px 96px", background: "#F0F4FA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 8 }}>
            All Editions
          </p>
          <h2 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 6 }}>
            The Complete History
          </h2>
          <div style={{ height: 3, width: 40, background: COLOUR, borderRadius: 2, marginBottom: 48 }} />

          {/* Year groups */}
          {years.map((year) => (
            <div key={year} style={{ marginBottom: 56 }}>
              {/* Year label */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 900, color: ACCENT_NAVY }}>{year}</span>
                <div style={{ flex: 1, height: 1, background: `${COLOUR}22` }} />
              </div>

              {/* Tiles */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 20,
              }}>
                {byYear[year].map((edition) => (
                  <EditionTile
                    key={edition.id}
                    edition={edition}
                    onClick={() => navigate(`tvw/edition/${edition.slug}`)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

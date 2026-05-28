import { useParams } from "react-router-dom";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroImg from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { getEditionBySlug } from "@/data/tvwEditionsData";

// ── Tokens ────────────────────────────────────────────────────────────────────
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
  { id: "edition-hero",    label: "Overview"    },
  { id: "edition-content", label: "About"       },
  { id: "edition-vibe",    label: "Daily Vibe"  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function TVWEditionView() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useAppNavigate();
  const { isLoggedIn } = useAuth();

  const edition = slug ? getEditionBySlug(slug) : undefined;

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!edition) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 16, fontFamily: FONT }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ACCENT_NAVY }}>404</div>
        <div style={{ fontSize: 18, color: "#64748B" }}>Edition not found</div>
        <button onClick={() => navigate("tvw/archive")}
          style={{ background: COLOUR, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
          ← Back to Archive
        </button>
      </div>
    );
  }

  const isLive = edition.status === "live";
  const heroImg = edition.bannerUrl || tvwHeroImg;

  return (
    <div style={{
      background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* ══════ BANNER SPACE ══════
          The team can swap this section with a full-width banner image.
          When bannerUrl is set in tvwEditionsData.ts, it renders as the hero bg.
          Otherwise the TVW Inner Banner is used as fallback.
      */}
      <div id="edition-hero" style={{ position: "relative", minHeight: "88vh", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingTop: 64 }}>
        <img
          src={heroImg}
          alt={edition.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(0deg, ${ACCENT_NAVY}f0 0%, ${ACCENT_NAVY}99 40%, ${ACCENT_NAVY}55 70%, transparent 100%)` }} />
        <div style={DIAG} />

        {/* Live pulse */}
        {isLive && (
          <div style={{ position: "absolute", top: 24, left: 64, display: "flex", alignItems: "center", gap: 8, background: "rgba(13,27,62,0.65)", backdropFilter: "blur(6px)", borderRadius: 100, padding: "7px 16px" }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", background: "#22C55E",
              animation: "te-pulse 1.6s ease-in-out infinite",
              display: "inline-block",
            }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: FONT, letterSpacing: "0.5px" }}>LIVE NOW</span>
          </div>
        )}

        {/* Breadcrumb */}
        <div style={{ position: "absolute", top: 24, right: 64 }}>
          <button onClick={() => navigate("tvw/archive")}
            style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 14px", color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: FONT }}>
            ← All Editions
          </button>
        </div>

        {/* Hero text */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px 72px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: B_YELLOW, margin: "0 0 12px" }}>
            Tata Volunteering Week · Edition {edition.id}
          </p>
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", margin: "0 0 14px" }}>
            {edition.title}
          </h1>
          {edition.theme && (
            <div style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 300, color: "rgba(255,255,255,0.75)", fontStyle: "italic", marginBottom: 18, fontFamily: FONT }}>
              '{edition.theme}'
            </div>
          )}
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontFamily: FONT, marginBottom: 32 }}>
            {edition.dateRange}
          </div>
          {isLive && (
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => navigate(isLoggedIn ? "tvw" : "register-role")}
                style={{ background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10, padding: "13px 26px", fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: FONT }}>
                {edition.volunteerCta ?? "Register to Volunteer →"}
              </button>
              {edition.diyGuideUrl && (
                <a href={edition.diyGuideUrl} target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "13px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: FONT, textDecoration: "none" }}>
                  DIY Guide →
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ══════ EDITION CONTENT ══════ */}
      <section id="edition-content" style={{ padding: "80px 56px", background: "transparent" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: edition.videoUrl ? "1fr 1fr" : "1fr", gap: 72, alignItems: "start" }}>

          {/* Left: text */}
          <div>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 10 }}>
              About this edition
            </p>
            <h2 style={{ fontFamily: FONT, fontSize: 28, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", margin: "0 0 10px" }}>
              {edition.theme || edition.title}
            </h2>
            <div style={{ height: 3, width: 40, background: COLOUR, borderRadius: 2, marginBottom: 24 }} />

            {edition.description && (
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 28, fontFamily: FONT }}>
                {edition.description}
              </p>
            )}

            {/* Highlights */}
            {edition.highlights.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {edition.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: COLOUR_LIGHT, borderRadius: 12, padding: "14px 18px", border: `1px solid ${COLOUR}18` }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOUR, flexShrink: 0, marginTop: 7 }} />
                    <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, fontFamily: FONT }}>{h}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Hashtags */}
            {edition.hashtags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {edition.hashtags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 12, fontWeight: 600, color: COLOUR,
                    background: COLOUR_LIGHT, borderRadius: 100,
                    padding: "4px 12px", fontFamily: FONT,
                    border: `1px solid ${COLOUR}22`,
                  }}>{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Right: video (if available) */}
          {edition.videoUrl && (
            <div>
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(13,27,62,0.12)", aspectRatio: "16/9" }}>
                <iframe
                  src={edition.videoUrl}
                  title={edition.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ══════ DAILY VIBE ══════ */}
      {edition.vibeUpdates.length > 0 && (
        <section id="edition-vibe" style={{ padding: "72px 56px 96px", background: "#F0F4FA" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 8 }}>
              Activities & Stories
            </p>
            <h2 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 32 }}>
              The Daily Vibe
            </h2>

            {/* Vibe button row — styled to match TVW24 screenshot */}
            <div style={{
              background: B_YELLOW, borderRadius: 12,
              display: "inline-flex", alignItems: "center",
              padding: "0 20px", height: 52,
              gap: 12, marginBottom: 24,
              boxShadow: "0 2px 12px rgba(247,148,37,0.3)",
            }}>
              <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 800, color: ACCENT_NAVY }}>The Daily Vibe</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke={ACCENT_NAVY} strokeWidth="1.5" />
                <path d="M7 10h6M11 7l3 3-3 3" stroke={ACCENT_NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Update buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              {edition.vibeUpdates.map((update) => (
                <button
                  key={update.number}
                  onClick={() => navigate(update.route)}
                  style={{
                    width: 48, height: 48,
                    borderRadius: "50%",
                    border: `2px solid ${COLOUR}`,
                    background: "#fff",
                    color: COLOUR,
                    fontFamily: FONT, fontSize: 15, fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = COLOUR;
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#fff";
                    (e.currentTarget as HTMLElement).style.color = COLOUR;
                  }}
                >
                  {update.label ?? update.number}
                </button>
              ))}
            </div>

            <p style={{ fontFamily: FONT, fontSize: 13, color: "#94A3B8", marginTop: 20 }}>
              Each update captures volunteering stories from that week of TVW {edition.id}.
            </p>
          </div>
        </section>
      )}

    </div>
  );
}

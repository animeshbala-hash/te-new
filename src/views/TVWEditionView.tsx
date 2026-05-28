import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroFallback from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { getEditionBySlug } from "@/data/tvwEditionsData";

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
  { id: "edition-hero",    label: "Overview"   },
  { id: "edition-content", label: "About"      },
  { id: "edition-vibe",    label: "Daily Vibe" },
];

export default function TVWEditionView() {
  const { slug } = useParams<{ slug: string }>();
  const rawNavigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const edition = slug ? getEditionBySlug(slug) : undefined;

  if (!edition) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 16, fontFamily: FONT }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ACCENT_NAVY }}>404</div>
        <div style={{ fontSize: 18, color: "#64748B" }}>Edition not found</div>
        <button onClick={() => { rawNavigate("/tvw/archive"); window.scrollTo(0,0); }}
          style={{ background: COLOUR, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: FONT }}>
          ← Back to Archive
        </button>
      </div>
    );
  }

  const isLive = edition.status === "live";
  const heroImg = edition.bannerUrl || tvwHeroFallback;

  function go(path: string) {
    rawNavigate(path);
    window.scrollTo(0, 0);
  }

  return (
    <div style={{
      background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      fontFamily: FONT,
    }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* ══════ TOP ACCENT LINE (matches other subpages) ══════ */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${COLOUR}, ${B_YELLOW})`, zIndex: 100 }} />

      {/* ══════ HERO — banner space ══════
          Replace bannerUrl in tvwEditionsData.ts to swap this image per edition.
          Falls back to TVW Inner Banner when no bannerUrl set.
      */}
      <div id="edition-hero" style={{ position: "relative", minHeight: "88vh", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingTop: 64 }}>
        <img src={heroImg} alt={edition.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(0deg, ${ACCENT_NAVY}f2 0%, ${ACCENT_NAVY}aa 45%, ${ACCENT_NAVY}44 75%, transparent 100%)` }} />
        <div style={DIAG} />

        {isLive && (
          <div style={{ position: "absolute", top: 28, left: 64, display: "flex", alignItems: "center", gap: 8, background: "rgba(13,27,62,0.7)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "6px 14px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", animation: "te-pulse 1.6s ease-in-out infinite", display: "inline-block" }} />
            <span style={{ fontSize: 10, fontWeight: 800, color: "#fff", fontFamily: FONT, letterSpacing: "1.2px", textTransform: "uppercase" }}>Live Now</span>
          </div>
        )}

        <button onClick={() => go("/tvw/archive")} style={{
          position: "absolute", top: 28, right: 64,
          background: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8,
          padding: "7px 16px", color: "rgba(255,255,255,0.85)",
          fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: FONT,
        }}>← All Editions</button>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px 80px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: B_YELLOW, margin: "0 0 14px" }}>
            Tata Volunteering Week · Edition {edition.id}
          </p>
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", margin: "0 0 14px" }}>
            {edition.title}
          </h1>
          {edition.theme && (
            <p style={{ fontFamily: FONT, fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 300, color: "rgba(255,255,255,0.72)", fontStyle: "italic", margin: "0 0 16px" }}>
              '{edition.theme}'
            </p>
          )}
          <div style={{ height: 2, width: 48, background: "rgba(255,255,255,0.4)", borderRadius: 2, margin: "0 0 20px" }} />
          <p style={{ fontFamily: FONT, fontSize: 13, color: "rgba(255,255,255,0.5)", margin: "0 0 36px" }}>{edition.dateRange}</p>

          {isLive && (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => go(isLoggedIn ? "/tvw" : "/register")}
                style={{ background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14, cursor: "pointer", fontFamily: FONT }}>
                {edition.volunteerCta ?? "Register to Volunteer →"}
              </button>
              {edition.diyGuideUrl && (
                <a href={edition.diyGuideUrl} target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "14px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: FONT, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
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
          <div>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 10 }}>About this edition</p>
            <h2 style={{ fontFamily: FONT, fontSize: 28, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", margin: "0 0 10px" }}>
              {edition.theme || edition.title}
            </h2>
            <div style={{ height: 3, width: 40, background: COLOUR, borderRadius: 2, marginBottom: 24 }} />

            {edition.description && (
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 28, fontFamily: FONT }}>{edition.description}</p>
            )}

            {edition.highlights.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {edition.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: COLOUR_LIGHT, borderRadius: 10, padding: "13px 16px", border: `1px solid ${COLOUR}18` }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: COLOUR, flexShrink: 0, marginTop: 8 }} />
                    <div style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, fontFamily: FONT }}>{h}</div>
                  </div>
                ))}
              </div>
            )}

            {edition.hashtags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {edition.hashtags.map((tag) => (
                  <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: COLOUR, background: COLOUR_LIGHT, borderRadius: 6, padding: "4px 12px", fontFamily: FONT, border: `1px solid ${COLOUR}22` }}>{tag}</span>
                ))}
              </div>
            )}
          </div>

          {edition.videoUrl && (
            <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(13,27,62,0.12)", aspectRatio: "16/9" }}>
              <iframe src={edition.videoUrl} title={edition.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
            </div>
          )}
        </div>
      </section>

      {/* ══════ DAILY VIBE ══════ */}
      {edition.vibeUpdates.length > 0 && (
        <section id="edition-vibe" style={{ padding: "72px 56px 96px", background: "#F0F4FA" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: `${COLOUR}cc`, marginBottom: 8 }}>Activities & Stories</p>
            <h2 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.4px", marginBottom: 6 }}>The Daily Vibe</h2>
            <div style={{ height: 3, width: 40, background: COLOUR, borderRadius: 2, marginBottom: 36 }} />

            {/* Vibe label bar */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: B_YELLOW, borderRadius: 8,
              padding: "13px 20px", marginBottom: 24,
            }}>
              <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 800, color: ACCENT_NAVY }}>The Daily Vibe</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 5l4 4-4 4" stroke={ACCENT_NAVY} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Square update buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {edition.vibeUpdates.map((update) => (
                <button
                  key={update.number}
                  onClick={() => go(update.route)}
                  style={{
                    width: 48, height: 48,
                    borderRadius: 8,
                    border: `2px solid ${COLOUR}`,
                    background: "#fff",
                    color: COLOUR,
                    fontFamily: FONT, fontSize: 15, fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = COLOUR;
                    el.style.color = "#fff";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#fff";
                    el.style.color = COLOUR;
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {update.label ?? update.number}
                </button>
              ))}
            </div>

            <p style={{ fontFamily: FONT, fontSize: 12, color: "#94A3B8", marginTop: 20 }}>
              Each update captures volunteering stories from TVW {edition.id}.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

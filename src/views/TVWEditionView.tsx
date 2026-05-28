import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tvwHeroFallback from "@/assets/banner_photos/TVW Inner Banner.JPG";
import { getEditionBySlug } from "@/data/tvwEditionsData";
import { B_BLUE, B_YELLOW, ACCENT_NAVY, P_INDIGO } from "@/data/homeSharedData";

const FONT = "'DM Sans', ui-sans-serif, system-ui, sans-serif";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px", pointerEvents: "none",
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

  function go(path: string) { rawNavigate(path); window.scrollTo(0, 0); }

  if (!edition) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 16, fontFamily: FONT }}>
        <div style={{ fontSize: 48, fontWeight: 900, color: ACCENT_NAVY }}>404</div>
        <div style={{ fontSize: 15, color: "#475569" }}>Edition not found</div>
        <button onClick={() => go("/tvw/archive")} style={{ background: B_BLUE, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: FONT }}>
          ← Back to Archive
        </button>
      </div>
    );
  }

  const isLive = edition.status === "live";

  return (
    <div style={{ background: "transparent", minHeight: "100vh", position: "relative", fontFamily: FONT,
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      <SubPageDotRail sections={SECTIONS} />

      {/* ══ HERO ══ */}
      <div id="edition-hero" style={{ position: "relative", minHeight: "92vh", overflow: "hidden", display: "flex", alignItems: "flex-end", paddingTop: 64 }}>
        <img src={edition.bannerUrl || tvwHeroFallback} alt={edition.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,12,22,0.92) 0%, rgba(8,12,22,0.75) 40%, rgba(8,12,22,0.30) 75%, rgba(8,12,22,0.10) 100%)" }} />
        <div style={DIAG} />

        {/* Back */}
        <button onClick={() => go("/tvw/archive")} style={{ position: "absolute", top: 80, left: 48, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 8, padding: "6px 14px", color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: FONT }}>
          ← All Editions
        </button>

        {/* Live badge */}
        {isLive && (
          <div style={{ position: "absolute", top: 80, right: 48, display: "flex", alignItems: "center", gap: 7, background: "rgba(13,27,62,0.65)", backdropFilter: "blur(6px)", borderRadius: 6, padding: "6px 14px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", animation: "te-pulse 1.6s ease-in-out infinite", display: "inline-block" }} />
            <span style={{ fontFamily: FONT, fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: "1.2px", textTransform: "uppercase" }}>Live Now</span>
          </div>
        )}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px", width: "100%" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 14px" }}>
            Tata Volunteering Week · Edition {edition.id}
          </p>
          <div style={{ height: 2, width: 80, borderRadius: 2, background: B_YELLOW, margin: "0 0 22px" }} />
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 14px" }}>
            {edition.title}
          </h1>
          {edition.theme && (
            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.65)", fontStyle: "italic", margin: "0 0 14px", maxWidth: 460 }}>
              '{edition.theme}'
            </p>
          )}
          <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.40)", margin: "0 0 36px" }}>{edition.dateRange}</p>
          {isLive && (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => go(isLoggedIn ? "/tvw" : "/register")} style={{ background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10, padding: "11px 24px", fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: FONT }}>
                {edition.volunteerCta ?? "Register to Volunteer"}
              </button>
              {edition.diyGuideUrl && (
                <a href={edition.diyGuideUrl} target="_blank" rel="noopener noreferrer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.22)", borderRadius: 10, padding: "11px 22px", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: FONT, textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                  DIY Guide →
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ══ ABOUT ══ */}
      <section id="edition-content" style={{ padding: "72px 48px", background: "transparent" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: edition.videoUrl ? "1fr 1fr" : "1fr", gap: 72, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: `${B_BLUE}b3`, marginBottom: 8 }}>About this edition</p>
            <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
              {edition.theme || edition.title}
            </h2>
            <div style={{ width: 48, height: 3, borderRadius: 2, background: B_BLUE, marginTop: 10, marginBottom: 24 }} />
            {edition.description && (
              <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 24 }}>{edition.description}</p>
            )}
            {edition.highlights.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {edition.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: P_INDIGO, borderRadius: 12, padding: "12px 16px", border: `1px solid ${B_BLUE}14` }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: B_BLUE, flexShrink: 0, marginTop: 8 }} />
                    <div style={{ fontFamily: FONT, fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{h}</div>
                  </div>
                ))}
              </div>
            )}
            {edition.hashtags.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {edition.hashtags.map((tag) => (
                  <span key={tag} style={{ fontFamily: FONT, fontSize: 11, fontWeight: 600, color: B_BLUE, background: P_INDIGO, borderRadius: 6, padding: "4px 11px", border: `1px solid ${B_BLUE}18` }}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          {edition.videoUrl && (
            <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 24px rgba(13,27,62,0.10)", aspectRatio: "16/9" }}>
              <iframe src={edition.videoUrl} title={edition.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
            </div>
          )}
        </div>
      </section>

      {/* ══ DAILY VIBE ══ */}
      {edition.vibeUpdates.length > 0 && (
        <section id="edition-vibe" style={{ padding: "72px 48px 96px", background: "#F7F9FF" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: `${B_BLUE}b3`, marginBottom: 8 }}>
              Activities & Stories
            </p>
            <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>The Daily Vibe</h2>
            <div style={{ width: 48, height: 3, borderRadius: 2, background: B_BLUE, marginTop: 10, marginBottom: 32 }} />

            <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.7, marginBottom: 32, maxWidth: 520 }}>
              Each update captures volunteering stories from across the Tata Group during TVW {edition.id}.
            </p>

            {/* Square numbered update buttons */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {edition.vibeUpdates.map((update, i) => {
                const accent = ["#135EA9","#803998","#00A896","#307FE2","#F4838A","#333399","#D84926"][i % 7];
                return (
                  <button
                    key={update.number}
                    onClick={() => go(update.route)}
                    style={{
                      width: 52, height: 52, borderRadius: 10,
                      border: `2px solid ${accent}`,
                      background: "#fff", color: accent,
                      fontFamily: FONT, fontSize: 16, fontWeight: 800,
                      cursor: "pointer", flexShrink: 0,
                      transition: "background 0.15s, color 0.15s, transform 0.15s",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = accent; el.style.color = "#fff"; el.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#fff"; el.style.color = accent; el.style.transform = "translateY(0)"; }}
                  >
                    {update.label ?? update.number}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

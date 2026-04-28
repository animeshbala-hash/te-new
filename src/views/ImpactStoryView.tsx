import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import { IMPACT_STORIES } from "@/data/impactStoriesData";

const ACCENT_NAVY = "#0D1B3E";
const B_INDIGO    = "#333399";
const B_RED       = "#E8401C";
const FONT        = "'Noto Sans','DM Sans',ui-sans-serif,system-ui,sans-serif";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.035) 0px,rgba(255,255,255,0.035) 1px,transparent 1px,transparent 24px)",
  backgroundSize: "24px 24px",
  pointerEvents: "none",
};

// ── Slideshow (matches EventsView) ───────────────────────────────────────────
function Slideshow({ slides, accent }: { slides: { src: string; caption?: string }[]; accent: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);
  if (!slides.length) return null;
  return (
    <div style={{ borderRadius: 14, overflow: "hidden", background: "#000" }}>
      <div style={{ position: "relative", aspectRatio: "16/10" }}>
        {slides.map((s, idx) => (
          <img key={idx} src={s.src} alt={s.caption ?? ""}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 30%",
              opacity: idx === i ? 1 : 0, transition: "opacity 0.6s ease" }} />
        ))}
        {slides.length > 1 && (
          <div style={{ position: "absolute", bottom: 10, left: 0, right: 0,
            display: "flex", justifyContent: "center", gap: 6, zIndex: 2 }}>
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)}
                style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 100,
                  border: "none", cursor: "pointer",
                  background: idx === i ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s" }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── ArticleBody wrapper (matches EventsView) ─────────────────────────────────
function ArticleBody({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff" }}>
      <div style={{ height: 3, background: accent }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 56px 80px" }}>
        {children}
      </div>
    </div>
  );
}

// ── Paragraphs ────────────────────────────────────────────────────────────────
function Paras({ texts }: { texts: string[] }) {
  return (
    <>
      {texts.map((p, i) => (
        <p key={i} style={{ fontFamily: FONT, fontSize: 15, color: "#374151",
          lineHeight: 1.85, margin: "0 0 18px" }}>{p}</p>
      ))}
    </>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────
function SectionHead({ title, accent }: { title: string; accent: string }) {
  return (
    <h2 style={{ fontFamily: FONT, fontSize: 18, fontWeight: 800, color: ACCENT_NAVY,
      letterSpacing: "-0.2px", margin: "40px 0 16px", paddingTop: 8,
      borderTop: `2px solid ${accent}22` }}>{title}</h2>
  );
}

// ── Media + text (matches EventsView MediaBlock) ─────────────────────────────
function MediaBlock({ title, body, media, mediaLeft = false, accent }: {
  title?: string; body: string | string[]; media?: React.ReactNode;
  mediaLeft?: boolean; accent: string;
}) {
  const paras = Array.isArray(body) ? body : [body];
  return (
    <div style={{ margin: "40px 0" }}>
      {title && <SectionHead title={title} accent={accent} />}
      {media ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
          <div style={{ order: mediaLeft ? 2 : 1 }}><Paras texts={paras} /></div>
          <div style={{ order: mediaLeft ? 1 : 2 }}>{media}</div>
        </div>
      ) : (
        <Paras texts={paras} />
      )}
    </div>
  );
}

// ── Pull quote (matches EventsView) ──────────────────────────────────────────
function PullQuote({ text, attribution, role }: { text: string; attribution: string; role?: string }) {
  return (
    <div style={{ background: "#135EA9", borderRadius: 12, padding: "28px 32px", margin: "28px 0" }}>
      <div style={{ fontFamily: "Georgia,serif", fontSize: 32, lineHeight: 0.7,
        color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>"</div>
      <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16,
        fontStyle: "italic", color: "#fff", lineHeight: 1.72, margin: "0 0 16px" }}>{text}</p>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 12 }}>
        <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 800, color: "#fff", margin: "0 0 2px" }}>
          {attribution}
        </p>
        {role && (
          <p style={{ fontFamily: FONT, fontSize: 11, color: "rgba(255,255,255,0.7)", margin: 0 }}>{role}</p>
        )}
      </div>
    </div>
  );
}

// ── Photo grid 2-col, 4/3 aspect (matches EventsView PhotoGrid) ───────────────
function PhotoGrid({ images }: { images: { src: string }[] }) {
  return (
    <div style={{ display: "grid",
      gridTemplateColumns: `repeat(${Math.min(images.length, 2)}, 1fr)`,
      gap: 12, margin: "28px 0" }}>
      {images.map((img, i) => (
        <img key={i} src={img.src} alt=""
          style={{ width: "100%", borderRadius: 10, objectFit: "cover",
            objectPosition: "center 30%", aspectRatio: "4/3", display: "block" }} />
      ))}
    </div>
  );
}

// ── Opening para accent block ─────────────────────────────────────────────────
function OpeningPara({ text }: { text: string }) {
  return (
    <div style={{ background: `${B_RED}12`, borderLeft: `3px solid ${B_RED}`,
      borderRadius: "0 10px 10px 0", padding: "20px 24px", margin: "0 0 36px" }}>
      <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16,
        fontStyle: "italic", color: ACCENT_NAVY, lineHeight: 1.78, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

// ── Bullet list ───────────────────────────────────────────────────────────────
function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 24px", paddingLeft: 24, listStyleType: "disc" }}>
      {items.map((b, i) => (
        <li key={i} style={{ fontFamily: FONT, fontSize: 15, color: "#374151",
          lineHeight: 1.8, margin: "0 0 10px" }}>{b}</li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN VIEW
// ─────────────────────────────────────────────────────────────────────────────
export default function ImpactStoryView() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") ?? undefined;
  const navigate = useAppNavigate();

  const story = IMPACT_STORIES.find((s) => s.slug === id);

  if (!story) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: FONT, paddingTop: 64 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "#94a3b8", marginBottom: 16 }}>Story not found</p>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: ACCENT_NAVY, marginBottom: 24 }}>
            This story doesn't exist yet.
          </h1>
          <button onClick={() => navigate("media")}
            style={{ background: B_INDIGO, color: "#fff", border: "none", borderRadius: 10,
              padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: FONT }}>
            ← Back to Media
          </button>
        </div>
      </div>
    );
  }

  const accent = story.accentColor;
  const others = IMPACT_STORIES.filter((s) => s.slug !== story.slug);

  const wordCount = [story.openingPara,
    ...story.sections.map(sec =>
      [sec.heading ?? "", sec.body ?? "", ...(sec.bullets ?? [])].join(" ")
    )
  ].join(" ").split(/\s+/).filter(Boolean).length;
  const readMins = Math.max(1, Math.round(wordCount / 150));

  // Distribute body photos evenly across sections
  const photos = story.photos ?? [];
  const nPhotos = photos.length;
  const photoSlots = nPhotos === 0 ? [] : Array.from({ length: nPhotos }, (_, i) =>
    Math.round((i + 1) * (story.sections.length / nPhotos)) - 1
  ).map(s => Math.min(s, story.sections.length - 1));

  const SECTIONS_NAV = [
    { id: "story-hero",   label: "Overview" },
    { id: "story-body",   label: "Story"    },
    ...(story.quotes?.length ? [{ id: "story-quotes", label: "Voices" }] : []),
    { id: "story-more",   label: "More"     },
  ];

  return (
    <div style={{ fontFamily: FONT, background: "#f7f8fc", minHeight: "100vh" }}>

      <div style={{ height: 3, background: accent, width: "100%" }} />
      <SubPageDotRail sections={SECTIONS_NAV} accentColour={accent} />

      {/* ── Hero ── */}
      <div id="story-hero" style={{ position: "relative", minHeight: "72vh",
        display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 64 }}>
        <img src={story.heroImage} alt={story.heroImageAlt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: story.slug === "beyond-the-boardroom" ? "center 70%" : "center 35%" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(160deg,rgba(8,12,22,0.78) 0%,rgba(8,12,22,0.55) 45%,rgba(8,12,22,0.22) 100%)" }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto",
          padding: "0 56px", width: "100%" }}>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <button onClick={() => navigate("media")}
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.7)", borderRadius: 6, padding: "4px 12px",
                fontSize: 11, fontWeight: 600, cursor: "pointer", fontFamily: FONT }}>
              ← Media &amp; Resources
            </button>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600 }}>Impact Stories</span>
          </div>

          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 10px" }}>
            {story.eyebrow} · {story.date} · {readMins} min read
          </p>
          <div style={{ height: 2, width: 52, borderRadius: 2, background: accent, marginBottom: 20 }} />

          <h1 style={{ fontFamily: FONT, fontSize: "clamp(1.9rem,3.8vw,3rem)", fontWeight: 400,
            color: "#fff", lineHeight: 1.12, letterSpacing: "-0.4px", margin: "0 0 12px", maxWidth: 720 }}>
            {story.title}
          </h1>
          {story.subtitle && (
            <p style={{ fontFamily: FONT, fontStyle: "italic",
              fontSize: "clamp(1.05rem,1.7vw,1.35rem)", color: "rgba(255,255,255,0.85)",
              lineHeight: 1.4, margin: "0 0 24px", maxWidth: 720 }}>
              {story.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div id="story-body">
        <ArticleBody accent={accent}>

          <OpeningPara text={story.openingPara} />

          {(() => {
            let photoIdx = 0;
            const out: JSX.Element[] = [];

            story.sections.forEach((sec, i) => {
              const hasPhoto = photoSlots.includes(i) && photoIdx < photos.length;
              const photoSrc = hasPhoto ? photos[photoIdx].src : undefined;
              if (hasPhoto) photoIdx++;

              const slideshow = hasPhoto
                ? <Slideshow accent={accent} slides={[{ src: photoSrc! }]} />
                : undefined;

              if (sec.heading) {
                if (slideshow) {
                  // Heading + body as MediaBlock with image
                  const paras = sec.body ? sec.body.split("\n\n") : [""];
                  out.push(
                    <MediaBlock key={`mb-${i}`} accent={accent}
                      title={sec.heading}
                      body={paras}
                      mediaLeft={i % 2 === 0}
                      media={slideshow} />
                  );
                } else {
                  out.push(<SectionHead key={`sh-${i}`} title={sec.heading} accent={accent} />);
                  if (sec.body) {
                    out.push(<Paras key={`p-${i}`} texts={sec.body.split("\n\n")} />);
                  }
                }
                if (sec.bullets) {
                  out.push(<BulletList key={`bl-${i}`} items={sec.bullets} />);
                }
                if (sec.subBlocks) {
                  sec.subBlocks.forEach((sb, sbi) => {
                    out.push(
                      <div key={`sb-${i}-${sbi}`} style={{ margin: "20px 0 24px" }}>
                        <div style={{ fontFamily: FONT, fontSize: 11, fontWeight: 800,
                          letterSpacing: "1.6px", textTransform: "uppercase",
                          color: accent, marginBottom: 10 }}>{sb.heading}</div>
                        <BulletList items={sb.bullets} />
                      </div>
                    );
                  });
                }
              } else {
                // Body-only section
                if (slideshow) {
                  const paras = sec.body ? sec.body.split("\n\n") : [""];
                  out.push(
                    <MediaBlock key={`mb-${i}`} accent={accent}
                      body={paras}
                      mediaLeft={i % 2 === 0}
                      media={slideshow} />
                  );
                } else if (sec.body) {
                  out.push(<Paras key={`p-${i}`} texts={sec.body.split("\n\n")} />);
                }
                if (sec.bullets) {
                  out.push(<BulletList key={`bl-${i}`} items={sec.bullets} />);
                }
              }

              // Table always full-width
              if (sec.table) {
                out.push(
                  <div key={`tbl-${i}`} style={{ overflowX: "auto", margin: "8px 0 28px",
                    border: "1px solid #e8e8f0", borderRadius: 10 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse",
                      fontFamily: FONT, fontSize: 14 }}>
                      <thead>
                        <tr style={{ background: "#f7f8fc" }}>
                          {sec.table.headers.map((h, hi) => (
                            <th key={hi} style={{ textAlign: "left", padding: "10px 14px",
                              fontSize: 11, fontWeight: 800, letterSpacing: "0.8px",
                              textTransform: "uppercase", color: ACCENT_NAVY,
                              borderBottom: "1px solid #e8e8f0" }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sec.table.rows.map((row, ri) => (
                          <tr key={ri} style={{ borderTop: ri === 0 ? "none" : "1px solid #f1f1f5" }}>
                            {row.map((cell, ci) => (
                              <td key={ci} style={{ padding: "10px 14px", color: "#1e293b",
                                fontFamily: FONT, fontWeight: ci === 1 ? 600 : 400 }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
            });

            return out;
          })()}

        </ArticleBody>
      </div>

      {/* ── Voices / Quotes ── */}
      {story.quotes && story.quotes.length > 0 && (
        <div id="story-quotes" style={{ background: "#f7f8fc", padding: "48px 56px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "2px",
              textTransform: "uppercase", color: "#94a3b8", marginBottom: 8 }}>
              Voices from the Field
            </p>
            <div style={{ width: 36, height: 2, borderRadius: 2, background: accent, marginBottom: 28 }} />
            <div style={{ display: "grid",
              gridTemplateColumns: story.quotes.length === 1 ? "1fr" : "1fr 1fr", gap: 20 }}>
              {story.quotes.map((q, i) => (
                <PullQuote key={i} text={q.text} attribution={q.attribution} role={q.role} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── More Stories ── */}
      <div id="story-more" style={{ background: "#f7f8fc", padding: "56px 56px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "#94a3b8", marginBottom: 8 }}>More Impact Stories</p>
          <div style={{ width: 36, height: 2, borderRadius: 2, background: B_INDIGO, marginBottom: 28 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {others.map((s) => (
              <div key={s.slug}
                onClick={() => { navigate("stories", s.slug); window.scrollTo(0, 0); }}
                style={{ background: "#fff", border: "1px solid #e8e8f0", borderRadius: 14,
                  overflow: "hidden", cursor: "pointer",
                  transition: "transform 0.18s, box-shadow 0.18s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                  <img src={s.heroImage} alt={s.heroImageAlt}
                    style={{ width: "100%", height: "100%", objectFit: "cover",
                      objectPosition: s.slug === "beyond-the-boardroom" ? "center 70%" : "center 35%" }} />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <span style={{ display: "inline-block", background: `${s.accentColor}15`,
                    color: s.accentColor, fontSize: 10, fontWeight: 700, padding: "3px 9px",
                    borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.6px",
                    marginBottom: 10 }}>{s.tag}</span>
                  <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 700,
                    color: ACCENT_NAVY, lineHeight: 1.4, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ fontFamily: FONT, fontSize: 13, color: "#374151",
                    lineHeight: 1.6, margin: "0 0 12px" }}>{s.excerpt}</p>
                  <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700,
                    color: B_INDIGO }}>Read story →</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={() => navigate("media")}
              style={{ background: "none", border: `1.5px solid ${B_INDIGO}`, color: B_INDIGO,
                borderRadius: 10, padding: "10px 28px", fontFamily: FONT,
                fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              All stories in Media &amp; Resources →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

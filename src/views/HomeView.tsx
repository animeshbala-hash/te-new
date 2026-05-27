import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import {
  ProgrammeSpotlight, JourneySection, NumbersSection,
  QuoteBanner, TickerBar,
} from "@/components/shared/HomeSections";
import peTeaser  from "@/assets/pe-24-teaser.jpg";
import peLaunch  from "@/assets/pe-launch.jpg";
import tsmLaunch from "@/assets/TSM26_launch.jpg";

// ─── Carousel slide builder (date-gated) ──────────────────────────────────────
function useBannerSlides() {
  const now     = new Date();
  const peEnd   = new Date("2026-07-16T00:00:00");
  const peStart = new Date("2026-06-15T00:00:00");

  const slides: { img: string; alt: string; dest: string; bg: string }[] = [];

  if (now < peEnd) {
    slides.push({
      img:  now >= peStart ? peLaunch : peTeaser,
      alt:  now >= peStart ? "ProEngage Edition 24 — now live" : "ProEngage — coming soon",
      dest: now >= peStart ? "pe24-live" : "about-proengage",
      bg:   "#F37021",
    });
  }

  // TSM26 slide always shown alongside the PE slide
  slides.push({
    img:  tsmLaunch,
    alt:  "Tata Sustainability Month 2026 is Live",
    dest: "tsm26-live",
    bg:   "#C3DB6F",
  });

  return slides;
}

// ─── Banner carousel ──────────────────────────────────────────────────────────
function BannerCarousel() {
  const navigate = useAppNavigate();
  const slides   = useBannerSlides();
  const [cur, setCur]       = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (total <= 1 || paused) return;
    const t = setInterval(() => setCur((p) => (p + 1) % total), 4000);
    return () => clearInterval(t);
  }, [paused, total]);

  if (total === 0) return null;

  return (
    <div
      style={{ position: "relative", width: "100%", paddingTop: 64, overflow: "hidden", lineHeight: 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides — full viewport minus navbar */}
      <div style={{ position: "relative", height: "calc(100vh - 64px)", overflow: "hidden" }}>
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => navigate(s.dest)}
            style={{
              position: "absolute", inset: 0,
              cursor: "pointer",
              opacity: cur === i ? 1 : 0,
              transition: "opacity 0.55s ease",
              background: s.bg,
              lineHeight: 0,
            }}
          >
            <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
        ))}

        {/* Controls — only when >1 slide */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setCur((p) => (p - 1 + total) % total); }}
              style={{
                position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(0,0,0,0.32)", border: "1.5px solid rgba(255,255,255,0.22)",
                color: "#fff", cursor: "pointer", zIndex: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCur((p) => (p + 1) % total); }}
              style={{
                position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(0,0,0,0.32)", border: "1.5px solid rgba(255,255,255,0.22)",
                color: "#fff", cursor: "pointer", zIndex: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dots + counter — bottom-left */}
            <div style={{
              position: "absolute", bottom: 20, left: 20,
              display: "flex", alignItems: "center", gap: 8, zIndex: 10,
              background: "rgba(0,0,0,0.30)", borderRadius: 100, padding: "5px 14px",
            }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCur(i); }}
                  style={{
                    width: cur === i ? 22 : 7, height: 7, borderRadius: 100,
                    background: cur === i ? "#fff" : "rgba(255,255,255,0.4)",
                    border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, fontWeight: 600, marginLeft: 4 }}>
                {String(cur + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </>
        )}

        {/* Scroll chevron — overlaid bottom-center on the banner */}
        <div
          onClick={(e) => { e.stopPropagation(); document.getElementById("programmes")?.scrollIntoView({ behavior: "smooth" }); }}
          style={{
            position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 2, padding: "6px 14px", cursor: "pointer",
            background: "rgba(255,255,255,0.75)", borderRadius: 100, zIndex: 10,
          }}
        >
          {[0, 1, 2].map((i) => (
            <svg key={i} viewBox="0 0 24 12" fill="none"
              style={{ width: 20, height: 10, opacity: 1 - i * 0.28, color: "#0D1B3E",
                animation: `chevronBob 1.4s ease-in-out ${i * 0.18}s infinite` }}>
              <path d="M2 2 L12 10 L22 2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      </div>
      <style>{`@keyframes chevronBob{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}`}</style>
    </div>
  );

}

// ─── Section dot rail ─────────────────────────────────────────────────────────
const SECTION_IDS    = ["programmes", "numbers", "journey"];
const SECTION_LABELS = ["Programmes", "Numbers", "Journey"];

// ─── HomeView ─────────────────────────────────────────────────────────────────
const HomeView = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showLabel,     setShowLabel]     = useState(false);
  const labelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setActiveSection(idx);
          setShowLabel(true);
          if (labelTimer.current) clearTimeout(labelTimer.current);
          labelTimer.current = setTimeout(() => setShowLabel(false), 1800);
        }
      }, { threshold: 0.2 });
      o.observe(el); obs.push(o);
    });
    return () => { obs.forEach((o) => o.disconnect()); if (labelTimer.current) clearTimeout(labelTimer.current); };
  }, []);

  return (
    <div className="relative font-sans">

      {/* Section dot rail */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end" style={{ gap: 0 }}>
        {SECTION_IDS.map((id, i) => {
          const active = activeSection === i;
          const isLast = i === SECTION_IDS.length - 1;
          return (
            <div key={id} className="flex flex-col items-end">
              <button
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-end"
              >
                {active && showLabel && (
                  <span className="whitespace-nowrap shadow-sm transition-all duration-300 mr-2"
                    style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.3px",
                      padding: "3px 9px", borderRadius: 4,
                      backgroundColor: "rgba(13,27,62,0.92)",
                      border: "1px solid #0D1B3E", color: "#ffffff",
                    }}>
                    {SECTION_LABELS[i]}
                  </span>
                )}
                <span className="transition-all duration-300"
                  style={{
                    width: active ? 9 : 6, height: active ? 9 : 6,
                    borderRadius: 2, backgroundColor: "#0D1B3E",
                    border: "1px solid rgba(13,27,62,0.25)",
                    display: "block", flexShrink: 0,
                  }}
                />
              </button>
              {!isLast && (
                <div style={{
                  width: 1, height: 28, marginLeft: "auto",
                  marginRight: active ? "4px" : "2.5px",
                  backgroundImage: "repeating-linear-gradient(to bottom, rgba(13,27,62,0.5) 0px, rgba(13,27,62,0.5) 3px, transparent 3px, transparent 7px)",
                  transition: "all 0.3s",
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* BANNER CAROUSEL */}
      <BannerCarousel />

      {/* PROGRAMME SPOTLIGHT */}
      <div id="programmes">
        <ProgrammeSpotlight />
      </div>

      {/* QUOTE BANNER */}
      <QuoteBanner />

      {/* IN THE NUMBERS */}
      <div id="numbers">
        <NumbersSection />
      </div>

      {/* JOURNEY */}
      <div id="journey">
        <JourneySection />
      </div>

      {/* FIXED BOTTOM TICKER */}
      <TickerBar fixed />

    </div>
  );
};

export default HomeView;

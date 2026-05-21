import { useState, useEffect, useRef } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAppContext } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import {
  B_INDIGO, B_YELLOW, B_TEAL, B_BLUE, B_TICKER, ACCENT_NAVY,
} from "@/data/homeSharedData";
import { ProgrammeSpotlight, JourneySection, NumbersSection, QuoteBanner, TickerBar, SectionDivider, ProEngageBanner } from "@/components/shared/HomeSections";

// ── Ink doodle SVGs ───────────────────────────────────────────────────────────
const InkSpiral = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M30 30 C30 22, 38 18, 42 24 C46 30, 42 40, 34 42 C26 44, 18 38, 18 30 C18 20, 26 12, 36 12 C48 12, 56 22, 54 34 C52 46, 42 54, 28 52"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);
const InkDots = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="6"  cy="8"  r="2.5" fill="currentColor" opacity="0.55" />
    <circle cx="18" cy="22" r="1.8" fill="currentColor" opacity="0.4"  />
    <circle cx="30" cy="6"  r="3"   fill="currentColor" opacity="0.45" />
    <circle cx="42" cy="20" r="1.5" fill="currentColor" opacity="0.35" />
    <circle cx="48" cy="10" r="2"   fill="currentColor" opacity="0.4"  />
  </svg>
);
const InkStar = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M16 2 L17.5 14 L28 8 L18.5 16 L28 24 L17.5 18 L16 30 L14.5 18 L4 24 L13.5 16 L4 8 L14.5 14 Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
  </svg>
);
const InkSwish = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M4 32 C10 16, 28 6, 50 14 C60 18, 65 26, 66 34"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M60 28 L66 34 L60 38"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ── HomeView-only data ────────────────────────────────────────────────────────

const wayanad  = IMPACT_STORIES.find((s) => s.slug === "wayanad-2024")!;
const melghat  = IMPACT_STORIES.find((s) => s.slug === "melghat-mitra")!;
const beyond   = IMPACT_STORIES.find((s) => s.slug === "beyond-the-boardroom")!;

const HERO_SLIDES = [
  {
    photo: melghat.heroImage,
    accent: B_YELLOW, tag: "Community", cta: "story" as const,
    storySlug: "melghat-mitra",
    headline: melghat.title,
    titleSub: melghat.subtitle,
    doodles: {
      spiral: { top: "12%",    right: "36%", size: 52, opacity: 0.18 },
      dots:   { top: "60%",    right: "42%", size: 60, opacity: 0.20 },
      star:   { top: "20%",    right: "28%", size: 28, opacity: 0.22 },
      swish:  { bottom: "18%", right: "30%", size: 72, opacity: 0.16 },
    },
  },
  {
    photo: beyondHero,
    accent: B_BLUE, tag: "Leadership Volunteering", cta: "story" as const,
    storySlug: "beyond-the-boardroom",
    headline: beyond.title,
    titleSub: beyond.subtitle,
    doodles: {
      spiral: { top: "15%",    right: "40%", size: 50, opacity: 0.18 },
      dots:   { top: "65%",    right: "34%", size: 58, opacity: 0.20 },
      star:   { bottom: "25%", right: "28%", size: 26, opacity: 0.22 },
      swish:  { top: "42%",    right: "22%", size: 70, opacity: 0.15 },
    },
  },
  {
    photo: wayanad.heroImage,
    accent: B_YELLOW, tag: "Disaster Response", cta: "story" as const,
    storySlug: "wayanad-2024",
    headline: wayanad.title,
    titleSub: wayanad.subtitle,
    doodles: {
      spiral: { top: "10%",    right: "36%", size: 52, opacity: 0.16 },
      dots:   { bottom: "20%", right: "40%", size: 60, opacity: 0.18 },
      star:   { top: "48%",    right: "30%", size: 28, opacity: 0.20 },
      swish:  { top: "28%",    right: "24%", size: 72, opacity: 0.14 },
    },
  },
  {
    photo: tataMotors1,
    accent: B_BLUE, tag: "Community", cta: "video" as const,
    headline: "10,000 Families",
    titleSub: "Rural communities reached through free professional health camps",
    doodles: {
      spiral: { top: "8%",     right: "38%", size: 48, opacity: 0.16 },
      dots:   { bottom: "22%", right: "44%", size: 56, opacity: 0.18 },
      star:   { top: "55%",    right: "32%", size: 24, opacity: 0.20 },
      swish:  { top: "30%",    right: "26%", size: 68, opacity: 0.14 },
    },
  },
];

const HERO_PARTICLES = [
  { top: "8%",  left: "5%",  size: 6, opacity: 0.08, dur: "7s",  delay: "0s"   },
  { top: "15%", left: "82%", size: 4, opacity: 0.06, dur: "9s",  delay: "1.2s" },
  { top: "35%", left: "12%", size: 8, opacity: 0.10, dur: "8s",  delay: "0.5s" },
  { top: "60%", left: "90%", size: 5, opacity: 0.07, dur: "6s",  delay: "2.8s" },
  { top: "72%", left: "25%", size: 7, opacity: 0.12, dur: "10s", delay: "1.5s" },
  { top: "20%", left: "68%", size: 4, opacity: 0.06, dur: "7.5s",delay: "3.2s" },
  { top: "48%", left: "55%", size: 6, opacity: 0.09, dur: "8.5s",delay: "0.8s" },
  { top: "80%", left: "40%", size: 5, opacity: 0.07, dur: "9.5s",delay: "2.0s" },
  { top: "12%", left: "45%", size: 8, opacity: 0.10, dur: "6.5s",delay: "3.8s" },
  { top: "55%", left: "8%",  size: 4, opacity: 0.06, dur: "7s",  delay: "1.0s" },
  { top: "42%", left: "78%", size: 7, opacity: 0.11, dur: "8s",  delay: "2.5s" },
  { top: "88%", left: "65%", size: 5, opacity: 0.08, dur: "9s",  delay: "0.3s" },
];

const SECTION_IDS    = ["hero", "programmes", "numbers", "journey"];
const SECTION_LABELS = ["Home", "Programmes", "Numbers", "Journey"];

// ── Component ─────────────────────────────────────────────────────────────────
const HomeView = () => {
  const navigate         = useAppNavigate();
  const { triggerToast } = useAppContext();
  

  const [activeSection,  setActiveSection]  = useState(0);
  const [showLabel,      setShowLabel]      = useState(false);
  const labelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [heroSlide,      setHeroSlide]      = useState(0);
  const [inHero,         setInHero]         = useState(true);

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

  useEffect(() => { const t = setInterval(() => setHeroSlide((p) => (p + 1) % HERO_SLIDES.length), 6000); return () => clearInterval(t); }, []);

  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        setInHero(window.scrollY < heroEl.offsetHeight - 300);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slide        = HERO_SLIDES[heroSlide];
  const d            = slide.doodles;

  return (
    <div className="relative font-sans">

      {/* ── Section dot rail — fixed navy, same as all static pages */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end" style={{ gap: 0 }}>
        {SECTION_IDS.map((id, i) => {
          const active = activeSection === i;
          const isLast = i === SECTION_IDS.length - 1;
          return (
            <div key={id} className="flex flex-col items-end">
              <button
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-end"
                style={{ marginBottom: 0 }}
              >
                {active && showLabel && (
                  <span
                    className="whitespace-nowrap shadow-sm transition-all duration-300 mr-2"
                    style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.3px",
                      padding: "3px 9px",
                      borderRadius: 4,
                      backgroundColor: "rgba(13,27,62,0.92)",
                      border: `1px solid #0D1B3E`,
                      color: "#ffffff",
                    }}>
                    {SECTION_LABELS[i]}
                  </span>
                )}
                <span
                  className="transition-all duration-300"
                  style={{
                    width: active ? 9 : 6, height: active ? 9 : 6,
                    borderRadius: 2,
                    backgroundColor: "#0D1B3E",
                    border: `1px solid rgba(13,27,62,0.25)`,
                    display: "block",
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Dotted connector line */}
              {!isLast && (
                <div style={{
                  width: 1,
                  height: 28,
                  marginLeft: "auto",
                  marginRight: active ? "4px" : "2.5px",
                  backgroundImage: `repeating-linear-gradient(to bottom, rgba(13,27,62,0.5) 0px, rgba(13,27,62,0.5) 3px, transparent 3px, transparent 7px)`,
                  transition: "all 0.3s",
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* PROENGAGE BANNER — date-switched teaser / live */}
      <ProEngageBanner />

      {/* 2. PROGRAMME SPOTLIGHT */}
      <div id="programmes">
        <ProgrammeSpotlight />
      </div>

      {/* QUOTE BANNER — dark section break, no SectionDivider needed */}
      <QuoteBanner />

      {/* 3. IN THE NUMBERS */}
      <div id="numbers">
        <NumbersSection />
      </div>

      {/* 4. JOURNEY — compact */}
      <div id="journey">
        <JourneySection />
      </div>

      {/* FIXED BOTTOM TICKER */}
      <TickerBar fixed />

    </div>
  );
};

export default HomeView;

import { useState, useEffect } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAppContext } from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext";
import {
  B_INDIGO, B_YELLOW, B_TEAL, B_BLUE, B_TICKER, ACCENT_NAVY,
} from "@/data/homeSharedData";
import { ProgrammeSpotlight, JourneySection, NumbersSection, QuoteBanner, TickerBar, SectionDivider, ProEngageBanner } from "@/components/shared/HomeSections";

const SECTION_IDS    = ["programmes", "numbers", "journey"];
const SECTION_LABELS = ["Programmes", "Numbers", "Journey"];

const HomeView = () => {
  const navigate         = useAppNavigate();
  const { triggerToast } = useAppContext();

  const [activeSection, setActiveSection] = useState(0);
  const [showLabel,     setShowLabel]     = useState(false);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setActiveSection(idx);
          setShowLabel(true);
        }
      }, { threshold: 0.2 });
      o.observe(el); obs.push(o);
    });
    return () => { obs.forEach((o) => o.disconnect()); };
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
                  <span
                    className="whitespace-nowrap shadow-sm transition-all duration-300 mr-2"
                    style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.3px",
                      padding: "3px 9px", borderRadius: 4,
                      backgroundColor: "rgba(13,27,62,0.92)",
                      border: "1px solid #0D1B3E",
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
                    border: "1px solid rgba(13,27,62,0.25)",
                    display: "block", flexShrink: 0,
                  }}
                />
              </button>
              {!isLast && (
                <div style={{
                  width: 1, height: 28,
                  marginLeft: "auto",
                  marginRight: active ? "4px" : "2.5px",
                  backgroundImage: "repeating-linear-gradient(to bottom, rgba(13,27,62,0.5) 0px, rgba(13,27,62,0.5) 3px, transparent 3px, transparent 7px)",
                  transition: "all 0.3s",
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* PROENGAGE BANNER */}
      <ProEngageBanner />

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

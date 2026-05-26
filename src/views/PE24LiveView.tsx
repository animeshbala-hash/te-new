import React from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import peHeroImg from "@/assets/pe-launch.jpg";

// ── Tokens ────────────────────────────────────────────────────────────────────
const FONT         = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";
const ACCENT_NAVY  = "#0D1B3E";
const B_YELLOW     = "#F79425";
const COLOUR       = "#803998";   // ProEngage purple
const COLOUR_DARK  = "#4a1f5c";
const COLOUR_LIGHT = "#F3EEFF";
const COLOUR_MID   = "#6b2e85";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

function DefinerBar({ colour }: { colour: string }) {
  return <div style={{ height: 3, background: colour, borderRadius: 2, width: 48, marginTop: 10, marginBottom: 24 }} />;
}

const SECTIONS = [
  { id: "pe24-hero",        label: "Overview"         },
  { id: "pe24-about",       label: "About Edition 24" },
  { id: "pe24-participate", label: "Get Involved"     },
];

const HOW_ITEMS = [
  { num: "01", title: "Browse Open Projects",   desc: "Explore skill-based volunteering projects posted by NGOs across the group. Filter by skill area, duration, and mode." },
  { num: "02", title: "Apply to a Project",     desc: "Select a project that matches your skills and professional goals and submit your application through Tata Engage." },
  { num: "03", title: "Make an Impact",         desc: "Work with the NGO over 3–6 months, contribute your professional skills, and log your hours on completion." },
];

export default function PE24LiveView() {
  const navigate    = useAppNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ fontFamily: FONT, background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>

      <div style={{ height: 3, background: COLOUR, width: "100%" }} />
      <SubPageDotRail sections={SECTIONS} accentColour={COLOUR} />

      {/* ── HERO ── */}
      <div id="pe24-hero" style={{ position: "relative", minHeight: "92vh", overflow: "hidden",
        display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={peHeroImg} alt="ProEngage Edition 24"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0,
          background: `linear-gradient(110deg, ${COLOUR}e8 0%, ${COLOUR}cc 40%, ${COLOUR}88 62%, ${COLOUR}33 100%)` }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto",
          padding: "0 64px", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>

            {/* LIVE badge */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: B_YELLOW,
                boxShadow: `0 0 0 3px ${B_YELLOW}55`, flexShrink: 0,
                animation: "pePulse 1.6s ease-in-out infinite" }} />
              <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700,
                letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
                ProEngage Edition 24 is Live
              </span>
            </span>

            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px",
              textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 10px" }}>
              Skill-Based Volunteering · Edition 24
            </p>
            <div style={{ width: 48, height: 2, background: B_YELLOW, borderRadius: 2, margin: "0 0 22px" }} />

            <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 400,
              color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 16px" }}>
              ProEngage
            </h1>
            <p style={{ fontFamily: FONT, fontSize: 17, fontWeight: 600, color: B_YELLOW,
              margin: "0 0 12px", fontStyle: "italic" }}>
              "Edition 24 is now open"
            </p>
            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.8,
              color: "rgba(255,255,255,0.72)", margin: "0 0 40px", maxWidth: 480 }}>
              ProEngage is the Tata Group's flagship part-time, skill-based volunteering programme.
              Browse open projects and apply your professional skills to create meaningful, lasting change.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => navigate(isLoggedIn ? "proengage" : "register-role")}
                style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                  borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14,
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.25)" }}>
                Browse Open Projects →
              </button>
              <button onClick={() => document.getElementById("pe24-about")?.scrollIntoView({ behavior: "smooth" })}
                style={{ fontFamily: FONT, background: "rgba(255,255,255,0.12)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: 10,
                  padding: "14px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── ABOUT EDITION 24 ── */}
      <section id="pe24-about" style={{ padding: "88px 56px", background: "transparent" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "1.8px",
              textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Edition 24</p>
            <h2 style={{ fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
              Skill as a force<br />for social good
            </h2>
            <DefinerBar colour={COLOUR} />
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 20 }}>
              ProEngage brings together Tata talent and civil society organisations to create
              meaningful, long-term impact through skill-based volunteering. Through ProEngage,
              volunteers don't just give back — they lead, problem-solve, and create lasting change.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82 }}>
              Edition 24 projects are now live. Browse open opportunities across areas including
              strategy, technology, finance, legal, communications, and more.
            </p>
          </div>

          {/* Stats panel */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "Since 2014", label: "Programme running" },
              { num: "10 years", label: "Of skill-based impact" },
              { num: "30+ NGOs", label: "Partner organisations" },
              { num: "Multiple skills", label: "Areas covered" },
            ].map((s) => (
              <div key={s.num} style={{ background: "#fff", border: "1px solid #e8e8f0",
                borderRadius: 14, padding: "24px 22px",
                boxShadow: "0 2px 12px rgba(13,27,62,0.05)" }}>
                <div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 900, color: COLOUR,
                  marginBottom: 4, letterSpacing: "-0.5px" }}>{s.num}</div>
                <div style={{ fontFamily: FONT, fontSize: 13, color: "#64748B", lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO GET INVOLVED ── */}
      <section id="pe24-participate" style={{ background: "#F0F4FA", padding: "88px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Get involved</p>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
            How ProEngage works
          </h2>
          <DefinerBar colour={COLOUR} />
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, maxWidth: 640, marginBottom: 48 }}>
            A structured, part-time volunteering experience designed around your professional skills
            and schedule.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
            {HOW_ITEMS.map((item) => (
              <div key={item.num} style={{ background: "#fff", borderRadius: 16, padding: "32px 28px",
                boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: COLOUR_LIGHT,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20,
                  fontFamily: FONT, fontSize: 18, fontWeight: 800, color: COLOUR_DARK }}>
                  {item.num}
                </div>
                <div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 800, color: ACCENT_NAVY, marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Eligibility note — light purple tint */}
          <div style={{ background: COLOUR_LIGHT, border: `1.5px solid ${COLOUR}44`,
            borderRadius: 14, padding: "28px 32px", marginBottom: 48 }}>
            <p style={{ fontFamily: FONT, fontSize: 12, fontWeight: 700, letterSpacing: "1.5px",
              textTransform: "uppercase", color: COLOUR_MID, marginBottom: 12 }}>Eligibility</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Open to all permanent Tata Group employees",
                "Must have at least 2 years of professional experience",
                "Commitment of 3–6 months, part-time alongside regular work",
                "Participation logged as volunteering hours on Tata Engage",
              ].map((pt) => (
                <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M2 7l3.5 3.5L12 3" stroke={COLOUR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ fontFamily: FONT, fontSize: 14, color: "#475569", lineHeight: 1.6 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={() => navigate(isLoggedIn ? "proengage" : "register-role")}
              style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                borderRadius: 10, padding: "16px 40px", fontWeight: 800, fontSize: 15,
                cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.18)" }}>
              Browse Open Projects →
            </button>
            <p style={{ fontFamily: FONT, fontSize: 13, color: "#64748B", marginTop: 16 }}>
              Questions? Reach out to{" "}
              <a href="mailto:tataengage@tata.com" style={{ color: COLOUR_MID, textDecoration: "none", fontWeight: 600 }}>
                tataengage@tata.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

    </div>
  );
}

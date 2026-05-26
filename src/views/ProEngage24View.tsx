import React from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import heroImg from "@/assets/pe-launch.jpg";

const FONT        = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";
const ACCENT_NAVY = "#0D1B3E";
const COLOUR      = "#333399";   // ProEngage indigo
const COLOUR_LIGHT = "#EEEEFF";

const SECTIONS = [
  { id: "pe24-hero",    label: "Overview" },
  { id: "pe24-content", label: "Details"  },
];

export default function ProEngage24View() {
  const navigate = useAppNavigate();

  return (
    <div style={{ background: "#f7f8fc", minHeight: "100vh", fontFamily: FONT }}>

      <div style={{ height: 3, background: COLOUR, width: "100%" }} />
      <SubPageDotRail sections={SECTIONS} accentColour={COLOUR} />

      {/* HERO */}
      <div id="pe24-hero" style={{
        position: "relative", minHeight: "88vh", display: "flex",
        alignItems: "center", overflow: "hidden", paddingTop: 64,
      }}>
        <img src={heroImg} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0,
          background: "linear-gradient(120deg, rgba(30,20,80,0.92) 0%, rgba(51,51,153,0.75) 45%, rgba(51,51,153,0.30) 100%)" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px", width: "100%" }}>
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)", margin: "0 0 12px" }}>
              ProEngage · Edition 24 · Skill-Based Volunteering
            </p>
            <div style={{ width: 48, height: 2, background: "rgba(255,255,255,0.4)", borderRadius: 2, margin: "0 0 22px" }} />
            <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 400,
              color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 22px" }}>
              ProEngage<br />Edition 24
            </h1>
            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.8,
              color: "rgba(255,255,255,0.78)", margin: "0 0 40px", maxWidth: 440 }}>
              Skill-based volunteering that connects Tata professionals with credible NGOs for meaningful, time-bound impact projects.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate("proengage")}
                style={{ fontFamily: FONT, background: "#F5A623", color: "#0D1B3E", border: "none",
                  borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14,
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.25)" }}>
                Browse Open Projects →
              </button>
              <button
                onClick={() => navigate("about-proengage")}
                style={{ fontFamily: FONT, background: "rgba(255,255,255,0.12)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: 10,
                  padding: "14px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PLACEHOLDER CONTENT */}
      <div id="pe24-content" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 56px" }}>
        <div style={{
          background: "#fff", border: "2px dashed #d0d0e8", borderRadius: 20,
          padding: "72px 56px", textAlign: "center",
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18, background: COLOUR_LIGHT,
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={COLOUR} strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR, margin: "0 0 12px" }}>
            Content coming soon
          </p>
          <h2 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 900, color: ACCENT_NAVY,
            letterSpacing: "-0.4px", margin: "0 0 16px" }}>
            ProEngage Edition 24 — Full page in progress
          </h2>
          <p style={{ fontFamily: FONT, fontSize: 15, color: "#64748B", lineHeight: 1.8,
            maxWidth: 480, margin: "0 auto 32px" }}>
            The detailed edition page with project highlights, volunteer spotlights, and impact stories will be published here shortly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("proengage")}
              style={{ fontFamily: FONT, background: COLOUR, color: "#fff", border: "none",
                borderRadius: 10, padding: "13px 26px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              Browse Open Projects →
            </button>
            <button
              onClick={() => navigate("about-proengage")}
              style={{ fontFamily: FONT, background: "transparent", color: COLOUR,
                border: `1.5px solid ${COLOUR}`, borderRadius: 10,
                padding: "13px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
              About ProEngage
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

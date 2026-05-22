import React from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tsmHeroImg from "@/assets/homepagebanner/4. Mithapur_Eco-Tourism_LEEPEN_Harivan Farm_2022-23_Lipan Work (5).jpeg";

const FONT        = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";
const ACCENT_NAVY = "#0D1B3E";
const COLOUR      = "#C3DB6F";   // TSM lime-green
const COLOUR_MID  = "#8aad2a";
const COLOUR_DARK = "#4a6b0a";
const COLOUR_LIGHT = "#f2f8dc";
const B_YELLOW    = "#F79425";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const SECTIONS = [
  { id: "tsm26-hero",        label: "Overview"         },
  { id: "tsm26-edition",     label: "2026 Edition"     },
  { id: "tsm26-participate", label: "How to participate" },
];

const PARTICIPATE_ITEMS = [
  {
    num: "01",
    title: "DIY Activities",
    desc: "Access the Do It Yourself ideas using the DIY KIT — take action independently at your own pace.",
  },
  {
    num: "02",
    title: "Company Activities",
    desc: "Participate in company curated activities. Reach out to your company's CSR/Volunteering SPOC for more information.",
  },
  {
    num: "03",
    title: "Tata Engage Opportunities",
    desc: "Participate in Tata Engage facilitated "One Tata" volunteering opportunities across the month.",
  },
];

const CONTACT_ITEMS = [
  {
    org: "Tata Communications",
    activity: "Green June activity",
    contact: "Harish Kulkarni",
    email: "harish.kulkarni@tatacommunications.com",
  },
  {
    org: "Tata Power Group",
    activity: "Climate Crew activities",
    contact: "Upadhye Saurabh",
    email: "saurabh.upadhye@tatapower.com",
  },
  {
    org: "WWF Events",
    activity: "WWF partnership events",
    contact: "Tata Engage team",
    email: "tataengage@tata.com",
  },
];

const THEME_CHIPS = [
  "Demystifying Sustainability",
  "Decarbonization",
  "Resource Efficiency",
  "Biodiversity",
];

export default function TSM26LiveView() {
  const navigate    = useAppNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ fontFamily: FONT, background: "#f7f8fc", minHeight: "100vh" }}>

      <div style={{ height: 3, background: COLOUR, width: "100%" }} />
      <SubPageDotRail sections={SECTIONS} accentColour={COLOUR} />

      {/* ── HERO ── */}
      <div id="tsm26-hero" style={{ position: "relative", minHeight: "92vh", overflow: "hidden",
        display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={tsmHeroImg} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0,
          background: `linear-gradient(110deg, ${COLOUR}e8 0%, ${COLOUR}cc 38%, ${COLOUR}aa 58%, ${COLOUR}77 78%, ${COLOUR}44 100%)` }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto",
          padding: "0 64px", width: "100%" }}>
          <div style={{ maxWidth: 600 }}>
            {/* LIVE badge */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff",
                boxShadow: "0 0 0 3px rgba(255,255,255,0.35)", flexShrink: 0,
                animation: "tsmPulse 1.6s ease-in-out infinite" }} />
              <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700,
                letterSpacing: "1.4px", textTransform: "uppercase", color: "#fff" }}>
                TSM 2026 is Live
              </span>
            </span>

            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)", margin: "0 0 12px" }}>
              Annual Initiative · June 2026
            </p>
            <div style={{ width: 48, height: 2, background: COLOUR, borderRadius: 2, margin: "0 0 22px" }} />

            {/* TSM26 Logo placeholder */}
            <div style={{ width: 64, height: 64, borderRadius: 14, background: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center",
              justifyContent: "center", marginBottom: 20 }}>
              <img
                src="/src/assets/TSM26 LOGO.png"
                alt="TSM 2026 Logo"
                style={{ width: 48, height: 48, objectFit: "contain" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 400,
              color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 16px",
              whiteSpace: "pre-line" }}>
              {"Tata\nSustainability\nMonth 2026"}
            </h1>
            <p style={{ fontFamily: FONT, fontSize: 17, fontWeight: 700, color: "#fff",
              margin: "0 0 8px", fontStyle: "italic" }}>
              "Thinking is good, Doing is better"
            </p>
            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.8,
              color: "rgba(255,255,255,0.78)", margin: "0 0 40px", maxWidth: 480 }}>
              Join 1 million+ Tata colleagues, family members and retirees to make a direct impact
              on the community and environment this June.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => navigate(isLoggedIn ? "dashboard" : "register-role")}
                style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                  borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14,
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.25)" }}
              >
                Register to Volunteer →
              </button>
              <a
                href="https://tatasustainability.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: FONT, background: "rgba(255,255,255,0.12)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: 10,
                  padding: "14px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer",
                  textDecoration: "none", display: "inline-block" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2026 EDITION ── */}
      <section id="tsm26-edition" style={{ padding: "88px 56px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>The 2026 Edition</p>
          <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY,
            letterSpacing: "-0.5px", margin: "0 0 8px" }}>
            Thinking is good, Doing is better
          </h2>
          <div style={{ height: 3, background: COLOUR, borderRadius: 2, width: 48, marginBottom: 28 }} />

          <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82,
            maxWidth: 760, marginBottom: 32 }}>
            The 2026 edition of Tata Sustainability Month emphasises action — inviting Tata employees
            to take small and decisive steps to imbibe a more sustainable lifestyle. The monthly
            activities are divided into weekly sub-themes, each offering tailored content and
            activities that align with Tata Group's Aalingana pillars.
          </p>

          {/* Theme chips */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {THEME_CHIPS.map((chip) => (
              <span key={chip} style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600,
                padding: "8px 18px", borderRadius: 100, background: COLOUR_LIGHT,
                border: `1px solid ${COLOUR}55`, color: COLOUR_DARK }}>
                {chip}
              </span>
            ))}
          </div>

          {/* Video placeholder */}
          <div style={{ borderRadius: 18, overflow: "hidden", background: ACCENT_NAVY,
            boxShadow: "0 8px 40px rgba(13,27,62,0.18)", position: "relative",
            aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center",
            maxWidth: 760 }}>
            <div style={DIAG} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%",
                background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.7)",
                margin: 0 }}>
                Watch this video to know about TSM 2026
              </p>
            </div>
          </div>
          <p style={{ fontFamily: FONT, fontSize: 12, color: "#94a3b8", marginTop: 12 }}>
            Video placeholder — asset to be linked by the team.
          </p>

          {/* Visit link */}
          <div style={{ marginTop: 36, padding: "20px 24px", background: COLOUR_LIGHT,
            border: `1px dashed ${COLOUR}66`, borderRadius: 14, display: "inline-flex",
            alignItems: "center", gap: 14 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLOUR_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span style={{ fontFamily: FONT, fontSize: 14, color: COLOUR_DARK }}>
              To know more and participate in TSM —{" "}
              <a href="https://tatasustainability.com" target="_blank" rel="noopener noreferrer"
                style={{ color: COLOUR_DARK, fontWeight: 700, textDecoration: "underline" }}>
                visit tatasustainability.com
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── HOW TO PARTICIPATE ── */}
      <section id="tsm26-participate" style={{ padding: "88px 56px", background: "#f5f5fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Get involved</p>
          <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY,
            letterSpacing: "-0.5px", margin: "0 0 8px" }}>
            Interested in volunteering during TSM 2026?
          </h2>
          <div style={{ height: 3, background: COLOUR, borderRadius: 2, width: 48, marginBottom: 20 }} />
          <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82,
            maxWidth: 660, marginBottom: 48 }}>
            Join 1 million+ Tata colleagues, family members and retirees to make a direct impact on
            the community and environment. Participate in a volunteering activity of your choice:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
            {PARTICIPATE_ITEMS.map((item) => (
              <div key={item.num} style={{ background: "#fff", borderRadius: 16, padding: 32,
                boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: COLOUR_LIGHT,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20, fontFamily: FONT, fontSize: 20, fontWeight: 700, color: COLOUR_MID }}>
                  {item.num}
                </div>
                <div style={{ fontFamily: FONT, fontSize: 17, fontWeight: 800, color: ACCENT_NAVY,
                  marginBottom: 10 }}>{item.title}</div>
                <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Specific contacts */}
          <div style={{ background: ACCENT_NAVY, borderRadius: 20, padding: "40px 40px",
            position: "relative", overflow: "hidden" }}>
            <div style={DIAG} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
                textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>
                Specific activities
              </p>
              <h3 style={{ fontFamily: FONT, fontSize: 22, fontWeight: 900, color: "#fff",
                marginBottom: 28, letterSpacing: "-0.3px" }}>
                Programme contacts
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {CONTACT_ITEMS.map((c, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)", borderRadius: 14, padding: "20px 22px" }}>
                    <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: COLOUR,
                      marginBottom: 4 }}>{c.org}</div>
                    <div style={{ fontFamily: FONT, fontSize: 12, color: "rgba(255,255,255,0.6)",
                      marginBottom: 12 }}>{c.activity}</div>
                    <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: "#fff",
                      marginBottom: 2 }}>Reach out to {c.contact}</div>
                    <a href={`mailto:${c.email}`}
                      style={{ fontFamily: FONT, fontSize: 12, color: COLOUR,
                        textDecoration: "none", wordBreak: "break-all" as const }}>
                      {c.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <button
              onClick={() => navigate(isLoggedIn ? "dashboard" : "register-role")}
              style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                borderRadius: 10, padding: "16px 36px", fontWeight: 800, fontSize: 15,
                cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.18)" }}
            >
              Register to Volunteer →
            </button>
            <p style={{ fontFamily: FONT, fontSize: 13, color: "#64748B", marginTop: 16 }}>
              For queries, reach out to{" "}
              <a href="mailto:tataengage@tata.com"
                style={{ color: COLOUR_MID, textDecoration: "none", fontWeight: 600 }}>
                tataengage@tata.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes tsmPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>

    </div>
  );
}

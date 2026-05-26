import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tsmHeroImg  from "@/assets/TSM26_launch.jpg";
import tsmLogo     from "@/assets/TSM26 LOGO.png";

// ── Tokens ────────────────────────────────────────────────────────────────────
const FONT         = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";
const ACCENT_NAVY  = "#0D1B3E";
const B_YELLOW     = "#F79425";
const COLOUR       = "#C3DB6F";   // TSM lime-green
const COLOUR_DARK  = "#5a7a12";   // darker green for text on light
const COLOUR_LIGHT = "#f2f8dc";   // pastel green bg
const COLOUR_MID   = "#8aad2a";

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
  { id: "tsm26-hero",        label: "Overview"          },
  { id: "tsm26-edition",     label: "2026 Edition"      },
  { id: "tsm26-diy",         label: "DIY Guide"         },
  { id: "tsm26-participate", label: "How to participate" },
];

const PARTICIPATE_ITEMS = [
  { num: "01", title: "DIY Activities",           desc: "Access the Do It Yourself ideas using the DIY KIT — take action independently at your own pace." },
  { num: "02", title: "Company Activities",        desc: "Participate in company curated activities. Reach out to your company's CSR/Volunteering SPOC." },
  { num: "03", title: "Tata Engage Opportunities", desc: "Participate in Tata Engage facilitated \"One Tata\" volunteering opportunities across June." },
];

const CONTACT_ITEMS = [
  { org: "Tata Communications", activity: "Green June activity",       contact: "Harish Kulkarni", email: "harish.kulkarni@tatacommunications.com" },
  { org: "Tata Power Group",    activity: "Climate Crew activities",   contact: "Upadhye Saurabh",  email: "saurabh.upadhye@tatapower.com" },
  { org: "WWF Events",          activity: "WWF partnership events",    contact: "Tata Engage team", email: "tataengage@tata.com" },
];

const THEME_CHIPS = ["Demystifying Sustainability", "Decarbonization", "Resource Efficiency", "Biodiversity"];

const DIY_CATEGORIES = [
  {
    title: "Water Conservation",
    colour: "#135EA9",
    items: ["Let Every Drop Count — Build rooftop or balcony rainwater harvesting systems", "Make Conservation Water-tight — Help schools and buildings identify leaks and reduce waste", "Transform Grey as the New Blue — Train communities to reuse greywater for gardening"],
  },
  {
    title: "Greening & Biodiversity",
    colour: COLOUR_DARK,
    items: ["Plant & Protect — Plant native saplings in schools, societies or public spaces", "Sow a Great Idea — Create and distribute seed balls before monsoons", "Build A Better Nest — Create nesting dispensers for urban birds", "Bee Friendly with Nature — Create pollinator-friendly spaces with nectar-rich plants"],
  },
  {
    title: "Waste Reduction & Circularity",
    colour: "#D84926",
    items: ["Make a Clean Sweep — Join clean-up drives at beaches, parks and lakesides", "Fix it. Don't ditch it. — Host repair workshops for clothes, appliances or furniture", "Charge that E-Waste Collection — Organise e-waste drives in offices or housing societies", "Give Scraps a Second Life — Upcycle old T-shirts, bottles and scrap materials with NGOs"],
  },
  {
    title: "Climate & Sustainability Awareness",
    colour: "#C8850A",
    items: ["Spread the Good Word — Conduct sustainability sessions in schools and communities", "Make Sustainability Go Viral — Create shareable posters and campaign materials", "Start An Eco Challenge — Run no-plastic weeks or low-energy community challenges", "Let Your Voice Drive Change — Record environmental books for visually impaired learners"],
  },
];

import React from "react";

export default function TSM26LiveView() {
  const navigate    = useAppNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ fontFamily: FONT, background: "transparent", minHeight: "100vh", position: "relative",
      backgroundImage: "radial-gradient(circle, rgba(13,27,62,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>

      <div style={{ height: 3, background: COLOUR, width: "100%" }} />
      <SubPageDotRail sections={SECTIONS} accentColour={COLOUR} />

      {/* ── HERO ── */}
      <div id="tsm26-hero" style={{ position: "relative", minHeight: "92vh", overflow: "hidden",
        display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img src={tsmHeroImg} alt="Tata Sustainability Month 2026"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0,
          background: `linear-gradient(110deg, ${ACCENT_NAVY}e8 0%, ${ACCENT_NAVY}cc 40%, ${ACCENT_NAVY}88 62%, ${ACCENT_NAVY}33 100%)` }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto",
          padding: "0 64px", width: "100%" }}>
          <div style={{ maxWidth: 620 }}>

            {/* LIVE badge */}
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.28)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: COLOUR,
                boxShadow: `0 0 0 3px ${COLOUR}55`, flexShrink: 0,
                animation: "tsmPulse 1.6s ease-in-out infinite" }} />
              <span style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700,
                letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
                TSM 2026 is Live
              </span>
            </span>

            {/* TSM Logo — no H1 needed */}
            <div style={{ marginBottom: 24 }}>
              <img src={tsmLogo} alt="TSM 2026"
                style={{ height: 80, width: "auto", objectFit: "contain", display: "block" }} />
            </div>

            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.8,
              color: "rgba(255,255,255,0.78)", margin: "0 0 40px", maxWidth: 480 }}>
              Join 1 million+ Tata colleagues, family members and retirees to make a direct impact
              on the community and environment this June.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => navigate(isLoggedIn ? "dashboard" : "register-role")}
                style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                  borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14,
                  cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.25)" }}>
                Register to Volunteer →
              </button>
              <a href="https://tatasustainability.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: FONT, background: "rgba(255,255,255,0.12)", color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: 10,
                  padding: "14px 22px", fontWeight: 600, fontSize: 14,
                  textDecoration: "none", display: "inline-block" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2026 EDITION ── */}
      <section id="tsm26-edition" style={{ padding: "88px 56px", background: "transparent" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "1.8px",
              textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>The 2026 Edition</p>
            <h2 style={{ fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
              Thinking is good,<br />Doing is better
            </h2>
            <DefinerBar colour={COLOUR} />
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 24 }}>
              The 2026 edition of Tata Sustainability Month emphasises action — inviting Tata employees
              to take small and decisive steps to imbibe a more sustainable lifestyle.
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 32 }}>
              Monthly activities are divided into weekly sub-themes, each offering tailored content
              and activities aligned with Tata Group's Aalingana pillars.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {THEME_CHIPS.map((chip) => (
                <span key={chip} style={{ fontFamily: FONT, fontSize: 12, fontWeight: 600,
                  padding: "7px 16px", borderRadius: 100, background: COLOUR_LIGHT,
                  border: `1px solid ${COLOUR}55`, color: COLOUR_DARK }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div style={{ borderRadius: 18, overflow: "hidden", background: ACCENT_NAVY,
            boxShadow: "0 8px 40px rgba(13,27,62,0.18)", position: "relative",
            aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={DIAG} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: `2px solid ${COLOUR}`,
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={COLOUR}><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p style={{ fontFamily: FONT, fontSize: 14, color: "rgba(255,255,255,0.6)", margin: "0 0 6px" }}>
                Watch this video to know about TSM 2026
              </p>
              <p style={{ fontFamily: FONT, fontSize: 11, color: "rgba(255,255,255,0.35)", margin: 0 }}>
                Video asset to be linked by the team
              </p>
            </div>
          </div>
        </div>

        {/* Visit link */}
        <div style={{ maxWidth: 1100, margin: "40px auto 0" }}>
          <div style={{ padding: "18px 24px", background: COLOUR_LIGHT,
            border: `1px dashed ${COLOUR}66`, borderRadius: 14, display: "inline-flex",
            alignItems: "center", gap: 12 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOUR_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span style={{ fontFamily: FONT, fontSize: 14, color: COLOUR_DARK }}>
              To know more and participate —{" "}
              <a href="https://tatasustainability.com" target="_blank" rel="noopener noreferrer"
                style={{ color: COLOUR_DARK, fontWeight: 700, textDecoration: "underline" }}>
                visit tatasustainability.com
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── DIY GUIDE ── */}
      <section id="tsm26-diy" style={{ background: "#F0F4FA", padding: "88px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>DIY Volunteering Guide</p>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
            Being a Doer
          </h2>
          <DefinerBar colour={COLOUR} />
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, maxWidth: 640, marginBottom: 48 }}>
            Big change begins with small, hands-on action. Pick an activity, gather your community,
            and turn good intentions into visible impact.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginBottom: 40 }}>
            {DIY_CATEGORIES.map((cat) => (
              <div key={cat.title} style={{ background: "#fff", border: "1px solid #e8e8f0",
                borderRadius: 16, padding: "28px 28px 24px", borderTop: `3px solid ${cat.colour}`,
                boxShadow: "0 2px 12px rgba(13,27,62,0.05)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: cat.colour, flexShrink: 0 }} />
                  <div style={{ fontFamily: FONT, fontSize: 15, fontWeight: 800, color: ACCENT_NAVY }}>{cat.title}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {cat.items.map((it) => (
                    <div key={it} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                        <path d="M2 7l3.5 3.5L12 3" stroke={cat.colour} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: FONT, fontSize: 13.5, color: "#475569", lineHeight: 1.6 }}>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "18px 24px", background: COLOUR_LIGHT,
            border: `1px solid ${COLOUR}55`, borderRadius: 14, display: "inline-flex",
            alignItems: "center", gap: 12 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={COLOUR_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
            <span style={{ fontFamily: FONT, fontSize: 14, color: COLOUR_DARK }}>
              Log your DIY hours with your volunteering SPOC or on your company portal ·{" "}
              <strong>#BeADoer #DoingIsBetter</strong>
            </span>
          </div>
        </div>
      </section>

      {/* ── HOW TO PARTICIPATE ── */}
      <section id="tsm26-participate" style={{ padding: "88px 56px", background: "transparent" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Get involved</p>
          <h2 style={{ fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px", margin: 0 }}>
            Interested in volunteering during TSM 2026?
          </h2>
          <DefinerBar colour={COLOUR} />
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.82, maxWidth: 660, marginBottom: 48 }}>
            Join 1 million+ Tata colleagues, family members and retirees to make a direct impact on
            the community and environment. Participate in a volunteering activity of your choice:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 }}>
            {PARTICIPATE_ITEMS.map((item) => (
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

          {/* Programme contacts — light green style, no navy */}
          <div style={{ background: COLOUR_LIGHT, border: `1.5px solid ${COLOUR}66`,
            borderRadius: 16, padding: "36px 40px", marginBottom: 56 }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px",
              textTransform: "uppercase", color: COLOUR_DARK, marginBottom: 8 }}>
              Specific activities
            </p>
            <h3 style={{ fontFamily: FONT, fontSize: 20, fontWeight: 900, color: ACCENT_NAVY,
              marginBottom: 24, letterSpacing: "-0.3px" }}>
              Programme contacts
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {CONTACT_ITEMS.map((c, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e8e8f0",
                  borderRadius: 12, padding: "16px 20px", display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: COLOUR_DARK, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: ACCENT_NAVY }}>{c.org}</span>
                    <span style={{ fontFamily: FONT, fontSize: 13, color: "#64748B", margin: "0 8px" }}>·</span>
                    <span style={{ fontFamily: FONT, fontSize: 13, color: "#64748B" }}>{c.activity}</span>
                    <span style={{ fontFamily: FONT, fontSize: 13, color: "#475569", display: "block", marginTop: 2 }}>
                      Reach out to <strong>{c.contact}</strong> —{" "}
                      <a href={`mailto:${c.email}`} style={{ color: COLOUR_DARK, textDecoration: "none" }}>{c.email}</a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={() => navigate(isLoggedIn ? "dashboard" : "register-role")}
              style={{ fontFamily: FONT, background: B_YELLOW, color: ACCENT_NAVY, border: "none",
                borderRadius: 10, padding: "16px 40px", fontWeight: 800, fontSize: 15,
                cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.18)" }}>
              Register to Volunteer →
            </button>
            <p style={{ fontFamily: FONT, fontSize: 13, color: "#64748B", marginTop: 16 }}>
              For queries, reach out to{" "}
              <a href="mailto:tataengage@tata.com" style={{ color: COLOUR_DARK, textDecoration: "none", fontWeight: 600 }}>
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

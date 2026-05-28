import { useState, useEffect, useRef } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { useAuth } from "@/context/AuthContext";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import tsmHeroImg  from "@/assets/homepagebanner/4. Mithapur_Eco-Tourism_LEEPEN_Harivan Farm_2022-23_Lipan Work (5).jpeg";
import tsmBelowImg from "@/assets/homepagebanner/General_Titan Company Ltd_01.jpg";

// ── Tokens ────────────────────────────────────────────────────────────────────
const FONT         = "'DM Sans','Noto Sans',ui-sans-serif,system-ui,sans-serif";
const ACCENT_NAVY  = "#0D1B3E";
const COLOUR       = "#C3DB6F"; // TSM lime-green
const COLOUR_MID   = "#8aad2a";
const COLOUR_LIGHT = "#f2f8dc";

const SECTIONS = [
  { id: "tsm-overview",    label: "Overview"          },
  { id: "tsm-aims",        label: "Aims"              },
  { id: "tsm-participate", label: "How to participate"},
];

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const PARTICIPATE_CARDS = [
  { title: "DIY Activities",                   desc: "Access the 'Do it yourself ideas' using the DIY KIT — take action independently at your own pace" },
  { title: "Company Activities",               desc: "Participate in company curated activities" },
  { title: "Tata Engage Opportunities",        desc: "Participate in Tata Engage facilitated 'One Tata' volunteering opportunities across the month" },
];

const COMPANY_CONTACTS = [

];

// ── DefinerBar ────────────────────────────────────────────────────────────────
function DefinerBar({ colour }: { colour: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ height: 3, background: "#e8e8f0", borderRadius: 2, overflow: "hidden", width: 48, marginTop: 10 }}>
      <div style={{ height: "100%", background: colour, borderRadius: 2, transition: "width 0.65s cubic-bezier(0.22,1,0.36,1)", width: on ? "100%" : "0%" }} />
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function TataSmView() {
  const navigate = useAppNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ background: "transparent", minHeight: "100vh", position: "relative" }}>

      {/* Top accent line — required on all public programme pages */}
      <div style={{ height: 3, background: COLOUR, width: "100%" }} />

      <SubPageDotRail sections={SECTIONS} accentColour={COLOUR} />

      {/* ════════════════════ HERO ════════════════════ */}
      <div style={{ position: "relative", minHeight: "92vh", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <img
          src={tsmHeroImg}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* Pure lime tint — matches Contact page treatment */}
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(110deg, ${COLOUR}e8 0%, ${COLOUR}cc 38%, ${COLOUR}aa 58%, ${COLOUR}77 78%, ${COLOUR}44 100%)` }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px", width: "100%" }}>
          <div style={{ maxWidth: 560 }}>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.6px", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", margin: "0 0 12px" }}>
              Annual Initiative · Every June
            </p>
            <div style={{ width: 48, height: 2, background: COLOUR, borderRadius: 2, margin: "0 0 22px" }} />
            <h1 style={{ fontFamily: FONT, fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.5px", margin: "0 0 22px", whiteSpace: "pre-line" }}>
              {"Tata\nSustainability\nMonth"}
            </h1>
            <p style={{ fontFamily: FONT, fontSize: 15, fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.78)", margin: "0 0 44px", maxWidth: 460 }}>
              An annual initiative led by the Tata Sustainability Group to deepen the understanding of sustainability among employees across Tata companies. Each June, TSM catalyzes actions and learning.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => navigate(isLoggedIn ? "dashboard" : "register-role")}
                style={{ fontFamily: FONT, background: "#F5A623", color: "#0D1B3E", border: "none", borderRadius: 10, padding: "14px 28px", fontWeight: 800, fontSize: 14, cursor: "pointer", boxShadow: "0 4px 20px rgba(13,27,62,0.25)" }}
              >
                Register to Volunteer →
              </button>
              <button
                onClick={() => document.getElementById("tsm-overview")?.scrollIntoView({ behavior: "smooth" })}
                style={{ fontFamily: FONT, background: "rgba(255,255,255,0.12)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.28)", borderRadius: 10, padding: "14px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════ OVERVIEW ════════════════════ */}
      <section id="tsm-overview" style={{ padding: "88px 56px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>About TSM</p>
            <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px" }}>Sustainability — understood, embraced, acted upon</h2>
            <DefinerBar colour={COLOUR} />
            <div style={{ marginTop: 28 }}>
              <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 16 }}>
                Tata Sustainability Month (TSM), observed every year in June, is a group-wide initiative that brings together Tata employees across companies, locations, and communities to champion sustainability in action. It is not just a moment in the calendar, but a reflection of the Tata Group's long-standing commitment to responsible business and nation-building.
              </p>
              <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 16 }}>
                At its core, TSM is about translating the Tata ethos into everyday behaviour. For over 150 years, the Tata Group has believed that businesses must serve a larger purpose, creating value not only for stakeholders, but for society at large. Sustainability, therefore, is deeply embedded in how Tata companies operate, innovate, and grow.
              </p>
              <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82, marginBottom: 16 }}>
                For Tata employees, TSM is an opportunity to actively participate in this shared responsibility. It moves sustainability beyond intent and into personal ownership, encouraging individuals to make mindful choices, contribute to communities, and collaborate through collective initiatives that drive real, visible impact.
              </p>
              <p style={{ fontFamily: FONT, fontSize: 15, color: "#475569", lineHeight: 1.82 }}>
                More importantly, TSM represents a shift from awareness to action. It brings together structured programs, shared experiences, and participation-driven initiatives that enable Tata employees to contribute meaningfully, reinforcing a culture where doing good is intentional, measurable, and sustained.
              </p>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 32px rgba(13,27,62,0.10)", position: "relative", zIndex: 1 }}>
              <img src={tsmBelowImg} alt="" style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>




      {/* ════════════════════ TSM AIMS ════════════════════ */}
      <section id="tsm-aims" style={{ padding: "88px 56px", background: "#f5f5fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Our Purpose</p>
          <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px" }}>TSM aims to</h2>
          <DefinerBar colour={COLOUR} />
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
              <div style={{ fontFamily: FONT, fontSize: 17, fontWeight: 800, color: ACCENT_NAVY, marginBottom: 12 }}>Unpack 'sustainability'</div>
              <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>To have a common understanding of the term and what it means for the Tata group.</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
              <div style={{ fontFamily: FONT, fontSize: 17, fontWeight: 800, color: ACCENT_NAVY, marginBottom: 12 }}>Mainstream sustainability</div>
              <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>And position it at the heart of business, by disseminating attributes of Tata sustainability policy, philosophy, principles and commitments.</div>
            </div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
              <div style={{ fontFamily: FONT, fontSize: 17, fontWeight: 800, color: ACCENT_NAVY, marginBottom: 12 }}>Inspire colleagues</div>
              <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>To take this understanding to the next level and to bring about a change in their lives through sustainable actions, making sustainability a habit.</div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════ HOW TO PARTICIPATE ════════════════════ */}
      <section id="tsm-participate" style={{ padding: "88px 56px", background: "#f5f5fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: COLOUR_MID, marginBottom: 10 }}>Get involved</p>
          <h2 style={{ fontFamily: FONT, fontSize: 30, fontWeight: 900, color: ACCENT_NAVY, letterSpacing: "-0.5px" }}>Join 1 million+ Tata colleagues</h2>
          <DefinerBar colour={COLOUR} />
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PARTICIPATE_CARDS.map((card, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 2px 12px rgba(13,27,62,0.06)", border: "1px solid #e8e8f0" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: COLOUR_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontFamily: FONT, fontSize: 20, fontWeight: 700, color: COLOUR_MID }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontFamily: FONT, fontSize: 17, fontWeight: 800, color: ACCENT_NAVY, marginBottom: 10 }}>{card.title}</div>
                <div style={{ fontFamily: FONT, fontSize: 14, color: "#64748B", lineHeight: 1.7 }}>{card.desc}</div>
              </div>
            ))}
          </div>



        </div>
      </section>

    </div>
  );
}

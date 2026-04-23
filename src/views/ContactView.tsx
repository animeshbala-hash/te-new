import { useRef, useState, useEffect } from "react";
import SubPageDotRail from "@/components/shared/SubPageDotRail";

const ACCENT       = "#C3DB6F";   // lime-green — Contact page
const ACCENT_DARK  = "#7A9A2A";
const ACCENT_LIGHT = "#F4FAE8";
const NAVY         = "#0D1B3E";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const SECTIONS = [
  { id: "contact-hero",    label: "Overview"     },
  { id: "contact-connect", label: "Connect"       },
  { id: "contact-social",  label: "Social"        },
];

function DefinerBar({ colour = ACCENT_DARK }: { colour?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ height: 3, background: "#e8e8f0", borderRadius: 2, overflow: "hidden", width: 48, marginTop: 10 }}>
      <div style={{ height: "100%", background: colour, borderRadius: 2, transition: "width 0.65s cubic-bezier(0.22,1,0.36,1)", width: on ? "100%" : "0%" }} />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div id="contact-hero" style={{ position: "relative", background: `linear-gradient(135deg, ${ACCENT_DARK} 0%, ${ACCENT} 100%)`, padding: "100px 56px 72px", overflow: "hidden" }}>
      <div style={DIAG} />
      <div style={{ position: "absolute", top: -80, right: -60, width: 440, height: 440, background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 68%)`, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 18 }}>
          Tata Engage · Get in Touch
        </p>
        <div style={{ width: 40, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
        <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(2.2rem,4.5vw,3.2rem)", fontWeight: 900, color: NAVY, lineHeight: 1.08, letterSpacing: "-1.5px", margin: "0 0 18px", maxWidth: 560 }}>
          Contact & Connect with Tata Engage
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(13,27,62,0.7)", maxWidth: 480 }}>
          Whether you're a civil society organisation, a Tata colleague, or a partner exploring collaboration — the Tata Engage team is here to help.
        </p>
      </div>

      {/* Quick-link boxes */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "40px auto 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
          {[
            { label: "Email us", value: "tataengage@tata.com", icon: "✉", bg: ACCENT_DARK, text: "#fff" },
            { label: "LinkedIn", value: "Tata Engage (official page)", icon: "in", bg: "#fff", text: NAVY },
            { label: "X / Twitter", value: "Tata Engage (official handle)", icon: "✕", bg: NAVY, text: "#fff", border: true },
          ].map((b, i) => (
            <div key={b.label} style={{ background: b.bg, padding: "28px 24px", borderRight: i < 2 ? `1px solid rgba(0,0,0,0.08)` : "none" }}>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: b.text === NAVY ? ACCENT_DARK + "99" : "rgba(255,255,255,0.45)", marginBottom: 10 }}>{b.label}</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: b.text, lineHeight: 1.4 }}>{b.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Connect section ───────────────────────────────────────────────────────────
function ConnectSection() {
  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: "Email",
      heading: "Get in touch directly",
      body: "Our team will guide you on areas you need assistance or respond to your queries.",
      detail: "tataengage@tata.com",
      detailHref: "mailto:tataengage@tata.com",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: "LinkedIn",
      heading: "Follow on LinkedIn",
      body: "Stay updated on volunteering programmes, partner opportunities, and impact stories from across the Tata ecosystem.",
      detail: "Tata Engage — official page",
      detailHref: "#",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
      label: "X (Twitter)",
      heading: "Follow on X",
      body: "Real-time updates on TVW editions, ProEngage openings, and volunteering stories from across the Tata Group.",
      detail: "Tata Engage — official handle",
      detailHref: "#",
    },
  ];

  return (
    <section id="contact-connect" style={{ background: "#f5f5fa", padding: "96px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: ACCENT_DARK, marginBottom: 10 }}>
          Ways to connect
        </p>
        <h2 style={{ fontSize: 30, fontWeight: 900, color: NAVY, letterSpacing: "-0.5px" }}>We'd love to hear from you</h2>
        <DefinerBar />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 44 }}>
          {cards.map(c => (
            <div
              key={c.label}
              style={{ background: "#fff", border: "1px solid #e8eef0", borderRadius: 18, padding: "32px 28px", transition: "transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.07)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 14, background: ACCENT_LIGHT, color: ACCENT_DARK, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {c.icon}
              </div>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: ACCENT_DARK, marginBottom: 10 }}>{c.label}</p>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: NAVY, marginBottom: 10, lineHeight: 1.3 }}>{c.heading}</h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.75, marginBottom: 20 }}>{c.body}</p>
              <a href={c.detailHref} style={{ fontSize: 13, fontWeight: 700, color: ACCENT_DARK, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                {c.detail} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Stay connected (social banner) ────────────────────────────────────────────
function SocialSection() {
  return (
    <section id="contact-social" style={{ background: "#fff", padding: "96px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: ACCENT_DARK, marginBottom: 10 }}>
          Stay connected
        </p>
        <h2 style={{ fontSize: 30, fontWeight: 900, color: NAVY, letterSpacing: "-0.5px" }}>Follow Tata Engage</h2>
        <DefinerBar />

        <div style={{ marginTop: 44, background: NAVY, borderRadius: 20, padding: "48px 52px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div style={DIAG} />
          <div style={{ position: "absolute", bottom: -60, right: -60, width: 300, height: 300, background: `radial-gradient(circle,${ACCENT}22 0%,transparent 68%)`, pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: ACCENT + "99", marginBottom: 14 }}>Stay in the loop</p>
            <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 20, fontStyle: "italic", color: "#fff", lineHeight: 1.65, marginBottom: 0 }}>
              Volunteering programmes, partner opportunities, and impact stories — straight from the Tata ecosystem.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", gap: 12, flexShrink: 0 }}>
            {["LinkedIn", "X / Twitter", "Website"].map(s => (
              <a key={s} href="#" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "12px 20px", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = ACCENT + "33"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)"}
              >
                {s} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Also reachable via */}
        <p style={{ marginTop: 32, fontSize: 14, color: "#94A3B8", textAlign: "center" }}>
          Also reachable via the <strong style={{ color: NAVY }}>Tata Sustainability</strong> and <strong style={{ color: NAVY }}>Tata Group</strong> platforms.
        </p>
      </div>
    </section>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ContactView() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'DM Sans',sans-serif", paddingTop: 64 }}>
      <div style={{ height: 4, background: ACCENT, position: "sticky", top: 64, zIndex: 100 }} />
      <SubPageDotRail sections={SECTIONS} accentColour={ACCENT} />
      <Hero />
      <ConnectSection />
      <SocialSection />
    </div>
  );
}

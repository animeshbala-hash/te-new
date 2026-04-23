import { useRef, useState, useEffect } from "react";
import SubPageDotRail from "@/components/shared/SubPageDotRail";

const ACCENT       = "#F0494E";   // red — Events page
const ACCENT_DARK  = "#C53035";
const ACCENT_LIGHT = "#FEF2F2";
const NAVY         = "#0D1B3E";
const B_BLUE       = "#4376BB";
const B_GREEN      = "#C3DB6F";
const B_GREEN_DARK = "#7A9A2A";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
  backgroundSize: "28px 28px",
  pointerEvents: "none",
};

const SECTIONS = [
  { id: "events-intro",  label: "Overview" },
  { id: "events-tsc22", label: "TSC 2022"  },
  { id: "events-volcon", label: "VOLCON 2024" },
  { id: "events-iave",  label: "IAVE 2022" },
];

function DefinerBar({ colour = ACCENT, light = false }: { colour?: string; light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setOn(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ height: 3, background: light ? "rgba(255,255,255,0.2)" : "#e8e8f0", borderRadius: 2, overflow: "hidden", width: 48, marginTop: 10 }}>
      <div style={{ height: "100%", background: light ? "rgba(255,255,255,0.7)" : colour, borderRadius: 2, transition: "width 0.65s cubic-bezier(0.22,1,0.36,1)", width: on ? "100%" : "0%" }} />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div style={{ position: "relative", background: NAVY, padding: "100px 56px 72px", overflow: "hidden" }}>
      <div style={DIAG} />
      <div style={{ position: "absolute", top: -80, right: -60, width: 440, height: 440, background: `radial-gradient(circle,${ACCENT}44 0%,transparent 68%)`, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 18 }}>
          Tata Engage · Events & Conclaves
        </p>
        <div style={{ width: 40, height: 3, background: ACCENT, borderRadius: 2, marginBottom: 24 }} />
        <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(2.2rem,4.5vw,3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.08, letterSpacing: "-1.5px", margin: "0 0 18px", maxWidth: 600 }}>
          Events & Global Engagement
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.6)", maxWidth: 480 }}>
          Tata Engage convenes leaders, volunteers, and global partners to celebrate the spirit of giving and chart the future of corporate volunteering.
        </p>
      </div>

      {/* Event index boxes */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "40px auto 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
          {[
            { date: "Nov 2022", label: "Tata Sustainability Conclave", tag: "TSC 2022", bg: ACCENT, text: "#fff" },
            { date: "Mar 2024", label: "Tata Volunteerism Conference", tag: "VOLCON 2024", bg: B_BLUE, text: "#fff" },
            { date: "Oct 2022", label: "IAVE World Volunteer Conference", tag: "Abu Dhabi", bg: B_GREEN, text: NAVY },
          ].map((b, i) => (
            <div
              key={b.tag}
              style={{ background: b.bg, padding: "28px 24px", cursor: "pointer", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none", transition: "filter 0.2s" }}
              onClick={() => document.getElementById(["events-tsc22", "events-volcon", "events-iave"][i])?.scrollIntoView({ behavior: "smooth" })}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.filter = "brightness(0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.filter = "none"}
            >
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: b.text === "#fff" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.4)", marginBottom: 10 }}>{b.date}</p>
              <p style={{ fontSize: 14, fontWeight: 800, color: b.text, lineHeight: 1.35, marginBottom: 10 }}>{b.label}</p>
              <span style={{ fontSize: 11, fontWeight: 700, background: b.text === "#fff" ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.10)", color: b.text, borderRadius: 100, padding: "3px 10px" }}>{b.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Shared event card layout ──────────────────────────────────────────────────
interface EventSectionProps {
  id: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  date: string;
  tag: string;
  title: string;
  subtitle: string;
  quote?: string;
  quoteAttrib?: string;
  paragraphs: string[];
  highlights?: { label: string; value: string }[];
  photoSide?: "left" | "right";
  bg?: string;
  awardsTable?: { category: string; winners: string }[];
}

function EventSection({ id, accent, accentDark, accentLight, date, tag, title, subtitle, quote, quoteAttrib, paragraphs, highlights, photoSide = "right", bg = "#fff", awardsTable }: EventSectionProps) {
  return (
    <section id={id} style={{ background: bg, padding: "96px 56px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52 }}>
          <div style={{ width: 4, height: 56, background: accent, borderRadius: 2, flexShrink: 0 }} />
          <div>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: accent, marginBottom: 6 }}>{date} · {tag}</p>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: NAVY, letterSpacing: "-0.4px", lineHeight: 1.2 }}>{title}</h2>
            <p style={{ fontSize: 14, color: "#64748B", marginTop: 4 }}>{subtitle}</p>
          </div>
        </div>

        {/* 2-column: text + photo placeholder */}
        <div style={{ display: "grid", gridTemplateColumns: photoSide === "left" ? "0.95fr 1.05fr" : "1.05fr 0.95fr", gap: 56, alignItems: "start", marginBottom: highlights || awardsTable ? 48 : 0 }}>

          {/* Text column */}
          <div style={{ order: photoSide === "left" ? 2 : 1 }}>
            {quote && (
              <div style={{ background: accentLight, borderLeft: `4px solid ${accent}`, borderRadius: "0 12px 12px 0", padding: "20px 24px", marginBottom: 28 }}>
                <div style={{ fontSize: 36, lineHeight: 0.7, color: accent + "50", fontFamily: "Georgia,serif", marginBottom: 10 }}>"</div>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontStyle: "italic", color: NAVY, lineHeight: 1.7, marginBottom: 10 }}>{quote}</p>
                {quoteAttrib && <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: accentDark + "aa" }}>{quoteAttrib}</p>}
              </div>
            )}
            {paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.82, marginBottom: 16 }}>{p}</p>
            ))}
          </div>

          {/* Photo placeholder — right or left */}
          <div style={{ order: photoSide === "left" ? 1 : 2 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", background: `linear-gradient(135deg,${accentLight} 0%,${accentLight}80 100%)`, border: `1px solid ${accent}20` }}>
              {/* Photo placeholder area — replace src with actual image */}
              <div style={{ height: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: accent + "22", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </div>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: accent + "99", letterSpacing: "1px", textTransform: "uppercase" }}>Photo — {tag}</p>
              </div>

              {/* Label plate */}
              <div style={{ background: "#fff", borderTop: `3px solid ${accent}`, padding: "14px 20px" }}>
                <p style={{ fontSize: 12, color: "#475569", lineHeight: 1.5 }}><strong style={{ color: NAVY }}>{tag}</strong> · {date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights row */}
        {highlights && (
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${highlights.length},1fr)`, gap: 12 }}>
            {highlights.map(h => (
              <div key={h.label} style={{ background: accentLight, borderRadius: 12, padding: "20px 20px", borderTop: `3px solid ${accent}` }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: accentDark, letterSpacing: "-0.5px" }}>{h.value}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: accentDark + "99", marginTop: 5, letterSpacing: "0.5px" }}>{h.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Awards table */}
        {awardsTable && (
          <div style={{ marginTop: 44 }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: accent, marginBottom: 20 }}>Award Categories & Winners</p>
            <div style={{ border: `1px solid ${accent}22`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: accentDark, padding: "12px 20px" }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Category</span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Winners</span>
              </div>
              {awardsTable.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "14px 20px", background: i % 2 === 0 ? "#fff" : accentLight, borderTop: `1px solid ${accent}18` }}>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: NAVY, lineHeight: 1.4 }}>{row.category}</span>
                  <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.5 }}>{row.winners}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function EventsView() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'DM Sans',sans-serif", paddingTop: 64 }}>
      <div style={{ height: 4, background: ACCENT, position: "sticky", top: 64, zIndex: 100 }} />
      <SubPageDotRail sections={SECTIONS} accentColour={ACCENT} />
      <Hero />

      {/* Intro strip */}
      <section id="events-intro" style={{ background: "#f5f5fa", padding: "56px 56px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, maxWidth: 760 }}>
            From global conclaves to international volunteering forums, Tata Engage brings together leaders, volunteers, and partners to advance the cause of corporate volunteering. These landmark events celebrate milestones, share best practices, and set the agenda for what comes next.
          </p>
        </div>
      </section>

      {/* TSC 2022 */}
      <EventSection
        id="events-tsc22"
        accent={ACCENT}
        accentDark={ACCENT_DARK}
        accentLight={ACCENT_LIGHT}
        date="November 2022"
        tag="TSC 2022"
        title="Tata Sustainability Conclave 2022"
        subtitle="Volunteering @Tata: Embedding Quality & Scale — Taj Lands End, Mumbai"
        quote="While sustainability is one of the biggest challenges facing corporates today, it is also a big opportunity."
        quoteAttrib="N. Chandrasekaran, Chairman, Tata Sons"
        paragraphs={[
          "After a two-year break due to the pandemic, more than 200 leaders and sustainability professionals from the Tata Group came together at the Tata Sustainability Conclave 2022 (TSC 2022), inaugurated by the Group Chairman at Taj Lands End, Mumbai on 29th November, 2022.",
          "The volunteering session celebrated the Tata Group legacy of giving back and sought leadership perspectives on institutionalising volunteering while ensuring scale and quality. Moderated by Harish Bhat, Brand Custodian, Tata Sons, panelists from IHCL, Rallis, Tata Communications, and TCS shared their approaches to embedding volunteering within their respective business contexts.",
          "The Conclave concluded with the Tata Volunteering Week Awards, recognising companies and individuals who demonstrated exceptional commitment to social causes — felicitated by senior Tata Sons leaders.",
        ]}
        highlights={[
          { label: "Leaders in attendance", value: "200+" },
          { label: "Companies represented", value: "25+" },
          { label: "Awards presented", value: "9" },
        ]}
        bg="#fff"
      />

      {/* VOLCON 2024 */}
      <EventSection
        id="events-volcon"
        accent={B_BLUE}
        accentDark="#2D5494"
        accentLight="#EBF1FB"
        date="March 2024"
        tag="VOLCON 2024"
        title="TATA VOLCON 2024"
        subtitle="Celebrating a Million Hours — Taj Mahal Palace, Mumbai"
        quote="The Tata Group ranked prominently among corporate volunteering programmes worldwide in FY23. Moving ahead, we will continue to embed further scale and quality in volunteering towards increased social and environmental impact."
        quoteAttrib="Chacko Thomas, Group Chief Sustainability Officer, Tata Sons"
        paragraphs={[
          "On 6th March 2024, Tata Sustainability Group hosted TATA VOLCON 2024 at Taj Mahal Palace, Mumbai — bringing together 170 Tata leaders, volunteering leads, champions, and employees. Over the past seven years, collective efforts have contributed to the Tata Group clocking over a million volunteering hours annually, surpassing the aspiration of 4 volunteering hours per capita.",
          "Keynote speaker Nichole Cirillo, Executive Director of IAVE, congratulated the Tata Group for fostering a positive, inclusive, and sustainable culture of volunteering. She presented future trends in volunteering from IAVE's global research, and expressed hope that the Tata Group continues to be a global leader, achieving the landmark 10 PCVH performance in the near future.",
          "The evening celebrated dedication through the prestigious Tata Engage Awards — honouring 11 companies across 9 award categories. Two employees, Nitin Yadav (Tata Motors) and Arjinder Singh (Tata Power), were honoured for Exemplary Volunteering.",
        ]}
        highlights={[
          { label: "Leaders in attendance", value: "170" },
          { label: "Awards presented", value: "9" },
          { label: "Companies honoured", value: "11" },
          { label: "Annual hours clocked", value: "1M+" },
        ]}
        photoSide="left"
        bg="#F4F8F7"
        awardsTable={[
          { category: "Volunteering Stalwart", winners: "Tata Consultancy Services" },
          { category: "Highest Volunteering Hours", winners: "Tata Power Group · Tata Coffee · Tata Consulting Engineers · Tata Realty & Infrastructure" },
          { category: "Highest Per Capita Hours", winners: "Tata Power Group · Tata Coffee · Rallis India · Tata Realty & Infrastructure" },
          { category: "Highest % Unique Volunteers", winners: "Tata Communications · Titan Company · Rallis India · Tata Insights & Quants" },
          { category: "Excellence in Volunteering", winners: "Tata Communications · TCS · Titan Company · Rallis India · Tata Insights & Quants" },
          { category: "SPOC Hero", winners: "Shyam Sunder Singh (Tata Motors) · Harish Kulkarni (Tata Communications) · Santhi PS (Titan) + 2 more" },
          { category: "Exemplary Volunteering", winners: "Nitin Yadav, Tata Motors · Arjinder Singh, Tata Power Group" },
        ]}
      />

      {/* IAVE 2022 */}
      <EventSection
        id="events-iave"
        accent={B_GREEN_DARK}
        accentDark="#5A7520"
        accentLight="#F4FAE8"
        date="October 2022"
        tag="IAVE 2022"
        title="26th IAVE World Volunteer Conference"
        subtitle="Volunteering for the Common Good — ADNOC Business Center, Abu Dhabi"
        quote="For over 150 years, Tata Group has served as a contributor to public good. With a strong leadership commitment to broaden volunteering, we follow the big tent approach with a focus on impact volunteering."
        quoteAttrib="Chacko Thomas, Group Chief Sustainability Officer, Tata Sons"
        paragraphs={[
          "Tata Sustainability Group was invited as a panel member at the 26th IAVE World Volunteer Conference (24–27 October 2022, Abu Dhabi), for the plenary session: Corporate Volunteering for a Post-Pandemic World. The conference theme was 'Volunteering for the Common Good: Making Life Better for People and Communities.'",
          "Gauri Rajadhyaksha from Tata Sustainability Group shared the Tata Group's approach to volunteering and the role of Tata Engage in unifying all group companies onto a common platform. She highlighted the importance of company-specific volunteering programmes and the IAVE recommendation to 'widen the big tent of volunteering' with a focus on skill-based, impact-focused engagement.",
          "The Tata Group has been a member and contributor to IAVE since 2018. Tata Engage won the 'Best Global Volunteer Programme' award from IAVE in 2019 and joined IAVE's Global Corporate Volunteer Council — a consortium of global companies with volunteering presence in three or more countries.",
        ]}
        highlights={[
          { label: "IAVE member since", value: "2018" },
          { label: "Best Global Volunteer Programme Award", value: "2019" },
          { label: "Countries in IAVE network", value: "100+" },
        ]}
        bg="#fff"
      />
    </div>
  );
}

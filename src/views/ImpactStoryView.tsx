import { useParams } from "react-router-dom";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import SubPageDotRail from "@/components/shared/SubPageDotRail";
import drHeroPhoto from "@/assets/dr_photo_2.jpg";
import tataMotors1 from "@/assets/Tata_Motors_1.jpg";

const ACCENT_NAVY = "#0D1B3E";
const B_INDIGO    = "#333399";
const B_RED       = "#E8401C";

// ─── Story data ───────────────────────────────────────────────────────────────
// To add a new story: append an object here. The `slug` maps to the URL.
// `featured: true` means it appears in the hero slides.
// `archived: true` keeps it in Media but off the homepage.

export interface StoryQuote {
  text: string;
  attribution: string;
  role?: string;
}

export interface StorySection {
  body: string;
}

export interface ImpactStory {
  slug: string;
  title: string;
  eyebrow: string;         // e.g. "Disaster Response"
  tag: string;             // short category tag, e.g. "DR2024"
  accentColor: string;
  heroImage: string;       // imported asset
  heroImageAlt: string;
  date: string;            // e.g. "July 2024"
  excerpt: string;         // 1–2 sentences for cards
  openingPara: string;     // shown in italic drop-cap style
  sections: StorySection[];
  quotes?: StoryQuote[];
  stats?: { num: string; label: string }[];
  featured?: boolean;
  archived?: boolean;
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    slug: "wayanad-2024",
    title: "United in Action: ONE Tata Wayanad Landslide Response 2024",
    eyebrow: "Disaster Response",
    tag: "Disaster Response",
    accentColor: B_RED,
    heroImage: drHeroPhoto,
    heroImageAlt: "Tata volunteers on the ground in Wayanad",
    date: "July–August 2024",
    excerpt: "34 volunteers from 12 Tata companies stepped forward within 48 hours of the Wayanad landslides — supporting 1,000 tribal families across 45 days of relief operations.",
    openingPara:
      "In the early hours of July 30, 2024, the hills of Wayanad trembled. Torrential rains — nearly 50 cm in just 48 hours — loosened the fragile soil, triggering a devastating landslide that swallowed an entire village. Hours later, a second landslide struck further north. The accumulated debris altered the course of river waters, causing flash floods that swept away more villages.",
    sections: [
      {
        body: "Early next day, the ONE Tata Kerala Landslides and Floods Response moved in quickly to support immediate response, relief and subsequent rehabilitation of the affected. Several Tata Group companies, under the aegis of Tata Sustainability Group, collaborated with local and Government disaster response agencies, NGOs, medical professionals, and other key responders in the relief operations.",
      },
      {
        body: "The ONE Tata Disaster Response Framework, anchored by TSG, brings together the strength of Tata companies, their technical capabilities, and their people — into one coordinated, collective effort. From immediate emergency relief to long-term rehabilitation, the Group supports in distributing essential supplies for temporary shelters and restoring infrastructure in the aftermath of a disaster.",
      },
      {
        body: "In Wayanad, 34 core volunteers from 12 Tata Group companies stepped forward to help communities in crisis. Each volunteer spent 7–10 days and worked round the clock to ensure families received the support they needed and could begin their return to normalcy.",
      },
      {
        body: "Some of the critical tasks undertaken: equipment for ongoing search and rescue operations; food and essentials to 300 tribal affected families in relief camps and tribal hamlets; and 700 families provided with comprehensive family kits. Volunteers including women from Tata Elxsi were stationed at the Meppadi School relief camp, supporting logistics, coordination of aid and needs assessment with government response teams.",
      },
      {
        body: "1,000 tribal families in flood-prone areas and remote clusters across Wayanad were supported. Volunteers conducted needs assessments to identify the most vulnerable families, planned and ensured delivery of family kits comprising 11 items and weighing 65 kg — at the doorstep. The entire operation ran for 45 days. The families belonged to socially and economically backward categories, including Particularly Vulnerable Tribal Groups whose lives and livelihoods are in constant precarity. The relief phase was about restoring a sense of safety, agency, and dignity to those who endure nature's fury year after year.",
      },
      {
        body: "Their undeterred courage, compassion, and commitment exemplified the spirit of 'Together We Rise.' Through their voluntary actions, they rekindled hope in the hearts of those who had lost everything.",
      },
    ],
    quotes: [
      {
        text: "The system established under the Tata Group Disaster Response is very effective in management of relief operations.",
        attribution: "Subramanian RV",
        role: "Tata AIA · ONE Tata Disaster Response Project Manager",
      },
      {
        text: "I'm proud to be a part of ONE Tata Disaster Response. With my procurement expertise, I'm assisting the on-ground team with supply chain and logistics arrangements to ensure that the aid reaches the most affected communities.",
        attribution: "Phaneesha H K",
        role: "Group Manager, Manufacturing, Titan · ONE Tata Disaster Response Procurement Officer",
      },
      {
        text: "This was an eye opener, revealing the struggles of those affected and demonstrating the Tata group's commitment towards those in need. In the first phase, over 25 volunteers participated, and we are ready to continue making a meaningful impact.",
        attribution: "Rajagopalan Nair & Sharath M Nair",
        role: "Kozhikode Admin & Operations, Tata Elxsi",
      },
      {
        text: "Tata Group approached us right after the disaster and they have been with us right from the search and rescue operations to rehabilitation phase.",
        attribution: "Megashree DR, IAS",
        role: "District Collector & District Magistrate, Wayanad",
      },
    ],
    stats: [
      { num: "34", label: "Core volunteers" },
      { num: "12", label: "Tata companies" },
      { num: "1,000", label: "Tribal families supported" },
      { num: "45", label: "Days of relief operations" },
    ],
    featured: true,
  },
  {
    slug: "melghat-mitra",
    title: "Melghat Mitra: When Service Becomes Stewardship",
    eyebrow: "Long-form Volunteering",
    tag: "Community",
    accentColor: B_INDIGO,
    heroImage: tataMotors1,
    heroImageAlt: "Tata Motors volunteers in Melghat",
    date: "2000–Present",
    excerpt: "For over two decades, a group of Tata Motors employees has been quietly transforming 50 villages in Maharashtra's Melghat region — 40,000 volunteer hours, zero hunger deaths.",
    openingPara:
      "Twenty-five years ago, a newspaper report on hunger deaths among tribal children in Melghat, a remote tiger reserve in Maharashtra, stopped Mangesh Joshi in his tracks. An employee at Tata Motors since 1990, Mangesh could not look away from what he had read — and more importantly, he could not walk away.",
    sections: [
      {
        body: "That first moment of shock became the beginning of a journey that has now spanned over two decades, thousands of hours, and tens of thousands of lives. What began as emergency 'rescue camps' during the monsoon — known locally as Dhadak Mohim — has grown into Melghat Mitra, a sustained, people-led movement rooted in trust, presence, and partnership.",
      },
      {
        body: "Early visits to Melghat were met with fear and resistance. To the tribal communities, outsiders were often seen as jhangadis — urban intruders with dubious intent. The Melghat Mitra group listened, learned, and adapted. Guided by local leaders, they dressed like the community, learned key words of the local Korku dialect, and began building relationships — especially with the youth. Slowly, suspicion turned into dialogue. The team began calling themselves Boko Mitras — younger friends. Friendship became the foundation for every intervention that followed.",
      },
      {
        body: "For over 20 years, the Melghat Mitra group has travelled to Melghat every year for 15–20 days, often during the monsoon when villages are physically cut off. Working entirely in their personal time, they have collectively invested over 40,000 volunteer hours.",
      },
      {
        body: "What started with preventing hunger deaths among children evolved into a multi-pronged development effort across health, education, livelihoods, and governance: grain banks and access to safe drinking water; preventive and curative healthcare, with a sharp shift towards institutional deliveries; training youth for jobs, including apprenticeships under national schemes; building sports teams and leadership capability among village youth; and creating market linkages for forest and farm produce to formalise local livelihoods.",
      },
      {
        body: "To sustain this work, Melghat Mitra established a control centre in Paratwada and a project office in one of the villages — ensuring continuous engagement, not intermittent intervention. A defining strength has been its ability to work across systems: government departments such as Forest, ICDS, and Agriculture; Krishi Vigyan Kendras and Sagar University for agricultural technology transfer; and Maitri, a Pune-based NGO, to anchor development interventions.",
      },
      {
        body: "Today, Melghat Mitra works across over 50 villages, with deep, direct interventions in 12 villages — positively impacting more than 6,200 people directly and over 15,000 lives overall. There are no reported cases of malnutrition in the 12 intervention villages. Child mortality rates are aligned with state averages. Over 95% of deliveries are now institutional. School teaching days have increased from as low as 2 weeks to nearly 90 days a year. Youth have been placed in government and private sector jobs, including apprenticeships at Tata Motors itself.",
      },
      {
        body: "Melghat Mitra is a reminder that sustainable change does not arrive all at once. It is built patiently — through trust, consistency, and the courage to show up, year after year.",
      },
    ],
    quotes: [
      {
        text: "The management of Tata Motors has always supported our volunteering work. Professionally, we've been entrusted with a challenging and overwhelming responsibility. Personally, the appreciation from society keeps us committed to continuing this journey.",
        attribution: "Melghat Mitra Group",
        role: "Tata Motors volunteers",
      },
    ],
    stats: [
      { num: "25+", label: "Years of presence" },
      { num: "40,000", label: "Volunteer hours" },
      { num: "50+", label: "Villages reached" },
      { num: "15,000+", label: "Lives impacted" },
    ],
    featured: true,
  },
];

// ─── Layout constants ─────────────────────────────────────────────────────────
const FONT = "'Noto Sans','DM Sans',ui-sans-serif,system-ui,sans-serif";

const DIAG: React.CSSProperties = {
  position: "absolute", inset: 0,
  backgroundImage: "repeating-linear-gradient(45deg,rgba(255,255,255,0.035) 0px,rgba(255,255,255,0.035) 1px,transparent 1px,transparent 24px)",
  backgroundSize: "24px 24px",
  pointerEvents: "none",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ImpactStoryView() {
  const { id }   = useParams<{ id: string }>();
  const navigate = useAppNavigate();

  const story = IMPACT_STORIES.find((s) => s.slug === id);

  const SECTIONS_NAV = [
    { id: "story-hero",   label: "Overview" },
    { id: "story-body",   label: "Story"    },
    ...(story?.quotes?.length ? [{ id: "story-quotes", label: "Voices" }] : []),
    { id: "story-more",   label: "More Stories" },
  ];

  if (!story) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, paddingTop: 64 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#94a3b8", marginBottom: 16 }}>Story not found</p>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: ACCENT_NAVY, marginBottom: 24 }}>This story doesn't exist yet.</h1>
          <button onClick={() => navigate("media")} style={{ background: B_INDIGO, color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            ← Back to Media
          </button>
        </div>
      </div>
    );
  }

  const accent = story.accentColor;
  const others = IMPACT_STORIES.filter((s) => s.slug !== story.slug);

  return (
    <div style={{ fontFamily: FONT, background: "#f7f8fc", minHeight: "100vh", paddingTop: 0 }}>

      {/* Top accent line */}
      <div style={{ height: 3, background: accent, width: "100%" }} />

      <SubPageDotRail sections={SECTIONS_NAV} accentColor={accent} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div id="story-hero" style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "flex-end", overflow: "hidden", paddingTop: 64 }}>
        <img
          src={story.heroImage}
          alt={story.heroImageAlt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(8,12,22,0.78) 0%, rgba(8,12,22,0.55) 45%, rgba(8,12,22,0.22) 100%)" }} />
        <div style={DIAG} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 64px 56px", width: "100%" }}>

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <button
              onClick={() => navigate("media")}
              style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer", letterSpacing: "0.5px" }}
            >
              ← Media & Resources
            </button>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600 }}>Impact Stories</span>
          </div>

          {/* Eyebrow */}
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", margin: "0 0 10px" }}>
            {story.eyebrow} · {story.date}
          </p>

          {/* Accent bar */}
          <div style={{ height: 2, width: 52, borderRadius: 2, background: accent, marginBottom: 20 }} />

          {/* Title */}
          <h1 style={{ fontFamily: FONT, fontSize: "clamp(1.9rem, 3.8vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1.12, letterSpacing: "-0.4px", margin: "0 0 24px", maxWidth: 680 }}>
            {story.title}
          </h1>

          {/* Stat pills */}
          {story.stats && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {story.stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 8, padding: "8px 16px", textAlign: "center" }}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div id="story-body" style={{ background: "#fff", padding: "0" }}>
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "64px 32px 56px" }}>

          {/* Filler image placeholder */}
          <div style={{
            width: "100%", height: 380, borderRadius: 14,
            background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 48, overflow: "hidden", position: "relative",
          }}>
            <div style={{ textAlign: "center", zIndex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <span style={{ fontSize: 12, color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Image placeholder — swap before publish</span>
            </div>
          </div>

          {/* Opening paragraph — italic Playfair drop-in */}
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 19,
            fontStyle: "italic",
            color: ACCENT_NAVY,
            lineHeight: 1.78,
            margin: "0 0 32px",
            borderLeft: `3px solid ${accent}`,
            paddingLeft: 20,
          }}>
            {story.openingPara}
          </p>

          {/* Body sections */}
          {story.sections.map((sec, i) => (
            <p key={i} style={{
              fontFamily: FONT,
              fontSize: 16,
              color: "#374151",
              lineHeight: 1.85,
              margin: "0 0 24px",
              fontWeight: 400,
            }}>
              {sec.body}
            </p>
          ))}
        </div>
      </div>

      {/* ── Quotes ────────────────────────────────────────────────────────── */}
      {story.quotes && story.quotes.length > 0 && (
        <div id="story-quotes" style={{ background: ACCENT_NAVY, padding: "64px 32px" }}>
          <div style={DIAG} />
          <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
              Voices from the Field
            </p>
            <div style={{ width: 36, height: 2, borderRadius: 2, background: accent, marginBottom: 40 }} />

            <div style={{ display: "grid", gridTemplateColumns: story.quotes.length === 1 ? "1fr" : "1fr 1fr", gap: 24 }}>
              {story.quotes.map((q, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "28px 28px 24px",
                  position: "relative",
                }}>
                  {/* Large opening quote mark */}
                  <div style={{
                    position: "absolute", top: 16, left: 22,
                    fontFamily: "Georgia, serif", fontSize: 72,
                    color: accent, opacity: 0.18, lineHeight: 1, userSelect: "none",
                    pointerEvents: "none",
                  }}>"</div>
                  <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 15,
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.75,
                    margin: "0 0 20px",
                    position: "relative", zIndex: 1,
                  }}>
                    {q.text}
                  </p>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 14 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{q.attribution}</div>
                    {q.role && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{q.role}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── More Stories ──────────────────────────────────────────────────── */}
      <div id="story-more" style={{ background: "#f7f8fc", padding: "56px 32px 72px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#94a3b8", marginBottom: 8 }}>More Impact Stories</p>
          <div style={{ width: 36, height: 2, borderRadius: 2, background: B_INDIGO, marginBottom: 28 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {others.map((s) => (
              <div
                key={s.slug}
                onClick={() => { navigate("stories", s.slug); window.scrollTo(0, 0); }}
                style={{ background: "#fff", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "transform 0.18s, box-shadow 0.18s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 130, overflow: "hidden" }}>
                  <img src={s.heroImage} alt={s.heroImageAlt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <span style={{ display: "inline-block", background: `${s.accentColor}15`, color: s.accentColor, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 4, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.6px" }}>{s.tag}</span>
                  <div style={{ fontSize: 15, fontWeight: 700, color: ACCENT_NAVY, lineHeight: 1.4, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: "0 0 12px" }}>{s.excerpt}</p>
                  <span style={{ fontSize: 12, fontWeight: 700, color: B_INDIGO }}>Read story →</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button
              onClick={() => navigate("media")}
              style={{ background: "none", border: `1.5px solid ${B_INDIGO}`, color: B_INDIGO, borderRadius: 10, padding: "10px 28px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}
            >
              All stories in Media & Resources →
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

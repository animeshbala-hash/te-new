import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  IS_PE_SEASON,
  ROHAN_DESAI, ROHAN_DESAI_VOLUNTEER, ANJALI_GUPTA_REGIONAL,
  SPOC_DIRECTORY, PENDING_APPROVALS_DATA, TCS_TVW_EVENTS,
  PROENGAGE_PIPELINE, AT_RISK_VOLUNTEERS,
  COMPANY_LEADERBOARD, VOLUNTEER_CERTIFICATES, FEEDBACK_MONITOR_DATA,
  OPEN_PROENGAGE_PROJECTS,
} from "@/data/mockData";
import { useAppContext } from "@/context/AppContext";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import badgeVeteran    from "@/assets/badges/veteran.svg";
import badgeAmbassador from "@/assets/badges/ambassador.svg";
import badgeLead       from "@/assets/badges/lead.svg";
import badgeChampion   from "@/assets/badges/champion.png";
import imgPhotos  from "@/assets/tatabball.jpg";
import imgVideos  from "@/assets/tata_power.JPG";
import imgStories from "@/assets/trent.jpg";
import imgEvents  from "@/assets/IHCL.jpg";
import imgEModule from "@/assets/Tata_international.jpeg";

const B_YELLOW    = "#F5A623";
const B_TEAL      = "#00A896";
const B_RED       = "#E8401C";
const B_BLUE      = "#1E6BB8";
const B_PINK      = "#E91E80";
const ACCENT_NAVY = "#0D1B3E";

const P_YELLOW    = "#FEF6E4";
const P_TEAL      = "#E6F8F5";
const P_BLUE      = "#EBF4FF";
const P_RED       = "#FFF0EE";
const P_PINK      = "#FCE4F3";

const KPI_PINK       = "#F2778A";
const KPI_YELLOW     = "#F5A623";
const KPI_PROENGAGE  = "#1A6B3C";
const KPI_TVW        = "#3E7EB0";
const KPI_NUMBERS    = "#A8C94A";
const KPI_TEAL       = "#00A896";

const IS_TVW_SEASON = true;

const notifDot: React.CSSProperties = {
  position: "absolute", top: -3, right: -6, width: 8, height: 8,
  borderRadius: "50%", background: B_RED, boxShadow: "0 0 0 2px white",
};

const card: React.CSSProperties = {
  background: "#fff", border: "1px solid #e8e8f0", borderRadius: 14, padding: "20px 22px",
};
const spocCard: React.CSSProperties = {
  background: "#fff", border: "1.5px solid #c8c6f0", borderRadius: 14, padding: "20px 22px",
};

const VOL_SECTIONS  = [
  { id: "vol-snapshot",   label: "Snapshot"   },
  { id: "vol-activities", label: "Activities" },
  { id: "vol-history",    label: "History"    },
  { id: "vol-resources",  label: "Resources"  },
];
const SPOC_SECTIONS = [
  { id: "spoc-kpis",      label: "Impact KPIs"  },
  { id: "spoc-tvw",       label: "TVW"           },
  { id: "spoc-oversight", label: "Oversight"     },
  { id: "spoc-mgt",       label: "SPOC Mgmt"     },
  { id: "spoc-resources", label: "Resources"     },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start || target === 0) { setValue(0); return; }
    let t0: number | null = null;
    const tick = (now: number) => {
      if (!t0) t0 = now;
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setValue(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return value;
}

function StatTile({ value, suffix = "", label, accentColor, delay, started, tooltip }: {
  value: number; suffix?: string; label: string; accentColor: string;
  delay: number; started: boolean; tooltip?: string;
}) {
  const [go, setGo] = useState(false);
  const [showTip, setShowTip] = useState(false);
  useEffect(() => {
    if (started) { const t = setTimeout(() => setGo(true), delay); return () => clearTimeout(t); }
  }, [started, delay]);
  const n = useCountUp(value, 1100, go);
  return (
    <div
      style={{ background: accentColor, borderRadius: 18, padding: "22px 14px 18px", textAlign: "center",
        boxShadow: `0 4px 20px ${accentColor}33`, transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default", position: "relative", overflow: "hidden" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${accentColor}44`; setShowTip(true); }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${accentColor}33`; setShowTip(false); }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.4, background: "rgba(255,255,255,0.35)" }} />
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 38, fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", color: "#ffffff", position: "relative", zIndex: 1 }}>
        {n}{suffix}
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginTop: 10, textTransform: "uppercase", letterSpacing: "1px", lineHeight: 1.3 }}>{label}</div>
      {showTip && tooltip && (
        <div style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: ACCENT_NAVY, color: "rgba(255,255,255,0.88)", fontSize: 12, lineHeight: 1.5, padding: "10px 14px", borderRadius: 9, width: 200, zIndex: 50, pointerEvents: "none", boxShadow: "0 4px 20px rgba(13,27,62,0.2)", textAlign: "left", fontWeight: 400 }}>
          {tooltip}
          <div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)", width: 10, height: 10, background: ACCENT_NAVY, clipPath: "polygon(0 0, 100% 0, 50% 100%)" }} />
        </div>
      )}
    </div>
  );
}

function Slicers({ options, active, onChange, accentColor = B_BLUE, notifications }: {
  options: { id: string; label: string }[]; active: string; onChange: (id: string) => void;
  accentColor?: string; notifications?: Record<string, boolean>;
}) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 22 }}>
      {options.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} style={{ position: "relative", display: "inline-flex", padding: "6px 16px", borderRadius: 100, border: `1.5px solid ${active === o.id ? accentColor : "#dddde8"}`, background: active === o.id ? accentColor : "transparent", color: active === o.id ? "#fff" : "#666", fontSize: 13, fontWeight: active === o.id ? 600 : 400, cursor: "pointer", transition: "all 0.15s", fontFamily: "'DM Sans', sans-serif" }}>
          {o.label}
          {notifications?.[o.id] && <span style={notifDot} />}
        </button>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 5 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 21, fontWeight: 900, color: ACCENT_NAVY, margin: 0, letterSpacing: -0.3 }}>{title}</h2>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, [string, string, string]> = {
    "Active":            ["#F0FDF4", "#16A34A", "Active"],
    "Matched":           ["#F0FDF4", "#16A34A", "Matched"],
    "Applied":           [P_TEAL,    B_TEAL,    "Applied"],
    "Completed":         [P_BLUE,    B_BLUE,    "Completed"],
    "Dropped":           [P_RED,     B_RED,     "Dropped Out"],
    "Pending":           [P_YELLOW,  "#9a6500", "Pending"],
    "Approved":          ["#F0FDF4", "#16A34A", "Approved"],
    "Inactive":          ["#f0f0f4", "#888",    "Inactive"],
    "Live":              [P_PINK,    B_PINK,    "Live"],
    "Upcoming":          [P_BLUE,    B_BLUE,    "Upcoming"],
    "Generated":         ["#F0FDF4", "#16A34A", "Generated"],
    "Pending Feedback":  [P_YELLOW,  "#9a6500", "Pending Feedback"],
  };
  const [bg, color, label] = map[status] ?? ["#f0f0f0", "#555", status];
  return <span style={{ background: bg, color, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.3px", whiteSpace: "nowrap" }}>{label}</span>;
}

function CollapsiblePanel({ title, eyebrow, defaultOpen = false, accentColor = B_PINK, badge, children }: {
  title: string; eyebrow?: string; defaultOpen?: boolean; accentColor?: string; badge?: string | number; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ ...spocCard, padding: 0, overflow: "hidden", marginBottom: 12 }}>
      <div onClick={() => setOpen(x => !x)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", cursor: "pointer", userSelect: "none", background: open ? "#fafafa" : "#fff", transition: "background 0.15s" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: accentColor, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {eyebrow && <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 2 }}>{eyebrow}</div>}
          <div style={{ fontSize: 14, fontWeight: 700, color: ACCENT_NAVY }}>{title}</div>
        </div>
        {badge !== undefined && (
          <span style={{ background: accentColor, color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 100, marginRight: 6 }}>{badge}</span>
        )}
        <span style={{ fontSize: 18, color: "#dddde8", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>›</span>
      </div>
      {open && <div style={{ padding: "0 20px 20px", borderTop: "1px solid #e8e8f0" }}>{children}</div>}
    </div>
  );
}

function DrawerShell({ open, onClose, title, subtitle, accentTag, accentColor, children }: {
  open: boolean; onClose: () => void; title: string; subtitle?: string; accentTag?: string; accentColor?: string; children: React.ReactNode;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(13,27,62,0.45)", zIndex: 200, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 0.22s", backdropFilter: "blur(2px)" }} />
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: open ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -48%) scale(0.97)", transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.25s", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", width: 560, maxWidth: "calc(100vw - 40px)", maxHeight: "calc(100vh - 80px)", background: "#fff", borderRadius: 16, zIndex: 201, boxShadow: "0 24px 64px rgba(13,27,62,0.22)", display: "flex", flexDirection: "column", fontFamily: "'DM Sans', sans-serif", overflowY: "auto" }}>
        <div style={{ background: accentColor || ACCENT_NAVY, padding: "24px 28px", borderRadius: "16px 16px 0 0", flexShrink: 0 }}>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.18)", border: "none", borderRadius: 7, color: "rgba(255,255,255,0.95)", fontSize: 13, fontWeight: 500, padding: "5px 12px", cursor: "pointer", marginBottom: 16 }}>← Close</button>
          {accentTag && <div style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 100, padding: "3px 10px", fontSize: 10.5, fontWeight: 700, color: "#fff", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 10 }}>{accentTag}</div>}
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{title}</div>
          {subtitle && <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginTop: 5 }}>{subtitle}</div>}
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
      </div>
    </>
  );
}

function TVWRegDrawer({ event, onClose, triggerToast }: { event: any; onClose: () => void; triggerToast: (msg: string) => void }) {
  const [confirmed, setConfirmed] = useState(false);
  const reset = () => { onClose(); setConfirmed(false); };
  return (
    <DrawerShell open={!!event} onClose={reset} title={event?.title ?? ""} subtitle={event?.venue ?? ""} accentTag="TVW 22" accentColor={KPI_TVW}>
      {event && (confirmed ? (
        <div style={{ padding: "40px 28px", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F7FEE7", border: "2px solid #84CC16", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M2 9l7 7L20 2" stroke="#65A30D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: ACCENT_NAVY, marginBottom: 8 }}>Registered!</div>
          <div style={{ fontSize: 13.5, color: "#6b6b7a", lineHeight: 1.6 }}>Confirmation email sent to rohan.desai@tcs.com</div>
        </div>
      ) : (
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
            {[["Event", event.title], ["Date", event.date], ["Mode", event.mode], ["Venue", event.venue], ["Capacity", event.capacity]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "10px 0", borderBottom: "1px solid #f0f0f8" }}>
                <span style={{ fontSize: 12.5, color: "#8888a0" }}>{k}</span>
                <span style={{ fontSize: 12.5, color: ACCENT_NAVY, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#F0FDF4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#15803d", marginBottom: 20, lineHeight: 1.5 }}>
            Registering as a volunteer for this event. Hours will be logged against your profile.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button onClick={() => { setConfirmed(true); triggerToast("Registered! Confirmation email sent to rohan.desai@tcs.com"); }} style={{ width: "100%", background: KPI_TVW, color: "#fff", border: "none", borderRadius: 10, padding: "13px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Confirm Registration</button>
            <button onClick={reset} style={{ width: "100%", background: "#fff", border: "1.5px solid #dddde8", borderRadius: 10, padding: "12px", fontSize: 13.5, fontWeight: 600, color: "#6b6b7a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
          </div>
        </div>
      ))}
    </DrawerShell>
  );
}

function ResourceCard({ r, onClick }: { r: { label: string; desc: string; count: string; accentColor: string; photo: string }; onClick?: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", border: "1px solid #e8e8f0", borderRadius: 14, overflow: "hidden", cursor: "pointer", transform: hov ? "translateY(-3px)" : "translateY(0)", boxShadow: hov ? `0 8px 24px ${r.accentColor}18` : "none", transition: "transform 0.18s, box-shadow 0.18s" }}>
      <div style={{ height: 150, background: `url(${r.photo}) center/cover no-repeat` }} />
      <div style={{ background: r.accentColor, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ fontSize: 14.5, fontWeight: 900, color: "#fff", textAlign: "center", lineHeight: 1.3 }}>{r.label}</div>
      </div>
    </div>
  );
}

function PipelineRow({ v }: { v: typeof PROENGAGE_PIPELINE[0] }) {
  const [open, setOpen] = useState(false);
  const statusColor  = v.status === "Active" || v.status === "Matched" ? KPI_PROENGAGE : v.status === "Completed" ? B_BLUE : v.status === "Dropped" ? B_RED : "#9a6500";
  const statusPastel = v.status === "Active" || v.status === "Matched" ? "#E6F4EE" : v.status === "Completed" ? P_BLUE : v.status === "Dropped" ? P_RED : P_YELLOW;
  return (
    <div style={{ background: "#fff", border: "1px solid #e8e8f0", borderRadius: 12, overflow: "hidden", marginBottom: 8 }}>
      <div onClick={() => setOpen(x => !x)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px", cursor: "pointer", userSelect: "none" }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: statusPastel, border: `1px solid ${statusColor}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: statusColor }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.name}</div>
          <div style={{ fontSize: 12, color: "#aaaabc", marginTop: 2 }}>{v.project} · {v.ngo}</div>
        </div>
        <StatusBadge status={v.status} />
        <span style={{ fontSize: 18, color: "#dddde8", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s", marginLeft: 4 }}>›</span>
      </div>
      {open && (
        <div style={{ padding: "0 16px 14px", borderTop: "1px solid #f0f0f8" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
            {[["Email", v.email], ["Company", v.company], ["Experience", v.experience], ["Last Update", v.lastUpdated]].map(([k, val]) => (
              <div key={k} style={{ background: "#f8f8fc", borderRadius: 8, padding: "8px 10px" }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "#aaaabc", marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: ACCENT_NAVY }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 10 }}>
            {v.skills.map((s: string) => (
              <span key={s} style={{ background: P_BLUE, color: B_BLUE, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SPOCDashboardView() {
  const navigate = useNavigate();
  const onNavigate = useAppNavigate();
  const { setShowOrientationModal, triggerToast } = useAppContext();

  const isRegionalSPOC = false;
  const spocData = isRegionalSPOC ? ANJALI_GUPTA_REGIONAL : ROHAN_DESAI;
  const volData  = ROHAN_DESAI_VOLUNTEER;

  const [spocMode, setSpocMode] = useState(false);
  const [activeSection, setActiveSection] = useState("vol-snapshot");
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  const currentSections = spocMode ? SPOC_SECTIONS : VOL_SECTIONS;
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
    }, { threshold: 0.2 });
    currentSections.forEach(s => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [spocMode]);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsStarted(true); }, { threshold: 0.3 });
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [spocMode]);

  const hasActive = !!volData.activeApplication;
  const volActivitySlicers = IS_PE_SEASON && hasActive
    ? [{ id: "opportunities", label: "View Opportunities" }, { id: "proengage", label: "My ProEngage Project" }]
    : [{ id: "opportunities", label: "View Opportunities" }, { id: "early", label: "Apply Early for ProEngage" }];
  const [activeVolActivity, setActiveVolActivity] = useState(volActivitySlicers[0].id);
  const [activeVolHistory, setActiveVolHistory] = useState("projects");
  const [histEditionFilter, setHistEditionFilter] = useState("ProEngage 2025 | 02");

  const [spocPipelineFilter, setSpocPipelineFilter] = useState("current");
  const [pendingFilter, setPendingFilter]           = useState("all");
  const [certFilter, setCertFilter]                 = useState("all");

  const [tvwRegEvent, setTvwRegEvent]   = useState<any>(null);
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [evTitle, setEvTitle] = useState("");
  const [evDate, setEvDate]   = useState("");
  const [evMode, setEvMode]   = useState("In-Person");
  const [evVenue, setEvVenue] = useState("");
  const [evCap, setEvCap]     = useState("");

  const PE_EDITIONS = ["ProEngage 2025 | 02", "ProEngage 2025 | 01", "ProEngage 2024 | 02"];

  const filteredPipeline = PROENGAGE_PIPELINE.filter(v =>
    spocPipelineFilter === "current" ? v.isCurrentEdition : !v.isCurrentEdition
  );
  const filteredPending = PENDING_APPROVALS_DATA.filter(p =>
    pendingFilter === "all" ? true : p.status === (pendingFilter === "pending" ? "Pending" : "Approved")
  );
  const filteredCerts = VOLUNTEER_CERTIFICATES.filter(c =>
    certFilter === "all" ? true :
    certFilter === "generated" ? c.status === "Generated" :
    c.status !== "Generated"
  );

  const VOL_HISTORY_PROJECTS = volData.history.map((h: any, i: number) => ({
    id: `h${i}`, title: h.project, ngo: h.ngo, edition: `ProEngage ${h.year} | 01`, year: h.year,
    hours: h.hours, cert: i === 0,
    outcome: `Completed ${h.hours} hours of volunteering. Delivered project outcomes to ${h.ngo}.`,
  }));

  const SPOC_BADGES = [
    { id: "b1", name: "Edition Champion", image: badgeChampion,   desc: "Top performer in ProEngage 2025 edition",        earned: "2025", color: B_PINK },
    { id: "b2", name: "SPOC Veteran",     image: badgeVeteran,    desc: "Managed 3+ ProEngage editions",                  earned: "2024", color: KPI_TVW },
    { id: "b3", name: "Community Lead",   image: badgeLead,       desc: "Onboarded 100+ volunteers to the platform",      earned: "2024", color: KPI_PROENGAGE },
    { id: "b4", name: "Ambassador",       image: badgeAmbassador, desc: "Represented TCS at Tata Group SPOC Convention",  earned: "2025", color: KPI_YELLOW },
  ];

  const SPOC_RESOURCES = [
    { id: "photos",  label: "Photos",   desc: "Gallery from TVW22 and PE projects", count: "247 items",   accentColor: B_BLUE,        photo: imgPhotos  },
    { id: "videos",  label: "Videos",   desc: "Impact films and event highlights",  count: "38 videos",   accentColor: B_TEAL,        photo: imgVideos  },
    { id: "stories", label: "Stories",  desc: "Volunteer experiences and impact",   count: "94 stories",  accentColor: KPI_PROENGAGE, photo: imgStories },
    { id: "events",  label: "Events",   desc: "VolCon and upcoming gatherings",     count: "12 upcoming", accentColor: KPI_PINK,      photo: imgEvents  },
    { id: "emodule", label: "E-Module", desc: "SPOC orientation and guidelines",    count: "5 modules",   accentColor: "#C8850A",     photo: imgEModule },
  ];

  const inp: React.CSSProperties = { width: "100%", border: "1.5px solid #e0e0e8", borderRadius: 10, padding: "10px 14px", fontSize: 13.5, fontFamily: "'DM Sans', sans-serif", color: ACCENT_NAVY, outline: "none", boxSizing: "border-box" };

  // ── Volunteer sections JSX ──────────────────────────────────────────────────
  const volSectionsJSX = (
    <>
      {/* 1. SNAPSHOT */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="vol-snapshot" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Your impact, at a glance" title="Engagement Snapshot" />
          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
            <StatTile value={volData.hoursVolunteered}      label="Hours Volunteered"  accentColor={KPI_PROENGAGE} delay={0}   started={statsStarted} tooltip="Total hours logged across all ProEngage projects." />
            <StatTile value={volData.history.length}        label="Projects Applied"   accentColor={KPI_YELLOW}    delay={100} started={statsStarted} tooltip="ProEngage applications submitted across editions." />
            <StatTile value={volData.history.length - 1}    label="Projects Completed" accentColor={KPI_PINK}      delay={200} started={statsStarted} tooltip="Projects where both sides have submitted feedback." />
            <StatTile value={0}                             label="Dropped Out"        accentColor={KPI_TVW}       delay={300} started={statsStarted} tooltip="Projects that ended early." />
            <StatTile value={volData.badges?.length ?? 2}  label="Badges Earned"      accentColor={KPI_NUMBERS}   delay={400} started={statsStarted} tooltip="Awarded for key milestones." />
            <StatTile value={3}                             label="No of Referrals"    accentColor={KPI_TEAL}      delay={500} started={statsStarted} tooltip="Colleagues who joined via your referral link." />
          </div>

          <div style={{ ...card, marginBottom: 10 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 12 }}>Skills You Bring</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {volData.skills.map((s: string) => <span key={s} style={{ background: P_BLUE, color: B_BLUE, fontSize: 12.5, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>{s}</span>)}
            </div>
          </div>

          <div style={{ ...card }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 14 }}>Badges Earned</div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {SPOC_BADGES.map(b => (
                <div key={b.id} title={`${b.name} — ${b.desc} (${b.earned})`}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "default", transition: "transform 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
                  <img src={b.image} alt={b.name} style={{ width: 56, height: 56, objectFit: "contain" }} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#6b6b7a", textAlign: "center", lineHeight: 1.2, maxWidth: 64 }}>{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 2. ACTIVITIES */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="vol-activities" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow={IS_PE_SEASON ? "ProEngage Edition 23 · Open" : "Non-PE season"} title="My Activities" />
          <Slicers options={volActivitySlicers} active={activeVolActivity} onChange={setActiveVolActivity} accentColor={B_TEAL} />

          {activeVolActivity === "opportunities" && (
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {TCS_TVW_EVENTS.slice(0, 2).map((ev: any) => {
                  const isLive = ev.status === "Live";
                  const ac = isLive ? B_PINK : B_BLUE;
                  const pas = isLive ? P_PINK : P_BLUE;
                  return (
                    <div key={ev.id} style={{ ...card, display: "flex", gap: 16, alignItems: "center", cursor: "pointer", transition: "box-shadow 0.18s, transform 0.18s", padding: "18px 20px" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,27,62,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: pas, border: `1px solid ${ac}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: ac }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 14, color: ACCENT_NAVY, marginBottom: 8 }}>{ev.title}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {[ev.date, ev.mode, ev.type].map((d: string, i: number) => (
                            <span key={i} style={{ background: pas, color: ac, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{d}</span>
                          ))}
                          <StatusBadge status={ev.status} />
                        </div>
                      </div>
                      <button onClick={e => { e.stopPropagation(); setTvwRegEvent(ev); }} style={{ background: ac, color: "#fff", border: "none", borderRadius: 8, padding: "6px 14px", fontSize: 12.5, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>Register</button>
                    </div>
                  );
                })}
              </div>
              <button onClick={() => navigate("/tvw")} style={{ marginTop: 14, background: "none", border: "none", fontSize: 13.5, color: B_TEAL, fontWeight: 600, cursor: "pointer", padding: 0 }}>View all opportunities →</button>
            </div>
          )}

          {activeVolActivity === "proengage" && hasActive && (
            <div>
              <div style={{ ...card, marginBottom: 16, display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 22px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: P_TEAL, border: `1px solid ${B_TEAL}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: B_TEAL }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14.5, color: ACCENT_NAVY, marginBottom: 10 }}>{(volData.activeApplication as any).title}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <StatusBadge status={(volData.activeApplication as any).status} />
                    <span style={{ background: P_BLUE, color: B_BLUE, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{(volData.activeApplication as any).ngo}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { label: "Access E-Module",    tags: ["Orientation", "Roles"],    color: KPI_TVW,      pastel: P_BLUE,    action: () => setShowOrientationModal(true) },
                  { label: "Post Monthly Update", tags: ["Progress", "NGO Partner"], color: KPI_PROENGAGE, pastel: "#E6F4EE", action: () => triggerToast("Update posted to NGO and TSG.") },
                ].map(a => (
                  <button key={a.label} onClick={a.action}
                    style={{ background: "#fff", border: `1px solid ${a.color}22`, borderRadius: 14, padding: "18px 18px 16px", textAlign: "left", cursor: "pointer", transition: "transform 0.18s, box-shadow 0.18s", fontFamily: "'DM Sans', sans-serif", boxShadow: `0 2px 12px ${a.color}11` }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${a.color}22`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 12px ${a.color}11`; }}>
                    <div style={{ width: 40, height: 40, borderRadius: 9, background: a.pastel, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: a.color }} />
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY, marginBottom: 8 }}>{a.label}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      {a.tags.map(t => <span key={t} style={{ background: a.color, color: "#fff", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100 }}>{t}</span>)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeVolActivity === "early" && (
            <div style={{ ...card, textAlign: "center", padding: "36px 32px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: ACCENT_NAVY, marginBottom: 8 }}>ProEngage applications open in January 2026</div>
              <div style={{ fontSize: 13.5, color: "#8888a0", lineHeight: 1.65, maxWidth: 380, margin: "0 auto 20px" }}>Register your interest early and be first to know when projects are listed.</div>
              <button style={{ background: B_PINK, color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Register Early Interest</button>
            </div>
          )}
        </section>
      </div>

      {/* 3. HISTORY */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="vol-history" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Your volunteering trail" title="My History" />
          <Slicers options={[{ id: "projects", label: "My Projects" }, { id: "certificates", label: "My Certificates" }]} active={activeVolHistory} onChange={setActiveVolHistory} accentColor={B_BLUE} />
          <div style={{ marginBottom: 16 }}>
            <select value={histEditionFilter} onChange={e => setHistEditionFilter(e.target.value)} style={{ padding: "6px 12px", borderRadius: 8, border: "1.5px solid #dddde8", background: "#fff", fontSize: 13, color: ACCENT_NAVY, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", outline: "none" }}>
              {PE_EDITIONS.map(ed => <option key={ed} value={ed}>{ed}{ed === "ProEngage 2025 | 02" ? " (Latest)" : ""}</option>)}
              <option value="">All Editions</option>
            </select>
          </div>

          {activeVolHistory === "projects" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {VOL_HISTORY_PROJECTS.map(p => (
                <div key={p.id} style={{ ...card, display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 20px" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: P_BLUE, border: `1px solid ${B_BLUE}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: B_BLUE }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: ACCENT_NAVY, flex: 1 }}>{p.title}</div>
                      <StatusBadge status="Completed" />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                      <span style={{ background: P_BLUE, color: B_BLUE, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{p.ngo}</span>
                      <span style={{ background: P_BLUE, color: B_BLUE, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{p.edition}</span>
                      <span style={{ background: P_BLUE, color: B_BLUE, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{p.hours} hrs</span>
                    </div>
                    <div style={{ background: "#F7FEE7", borderRadius: 8, padding: "9px 12px", fontSize: 12.5, color: "#365314", borderLeft: "3px solid #65A30D", lineHeight: 1.55 }}>{p.outcome}</div>
                  </div>
                  {p.cert && <button style={{ background: B_BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "6px 13px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Download Cert</button>}
                </div>
              ))}
            </div>
          )}

          {activeVolHistory === "certificates" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {VOL_HISTORY_PROJECTS.filter(p => p.cert).map(p => (
                <div key={p.id} style={{ background: "#fff", border: `1px solid ${B_TEAL}33`, borderRadius: 14, padding: "22px 20px" }}>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: B_TEAL, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 6 }}>Certificate of Completion</div>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: B_BLUE, marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 12.5, color: "#8888a0", marginBottom: 14 }}>{p.ngo} · {p.edition}</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button style={{ flex: 1, background: B_BLUE, color: "#fff", border: "none", borderRadius: 8, padding: "8px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>Download PDF</button>
                    <button style={{ background: B_TEAL, color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12.5, fontWeight: 600, cursor: "pointer" }}>Share</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* 4. RESOURCES */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="vol-resources" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Learning and inspiration" title="Resource Library" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {SPOC_RESOURCES.map(r => (
              <ResourceCard key={r.id} r={r} onClick={() => { if (r.id === "emodule") setShowOrientationModal(true); else onNavigate("media"); }} />
            ))}
          </div>
        </section>
      </div>
    </>
  );

  // ── SPOC sections JSX ───────────────────────────────────────────────────────
  const spocSectionsJSX = (
    <>
      {/* 1. IMPACT KPIs */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="spoc-kpis" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Company-wide impact" title="Impact KPIs" />
          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
            <StatTile value={spocData.stats.totalVolunteers}  label="Total Volunteers"  accentColor={KPI_PINK}      delay={0}   started={statsStarted} tooltip="All registered volunteers under your company scope." />
            <StatTile value={spocData.stats.activeProEngage}  label="Active ProEngage"  accentColor={KPI_PROENGAGE} delay={100} started={statsStarted} tooltip="Volunteers currently matched to a ProEngage project." />
            <StatTile value={spocData.stats.tvwEvents}        label="TVW Events"         accentColor={KPI_TVW}       delay={200} started={statsStarted} tooltip="Total TVW events posted this edition." />
            <StatTile value={spocData.stats.pendingApprovals} label="Pending Approvals"  accentColor={KPI_YELLOW}    delay={300} started={statsStarted} tooltip="Retiree and no-email registrations awaiting your review." />
            <StatTile value={FEEDBACK_MONITOR_DATA.length}    label="Feedback Overdue"   accentColor={KPI_NUMBERS}   delay={400} started={statsStarted} tooltip="Volunteers who haven't submitted project feedback yet." />
            <StatTile value={COMPANY_LEADERBOARD.find(c => c.name === "TCS")?.rank ?? 2} label="Leaderboard Rank" accentColor={KPI_TEAL} delay={500} started={statsStarted} tooltip="TCS ranking on the ProEngage company leaderboard." />
          </div>

          {AT_RISK_VOLUNTEERS.length > 0 && (
            <div style={{ background: "#fff", border: `1.5px solid ${KPI_YELLOW}55`, borderRadius: 14, padding: "16px 20px" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 14 }}>
                At-Risk Volunteers
                <span style={{ background: P_YELLOW, color: "#9a6500", fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 100, marginLeft: 6 }}>{AT_RISK_VOLUNTEERS.length} flagged</span>
              </div>
              {AT_RISK_VOLUNTEERS.map((v: any) => {
                const sc = v.severity === "high" ? B_RED : B_YELLOW;
                const sp = v.severity === "high" ? P_RED : P_YELLOW;
                return (
                  <div key={v.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #f0f0f8" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: sp, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: sc }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT_NAVY }}>{v.name}</div>
                      <div style={{ fontSize: 12, color: "#8888a0" }}>{v.project} · {v.reason}</div>
                    </div>
                    <span style={{ background: sp, color: sc, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100 }}>{v.severity === "high" ? "High Risk" : "Medium"}</span>
                    <div style={{ fontSize: 11, color: "#aaaabc", whiteSpace: "nowrap" }}>{v.daysInactive}d inactive</div>
                  </div>
                );
              })}
              <div style={{ marginTop: 10, fontSize: 12, color: "#aaaabc", fontStyle: "italic" }}>Read-only view — TSG Admin handles nudges and interventions.</div>
            </div>
          )}
        </section>
      </div>

      {/* 2. TVW ACTIONS */}
      {IS_TVW_SEASON && (
        <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
          <section id="spoc-tvw" style={{ scrollMarginTop: 108 }}>
            <SectionHeading eyebrow="Tata Volunteering Week · Edition 22" title="TVW Actions" />
            <div style={{ background: ACCENT_NAVY, borderRadius: 14, padding: "20px 22px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Your Events</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>Post a new TVW event</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>Goes live on the TVW calendar within 5 minutes.</div>
              </div>
              <button onClick={() => setCreateEventOpen(true)} style={{ background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", fontFamily: "'DM Sans', sans-serif" }}>+ Post Event</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {TCS_TVW_EVENTS.map((ev: any) => {
                const isLive = ev.status === "Live";
                const ac = isLive ? B_PINK : B_BLUE;
                const pas = isLive ? P_PINK : P_BLUE;
                return (
                  <div key={ev.id} style={{ ...spocCard, display: "flex", gap: 14, alignItems: "center", padding: "16px 18px" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: pas, border: `1px solid ${ac}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: ac }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY, marginBottom: 7 }}>{ev.title}</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        <span style={{ background: pas, color: ac, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{ev.date}</span>
                        <span style={{ background: pas, color: ac, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{ev.mode}</span>
                        <span style={{ background: pas, color: ac, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>Cap {ev.capacity}</span>
                        <span style={{ background: pas, color: ac, fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100 }}>{ev.volunteeringHours}h</span>
                        <StatusBadge status={ev.status} />
                      </div>
                    </div>
                    <button onClick={() => triggerToast("Volunteering hours updated for this event.")} style={{ background: B_YELLOW, color: ACCENT_NAVY, border: "none", borderRadius: 8, padding: "6px 13px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Add Hours</button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {/* 3. OVERSIGHT */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="spoc-oversight" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Manage & monitor" title="Oversight" />

          <CollapsiblePanel title="ProEngage Volunteer Pipeline" eyebrow="Real-time" defaultOpen accentColor={KPI_PROENGAGE} badge={PROENGAGE_PIPELINE.length}>
            <div style={{ paddingTop: 16 }}>
              <Slicers options={[{ id: "current", label: "Current Edition" }, { id: "past", label: "Past Editions" }]} active={spocPipelineFilter} onChange={setSpocPipelineFilter} accentColor={KPI_PROENGAGE} />
              {filteredPipeline.map((v: any) => <PipelineRow key={v.id} v={v} />)}
              {filteredPipeline.length === 0 && <div style={{ ...card, textAlign: "center", padding: "24px", color: "#aaaabc", fontSize: 13.5 }}>No volunteers for this filter.</div>}
            </div>
          </CollapsiblePanel>

          <CollapsiblePanel title="Feedback Monitor" eyebrow="Overdue submissions" accentColor={KPI_YELLOW} badge={FEEDBACK_MONITOR_DATA.length}>
            <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {FEEDBACK_MONITOR_DATA.map((f: any) => (
                <div key={f.id} style={{ ...card, display: "flex", gap: 12, alignItems: "center", padding: "13px 16px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: P_YELLOW, border: `1px solid ${KPI_YELLOW}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: KPI_YELLOW }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY }}>{f.name}</div>
                    <div style={{ fontSize: 12, color: "#aaaabc", marginTop: 2 }}>{f.project} · Due {f.dueDate}</div>
                    {f.reminders.length > 0 && (
                      <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
                        {f.reminders.map((r: string) => <span key={r} style={{ background: P_YELLOW, color: "#9a6500", fontSize: 10.5, fontWeight: 600, padding: "2px 8px", borderRadius: 100 }}>{r}</span>)}
                      </div>
                    )}
                  </div>
                  <span style={{ background: P_RED, color: B_RED, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap" }}>{f.daysOverdue}d overdue</span>
                </div>
              ))}
            </div>
          </CollapsiblePanel>

          <CollapsiblePanel title="Pending Registrations" eyebrow="Retirees & no-email employees" accentColor={KPI_PINK} badge={PENDING_APPROVALS_DATA.filter((p: any) => p.status === "Pending").length}>
            <div style={{ paddingTop: 16 }}>
              <Slicers options={[{ id: "all", label: "All" }, { id: "pending", label: "Pending" }, { id: "approved", label: "Approved" }]} active={pendingFilter} onChange={setPendingFilter} accentColor={KPI_PINK} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filteredPending.map((p: any) => (
                  <div key={p.id} style={{ ...card, display: "flex", gap: 12, alignItems: "center", padding: "14px 16px" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: P_PINK, border: `1px solid ${B_PINK}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: B_PINK }}>
                      {p.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "#8888a0", marginTop: 2 }}>{p.type} · {p.company} · {p.registeredDate}</div>
                    </div>
                    <StatusBadge status={p.status} />
                    {p.status === "Pending" && (
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => triggerToast(`${p.name} approved. Welcome email sent.`)} style={{ background: "#F0FDF4", color: "#16A34A", border: "1px solid #bbf7d0", borderRadius: 7, padding: "5px 11px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Approve</button>
                        <button onClick={() => triggerToast(`${p.name}'s registration declined.`)} style={{ background: P_RED, color: B_RED, border: `1px solid ${B_RED}33`, borderRadius: 7, padding: "5px 11px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Reject</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CollapsiblePanel>

          <CollapsiblePanel title="Volunteer Certificates" eyebrow="Current edition" accentColor={KPI_TVW} badge={VOLUNTEER_CERTIFICATES.length}>
            <div style={{ paddingTop: 16 }}>
              <Slicers options={[{ id: "all", label: "All" }, { id: "generated", label: "Generated" }, { id: "pending", label: "Pending" }]} active={certFilter} onChange={setCertFilter} accentColor={KPI_TVW} />
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {filteredCerts.map((c: any) => (
                  <div key={c.id} style={{ ...card, display: "flex", gap: 12, alignItems: "center", padding: "13px 16px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: "#8888a0", marginTop: 2 }}>{c.project} · {c.ngo}</div>
                    </div>
                    <StatusBadge status={c.status} />
                    {c.status === "Generated" && (
                      <button onClick={() => triggerToast(`Certificate downloaded for ${c.name}.`)} style={{ background: KPI_TVW, color: "#fff", border: "none", borderRadius: 7, padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Download</button>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={() => triggerToast("Bulk ZIP download started — all certificates for current edition.")} style={{ marginTop: 14, background: ACCENT_NAVY, color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Bulk Download All (ZIP)</button>
            </div>
          </CollapsiblePanel>
        </section>
      </div>

      {/* 4. SPOC MANAGEMENT (Corporate only) */}
      {!isRegionalSPOC && (
        <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
          <section id="spoc-mgt" style={{ scrollMarginTop: 108 }}>
            <SectionHeading eyebrow="Corporate SPOC · TCS" title="SPOC Management" />

            <div style={{ ...spocCard, marginBottom: 16 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 16 }}>Company Leaderboard · Top 10</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {COMPANY_LEADERBOARD.map((c: any) => {
                  const isTCS = c.name === "TCS";
                  const barColor = c.rank === 1 ? KPI_YELLOW : isTCS ? B_PINK : KPI_TVW;
                  const maxMatched = COMPANY_LEADERBOARD[0].matched;
                  return (
                    <div key={c.rank} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px", borderRadius: 10, background: isTCS ? P_PINK : "#f8f8fc", border: isTCS ? `1.5px solid ${B_PINK}33` : "1.5px solid transparent" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: isTCS ? B_PINK : "#aaaabc", width: 20, textAlign: "center" }}>#{c.rank}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: isTCS ? 700 : 500, color: ACCENT_NAVY, marginBottom: 5 }}>{c.name}</div>
                        <div style={{ height: 5, background: "#e8e8f0", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${(c.matched / maxMatched) * 100}%`, background: barColor, borderRadius: 3 }} />
                        </div>
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: isTCS ? B_PINK : "#6b6b7a", minWidth: 40, textAlign: "right" }}>{c.matched.toLocaleString()}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <CollapsiblePanel title="SPOC Directory" eyebrow="TCS SPOCs" accentColor={B_PINK} badge={SPOC_DIRECTORY.filter((s: any) => s.company === "TCS").length}>
              <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                {SPOC_DIRECTORY.filter((s: any) => s.company === "TCS").map((s: any) => (
                  <div key={s.id} style={{ ...card, display: "flex", gap: 12, alignItems: "center", padding: "12px 16px" }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: P_PINK, border: `1px solid ${B_PINK}22`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: B_PINK }}>
                      {s.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: "#8888a0" }}>{s.role} · {s.geography}</div>
                    </div>
                    <StatusBadge status={s.status} />
                    <div style={{ fontSize: 11, color: "#aaaabc", whiteSpace: "nowrap" }}>{s.lastActive}</div>
                  </div>
                ))}
                <button onClick={() => triggerToast("Add Regional SPOC flow coming soon.")} style={{ background: "none", border: "1.5px solid #dddde8", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#6b6b7a", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>+ Add Regional SPOC</button>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel title="Open ProEngage Projects" eyebrow="Share with employees" accentColor={KPI_PROENGAGE}>
              <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {OPEN_PROENGAGE_PROJECTS.map((p: any) => (
                  <div key={p.id} style={{ ...card, display: "flex", gap: 12, alignItems: "center", padding: "13px 16px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, fontWeight: 700, color: ACCENT_NAVY }}>{p.title}</div>
                      <div style={{ fontSize: 12, color: "#8888a0", marginTop: 2 }}>{p.ngo}</div>
                      <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
                        {p.skills.map((s: string) => <span key={s} style={{ background: "#E6F4EE", color: KPI_PROENGAGE, fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 100 }}>{s}</span>)}
                      </div>
                    </div>
                    <button onClick={() => triggerToast("Apply link copied to clipboard.")} style={{ background: KPI_PROENGAGE, color: "#fff", border: "none", borderRadius: 8, padding: "6px 13px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Copy Link</button>
                  </div>
                ))}
              </div>
            </CollapsiblePanel>
          </section>
        </div>
      )}

      {/* 5. SPOC RESOURCES */}
      <div style={{ background: "#f0f1f8", borderRadius: 16, padding: "24px 22px", marginBottom: 52 }}>
        <section id="spoc-resources" style={{ scrollMarginTop: 108 }}>
          <SectionHeading eyebrow="Tools & learning" title="SPOC Resources" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 16 }}>
            {SPOC_RESOURCES.map(r => (
              <ResourceCard key={r.id} r={r} onClick={() => { if (r.id === "emodule") setShowOrientationModal(true); else onNavigate("media"); }} />
            ))}
          </div>
          <div style={{ ...spocCard }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#aaaabc", marginBottom: 12 }}>SPOC Orientation Progress</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ height: 8, background: "#e8e8f0", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(spocData.orientationProgress / spocData.totalOrientationModules) * 100}%`, background: B_PINK, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: B_PINK, whiteSpace: "nowrap" }}>{spocData.orientationProgress}/{spocData.totalOrientationModules} modules</div>
            </div>
            <button onClick={() => setShowOrientationModal(true)} style={{ background: B_PINK, color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              {spocData.orientationProgress < spocData.totalOrientationModules ? "Continue Orientation" : "Review Orientation"}
            </button>
          </div>
        </section>
      </div>
    </>
  );

  return (
    <>
      <div style={{ background: "#f8f9ff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", paddingBottom: 80 }}>

        {/* Greeting bar */}
        <div style={{ background: "linear-gradient(135deg, #065666 0%, #0B7285 60%, #0891b2 100%)", padding: "92px 40px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>
              {spocData.firstName}, this is your {spocMode ? "SPOC corner." : "volunteering space."}
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 6, fontWeight: 300 }}>
              {spocMode ? `${spocData.company} · ${spocData.tier}` : "Your story, Your impact."}
            </div>
          </div>

          {spocMode ? (
            <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 12, padding: "14px 20px", maxWidth: 360 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 5 }}>Company · {spocData.company}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                {spocData.stats.activeProEngage} volunteers active · Rank #{COMPANY_LEADERBOARD.find((c: any) => c.name === "TCS")?.rank ?? 2} on leaderboard
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
                {spocData.stats.pendingApprovals} registrations pending your approval
              </div>
            </div>
          ) : IS_PE_SEASON && hasActive ? (
            <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 12, padding: "14px 20px", maxWidth: 360 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 5 }}>Active · ProEngage 2025</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{(volData.activeApplication as any).title}</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{(volData.activeApplication as any).ngo}</div>
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 12, padding: "14px 20px", maxWidth: 360 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 5 }}>Next ProEngage Edition</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>Opens January 2026. Explore TVW events below.</div>
            </div>
          )}
        </div>

        {/* Toggle bar */}
        <div style={{ background: ACCENT_NAVY, padding: "0 40px", display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {[{ id: false, label: "My Volunteer Space" }, { id: true, label: "SPOC Corner" }].map(t => (
            <button key={String(t.id)} onClick={() => { setSpocMode(t.id); setStatsStarted(false); setTimeout(() => setStatsStarted(true), 300); }}
              style={{ padding: "14px 22px", background: "none", border: "none", borderBottom: spocMode === t.id ? `3px solid ${B_PINK}` : "3px solid transparent", color: spocMode === t.id ? "#fff" : "rgba(255,255,255,0.45)", fontSize: 13.5, fontWeight: spocMode === t.id ? 700 : 400, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s", marginBottom: -1 }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Body */}
        <div style={{ display: "flex", maxWidth: 1200, margin: "0 auto", padding: "40px 40px 100px", gap: 44 }}>

          <div style={{ flex: 1, minWidth: 0 }}>
            {spocMode ? spocSectionsJSX : volSectionsJSX}
          </div>

          {/* Right rail */}
          <div style={{ width: 148, flexShrink: 0, position: "sticky", top: 108, alignSelf: "flex-start" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: "#c0c0cc", marginBottom: 12 }}>On this page</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {currentSections.map(s => {
                const on = activeSection === s.id;
                return (
                  <button key={s.id} onClick={() => scrollTo(s.id)}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, border: "none", background: on ? "#FCE4F3" : "transparent", cursor: "pointer", textAlign: "left", transition: "background 0.18s", fontFamily: "'DM Sans', sans-serif" }}>
                    <div style={{ width: 2, height: 12, borderRadius: 2, background: on ? B_PINK : "#dddde8", flexShrink: 0, transition: "background 0.18s" }} />
                    <span style={{ fontSize: 12.5, fontWeight: on ? 700 : 400, color: on ? B_PINK : "#aaaabc", transition: "color 0.18s" }}>{s.label}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 28 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: "#c0c0cc", marginBottom: 12 }}>Quick Links</div>
              {[
                { label: "Edit Profile",  action: () => onNavigate("profile") },
                { label: "Orientation",   action: () => setShowOrientationModal(true) },
                { label: "Media Library", action: () => onNavigate("media") },
              ].map(a => (
                <button key={a.label} onClick={a.action}
                  style={{ display: "block", width: "100%", background: "none", border: "none", padding: "7px 10px", borderRadius: 8, fontSize: 12.5, color: "#8888a0", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif", transition: "background 0.15s, color 0.15s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#f0f0f8"; (e.currentTarget as HTMLElement).style.color = ACCENT_NAVY; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "none"; (e.currentTarget as HTMLElement).style.color = "#8888a0"; }}>
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TVWRegDrawer event={tvwRegEvent} onClose={() => setTvwRegEvent(null)} triggerToast={triggerToast} />

      <DrawerShell open={createEventOpen} onClose={() => setCreateEventOpen(false)} title="Post a TVW Event" subtitle="Goes live on the TVW calendar within 5 minutes" accentTag="TVW 22" accentColor={KPI_TVW}>
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 22 }}>
            {([["Event Title", evTitle, setEvTitle, "e.g. Beach Clean-up Drive"], ["Date", evDate, setEvDate, "DD/MM/YYYY"], ["Venue / Link", evVenue, setEvVenue, "Address or video call URL"], ["Capacity", evCap, setEvCap, "Max no. of volunteers"]] as const).map(([label, val, setter, ph]) => (
              <div key={label}>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: "#aaaabc", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 7 }}>{label}</div>
                <input type="text" value={val} onChange={e => (setter as any)(e.target.value)} placeholder={ph} style={inp}
                  onFocus={e => (e.target.style.borderColor = KPI_TVW)} onBlur={e => (e.target.style.borderColor = "#e0e0e8")} />
              </div>
            ))}
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, color: "#aaaabc", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 7 }}>Mode</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["In-Person", "Virtual", "Hybrid"].map(m => (
                  <button key={m} onClick={() => setEvMode(m)} style={{ flex: 1, padding: "9px", borderRadius: 8, border: `1.5px solid ${evMode === m ? KPI_TVW : "#dddde8"}`, background: evMode === m ? P_BLUE : "#fff", color: evMode === m ? KPI_TVW : "#666", fontSize: 13, fontWeight: evMode === m ? 700 : 400, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>{m}</button>
                ))}
              </div>
            </div>
          </div>
          <button disabled={!evTitle.trim() || !evDate.trim()} onClick={() => { setCreateEventOpen(false); triggerToast("Event posted to TVW calendar — live within 5 minutes."); setEvTitle(""); setEvDate(""); setEvVenue(""); setEvCap(""); }}
            style={{ width: "100%", background: evTitle.trim() && evDate.trim() ? KPI_TVW : "#e0e0e8", color: evTitle.trim() && evDate.trim() ? "#fff" : "#aaa", border: "none", borderRadius: 10, padding: "13px", fontSize: 14, fontWeight: 700, cursor: evTitle.trim() && evDate.trim() ? "pointer" : "not-allowed", fontFamily: "'DM Sans', sans-serif" }}>
            Post Event
          </button>
        </div>
      </DrawerShell>
    </>
  );
}

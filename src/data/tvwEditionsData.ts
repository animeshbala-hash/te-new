// ─────────────────────────────────────────────────────────────────────────────
// TVW Editions Data
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE:
//   - Each edition is one entry in TVW_EDITIONS.
//   - "status" controls routing: "live" = TVW Is Live page, "archive" = archive tile only.
//   - Only ONE edition should be "live" at a time (the most recent active one).
//   - "vibeUpdates" is an array of update pages for the Daily Vibe section.
//   - "bannerUrl" can be a local import path or a tataengage.com image URL.
//   - Dev team: fill in missing bannerUrl / theme / vibeUpdates as content is ready.
// ─────────────────────────────────────────────────────────────────────────────

export type VibeUpdate = {
  number: number;           // 1, 2, 3 … shown as button label
  route: string;            // internal app route e.g. "tvw/edition/24/vibe/1"
  label?: string;           // optional override label e.g. "Week 1"
};

export type TVWEdition = {
  id: number;               // edition number (matches TVW numbering: 1–25+)
  slug: string;             // URL slug e.g. "24" → /tvw/edition/24
  title: string;            // "Tata Volunteering Week 24"
  theme: string;            // the edition tagline / theme
  season: "Mar" | "Sep";   // which half of the year
  dateRange: string;        // human-readable e.g. "5 Sep – 7 Oct 2025"
  year: number;             // calendar year
  status: "live" | "archive";
  bannerUrl: string;        // hero/thumbnail image URL
  videoUrl?: string;        // YouTube embed src (optional)
  description: string;      // 2–3 sentence edition intro (shown on edition page)
  highlights: string[];     // 3–5 bullet reasons to join / key points
  hashtags: string[];       // social hashtags
  volunteerCta?: string;    // override for the CTA button label
  diyGuideUrl?: string;     // link to PDF DIY guide
  vibeUpdates: VibeUpdate[];// Daily Vibe update pages
};

// ─────────────────────────────────────────────────────────────────────────────
// THE DATA
// ─────────────────────────────────────────────────────────────────────────────

export const TVW_EDITIONS: TVWEdition[] = [

  // ── TVW 25 — LATEST / LIVE ───────────────────────────────────────────────
  {
    id: 25,
    slug: "25",
    title: "Tata Volunteering Week 25",
    theme: "Join the IVY League of Volunteers",
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2026",
    year: 2026,
    status: "live",
    bannerUrl: "https://www.tataengage.com/TVW25/TVW25_WhatsNew.jpg",
    videoUrl: "https://www.youtube.com/embed/HJ_S3OIfk6E",
    description:
      "From 3rd March to 31st March 2026, Tata Volunteering Week celebrates its milestone 25th edition of service. IVY stands for the International Volunteer Year for Sustainable Development, 2026, declared by the United Nations — a worldwide call to recognize volunteerism as a cornerstone of sustainable progress. At Tata, the IVY League represents something deeper: action, purpose, and social responsibility.",
    highlights: [
      "Celebrate 25 Editions of Volunteering — a Silver Edition marking a quarter-century of collective service",
      "Be Part of a Global Movement aligned with the UN International Volunteer Year 2026",
      "Create Ripples of Change — when one million Tata colleagues volunteer, communities feel the difference",
      "Open to employees, their families, and Tata retirees",
    ],
    hashtags: ["#TataEngage", "#TVW25", "#TataIVYLeague", "#TataVolunteers"],
    volunteerCta: "Find Volunteering Opportunities",
    diyGuideUrl: "https://tataengage.com/TVW25/PDF/TVW25_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "tvw/update-1" },          // ← live, real data in TVW25Update1View
      { number: 2, route: "tvw/edition/25/vibe/2" }, // TODO: team to build
      { number: 3, route: "tvw/edition/25/vibe/3" }, // TODO
      { number: 4, route: "tvw/edition/25/vibe/4" }, // TODO
      { number: 5, route: "tvw/edition/25/vibe/5" }, // TODO
      { number: 6, route: "tvw/edition/25/vibe/6" }, // TODO
      { number: 7, route: "tvw/edition/25/vibe/7" }, // TODO
    ],
  },

  // ── TVW 24 ───────────────────────────────────────────────────────────────
  {
    id: 24,
    slug: "24",
    title: "Tata Volunteering Week 24",
    theme: "Heart in every act, hope in every smile",
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2025",
    year: 2025,
    status: "archive",
    bannerUrl: "https://www.tataengage.com/images/TVW24_Campaign/TVW24_Daily_update_header.png",
    videoUrl: "https://www.youtube.com/embed/9J_9rZmN2L8?autoplay=1",
    description:
      "From 5th September to 7th October 2025, Tata Volunteering Week returns with a message that goes deeper than action — it's about intention. This year, we celebrate the power of heart work: acts of kindness done not out of duty, but out of love.",
    highlights: [
      "Experience the joy of volunteering led by the heart",
      "Turn moments into legacies through compassionate action",
      "Build bonds of kindness across teams and communities",
      "Shape a culture of compassion across the Tata Group",
    ],
    hashtags: ["#TVW24", "#TataCares", "#TataEngage", "#PutInTheHeartWork", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW24/PDF/TVW24_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "tvw/edition/24/vibe/1" },
      { number: 2, route: "tvw/edition/24/vibe/2" },
      { number: 3, route: "tvw/edition/24/vibe/3" },
      { number: 4, route: "tvw/edition/24/vibe/4" },
      { number: 5, route: "tvw/edition/24/vibe/5" },
      { number: 6, route: "tvw/edition/24/vibe/6" },
      { number: 7, route: "tvw/edition/24/vibe/7" },
      { number: 8, route: "tvw/edition/24/vibe/8" },
    ],
  },

  // ── TVW 23 ───────────────────────────────────────────────────────────────
  {
    id: 23,
    slug: "23",
    title: "Tata Volunteering Week 23",
    theme: "Go the extra smile, watch the world shine!",
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2025",
    year: 2025,
    status: "archive",
    bannerUrl: "", // TODO: fill in banner image URL
    videoUrl: "", // TODO: fill in YouTube embed
    description:
      "From the 3rd of March to the 31st of March 2025, Tata Volunteering Week 23 returns with a theme that's not just about volunteering — it's about shifting the world through the power of kindness by the tiniest of smiles.",
    highlights: [
      "Experience the joy of volunteering with a simple act",
      "Create lasting impact — every extra step you take counts",
      "Foster connections across the Tata volunteering community",
      "Begin kindness — because it's about creating a culture of empathy",
    ],
    hashtags: ["#TataCares", "#TataEngage", "#TVW23", "#TataVolunteers"],
    vibeUpdates: [
      { number: 1, route: "tvw/edition/23/vibe/1" },
      { number: 2, route: "tvw/edition/23/vibe/2" },
      { number: 3, route: "tvw/edition/23/vibe/3" },
      { number: 4, route: "tvw/edition/23/vibe/4" },
      { number: 5, route: "tvw/edition/23/vibe/5" },
    ],
  },

  // ── TVW 22 ───────────────────────────────────────────────────────────────
  {
    id: 22,
    slug: "22",
    title: "Tata Volunteering Week 22",
    theme: "", // TODO: fill in
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2024",
    year: 2024,
    status: "archive",
    bannerUrl: "", // TODO
    description: "", // TODO
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 21 ───────────────────────────────────────────────────────────────
  {
    id: 21,
    slug: "21",
    title: "Tata Volunteering Week 21",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2024",
    year: 2024,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 20 ───────────────────────────────────────────────────────────────
  {
    id: 20,
    slug: "20",
    title: "Tata Volunteering Week 20",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2023",
    year: 2023,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 19 ───────────────────────────────────────────────────────────────
  {
    id: 19,
    slug: "19",
    title: "Tata Volunteering Week 19",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2023",
    year: 2023,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 18 ───────────────────────────────────────────────────────────────
  {
    id: 18,
    slug: "18",
    title: "Tata Volunteering Week 18",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2022",
    year: 2022,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 17 ───────────────────────────────────────────────────────────────
  {
    id: 17,
    slug: "17",
    title: "Tata Volunteering Week 17",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2022",
    year: 2022,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 16 ───────────────────────────────────────────────────────────────
  {
    id: 16,
    slug: "16",
    title: "Tata Volunteering Week 16",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2021",
    year: 2021,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 15 ───────────────────────────────────────────────────────────────
  {
    id: 15,
    slug: "15",
    title: "Tata Volunteering Week 15",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 31 Mar 2021",
    year: 2021,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 14 ───────────────────────────────────────────────────────────────
  {
    id: 14,
    slug: "14",
    title: "Tata Volunteering Week 14",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2020",
    year: 2020,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 13 ───────────────────────────────────────────────────────────────
  {
    id: 13,
    slug: "13",
    title: "Tata Volunteering Week 13",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 4 Apr 2020",
    year: 2020,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 12 ───────────────────────────────────────────────────────────────
  {
    id: 12,
    slug: "12",
    title: "Tata Volunteering Week 12",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2019",
    year: 2019,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 11 ───────────────────────────────────────────────────────────────
  {
    id: 11,
    slug: "11",
    title: "Tata Volunteering Week 11",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 4 Apr 2019",
    year: 2019,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 10 ───────────────────────────────────────────────────────────────
  {
    id: 10,
    slug: "10",
    title: "Tata Volunteering Week 10",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2018",
    year: 2018,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 9 ────────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: "9",
    title: "Tata Volunteering Week 9",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 4 Apr 2018",
    year: 2018,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 8 ────────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: "8",
    title: "Tata Volunteering Week 8",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2017",
    year: 2017,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 7 ────────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: "7",
    title: "Tata Volunteering Week 7",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 4 Apr 2017",
    year: 2017,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 6 ────────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: "6",
    title: "Tata Volunteering Week 6",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2016",
    year: 2016,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 5 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: "5",
    title: "Tata Volunteering Week 5",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 4 Apr 2016",
    year: 2016,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 4 ────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "4",
    title: "Tata Volunteering Week 4",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 7 Oct 2015",
    year: 2015,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "3",
    title: "Tata Volunteering Week 3",
    theme: "", // TODO
    season: "Mar",
    dateRange: "3 Mar – 5 Apr 2015",
    year: 2015,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "2",
    title: "Tata Volunteering Week 2",
    theme: "", // TODO
    season: "Sep",
    dateRange: "5 Sep – 4 Oct 2014",
    year: 2014,
    status: "archive",
    bannerUrl: "",
    description: "",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },

  // ── TVW 1 ────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "1",
    title: "Tata Volunteering Week 1",
    theme: "The inaugural edition",
    season: "Mar",
    dateRange: "3 Mar – 9 Mar 2014",
    year: 2014,
    status: "archive",
    bannerUrl: "",
    description:
      "The inaugural edition of Tata Volunteering Week, launched on 3rd March 2014 — Jamsetji Tata's 175th birth anniversary. The Tata Group clocked its first volunteering hours together.",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Returns the current live edition, or null */
export const getLiveEdition = (): TVWEdition | null =>
  TVW_EDITIONS.find((e) => e.status === "live") ?? null;

/** Returns all archive editions, newest first */
export const getArchiveEditions = (): TVWEdition[] =>
  TVW_EDITIONS.filter((e) => e.status === "archive").sort((a, b) => b.id - a.id);

/** Find an edition by its slug */
export const getEditionBySlug = (slug: string): TVWEdition | undefined =>
  TVW_EDITIONS.find((e) => e.slug === slug);

// ─────────────────────────────────────────────────────────────────────────────
// TVW Editions Data
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE:
//   - status "live" = shown as TVW Is Live + appears in archive as hero card
//   - status "archive" = archive grid only
//   - Only ONE edition should be "live" at a time
//   - vibeUpdates: route is an ABSOLUTE path e.g. "/tvw/update-1"
//   - Dev team: fill in bannerUrl / theme / vibeUpdates for older editions
// ─────────────────────────────────────────────────────────────────────────────

export type VibeUpdate = {
  number: number;
  route: string;        // absolute path e.g. "/tvw/update-1"
  label?: string;
};

export type TVWEdition = {
  id: number;
  slug: string;
  title: string;
  theme: string;
  season: "Mar" | "Sep";
  dateRange: string;
  year: number;
  status: "live" | "archive";
  bannerUrl: string;
  videoUrl?: string;
  description: string;
  highlights: string[];
  hashtags: string[];
  volunteerCta?: string;
  diyGuideUrl?: string;
  vibeUpdates: VibeUpdate[];
};

export const TVW_EDITIONS: TVWEdition[] = [

  // ── TVW 25 — LIVE ────────────────────────────────────────────────────────
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
      "From 3rd March to 31st March 2026, Tata Volunteering Week celebrates its milestone 25th edition. IVY stands for the International Volunteer Year for Sustainable Development, 2026, declared by the United Nations — a worldwide call to recognize volunteerism as a cornerstone of sustainable progress. At Tata, the IVY League represents something deeper: action, purpose, and social responsibility.",
    highlights: [
      "Silver Edition — a quarter-century of collective Tata service",
      "Aligned with the UN International Volunteer Year 2026",
      "Create ripples of change — when one million colleagues volunteer, communities feel the difference",
      "Open to Tata employees, retirees, and their families",
    ],
    hashtags: ["#TataEngage", "#TVW25", "#TataIVYLeague", "#TataVolunteers"],
    volunteerCta: "Find Volunteering Opportunities",
    diyGuideUrl: "https://tataengage.com/TVW25/PDF/TVW25_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/update-1" },
      { number: 2, route: "/tvw/edition/25/vibe/2" },
      { number: 3, route: "/tvw/edition/25/vibe/3" },
      { number: 4, route: "/tvw/edition/25/vibe/4" },
      { number: 5, route: "/tvw/edition/25/vibe/5" },
      { number: 6, route: "/tvw/edition/25/vibe/6" },
      { number: 7, route: "/tvw/edition/25/vibe/7" },
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
    videoUrl: "https://www.youtube.com/embed/9J_9rZmN2L8",
    description:
      "TVW 24 returned with a message that goes deeper than action — it's about intention. Celebrating the power of heart work: acts of kindness done not out of duty, but out of love. Because when effort meets empathy, the smallest gesture becomes extraordinary.",
    highlights: [
      "Experience the joy of volunteering led by the heart",
      "Turn moments into legacies through compassionate action",
      "Build bonds of kindness across teams and communities",
      "Shape a culture of compassion across the Tata Group",
    ],
    hashtags: ["#TVW24", "#TataCares", "#TataEngage", "#PutInTheHeartWork", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW24/PDF/TVW24_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/24/vibe/1" },
      { number: 2, route: "/tvw/edition/24/vibe/2" },
      { number: 3, route: "/tvw/edition/24/vibe/3" },
      { number: 4, route: "/tvw/edition/24/vibe/4" },
      { number: 5, route: "/tvw/edition/24/vibe/5" },
      { number: 6, route: "/tvw/edition/24/vibe/6" },
      { number: 7, route: "/tvw/edition/24/vibe/7" },
      { number: 8, route: "/tvw/edition/24/vibe/8" },
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
    bannerUrl: "",
    videoUrl: "https://www.youtube.com/embed/0CW9ghqABSY",
    description:
      "TVW 23 was about shifting the world through the power of kindness — one smile at a time. A smile is a small gesture, yet its power is limitless: it lifts spirits, connects hearts, and spreads positivity. Going beyond the expected to create meaningful impact.",
    highlights: [
      "Experience the joy of making someone's day better with a simple act",
      "Create lasting impact — every extra step builds a stronger community",
      "Foster connections across the Tata volunteering family",
      "Inspire a culture where service, kindness, and empathy are cornerstones",
    ],
    hashtags: ["#TataCares", "#TataEngage", "#TVW23", "#GoTheExtraSmile", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW23/PDF/TVW23_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/23/vibe/1" },
      { number: 2, route: "/tvw/edition/23/vibe/2" },
      { number: 3, route: "/tvw/edition/23/vibe/3" },
      { number: 4, route: "/tvw/edition/23/vibe/4" },
      { number: 5, route: "/tvw/edition/23/vibe/5" },
      { number: 6, route: "/tvw/edition/23/vibe/6" },
    ],
  },

  // ── TVW 22 ───────────────────────────────────────────────────────────────
  {
    id: 22, slug: "22", title: "Tata Volunteering Week 22",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2024", year: 2024,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 21 ───────────────────────────────────────────────────────────────
  {
    id: 21, slug: "21", title: "Tata Volunteering Week 21",
    theme: "", season: "Mar", dateRange: "3 Mar – 31 Mar 2024", year: 2024,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 20 ───────────────────────────────────────────────────────────────
  {
    id: 20, slug: "20", title: "Tata Volunteering Week 20",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2023", year: 2023,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 19 ───────────────────────────────────────────────────────────────
  {
    id: 19, slug: "19", title: "Tata Volunteering Week 19",
    theme: "", season: "Mar", dateRange: "3 Mar – 31 Mar 2023", year: 2023,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 18 ───────────────────────────────────────────────────────────────
  {
    id: 18, slug: "18", title: "Tata Volunteering Week 18",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2022", year: 2022,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 17 ───────────────────────────────────────────────────────────────
  {
    id: 17, slug: "17", title: "Tata Volunteering Week 17",
    theme: "", season: "Mar", dateRange: "3 Mar – 31 Mar 2022", year: 2022,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 16 ───────────────────────────────────────────────────────────────
  {
    id: 16, slug: "16", title: "Tata Volunteering Week 16",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2021", year: 2021,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 15 ───────────────────────────────────────────────────────────────
  {
    id: 15, slug: "15", title: "Tata Volunteering Week 15",
    theme: "", season: "Mar", dateRange: "3 Mar – 31 Mar 2021", year: 2021,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 14 ───────────────────────────────────────────────────────────────
  {
    id: 14, slug: "14", title: "Tata Volunteering Week 14",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2020", year: 2020,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 13 ───────────────────────────────────────────────────────────────
  {
    id: 13, slug: "13", title: "Tata Volunteering Week 13",
    theme: "", season: "Mar", dateRange: "3 Mar – 4 Apr 2020", year: 2020,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 12 ───────────────────────────────────────────────────────────────
  {
    id: 12, slug: "12", title: "Tata Volunteering Week 12",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2019", year: 2019,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 11 ───────────────────────────────────────────────────────────────
  {
    id: 11, slug: "11", title: "Tata Volunteering Week 11",
    theme: "", season: "Mar", dateRange: "3 Mar – 4 Apr 2019", year: 2019,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 10 ───────────────────────────────────────────────────────────────
  {
    id: 10, slug: "10", title: "Tata Volunteering Week 10",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2018", year: 2018,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 9 ────────────────────────────────────────────────────────────────
  {
    id: 9, slug: "9", title: "Tata Volunteering Week 9",
    theme: "", season: "Mar", dateRange: "3 Mar – 4 Apr 2018", year: 2018,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 8 ────────────────────────────────────────────────────────────────
  {
    id: 8, slug: "8", title: "Tata Volunteering Week 8",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2017", year: 2017,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 7 ────────────────────────────────────────────────────────────────
  {
    id: 7, slug: "7", title: "Tata Volunteering Week 7",
    theme: "", season: "Mar", dateRange: "3 Mar – 4 Apr 2017", year: 2017,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 6 ────────────────────────────────────────────────────────────────
  {
    id: 6, slug: "6", title: "Tata Volunteering Week 6",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2016", year: 2016,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 5 ────────────────────────────────────────────────────────────────
  {
    id: 5, slug: "5", title: "Tata Volunteering Week 5",
    theme: "", season: "Mar", dateRange: "3 Mar – 4 Apr 2016", year: 2016,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 4 ────────────────────────────────────────────────────────────────
  {
    id: 4, slug: "4", title: "Tata Volunteering Week 4",
    theme: "", season: "Sep", dateRange: "5 Sep – 7 Oct 2015", year: 2015,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 3 ────────────────────────────────────────────────────────────────
  {
    id: 3, slug: "3", title: "Tata Volunteering Week 3",
    theme: "", season: "Mar", dateRange: "3 Mar – 5 Apr 2015", year: 2015,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
  },

  // ── TVW 2 ────────────────────────────────────────────────────────────────
  {
    id: 2, slug: "2", title: "Tata Volunteering Week 2",
    theme: "", season: "Sep", dateRange: "5 Sep – 4 Oct 2014", year: 2014,
    status: "archive", bannerUrl: "", description: "", highlights: [], hashtags: [], vibeUpdates: [],
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
    description: "The inaugural edition of Tata Volunteering Week, launched on 3rd March 2014 — Jamsetji Tata's 175th birth anniversary. The Tata Group came together for the first time under one volunteering banner.",
    highlights: [],
    hashtags: [],
    vibeUpdates: [],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
export const getLiveEdition = (): TVWEdition | null =>
  TVW_EDITIONS.find((e) => e.status === "live") ?? null;

export const getArchiveEditions = (): TVWEdition[] =>
  TVW_EDITIONS.filter((e) => e.status === "archive").sort((a, b) => b.id - a.id);

export const getEditionBySlug = (slug: string): TVWEdition | undefined =>
  TVW_EDITIONS.find((e) => e.slug === slug);

// ─────────────────────────────────────────────────────────────────────────────
// TVW Editions Data
// ─────────────────────────────────────────────────────────────────────────────
// status "live"    = TVW Is Live page + archive hero card
// status "archive" = archive grid only
// Only ONE edition should be "live" at a time
// vibeUpdates.route = absolute path e.g. "/tvw/update-1"
// ─────────────────────────────────────────────────────────────────────────────

export type VibeUpdate = {
  number: number;
  route: string;
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
    id: 25, slug: "25",
    title: "Tata Volunteering Week 25",
    theme: "Join the IVY League of Volunteers",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2026", year: 2026,
    status: "live",
    bannerUrl: "https://www.tataengage.com/TVW25/TVW25_WhatsNew.jpg",
    videoUrl: "https://www.youtube.com/embed/HJ_S3OIfk6E",
    description: "From 3rd March to 31st March 2026, Tata Volunteering Week celebrates its milestone 25th edition. IVY stands for the International Volunteer Year for Sustainable Development, 2026, declared by the United Nations — a worldwide call to recognize volunteerism as a cornerstone of sustainable progress. At Tata, the IVY League represents something deeper: action, purpose, and social responsibility.",
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
    id: 24, slug: "24",
    title: "Tata Volunteering Week 24",
    theme: "Heart in every act, hope in every smile",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2025", year: 2025,
    status: "archive",
    bannerUrl: "https://www.tataengage.com/images/TVW24_Campaign/TVW24_Daily_update_header.png",
    videoUrl: "https://www.youtube.com/embed/9J_9rZmN2L8",
    description: "TVW 24 returned with a message that goes deeper than action — it's about intention. Celebrating the power of heart work: acts of kindness done not out of duty, but out of love. Because when effort meets empathy, the smallest gesture becomes extraordinary.",
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
    id: 23, slug: "23",
    title: "Tata Volunteering Week 23",
    theme: "Go the extra smile, watch the world shine!",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2025", year: 2025,
    status: "archive",
    bannerUrl: "",
    videoUrl: "https://www.youtube.com/embed/0CW9ghqABSY",
    description: "TVW 23 was about shifting the world through the power of kindness — one smile at a time. A smile is a small gesture, yet its power is limitless: it lifts spirits, connects hearts, and spreads positivity. Going beyond the expected to create meaningful impact.",
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
    id: 22, slug: "22",
    title: "Tata Volunteering Week 22",
    theme: "Unleash your inner champion with Volympics!",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2024", year: 2024,
    status: "archive",
    bannerUrl: "",
    videoUrl: "https://www.youtube.com/embed/wJofGFwYvN4",
    description: "From 5th September to 7th October 2024, TVW 22 brought the spirit of Volympics to the Tata group. Much like the Olympics unite diverse talents to celebrate excellence, Volympics encouraged everyone to come together in the noble pursuit of community betterment — competing in friendly spirit to make a tangible difference.",
    highlights: [
      "Themed around the Volympics — channelling the Olympic spirit into community service",
      "Open to Tata employees, family members, and retirees across the globe",
      "Friendly competition to inspire excellence in social impact",
      "DIY kit available to organise your own volunteering activity",
    ],
    hashtags: ["#TataEngage", "#TVW22", "#TataVolympics", "#TataPassTheTorch"],
    diyGuideUrl: "https://tataengage.com/TVW22/PDF/TVW22_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/22/vibe/1" },
      { number: 2, route: "/tvw/edition/22/vibe/2" },
      { number: 3, route: "/tvw/edition/22/vibe/3" },
      { number: 4, route: "/tvw/edition/22/vibe/4" },
      { number: 5, route: "/tvw/edition/22/vibe/5" },
      { number: 6, route: "/tvw/edition/22/vibe/6" },
      { number: 7, route: "/tvw/edition/22/vibe/7" },
      { number: 8, route: "/tvw/edition/22/vibe/8" },
    ],
  },

  // ── TVW 21 ───────────────────────────────────────────────────────────────
  {
    id: 21, slug: "21",
    title: "Tata Volunteering Week 21",
    theme: "Score A FOUR – Overstep the boundaries FOUR Good",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2024", year: 2024,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW21_campaign/TVW21_Launch_Website_Banner_2.jpg",
    videoUrl: "https://www.youtube.com/embed/5jhSA2hfIM4",
    description: "Launched on 3rd March 2024, TVW 21 invited Tata volunteers to 'Score a Four' — volunteering for four hours during the edition. The theme celebrated the Tata group's aspiration of having each volunteer contribute at least four hours a year, reflecting collective purpose and commitment to positive change.",
    highlights: [
      "Rallied volunteers to cross the boundary and contribute 4 hours of service",
      "Supported the group aspiration of 4 volunteering hours per employee per year",
      "Over 3.67 million volunteering hours clocked in FY2023 — highest ever at the time",
      "Opportunities curated by Tata companies as well as group-level One Tata events",
    ],
    hashtags: ["#TataEngage", "#TVW21", "#ScoreAFour", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW21/PDF/TVW21_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/21/vibe/1" },
      { number: 2, route: "/tvw/edition/21/vibe/2" },
      { number: 3, route: "/tvw/edition/21/vibe/3" },
      { number: 4, route: "/tvw/edition/21/vibe/4" },
      { number: 5, route: "/tvw/edition/21/vibe/5" },
    ],
  },

  // ── TVW 20 ───────────────────────────────────────────────────────────────
  {
    id: 20, slug: "20",
    title: "Tata Volunteering Week 20",
    theme: "Team TVWenty – League of Extraordinary Volunteers",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2023", year: 2023,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW20_campaign/TVW20_Launch_Website_Banner_2.png",
    videoUrl: "https://www.youtube.com/embed/XNao-3LM9T8",
    description: "TVW 20 marked a milestone as the 20th edition, launched on 5th September 2023, aligned with the International Day of Charity. The theme 'Team TVWenty – League of Extraordinary Volunteers' reflected the power of extraordinary volunteers standing in solidarity to create positive change.",
    highlights: [
      "Milestone 20th edition of Tata Volunteering Week",
      "Aligned with the UN International Day of Charity 2023",
      "Featured collaborative One Tata events across geographies",
      "Diverse DIY opportunities allowing volunteers to pick causes close to their hearts",
    ],
    hashtags: ["#TataEngage", "#TVW20", "#TeamTVWenty", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW20/PDF/TVW20_DIY_Guide.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/20/vibe/1" },
      { number: 2, route: "/tvw/edition/20/vibe/2" },
      { number: 3, route: "/tvw/edition/20/vibe/3" },
      { number: 4, route: "/tvw/edition/20/vibe/4" },
      { number: 5, route: "/tvw/edition/20/vibe/5" },
      { number: 6, route: "/tvw/edition/20/vibe/6" },
      { number: 7, route: "/tvw/edition/20/vibe/7" },
      { number: 8, route: "/tvw/edition/20/vibe/8" },
    ],
  },

  // ── TVW 19 ───────────────────────────────────────────────────────────────
  {
    id: 19, slug: "19",
    title: "Tata Volunteering Week 19",
    theme: "#We4V – We For Volunteering",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2023", year: 2023,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW19_campaign/TVW19-Thank-YouBanner.png",
    videoUrl: "https://www.youtube.com/embed/XVkpW_8vg6Y",
    description: "TVW 19 set a record with over 1.38 million volunteering hours clocked by Tata employees and their families. The theme '#We4V — We For Volunteering' celebrated the Tata community coming together with unified purpose, driving bolder strides toward the group's volunteering aspirations.",
    highlights: [
      "Over 1.38 million volunteering hours — highest ever edition at the time",
      "More than 8,10,000 volunteers from 48 Tata companies participated",
      "6,900+ activities across 730+ locations supporting 500+ NGO partners",
      "Causes spanned women empowerment, youth mentoring, health, education, and ecology",
    ],
    hashtags: ["#TataEngage", "#TVW19", "#We4V", "#WeForVolunteering", "#TataVolunteers"],
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/19/vibe/1" },
      { number: 2, route: "/tvw/edition/19/vibe/2" },
      { number: 3, route: "/tvw/edition/19/vibe/3" },
      { number: 4, route: "/tvw/edition/19/vibe/4" },
      { number: 5, route: "/tvw/edition/19/vibe/5" },
      { number: 6, route: "/tvw/edition/19/vibe/6" },
      { number: 7, route: "/tvw/edition/19/vibe/7" },
      { number: 8, route: "/tvw/edition/19/vibe/8" },
      { number: 9, route: "/tvw/edition/19/vibe/9" },
      { number: 10, route: "/tvw/edition/19/vibe/10" },
      { number: 11, route: "/tvw/edition/19/vibe/11" },
    ],
  },

  // ── TVW 18 ───────────────────────────────────────────────────────────────
  {
    id: 18, slug: "18",
    title: "Tata Volunteering Week 18",
    theme: "Together, we are unstoppable",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2022", year: 2022,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW18_campaign/About_TVW18.png",
    videoUrl: "https://www.youtube.com/embed/D8tC0xj69v8",
    description: "Launched on 5th September 2022, TVW 18 celebrated the power of collective action of more than 9,00,000 Tata employees. The theme 'Together, we are unstoppable' focused on coming together as an unstoppable force of care and goodness, as the world returned towards normalcy.",
    highlights: [
      "Celebrated the collective power of over 9 lakh Tata employees",
      "Combined virtual and on-ground volunteering opportunities",
      "Tata Engage Volunteering App enabled seamless sign-up and reporting",
      "Open to current employees, retirees, and their families",
    ],
    hashtags: ["#TataEngage", "#TVW18", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW18/PDF/TVW18_DIY_GUIDE.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/18/vibe/1" },
      { number: 2, route: "/tvw/edition/18/vibe/2" },
      { number: 3, route: "/tvw/edition/18/vibe/3" },
      { number: 4, route: "/tvw/edition/18/vibe/4" },
      { number: 5, route: "/tvw/edition/18/vibe/5" },
      { number: 6, route: "/tvw/edition/18/vibe/6" },
      { number: 7, route: "/tvw/edition/18/vibe/7" },
      { number: 8, route: "/tvw/edition/18/vibe/8" },
      { number: 9, route: "/tvw/edition/18/vibe/9" },
      { number: 10, route: "/tvw/edition/18/vibe/10" },
    ],
  },

  // ── TVW 17 ───────────────────────────────────────────────────────────────
  {
    id: 17, slug: "17",
    title: "Tata Volunteering Week 17",
    theme: "Be the Super-spreader of Smiles",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2022", year: 2022,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW17_campaign/About_TVW17.png",
    videoUrl: "https://www.youtube.com/embed/R0nsouIyB6E",
    description: "Launched on 3rd March 2022, TVW 17 invited Tata volunteers to be 'Super-spreaders of Smiles'. The edition offered virtual and on-ground volunteering opportunities, acknowledging the smiles volunteers spread in communities and in their own lives as the world gradually returned to normalcy.",
    highlights: [
      "Focused on spreading smiles and joy as the world emerged from the pandemic",
      "Wide range of virtual and on-ground opportunities based on comfort and preference",
      "Powered by the Tata Engage Volunteering App for seamless sign-up and reporting",
      "Volunteer Champion Award presented to top performers this edition",
    ],
    hashtags: ["#TataEngage", "#TVW17", "#SuperSpreaderOfSmiles", "#TataVolunteers"],
    diyGuideUrl: "https://tataengage.com/TVW17/PDF/TVW17_DIY_GUIDE.pdf",
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/17/vibe/1" },
      { number: 2, route: "/tvw/edition/17/vibe/2" },
      { number: 3, route: "/tvw/edition/17/vibe/3" },
      { number: 4, route: "/tvw/edition/17/vibe/4" },
      { number: 5, route: "/tvw/edition/17/vibe/5" },
      { number: 6, route: "/tvw/edition/17/vibe/6" },
      { number: 7, route: "/tvw/edition/17/vibe/7" },
      { number: 8, route: "/tvw/edition/17/vibe/8" },
      { number: 9, route: "/tvw/edition/17/vibe/9" },
    ],
  },

  // ── TVW 16 ───────────────────────────────────────────────────────────────
  {
    id: 16, slug: "16",
    title: "Tata Volunteering Week 16",
    theme: "The power to change the world is in your hand",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2021", year: 2021,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW16_campaign/TVW16_ThePowerToChange_thumb.jpg",
    description: "TVW 16 launched on 5th September 2021. It was a special edition marking the launch of the Tata Engage Volunteering App. More than 47,000 volunteers clocked over 1,90,000 hours across 3,300+ activities by 35 Tata companies in 100+ cities, reaching over 1,00,000 beneficiaries.",
    highlights: [
      "Over 47,000 volunteers contributed 1,90,000+ hours",
      "3,300+ activities by 35 Tata companies across 100+ cities",
      "Marked the launch of the Tata Engage Volunteering App",
      "Causes ranged from COVID awareness to women empowerment, education and ecological conservation",
    ],
    hashtags: ["#TataEngage", "#TVW16", "#TataVolunteers"],
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/16/vibe/1" },
      { number: 2, route: "/tvw/edition/16/vibe/2" },
      { number: 3, route: "/tvw/edition/16/vibe/3" },
      { number: 4, route: "/tvw/edition/16/vibe/4" },
      { number: 5, route: "/tvw/edition/16/vibe/5" },
      { number: 6, route: "/tvw/edition/16/vibe/6" },
      { number: 7, route: "/tvw/edition/16/vibe/7" },
      { number: 8, route: "/tvw/edition/16/vibe/8" },
      { number: 9, route: "/tvw/edition/16/vibe/9" },
      { number: 10, route: "/tvw/edition/16/vibe/10" },
      { number: 11, route: "/tvw/edition/16/vibe/11" },
      { number: 12, route: "/tvw/edition/16/vibe/12" },
      { number: 13, route: "/tvw/edition/16/vibe/13" },
    ],
  },

  // ── TVW 15 ───────────────────────────────────────────────────────────────
  {
    id: 15, slug: "15",
    title: "Tata Volunteering Week 15",
    theme: "Shatter the Status Quo",
    season: "Mar", dateRange: "3 Mar – 31 Mar 2021", year: 2021,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW15_campaign/TVW15_and_Shatter_the_status_quo_logo-with_dates_thumb.jpg",
    description: "TVW 15 ran from 3rd to 31st March 2021. Over 2,200 activities were conducted by 42 Tata companies across 80+ locations. More than 10,000 volunteers contributed 1.2 lakh+ hours, reaching 1.3 lakh+ beneficiaries through both virtual and on-ground activities.",
    highlights: [
      "Over 10,000 volunteers contributed 1.2 lakh+ volunteering hours",
      "2,200+ activities by 42 companies across 80+ locations",
      "Reached 1.3 lakh+ beneficiaries across diverse causes",
      "Activities conducted both virtually and on-ground with safety precautions",
    ],
    hashtags: ["#TataEngage", "#TVW15", "#ShatterTheStatusQuo", "#TataVolunteers"],
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/15/vibe/1" },
      { number: 2, route: "/tvw/edition/15/vibe/2" },
      { number: 3, route: "/tvw/edition/15/vibe/3" },
      { number: 4, route: "/tvw/edition/15/vibe/4" },
      { number: 5, route: "/tvw/edition/15/vibe/5" },
      { number: 6, route: "/tvw/edition/15/vibe/6" },
      { number: 7, route: "/tvw/edition/15/vibe/7" },
      { number: 8, route: "/tvw/edition/15/vibe/8" },
      { number: 9, route: "/tvw/edition/15/vibe/9" },
    ],
  },

  // ── TVW 14 ───────────────────────────────────────────────────────────────
  {
    id: 14, slug: "14",
    title: "Tata Volunteering Week 14",
    theme: "Work From Heart",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2020", year: 2020,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW14_campaign/TVW14_TVWLogo_thumb.jpg",
    description: "TVW 14 launched on 5th September 2020 — for the first time, a large part of volunteering was done remotely due to COVID-19. Over 2,500 activities were conducted by 35 Tata companies across 75+ cities. More than 25,000 volunteers contributed 60,000+ hours reaching 1 lakh+ beneficiaries.",
    highlights: [
      "First edition conducted largely remotely due to COVID-19",
      "25,000+ volunteers from 35 companies across 75+ cities",
      "60,000+ hours volunteered reaching 1 lakh+ beneficiaries",
      "Activities ranged from mask making to health webinars to on-ground tree plantations",
    ],
    hashtags: ["#TataEngage", "#TVW14", "#WorkFromHeart", "#TataVolunteers"],
    vibeUpdates: [
      { number: 1, route: "/tvw/edition/14/vibe/1" },
      { number: 2, route: "/tvw/edition/14/vibe/2" },
      { number: 3, route: "/tvw/edition/14/vibe/3" },
      { number: 4, route: "/tvw/edition/14/vibe/4" },
      { number: 5, route: "/tvw/edition/14/vibe/5" },
      { number: 6, route: "/tvw/edition/14/vibe/6" },
      { number: 7, route: "/tvw/edition/14/vibe/7" },
      { number: 8, route: "/tvw/edition/14/vibe/8" },
      { number: 9, route: "/tvw/edition/14/vibe/9" },
      { number: 10, route: "/tvw/edition/14/vibe/10" },
      { number: 11, route: "/tvw/edition/14/vibe/11" },
      { number: 12, route: "/tvw/edition/14/vibe/12" },
    ],
  },

  // ── TVW 13 ───────────────────────────────────────────────────────────────
  {
    id: 13, slug: "13",
    title: "Tata Volunteering Week 13",
    theme: "Volunteering for a better world",
    season: "Mar", dateRange: "3 Mar – 4 Apr 2020", year: 2020,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW13_campaign/TVW13_Logo.jpg",
    description: "TVW 13 started on 3rd March 2020, the 181st birth anniversary of founder Jamsetji Tata. Due to the evolving COVID-19 situation, the Tata group cancelled TVW 13 on 17th March 2020 to ensure the safety of volunteers and communities.",
    highlights: [
      "Launched on the 181st birth anniversary of Jamsetji Tata",
      "Cancelled on 17 March 2020 due to the COVID-19 pandemic",
      "Safety of volunteers and communities was the primary consideration",
      "Marked the onset of Tata Engage's pandemic-era virtual volunteering journey",
    ],
    hashtags: ["#TataEngage", "#TVW13", "#TataVolunteers"],
    vibeUpdates: [],
  },

  // ── TVW 12 ───────────────────────────────────────────────────────────────
  {
    id: 12, slug: "12",
    title: "Tata Volunteering Week 12",
    theme: "Brands for Humanity",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2019", year: 2019,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW12_campaign/TVW12_logo.png",
    description: "TVW 12 launched on 5th September 2019. Over 3,000 activities were conducted by 56 Tata companies across 200+ locations in 13 countries, with 1 lakh volunteers supporting 450+ partners. India volunteers also joined Swachhata Hi Seva 2019, collecting 3 lakh kg of plastic waste.",
    highlights: [
      "1 lakh volunteers, 3,000+ activities across 200+ locations in 13 countries",
      "56 Tata companies supported 450+ partner organisations",
      "Joined Swachhata Hi Seva 2019 — 3 lakh kg of plastic waste collected",
      "Causes ranged from mangrove planting to female voter awareness in remote villages",
    ],
    hashtags: ["#TataEngage", "#TVW12", "#BrandsForHumanity", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 19 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/12/vibe/${i + 1}` })),
  },

  // ── TVW 11 ───────────────────────────────────────────────────────────────
  {
    id: 11, slug: "11",
    title: "Tata Volunteering Week 11",
    theme: "Let's Go!",
    season: "Mar", dateRange: "3 Mar – 4 Apr 2019", year: 2019,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW11_campaign/TVW11_logo.png",
    description: "TVW 11 launched on 3rd March 2019 under the 'Let's Go' campaign. Over 2,800 activities were conducted by 47 Tata companies across 180+ locations in 11 countries, supporting 500+ partner organisations.",
    highlights: [
      "2,800+ activities by 47 companies in 180+ locations across 11 countries",
      "500+ partner organisations supported",
      "Causes spanned ecology, education, health, skills development and community welfare",
      "Strong participation from senior leaders, families and retirees",
    ],
    hashtags: ["#TataEngage", "#TVW11", "#LetsGo", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 24 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/11/vibe/${i + 1}` })),
  },

  // ── TVW 10 ───────────────────────────────────────────────────────────────
  {
    id: 10, slug: "10",
    title: "Tata Volunteering Week 10",
    theme: "Do the Heart Thing!",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2018", year: 2018,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW10_campaign/TVW10_logo.png",
    description: "TVW 10 launched on 5th September 2018 under the 'Do the Heart Thing' campaign. Over 2,800 activities were conducted by 45 Tata companies across 150+ locations in 16 countries, supporting 600+ partners.",
    highlights: [
      "2,800+ activities by 45 companies across 150+ locations in 16 countries",
      "600+ partner organisations supported",
      "Causes ranged from lake cleaning, recycling awareness to youth job preparation",
      "Broad participation from senior leaders, families, and retirees globally",
    ],
    hashtags: ["#TataEngage", "#TVW10", "#DoTheHeartThing", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/10/vibe/${i + 1}` })),
  },

  // ── TVW 9 ────────────────────────────────────────────────────────────────
  {
    id: 9, slug: "9",
    title: "Tata Volunteering Week 9",
    theme: "Give a little, Take a lot",
    season: "Mar", dateRange: "3 Mar – 4 Apr 2018", year: 2018,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW9_campaign/TVW9_logo.png",
    description: "TVW 9 launched on 3rd March 2018 under the 'Give a little, Take a lot' campaign. Over 1,900 activities were conducted by 40 Tata companies across 130+ locations, supporting 600+ partners.",
    highlights: [
      "1,900+ activities by 40 companies across 130+ locations",
      "600+ partner organisations supported",
      "Causes included recycling, lake cleaning, Tata STRIVE youth skills sessions, and health drives",
      "Participation by senior leaders, families and retirees across geographies",
    ],
    hashtags: ["#TataEngage", "#TVW9", "#GiveALittleTakeALot", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/9/vibe/${i + 1}` })),
  },

  // ── TVW 8 ────────────────────────────────────────────────────────────────
  {
    id: 8, slug: "8",
    title: "Tata Volunteering Week 8",
    theme: "Now It's Your Turn",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2017", year: 2017,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW8_campaign/TVW8_ONLY_Aboutpage.png",
    description: "TVW 8 launched on 5th September 2017 and set record participation with over 2,200 activities by 55 Tata companies across 170+ locations. Volunteers supported 560+ partners with activities ranging from road safety campaigns to wheelchair assembly and organ donation drives.",
    highlights: [
      "Record participation — 2,200+ activities by 55 companies across 170+ locations",
      "560+ partners supported across non-profits, schools, hospitals and communities",
      "Causes included road safety, biodiversity, differently abled support and disaster relief",
      "Employees signed up for organ donation and other life-changing initiatives",
    ],
    hashtags: ["#TataEngage", "#TVW8", "#NowItsYourTurn", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 21 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/8/vibe/${i + 1}` })),
  },

  // ── TVW 7 ────────────────────────────────────────────────────────────────
  {
    id: 7, slug: "7",
    title: "Tata Volunteering Week 7",
    theme: "Chase it, Change it",
    season: "Mar", dateRange: "3 Mar – 4 Apr 2017", year: 2017,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW7_campaign/TVW7_ONLY_Aboutpage.jpg",
    description: "TVW 7 launched on 3rd March 2017 under the 'Chase it Change it' campaign. Over 1,700 activities were conducted by 49 Tata companies across 130+ locations supporting 500+ partners.",
    highlights: [
      "1,700+ activities by 49 companies in 130+ locations supporting 500+ partners",
      "Contributed to the Swachh Bharat Mission through cleanliness drives",
      "Digital literacy sessions helped communities adapt post-demonetization",
      "Employees took the #TataPledge to support local communities",
    ],
    hashtags: ["#TataEngage", "#TVW7", "#ChaseItChangeIt", "#TataPledge", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/7/vibe/${i + 1}` })),
  },

  // ── TVW 6 ────────────────────────────────────────────────────────────────
  {
    id: 6, slug: "6",
    title: "Tata Volunteering Week 6",
    theme: "Count Me In",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2016", year: 2016,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW6_campaign/TVW6_thumb.jpg",
    description: "TVW 6 launched on 5th September 2016 under the 'Count Me In' campaign. Over 1,600 activities were conducted by 60 Tata companies across 150+ locations, supporting 650+ partners.",
    highlights: [
      "1,600+ activities by 60 companies across 150+ locations supporting 650+ partners",
      "Causes included environmental conservation, education, and farmer livelihood support",
      "Volunteers trained farmers on bio-fertilizer usage, boosting agricultural incomes",
      "Sessions conducted for Tata STRIVE youth on employability and life skills",
    ],
    hashtags: ["#TataEngage", "#TVW6", "#CountMeIn", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 25 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/6/vibe/${i + 1}` })),
  },

  // ── TVW 5 ────────────────────────────────────────────────────────────────
  {
    id: 5, slug: "5",
    title: "Tata Volunteering Week 5",
    theme: "Make it a Million",
    season: "Mar", dateRange: "3 Mar – 4 Apr 2016", year: 2016,
    status: "archive",
    bannerUrl: "https://tataengage.com/images/TVW5-logo.jpg",
    description: "TVW 5 launched on 3rd March 2016 — the 177th birth anniversary of founder Jamsetji Tata. With the theme 'Make it a Million', the edition rallied volunteers to collectively clock one million volunteering hours. 37 Tata companies across 80 locations conducted 1,000+ activities, contributing 1,07,950 hours supporting 400+ organisations.",
    highlights: [
      "37 companies, 80 locations, 1,000+ activities and 1,07,950 hours contributed",
      "400+ organisations and communities supported",
      "Rallied around the group target of one million volunteering hours",
      "Activities ranged from cleanliness drives and coral reef conservation to solar night lights",
    ],
    hashtags: ["#TataEngage", "#TVW5", "#MakeItAMillion", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/5/vibe/${i + 1}` })),
  },

  // ── TVW 4 ────────────────────────────────────────────────────────────────
  {
    id: 4, slug: "4",
    title: "Tata Volunteering Week 4",
    theme: "Trigger a Change Reaction",
    season: "Sep", dateRange: "5 Sep – 7 Oct 2015", year: 2015,
    status: "archive",
    bannerUrl: "",
    description: "TVW 4 launched on 5th September 2015 to coincide with the UN International Day of Charity. Over 900 activities were undertaken by 30+ Tata companies across 70 locations, in collaboration with 400+ partners. Global activities included building a town home in the US and donating 20,000 books to children in the US and Canada.",
    highlights: [
      "900+ activities by 30+ companies across 70 locations supporting 400+ partners",
      "Built a town home for a family in need in the US",
      "Distributed 20,000 books to children in the US and Canada",
      "UK volunteers raised £4,500 for Macmillan Cancer Support",
    ],
    hashtags: ["#TataEngage", "#TVW4", "#TriggerAChangeReaction", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 21 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/4/vibe/${i + 1}` })),
  },

  // ── TVW 3 ────────────────────────────────────────────────────────────────
  {
    id: 3, slug: "3",
    title: "Tata Volunteering Week 3",
    theme: "Me for We",
    season: "Mar", dateRange: "3 Mar – 5 Apr 2015", year: 2015,
    status: "archive",
    bannerUrl: "",
    description: "TVW 3 ran from 3rd March to 5th April 2015, marking one year of Tata Engage. Themed 'Me for We', the edition represented every individual of the Tata family coming together as a larger united force. Over 20,000+ volunteers participated in 850+ activities supporting 500+ partners.",
    highlights: [
      "20,000+ volunteers, 850+ activities, 500+ partners supported",
      "Flash mob at Churchgate Station, Mumbai to promote hygiene and Swachh Bharat",
      "Five Tata companies collaborated on the flash mob — a showcase of One Tata spirit",
      "Marked one year of the Tata Engage volunteering programme",
    ],
    hashtags: ["#TataEngage", "#TVW3", "#MeForWe", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 9 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/3/vibe/${i + 1}` })),
  },

  // ── TVW 2 ────────────────────────────────────────────────────────────────
  {
    id: 2, slug: "2",
    title: "Tata Volunteering Week 2",
    theme: "Expanding the Volunteering Family",
    season: "Sep", dateRange: "5 Sep – 4 Oct 2014", year: 2014,
    status: "archive",
    bannerUrl: "",
    description: "TVW II extended to a full month on public demand. It saw the first-ever participation of Tata employee families and retirees. Over 20,000+ volunteers from 100+ companies participated in 500+ activities across 1,000+ locations globally, growing the Tata Engage community to 55,000+ registered volunteers.",
    highlights: [
      "First edition to include family members and retired Tata employees",
      "20,000+ volunteers, 500+ activities across 1,000+ locations globally",
      "55,000+ total Tata Engage community members at close of edition",
      "Cross-company collaborations in Canada, Mumbai and Kolkata set a new Tata benchmark",
    ],
    hashtags: ["#TataEngage", "#TVW2", "#TataVolunteers"],
    vibeUpdates: Array.from({ length: 7 }, (_, i) => ({ number: i + 1, route: `/tvw/edition/2/vibe/${i + 1}` })),
  },

  // ── TVW 1 ────────────────────────────────────────────────────────────────
  {
    id: 1, slug: "1",
    title: "Tata Volunteering Week 1",
    theme: "The inaugural edition",
    season: "Mar", dateRange: "3 Mar – 9 Mar 2014", year: 2014,
    status: "archive",
    bannerUrl: "",
    description: "The inaugural edition of Tata Volunteering Week, launched on 3rd March 2014 — Jamsetji Tata's 175th birth anniversary. The Tata Group came together for the first time under one volunteering banner, setting the foundation for what would become a 25-edition strong tradition of collective service.",
    highlights: [],
    hashtags: ["#TataEngage", "#TVW1", "#TataVolunteers"],
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

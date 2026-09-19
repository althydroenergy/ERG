/**
 * Editable content source for the ERG website.
 * All page copy, research entries, news entries and partnership tracks live
 * here so they can be updated without touching component code.
 */

export const site = {
  name: "ERG",
  longName: "ERGroup",
  project: "Innovative Small Hydropower",
  tagline: "Free flow, highly efficient micro hydropower for rivers and canals",
  email: "althydroenergy@gmail.com",
  officialSite: "https://althydroenergy.github.io/ERGroup/project.html",
  mission:
    "Develop and commercialise innovative free flow micro hydropower technology for rivers and canals, without conventional dams.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Technology", to: "/technology" },
  { label: "Research", to: "/research" },
  { label: "Pilot Project", to: "/pilot-project" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;

export type Publication = {
  id: string;
  title: string;
  description: string;
  source: string;
  category: "Project Documentation" | "Technology" | "Concept" | "Media";
  viewUrl: string;
  downloadUrl?: string;
};

/**
 * Only material published by ERG on its official project website is listed.
 */
export const publications: Publication[] = [
  {
    id: "project-overview",
    title: "Innovative Small Hydropower — Project Overview",
    description:
      "The official ERGroup project page describing the free flow micro hydropower station, its purpose and its development status.",
    source: "ERGroup official project website",
    category: "Project Documentation",
    viewUrl: "https://althydroenergy.github.io/ERGroup/project.html",
  },
  {
    id: "two-in-one",
    title: "The Two In One Concept",
    description:
      "ERG documentation of the paired rotor arrangement that allows one floating station to work in both slow and fast watercourses.",
    source: "ERGroup official project materials",
    category: "Concept",
    viewUrl: "https://althydroenergy.github.io/ERGroup/project.html",
  },
  {
    id: "free-flow-principle",
    title: "Free Flow Hydropower Without Dams",
    description:
      "ERG material on generating electricity from the kinetic energy of a moving watercourse, with no dam, no reservoir and no head created.",
    source: "ERGroup official project materials",
    category: "Technology",
    viewUrl: "https://althydroenergy.github.io/ERGroup/project.html",
  },
  {
    id: "project-media",
    title: "Project Imagery and Video Material",
    description:
      "Official ERG renders, workshop photographs and video material of the assembled turbine unit.",
    source: "ERGroup official project website",
    category: "Media",
    viewUrl: "https://althydroenergy.github.io/ERGroup/project.html",
  },
];

export const publicationCategories = [
  "All",
  "Project Documentation",
  "Concept",
  "Technology",
  "Media",
] as const;

export type NewsCategory =
  | "Project Development"
  | "Research"
  | "Technology"
  | "Partnerships"
  | "Renewable Energy";

export const newsCategories: NewsCategory[] = [
  "Project Development",
  "Research",
  "Technology",
  "Partnerships",
  "Renewable Energy",
];

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  body: string;
};

/**
 * Intentionally empty. ERG has published no dated news items, and nothing is
 * invented here. Add entries to this array and the news page renders them.
 */
export const news: NewsItem[] = [];

export const applications = [
  {
    title: "Rivers",
    text: "Natural watercourses with a steady current, where the station floats in the flow rather than blocking it.",
  },
  {
    title: "Canals",
    text: "Engineered channels with predictable cross sections and velocities, well suited to a fixed floating unit.",
  },
  {
    title: "Irrigation networks",
    text: "Distribution channels that already carry water for agriculture and could carry generation alongside it.",
  },
  {
    title: "Farms",
    text: "Agricultural holdings adjacent to a watercourse that need power close to the point of use.",
  },
  {
    title: "Rural communities",
    text: "Settlements away from a reliable grid connection but close to moving water.",
  },
  {
    title: "Villages",
    text: "Small population centres where a compact generating unit can serve shared loads.",
  },
  {
    title: "Small enterprises",
    text: "Workshops, mills and processing units with modest, continuous electrical demand.",
  },
  {
    title: "Water infrastructure",
    text: "Existing channels, weirs and conveyance systems where flow is already managed.",
  },
];

export const partnershipTracks = [
  {
    id: "investors",
    title: "Investors",
    text: "Fund the pilot stage of a dam free hydropower technology and follow its engineering progress directly.",
  },
  {
    id: "ngos",
    title: "NGOs",
    text: "Work with ERG on energy access programmes for communities living beside rivers and canals.",
  },
  {
    id: "manufacturers",
    title: "Manufacturers",
    text: "Contribute fabrication capability for rotors, floats and frame assemblies during prototype preparation.",
  },
  {
    id: "engineering-firms",
    title: "Engineering firms",
    text: "Collaborate on hydrodynamic assessment, structural detailing and installation methodology.",
  },
  {
    id: "universities",
    title: "Universities",
    text: "Joint study of free flow energy conversion, rotor behaviour and measurement of real watercourse performance.",
  },
  {
    id: "government",
    title: "Government agencies",
    text: "Evaluate free flow generation for rural electrification and water infrastructure programmes.",
  },
  {
    id: "pilot-site",
    title: "Pilot site partners",
    text: "Offer a river or canal section where a prototype station can be installed, monitored and measured.",
  },
];

export const funding = {
  headline: "Support the Development of Innovative Small Hydropower",
  amount: "$150,000",
  label: "Pilot project requirement",
  attribution: "Figure stated in the ERG Innovative Small Hydropower project materials.",
};

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Technical development",
    text: "Consolidate the hydrodynamic calculations, rotor geometry and structural design of the free flow station.",
  },
  {
    phase: "Phase 2",
    title: "Prototype preparation",
    text: "Fabricate the paired rotor assembly, floats and support frame, and prepare the unit for water trials.",
  },
  {
    phase: "Phase 3",
    title: "Site selection",
    text: "Identify a river or canal section with suitable depth, width, velocity and access for installation.",
  },
  {
    phase: "Phase 4",
    title: "Installation and measurement",
    text: "Install the station in live flow and record output, rotor behaviour and structural response.",
  },
  {
    phase: "Phase 5",
    title: "Evaluation",
    text: "Review measured results against design expectations and define the path toward a production unit.",
  },
];

/**
 * Official ERG project videos, as embedded on the ERGroup project website.
 */
export const videos = [
  {
    id: "9dSZbqYWX2k",
    title: "ERGroup turbine",
    description:
      "Official ERG project video of the free flow turbine unit, published on the ERGroup project website.",
    embedUrl: "https://www.youtube.com/embed/9dSZbqYWX2k",
  },
  {
    id: "gnkYV3Tw72U",
    title: "Innovative Small Hydropower",
    description:
      "Second official ERG project video, published on the ERGroup project website.",
    embedUrl: "https://www.youtube.com/embed/gnkYV3Tw72U",
  },
];

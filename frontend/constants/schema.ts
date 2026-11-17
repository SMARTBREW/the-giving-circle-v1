/** Keep in sync with `SITE` in `constants/index.ts` (avoid circular import). */
const SITE_URL = "https://www.thegivingcircle.in";
const SITE_NAME = "The Giving Circle";
const ORIGIN = `${SITE_URL}/`;

/** SEO description used in Organization + WebSite JSON-LD (home). */
export const SCHEMA_ORG_DESCRIPTION =
  "Start a free fundraiser for a verified NGO in India. Turn your birthday or special day into meaningful giving, with direct donations and 80G receipts.";

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: ORIGIN,
  description: SCHEMA_ORG_DESCRIPTION,
  email: "hello@thegivingcircle.in",
  telephone: "+91 98103 53603",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Space Crearttors Height Mega Mall, A Block, DLF Phase 1",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122002",
    addressCountry: "IN",
  },
} as const;

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: ORIGIN,
  name: SITE_NAME,
  description: SCHEMA_ORG_DESCRIPTION,
  inLanguage: "en-IN",
} as const;

function pageUrl(path: string): string {
  if (path.startsWith("http")) {
    return path.endsWith("/") ? path : `${path}/`;
  }
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${withSlash.endsWith("/") ? withSlash : `${withSlash}/`}`;
}

export function webPageSchema(
  path: string,
  name: string,
  description: string,
): Record<string, unknown> {
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(
  trail: readonly { name: string; path: string }[],
): Record<string, unknown> {
  const pageUrlValue = pageUrl(trail[trail.length - 1]?.path ?? "/");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrlValue}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: ORIGIN,
      },
      ...trail.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.name,
        item: pageUrl(crumb.path),
      })),
    ],
  };
}

export const CHAMPION_PAGE_PATH = "/become-a-cause-champion/";
export const CHAMPION_PAGE_URL = `${SITE_URL}${CHAMPION_PAGE_PATH}`;

export const CHAMPION_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${CHAMPION_PAGE_URL}#webpage`,
  url: CHAMPION_PAGE_URL,
  name: "Become a Cause Champion | Free NGO Fundraiser in India",
  description:
    "Start a free fundraiser for a verified NGO on your birthday, wedding or anniversary. Set your own target and have donations go directly to the NGO.",
  inLanguage: "en-IN",
} as const;

export const CHAMPION_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${CHAMPION_PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: ORIGIN,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Become a Cause Champion",
      item: CHAMPION_PAGE_URL,
    },
  ],
} as const;

export const CAUSES_PAGE_PATH = "/causes/";
export const CAUSES_PAGE_URL = `${SITE_URL}${CAUSES_PAGE_PATH}`;

export const CAUSES_COLLECTION_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${CAUSES_PAGE_URL}#webpage`,
  url: CAUSES_PAGE_URL,
  name: "Find Causes That Matter | Support Verified NGOs in India",
  description:
    "Find verified NGOs and meaningful causes across India, from education and animal welfare to women’s health. Choose a cause and make an impact today.",
  inLanguage: "en-IN",
} as const;

export const CAUSES_ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${CAUSES_PAGE_URL}#itemlist`,
  name: "Live Causes",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Wings of Hope",
      url: `${SITE_URL}/causes/wings-of-hope/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "PehliClass",
      url: `${SITE_URL}/causes/pehli-class/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Guardians of the Green",
      url: `${SITE_URL}/causes/community-forest-governance/`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Pawsitive Protectors",
      url: `${SITE_URL}/causes/pawsitive-protectors/`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Bowls of Hope",
      url: `${SITE_URL}/causes/bowls-of-hope/`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Brick by Brick",
      url: `${SITE_URL}/causes/brick-by-brick/`,
    },
  ],
} as const;

export const CAUSES_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${CAUSES_PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: ORIGIN,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Live Causes",
      item: CAUSES_PAGE_URL,
    },
  ],
} as const;

/** Separate JSON-LD nodes for /causes/brick-by-brick/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/brick-by-brick/`;
const ORIGIN = `${SITE_URL}/`;

export const BRICK_BY_BRICK_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#animal-care`,
  name: "Animal Care",
  url: "https://animalcareindia.org.in/",
  description:
    "Animal Care is an animal welfare NGO working across Delhi NCR on anti-rabies vaccination, rescue and shelter care for street animals. Brick by Brick is its campaign to build Shukrana, a shelter and hospital for street animals in Gurugram.",
  founder: {
    "@type": "Person",
    name: "Vikas Singh",
    jobTitle: "Founder",
    image:
      "https://res.cloudinary.com/dcdhhylin/image/upload/f_auto,q_auto:eco,c_limit,w_240/v1791954224/tgc/causes/pawsitive-founder",
  },
} as const;

export const BRICK_BY_BRICK_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to Brick by Brick",
  description:
    "Donations go directly to Animal Care through its own payment gateway and into its own bank account. Animal Care sends your 80G receipt.",
  recipient: {
    "@type": "NGO",
    name: "Animal Care",
    url: "https://animalcareindia.org.in/",
  },
  priceCurrency: "INR",
  target: {
    "@type": "EntryPoint",
    urlTemplate:
      "https://give.animalcareindia.org.in/donate/building-streeties-a--tapphyku",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const BRICK_BY_BRICK_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
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
      item: `${SITE_URL}/causes/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Brick by Brick",
      item: PAGE_URL,
    },
  ],
} as const;

export const BRICK_BY_BRICK_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Lay a Brick. Raise a Wall | Brick by Brick",
  description:
    "Animal Care is building Shukrana in Gurugram — a shelter and hospital for street animals. Every ₹10 lays one brick in the boundary wall. Donate or champion the cause.",
  inLanguage: "en-IN",
} as const;

export const BRICK_BY_BRICK_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to donate a brick for an animal shelter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One brick costs ₹10. Donations start at ₹500, which buys 50 bricks, and ₹1,000 buys 100. Your bricks go into the boundary wall, the first stage of construction.",
      },
    },
    {
      "@type": "Question",
      name: "What is Shukrana Animal Care Centre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shukrana is the shelter and hospital Animal Care is building for street animals in Gurugram. It is planned with treatment and surgery areas, isolation wards for infectious diseases, recovery kennels and an adoption section, with space for 100 to 110 dogs as well as cats and other animals.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the shelter being built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Sector 78, Gurugram, near the Leopard Trail. The Bhoomi Poojan was held on 22 February 2026, and construction is going ahead in phases, starting with the boundary wall.",
      },
    },
    {
      "@type": "Question",
      name: "Which animals will Shukrana treat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Street animals that need serious care: dogs hurt in road accidents, animals with parvo, distemper or maggot wounds, and paralysed animals who need long-term rehabilitation.",
      },
    },
    {
      "@type": "Question",
      name: "When will Shukrana open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shukrana is being built in phases. The boundary wall comes first, followed by treatment rooms and recovery kennels. Every brick donated moves the next phase closer.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to Brick by Brick eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care Trust is registered under Section 80G, so donations to Brick by Brick qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is Animal Care a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care is a registered trust in New Delhi. It is registered on NGO Darpan and holds valid 80G and CSR-1 registrations. Brick by Brick is its campaign to build Shukrana Animal Care Centre.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to Animal Care through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used to build Shukrana Animal Care Centre.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for Brick by Brick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for Brick by Brick. You pledge a number of bricks you would like to raise, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
    {
      "@type": "Question",
      name: "Can companies contribute to building the shelter through CSR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care holds a CSR-1 registration, so companies can support Brick by Brick as part of their CSR. Companies interested in a larger contribution can contact Animal Care to discuss it.",
      },
    },
  ],
} as const;

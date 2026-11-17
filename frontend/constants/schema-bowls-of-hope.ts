/** Separate JSON-LD nodes for /causes/bowls-of-hope/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/bowls-of-hope/`;
const ORIGIN = `${SITE_URL}/`;

export const BOWLS_OF_HOPE_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#animal-care`,
  name: "Animal Care",
  url: "https://animalcareindia.org.in/",
  description:
    "Animal Care is an animal welfare NGO working across Delhi NCR on anti-rabies vaccination, rescue and shelter care for street animals. Bowls of Hope is its daily feeding and care programme at shelters for strays.",
  founder: {
    "@type": "Person",
    name: "Vikas Singh",
    jobTitle: "Founder",
    image:
      "https://res.cloudinary.com/dcdhhylin/image/upload/f_auto,q_auto:eco,c_limit,w_240/v1791954224/tgc/causes/pawsitive-founder",
  },
} as const;

export const BOWLS_OF_HOPE_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to Bowls of Hope",
  description:
    "Donations go directly to Animal Care through its own payment gateway and into its own bank account. Animal Care sends your 80G receipt where eligible.",
  recipient: {
    "@type": "NGO",
    name: "Animal Care",
    url: "https://animalcareindia.org.in/",
  },
  priceCurrency: "INR",
  target: {
    "@type": "EntryPoint",
    urlTemplate:
      "https://give.animalcareindia.org.in/donate/feed-and-care-for-st-tq0r7pky?source=TGC",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const BOWLS_OF_HOPE_BREADCRUMB_SCHEMA = {
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
      name: "Bowls of Hope",
      item: PAGE_URL,
    },
  ],
} as const;

export const BOWLS_OF_HOPE_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Fill a Bowl. Speed a Recovery | Bowls of Hope",
  description:
    "Bowls of Hope is Animal Care's daily feeding and care programme for shelter strays. Fund nutritious meals and veterinary care, and every gift goes directly to the NGO.",
  inLanguage: "en-IN",
} as const;

export const BOWLS_OF_HOPE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to feed a rescued animal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can give ₹1,000, ₹5,000 or ₹10,000 or more to provide care and food support for sick and injured animals at the Animal Care Shelter, including vet-prescribed supplements where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I feed animals on my birthday or another special day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many people mark a birthday, an anniversary or a festival by feeding animals. A gift to Bowls of Hope on your special day can carry the occasion and a name of your choice, and provides care and food support for sick and injured animals at the Animal Care Shelter.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate in memory of my pet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many people honour a pet they have lost by caring for an animal who needs it now. A gift to Bowls of Hope can carry your pet's name, and feeds a sick or injured animal at the Animal Care Shelter while it heals, a way to pass on the love your pet gave you.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to Bowls of Hope eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care Trust is registered under Section 80G, so donations to Bowls of Hope qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is Animal Care a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care is a registered trust in New Delhi. It is registered on NGO Darpan and holds valid 80G and CSR-1 registrations. Bowls of Hope is its campaign to feed sick and injured animals at its shelter.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to Animal Care through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the Bowls of Hope programme: meals, supplements and feeding care at the shelter.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate to Bowls of Hope from outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for Bowls of Hope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for Bowls of Hope. You pledge an amount you would like to raise, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
    {
      "@type": "Question",
      name: "Why do some shelter animals need to be hand-fed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Animals recovering from surgery, paralysis, jaw injuries or serious illness are often too weak to eat on their own. Caregivers at the Animal Care Shelter feed them by hand, meal by meal, until they can manage alone. Bowls of Hope pays for that food and that care.",
      },
    },
  ],
} as const;

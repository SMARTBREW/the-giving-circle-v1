/** Separate JSON-LD nodes for /causes/pehli-class/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/pehli-class/`;
const ORIGIN = `${SITE_URL}/`;

export const PEHLI_CLASS_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#jwp`,
  name: "Joint Women's Programme",
  alternateName: "JWP",
  url: "https://www.jwpindia.org/",
  description:
    "Joint Women's Programme (JWP) has worked for almost five decades with women, girls and children on education, skills and independence. PehliClass is its campaign that helps out-of-school children in Nithari, Noida get ready for school and get enrolled.",
  foundingDate: "1977",
  founder: {
    "@type": "Person",
    name: "Jyotsna Chatterji",
    jobTitle: "Founder and Director",
    description: "Former Professor, Calcutta University",
    image:
      "https://res.cloudinary.com/dcdhhylin/image/upload/f_auto,q_auto:eco,c_limit,w_240/tgc/volunteer/jyotsna-chatterji-jwp",
  },
  sameAs: [
    "https://www.instagram.com/jwpindia/",
    "https://x.com/jwp_india",
  ],
} as const;

export const PEHLI_CLASS_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to PehliClass",
  description:
    "Donations go directly to Joint Women's Programme through its own payment gateway and into its own bank account. JWP sends your 80G receipt.",
  recipient: {
    "@type": "NGO",
    name: "Joint Women's Programme",
    url: "https://jwpindia.org/",
  },
  priceCurrency: "INR",
  target: {
    "@type": "EntryPoint",
    urlTemplate:
      "https://give.jwpindia.org/donate/supporting-children-s-5o6mxnd7?source=TGC",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const PEHLI_CLASS_BREADCRUMB_SCHEMA = {
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
      name: "PehliClass",
      item: PAGE_URL,
    },
  ],
} as const;

export const PEHLI_CLASS_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Help a Child Get Into School | Support PehliClass",
  description:
    "A missing birth certificate or Aadhaar can shut the school gate on a child. PehliClass in Nithari fixes the papers, closes the gap and gets them enrolled",
  inLanguage: "en-IN",
} as const;

export const PEHLI_CLASS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I sponsor a child's education in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can sponsor a child through PehliClass, an education campaign by Joint Women's Programme (JWP), listed on The Giving Circle. PehliClass brings out-of-school children in Noida into formal school: children who dropped out, and children who have never sat in a classroom. ₹1,600 a month, or ₹19,000 a year, supports one child.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to sponsor a child's education for a year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "₹19,000 supports one child for a full year through PehliClass, or ₹1,600 a month. It covers the child's classes, learning materials and support with school enrolment. You can support one child or several, directly on the PehliClass campaign page on The Giving Circle.",
      },
    },
    {
      "@type": "Question",
      name: "Can a child get school admission without a birth certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Right to Education Act, no child can be denied admission to school for lack of proof of age. In practice, many families are still turned away because they don't have a birth certificate, Aadhaar or a transfer certificate. PehliClass helps families through this paperwork so the child can enrol.",
      },
    },
    {
      "@type": "Question",
      name: "What is the RTE Act and the 25% quota in private schools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Right of Children to Free and Compulsory Education Act, 2009 guarantees free education to every child aged 6 to 14. It also reserves 25% of seats in private schools for children from economically weaker sections. PehliClass helped 15+ children secure RTE seats for the 2026-27 school year.",
      },
    },
    {
      "@type": "Question",
      name: "How many children has PehliClass helped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2025-26, PehliClass helped 147 children get admission into formal school.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to PehliClass eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Joint Women's Programme is registered under Section 80G, so donations to PehliClass qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Joint Women's Programme a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Joint Women's Programme has worked on women's and children's welfare in India since 1977. It is registered on NGO Darpan and holds valid 12A, 80G, FCRA and CSR-1 registrations. PehliClass is its campaign to bring out-of-school children into formal education.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to the Joint Women's Programme through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the PehliClass programme.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate to PehliClass from outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for PehliClass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for PehliClass. You pledge a number of children you would like to support, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
  ],
} as const;

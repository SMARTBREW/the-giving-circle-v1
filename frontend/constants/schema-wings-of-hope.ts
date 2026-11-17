/** Separate JSON-LD nodes for /causes/wings-of-hope/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/wings-of-hope/`;
const ORIGIN = `${SITE_URL}/`;

export const WINGS_OF_HOPE_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#jwp`,
  name: "Joint Women's Programme",
  alternateName: "JWP",
  url: "https://www.jwpindia.org/",
  description:
    "Joint Women's Programme (JWP) has worked for almost five decades with women and girls on education, skills and independence. Wings of Hope is its menstrual health and girls' education campaign.",
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

export const WINGS_OF_HOPE_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to Wings of Hope",
  description:
    "Donations go directly to Joint Women's Programme through its own payment gateway and into its own bank account. JWP issues the 80G receipt.",
  recipient: {
    "@type": "NGO",
    name: "Joint Women's Programme",
    url: "https://www.jwpindia.org/",
  },
  priceCurrency: "INR",
  target: {
    "@type": "EntryPoint",
    urlTemplate:
      "https://give.jwpindia.org/donate/give-girls-wings-of-h-1ak3mg?source=TGC",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const WINGS_OF_HOPE_BREADCRUMB_SCHEMA = {
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
      name: "Wings of Hope",
      item: PAGE_URL,
    },
  ],
} as const;

export const WINGS_OF_HOPE_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Wings of Hope: ₹1,500 Helps One Girl Stay in Class",
  description:
    "Help girls stay in class with free reusable pads, menstrual health workshops and counselling. ₹1,500 helps one girl, and your donation goes directly to the NGO.",
  inLanguage: "en-IN",
} as const;

export const WINGS_OF_HOPE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to support one girl's menstrual hygiene for a year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "₹1,500 supports one girl for a full year through Wings of Hope. It covers reusable sanitary pads, menstrual health education and counselling to help her stay in school during her periods. You can support one girl or several, directly on the Wings of Hope campaign page on The Giving Circle.",
      },
    },
    {
      "@type": "Question",
      name: "How does menstrual hygiene affect girls' education in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When girls lack sanitary products, private toilets or basic menstrual health information, many miss school during their periods, and repeated absences can push them to drop out. Wings of Hope addresses this with reusable pads, awareness workshops and counselling.",
      },
    },
    {
      "@type": "Question",
      name: "How does Wings of Hope help girls stay in school during their periods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each girl in the programme receives reusable sanitary pads, practical guidance on menstrual hygiene, and counselling to help her manage her period with confidence. The team also works with parents, teachers and communities to reduce stigma around menstruation, so girls feel supported to attend school every day of the month.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Wings of Hope give reusable pads instead of disposable ones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reusable cloth pads last between 1 and 2 years with proper washing and drying, so one kit supports a girl far longer than a monthly supply of disposables. That cuts the recurring cost for families who often cannot afford pads every month, or who live where supplies are hard to find, and reduces sanitary waste in communities with limited disposal options.",
      },
    },
    {
      "@type": "Question",
      name: "Who makes the reusable pads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JWP trains local women to stitch the reusable pads, giving them a livelihood of their own. Each pad supports two women: the girl who uses it and the woman who made it.",
      },
    },
    {
      "@type": "Question",
      name: "Can companies support Wings of Hope through CSR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. JWP holds a CSR-1 registration, so companies can support Wings of Hope as part of their CSR. Companies looking at a larger contribution can contact JWP to discuss it.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to Wings of Hope eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Joint Women's Programme is registered under Section 80G, so donations to Wings of Hope qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Joint Women's Programme a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Joint Women's Programme has worked on women's and girls' welfare in India since 1977, and its work has been recognised by former President of India Shri Ram Nath Kovind. It is registered on NGO Darpan and holds valid 12A, 80G, FCRA and CSR-1 registrations. You can view its certificates at jwpindia.org/certificates. Wings of Hope is its menstrual hygiene and girls' education campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to the Joint Women's Programme through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the Wings of Hope programme: reusable pads, menstrual health workshops and counselling for girls.",
      },
    },
    {
      "@type": "Question",
      name: "How many girls has Wings of Hope supported?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "So far over 30,000 girls have been reached through Wings of Hope.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate monthly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can set up a monthly donation on the Wings of Hope page and support a girl through the year.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate to Wings of Hope from outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for Wings of Hope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for Wings of Hope. You pledge a number of girls you would like to support, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
  ],
} as const;

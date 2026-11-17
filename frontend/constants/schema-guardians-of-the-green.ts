/** Separate JSON-LD nodes for /causes/community-forest-governance/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/community-forest-governance/`;
const ORIGIN = `${SITE_URL}/`;

export const GUARDIANS_OF_THE_GREEN_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#icfg`,
  name: "Institute of Community Forest Governance",
  alternateName: "ICFG",
  description:
    "The Institute of Community Forest Governance (ICFG) has worked with Jharkhand's forest communities since 2006, supporting community-led forest governance under the Forest Rights Act. Guardians of the Green is its campaign to plant native trees and train young guardians to care for them for three years.",
  founder: {
    "@type": "Person",
    name: "Samar (Sanjay) Bosu Mullick",
    jobTitle: "Founder",
    description:
      "Founder, Jharkhand Jangal Bachao Andolan and Institute of Community Forest Governance",
    image: `${SITE_URL}/images/causes/guardians-of-the-green/gotg-founder.jpg`,
  },
  sameAs: ["https://www.instagram.com/guardians.of.green/"],
} as const;

export const GUARDIANS_OF_THE_GREEN_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to Guardians of the Green",
  description:
    "Donations go directly to ICFG through its own payment gateway and into its own bank account. ICFG sends your 80G receipt.",
  recipient: {
    "@type": "NGO",
    name: "Institute of Community Forest Governance",
  },
  priceCurrency: "INR",
  target: {
    "@type": "EntryPoint",
    urlTemplate:
      "https://give.icfgindia.org/donate/raise-guardians-of-th-ublrmceg?source=TGC",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const GUARDIANS_OF_THE_GREEN_BREADCRUMB_SCHEMA = {
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
      name: "Guardians of the Green",
      item: PAGE_URL,
    },
  ],
} as const;

export const GUARDIANS_OF_THE_GREEN_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Community Forest Governance | Support Forest Communities",
  description:
    "Plant a native tree in Jharkhand and help a young guardian care for it for three years. ₹1,000 plants one tree, and your donation goes directly to the NGO.",
  inLanguage: "en-IN",
} as const;

export const GUARDIANS_OF_THE_GREEN_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to plant a tree in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through Guardians of the Green, ₹1,000 plants one native tree. It covers the sapling, a tree guard, three years of care by a young guardian, and replanting if a sapling fails. You can plant one tree or a whole grove on the campaign page.",
      },
    },
    {
      "@type": "Question",
      name: "Who are the young forest guardians?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are Adivasi children from Jharkhand, trained by ICFG to raise and protect native trees. Each guardian looks after a grove of 20 native saplings over three years, learning the traditional forest knowledge of their own community along the way.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Bal Akhra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Bal Akhra is ICFG's three-day residential training for young guardians, held every year of the programme at its learning centre in Budmu, Jharkhand. Children learn about the forest's trees, medicinal plants and traditional knowledge, and take a pledge to protect the forest.",
      },
    },
    {
      "@type": "Question",
      name: "Which native trees are planted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each grove is chosen from 27 indigenous species that suit the village's land, picked for fruit, medicine and livelihood. They include Mahua, Jamun, Amla, Bel, Kathal (jackfruit), Imli (tamarind), Kend, Piyar (chironji), Peepal and Bargad (banyan), trees that have fed, healed and sheltered Jharkhand's forest communities for generations.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to Guardians of the Green eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ICFG is registered under Section 80G, so donations to Guardians of the Green qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is ICFG a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Institute of Community Forest Governance is a registered trust, rooted in Jharkhand since 2006. It is registered on NGO Darpan and holds valid 12AB, 80G, FCRA and CSR-1 registrations. Guardians of the Green is its campaign to raise native forests with young Adivasi guardians.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to ICFG through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the Guardians of the Green programme: saplings, tree guards, guardian training and three years of care.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate to Guardians of the Green from outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for Guardians of the Green?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for Guardians of the Green. You pledge a number of trees you would like to plant, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
    {
      "@type": "Question",
      name: "Why do so many tree-planting drives fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Planting is the easy part. Most saplings are lost in their first few years to drought, grazing or neglect, because no one is there to look after them. In Guardians of the Green, every tree has a young guardian who waters, protects and replants it for three years.",
      },
    },
    {
      "@type": "Question",
      name: "Can I plant a tree in someone's name as a gift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can plant a native tree for a birthday, an anniversary, a festival or in memory of someone, and dedicate it in their name. A young guardian in Jharkhand will raise and care for it for three years, so it is a gift that keeps growing long after the day itself.",
      },
    },
  ],
} as const;

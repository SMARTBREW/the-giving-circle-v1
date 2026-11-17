/** Separate JSON-LD nodes for /causes/pawsitive-protectors/ — do not merge into one @graph. */

const SITE_URL = "https://www.thegivingcircle.in";
const PAGE_URL = `${SITE_URL}/causes/pawsitive-protectors/`;
const ORIGIN = `${SITE_URL}/`;

export const PAWSITIVE_PROTECTORS_NGO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${PAGE_URL}#animal-care`,
  name: "Animal Care",
  url: "https://animalcareindia.org.in/",
  description:
    "Animal Care is an animal welfare NGO working across Delhi NCR on anti-rabies vaccination, rescue and shelter care for street animals. Pawsitive Protectors is its campaign to vaccinate, deworm and collar street dogs to stop rabies and road accidents.",
  founder: {
    "@type": "Person",
    name: "Vikas Singh",
    jobTitle: "Founder",
    image:
      "https://res.cloudinary.com/dcdhhylin/image/upload/f_auto,q_auto:eco,c_limit,w_240/v1791954224/tgc/causes/pawsitive-founder",
  },
} as const;

export const PAWSITIVE_PROTECTORS_DONATE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${PAGE_URL}#donate`,
  name: "Donate to Pawsitive Protectors",
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
      "https://give.animalcareindia.org.in/donate/protecting-delhi-ncr--e6b7nuxz?source=TGC",
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const PAWSITIVE_PROTECTORS_BREADCRUMB_SCHEMA = {
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
      name: "Pawsitive Protectors",
      item: PAGE_URL,
    },
  ],
} as const;

export const PAWSITIVE_PROTECTORS_WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "Pawsitive Protectors | Support Animal Welfare in India",
  description:
    "Vaccinate, deworm and collar street dogs to stop rabies and road accidents. ₹1,000 protects one dog, and your donation goes directly to Animal Care.",
  inLanguage: "en-IN",
} as const;

export const PAWSITIVE_PROTECTORS_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to vaccinate a stray dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through Pawsitive Protectors, ₹1,000 protects one street dog. It covers an anti-rabies vaccination, deworming and, for many dogs, a reflective collar. It also helps pay for anti-rabies shots for the feeders and caregivers who look after these dogs.",
      },
    },
    {
      "@type": "Question",
      name: "Why vaccinate street dogs instead of removing them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When about 70% of the dogs in an area are vaccinated, rabies stops spreading among them. Removing dogs doesn't work, because new, unvaccinated dogs move into the empty space. Vaccinated dogs who stay in their area protect the whole neighbourhood.",
      },
    },
    {
      "@type": "Question",
      name: "How do reflective collars help protect stray dogs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reflective collars make street dogs visible to drivers at night, which helps reduce road accidents. Pawsitive Protectors collars many of the dogs it vaccinates and deworms, especially those living near busy roads.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get stray dogs in my area vaccinated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Animal Care runs Pawsitive Protectors drives mostly across Delhi NCR, and also in Mumbai, Bangalore and Hyderabad. Drives are organised together with local feeders, wherever funding and logistics allow. If you feed or care for street dogs in one of these cities, you can reach out to Animal Care through the campaign page, and every gift helps bring a drive to one more neighbourhood.",
      },
    },
    {
      "@type": "Question",
      name: "Is my donation to Pawsitive Protectors eligible for 80G tax benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care Trust is registered under Section 80G, so donations to Pawsitive Protectors qualify for a 50% tax deduction, within the limits set by the Income Tax Act. The deduction is available only to people filing under the old tax regime. The NGO issues the 80G receipt for the financial year in which you donate. Please provide your PAN when donating so the receipt can be issued.",
      },
    },
    {
      "@type": "Question",
      name: "Is Animal Care a genuine, registered NGO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Animal Care is a registered trust in New Delhi. It is registered on NGO Darpan and holds valid 80G and CSR-1 registrations. Pawsitive Protectors is its campaign for rabies-free neighbourhoods.",
      },
    },
    {
      "@type": "Question",
      name: "Where does my donation go?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donations go directly to Animal Care through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold or process donation funds at any stage. Donations are used for the Pawsitive Protectors programme: vaccinations, deworming and reflective collars for street dogs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I donate to Pawsitive Protectors from outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if you are an Indian citizen donating from an Indian bank account. Foreign contributions, including donations from foreign nationals or from non-Indian bank accounts, cannot be accepted through this campaign.",
      },
    },
    {
      "@type": "Question",
      name: "Can I raise funds for Pawsitive Protectors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can become a Cause Champion, a volunteer fundraiser for Pawsitive Protectors. You pledge a number of dogs you would like to protect, and The Giving Circle creates and manages a fundraising page in your name for you to share with friends and family. There is no financial liability on you if you don't reach your pledge.",
      },
    },
    {
      "@type": "Question",
      name: "How can our housing society become rabies-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rabies stops spreading when most of the dogs in an area are vaccinated, so it takes a neighbourhood effort. Residents can pool support through Pawsitive Protectors, or one resident can become a Cause Champion and invite the whole society to join.",
      },
    },
    {
      "@type": "Question",
      name: "Why are feeders vaccinated too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Feeders and caregivers handle street dogs every day, so they face the highest risk of a bite or scratch. Part of every Pawsitive Protectors gift helps pay for their anti-rabies shots, so the people who care for these dogs are protected as well.",
      },
    },
  ],
} as const;

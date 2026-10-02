import type { FaqEntry } from "./faqs";

export type NgosIconName =
  | "education"
  | "shelter"
  | "women"
  | "verified"
  | "csr"
  | "shield"
  | "check"
  | "receipt"
  | "city"
  | "guide"
  | "healthcare"
  | "disaster"
  | "child"
  | "environment"
  | "rural"
  | "impact"
  | "transparent"
  | "causes"
  | "secure"
  | "community";

export const NGOS_PAGE = {
  eyebrow: "NGO Directory",
  title: "NGO Directory India",
  subtitle:
    "Find verified, transparent NGOs by city or cause. Every organisation on The Giving Circle is background-checked — FCRA, 80G, audited financials — so your donation creates real, trackable impact.",
  badges: [
    "FCRA & 80G Verified",
    "100% Transparency",
    "Real Impact Data",
  ] as const,
  primaryCta: { label: "Explore Live Causes", href: "/causes/" },
  secondaryCta: {
    label: "Become a Cause Champion",
    href: "/become-a-cause-champion/",
  },
} as const;

export const NGOS_CAUSES = {
  eyebrow: "Explore",
  title: "Browse by Cause",
  subtitle: "Discover NGOs based on the issues you care about most.",
  items: [
    {
      title: "Pehli Class · Child Education",
      body: "JWP bridge programme — underprivileged and out-of-school children into formal school (verified · 80G where applicable).",
      href: "/causes/pehli-class/",
      icon: "education" as const,
    },
    {
      title: "Brick by Brick · Animal Shelter Gurgaon",
      body: "Animal Care — ₹10/brick boundary wall for a 17,500 sq ft stray rescue centre · rabies mission · 80G where applicable.",
      href: "/causes/brick-by-brick/",
      icon: "shelter" as const,
    },
    {
      title: "NGOs for Women Empowerment",
      body: "Discover organisations enabling women’s rights, livelihoods and leadership.",
      href: "/blog/how-to-donate-for-women-empowerment-india/",
      icon: "women" as const,
    },
    {
      title: "Verified NGOs in Delhi",
      body: "Find background-checked, transparent NGOs operating in Delhi NCR.",
      href: "/blog/verified-ngos-in-delhi/",
      icon: "verified" as const,
    },
    {
      title: "CSR Projects in India",
      body: "Connect corporate CSR budgets with credible, measurable social impact projects.",
      href: "/blog/csr-projects-in-india/",
      icon: "csr" as const,
    },
  ],
} as const;

export const NGOS_CITIES = {
  eyebrow: "Locations",
  title: "Browse by City",
  subtitle: "Find verified NGOs close to you in Delhi NCR and beyond.",
  items: [
    {
      city: "Delhi",
      href: "/ngos/best-ngo-in-delhi/",
      cta: "Best NGOs →",
    },
    {
      city: "Noida",
      href: "/ngos/best-ngo-in-noida/",
      cta: "Best NGOs →",
    },
    {
      city: "Gurugram",
      href: "/ngos/best-ngo-in-gurugram/",
      cta: "Best NGOs →",
    },
    {
      city: "Faridabad",
      href: "/ngos/best-ngo-in-faridabad/",
      cta: "Best NGOs →",
    },
  ],
} as const;

export const NGOS_GUIDES = {
  eyebrow: "Learn",
  title: "Guides & Articles",
  subtitle: "Everything you need to give wisely and make real impact.",
  items: [
    {
      title: "Top Verified NGOs in India 2026",
      body: "How to evaluate transparency, tax benefits, and credible partners before you give.",
      href: "/causes/",
    },
    {
      title: "What Is a Giving Circle?",
      body: "A practical guide to collective giving in India with friends, family, or colleagues.",
      href: "/faqs/",
    },
    {
      title: "Top NGOs in Delhi 2026",
      body: "Trusted organisations in Delhi NCR ranked by transparency and verified impact.",
      href: "/blog/verified-ngos-in-delhi/",
    },
    {
      title: "Volunteering Opportunities in Delhi",
      body: "Ways students and professionals can contribute time with verified NGO partners.",
      href: "/volunteer/",
    },
    {
      title: "How to Volunteer in India",
      body: "Step-by-step paths to volunteer through Cause Champion fundraising or on-ground roles.",
      href: "/blog/volunteer-project-ideas-students-india/",
    },
  ],
} as const;

export const NGOS_TRUST = {
  eyebrow: "Trust",
  title: "Why Trust The Giving Circle?",
  items: [
    {
      title: "Rigorous Verification",
      body: "Every NGO undergoes a multi-step background check including FCRA status, 80G certification and financial audits before listing.",
      icon: "shield" as const,
    },
    {
      title: "100% Transparency",
      body: "Real-time fund utilisation reports so you always know where your donation went and what it achieved.",
      icon: "check" as const,
    },
    {
      title: "Tax Benefits (80G)",
      body: "Donations to listed NGOs qualify for Section 80G tax deductions. Receipts are issued by the partner NGO.",
      icon: "receipt" as const,
    },
  ],
} as const;

export type NgosCityPage = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    subtitle: string;
    badges: readonly string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  leading: {
    eyebrow: string;
    title: string;
    body: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    items: readonly string[];
  };
  whyDonate: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      body: string;
      icon: NgosIconName;
    }[];
  };
  categories: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      body: string;
      icon: NgosIconName;
    }[];
  };
  howTo: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; body: string }[];
    cta: { label: string; href: string };
  };
  nearby: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; body: string; href: string }[];
  };
  faqs: readonly FaqEntry[];
};

export const NGOS_CITY_DELHI: NgosCityPage = {
  slug: "best-ngo-in-delhi",
  city: "Delhi",
  metaTitle: "Best NGO in Delhi | Verified NGOs | The Giving Circle",
  metaDescription:
    "Discover verified and trusted NGOs in Delhi making a real impact. Connect with top-rated charity organisations through The Giving Circle and donate with confidence.",
  hero: {
    title: "Best NGO in Delhi",
    subtitle:
      "Discover verified and trusted NGOs in Delhi making a real impact. Connect with top-rated charity organizations through The Giving Circle and donate with confidence.",
    badges: [
      "FCRA & 80G Verified",
      "Transparent Reporting",
      "Real Impact Data",
    ],
    primaryCta: { label: "Explore Live Causes", href: "/causes/" },
    secondaryCta: {
      label: "Become a Cause Champion",
      href: "/become-a-cause-champion/",
    },
  },
  leading: {
    eyebrow: "Overview",
    title: "Leading NGOs in Delhi — Verified & Trusted",
    body: "Delhi NCR concentrates India's largest informal settlements alongside corporate CSR headquarters. NGOs here work on girl-child education in Okhla, menstrual health in resettlement colonies, and pan-city animal rescue on NH corridors. Donors should look for partners with published ward-level programme data — not just \"Delhi\" as a label.",
  },
  featured: {
    eyebrow: "Programmes",
    title: "Featured programmes in Delhi",
    items: [
      "JWP Wings of Hope — menstrual health & education (South Delhi)",
      "AnimalCare India — rescue and vaccination across NCR",
      "Pehli Class bridge centre — Nithari, Noida border",
    ],
  },
  whyDonate: {
    eyebrow: "Trust",
    title: "Why Donate Through The Giving Circle?",
    items: [
      {
        title: "Verified & Trusted",
        body: "All NGOs undergo verification for legitimacy, compliance and transparency.",
        icon: "shield",
      },
      {
        title: "Real Impact Tracking",
        body: "Quarterly reporting so donors can track outcomes, not just spend.",
        icon: "impact",
      },
      {
        title: "Transparent Operations",
        body: "Clear fund utilisation updates and public reporting practices.",
        icon: "transparent",
      },
      {
        title: "Multiple Causes",
        body: "Support education, healthcare, animal welfare, disaster relief and more.",
        icon: "causes",
      },
      {
        title: "Secure Giving",
        body: "Simple, secure payments and a consistent donor experience.",
        icon: "secure",
      },
      {
        title: "Community Driven",
        body: "Join a giving community of Cause Champions creating collective impact.",
        icon: "community",
      },
    ],
  },
  categories: {
    eyebrow: "Causes",
    title: "Top NGO Categories in Delhi",
    items: [
      {
        title: "Education",
        body: "Education, literacy and skill development programmes.",
        icon: "education",
      },
      {
        title: "Healthcare",
        body: "Medical camps, treatment access and preventive health.",
        icon: "healthcare",
      },
      {
        title: "Animal Welfare",
        body: "Rescue, vaccination, feeding and shelter programmes.",
        icon: "shelter",
      },
      {
        title: "Disaster Relief",
        body: "Emergency response and rehabilitation support.",
        icon: "disaster",
      },
      {
        title: "Women Empowerment",
        body: "Rights, education, skills training and livelihoods.",
        icon: "women",
      },
      {
        title: "Child Welfare",
        body: "Protection, nutrition, education and development.",
        icon: "child",
      },
      {
        title: "Environment",
        body: "Sustainability, clean-up and conservation work.",
        icon: "environment",
      },
      {
        title: "Rural Development",
        body: "Infrastructure, livelihoods and community development.",
        icon: "rural",
      },
    ],
  },
  howTo: {
    eyebrow: "Get started",
    title: "How to Support NGOs in Delhi",
    steps: [
      {
        title: "Browse verified NGOs",
        body: "Explore verified NGOs in Delhi working across multiple causes.",
      },
      {
        title: "Choose a cause",
        body: "Pick a cause that resonates: education, healthcare, animals, disaster relief and more.",
      },
      {
        title: "Donate securely",
        body: "Give through our platform with secure payments and transparent reporting.",
      },
      {
        title: "Track impact",
        body: "Receive updates and reports showing what your donation achieved.",
      },
    ],
    cta: { label: "Explore Live Causes", href: "/causes/" },
  },
  nearby: {
    eyebrow: "Nearby",
    title: "Explore NGOs in Nearby Locations",
    items: [
      {
        title: "Best NGOs in Gurugram",
        body: "Discover verified NGOs and causes to support in Gurugram.",
        href: "/ngos/best-ngo-in-gurugram/",
      },
      {
        title: "Best NGOs in Noida",
        body: "Discover verified NGOs and causes to support in Noida.",
        href: "/ngos/best-ngo-in-noida/",
      },
      {
        title: "Best NGOs in Faridabad",
        body: "Discover verified NGOs and causes to support in Faridabad.",
        href: "/ngos/best-ngo-in-faridabad/",
      },
    ],
  },
  faqs: [
    {
      id: "delhi-verify-ngo",
      question: "How do I verify an NGO in Delhi?",
      answer:
        "Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual audited statements. The Giving Circle verifies these before listing.",
    },
    {
      id: "delhi-tax-deductible",
      question: "Are donations tax-deductible?",
      answer:
        "Where the recipient NGO holds valid Section 80G approval, eligible donations may qualify for a tax deduction. The NGO issues the receipt and Form 10BE. Deduction rules depend on your tax regime — a tax adviser can confirm what applies to you.",
    },
    {
      id: "delhi-impact",
      question: "How do I know my donation created impact?",
      answer:
        "Donations go directly to the partner NGO. On The Giving Circle you can follow live causes and receive updates on programme progress so you see outcomes — not only how funds were spent.",
    },
  ],
};

export const NGOS_CITY_GURUGRAM: NgosCityPage = {
  slug: "best-ngo-in-gurugram",
  city: "Gurugram",
  metaTitle: "Verified NGOs in Gurugram (Gurgaon) | The Giving Circle",
  metaDescription:
    "Corporate hub, large informal settlements, and peri-urban wards need trusted NGOs. Every partner listed here meets our verification bar—ideal for salaries CSR, volunteering, or one-off donations.",
  hero: {
    title: "Verified NGOs in Gurugram (Gurgaon)",
    subtitle:
      "Corporate hub, large informal settlements, and peri-urban wards need trusted NGOs. Every partner listed here meets our verification bar—ideal for salaries CSR, volunteering, or one-off donations.",
    badges: [
      "FCRA & 80G Verified",
      "Transparent Reporting",
      "Real Impact Data",
    ],
    primaryCta: { label: "Explore Live Causes", href: "/causes/" },
    secondaryCta: {
      label: "Become a Cause Champion",
      href: "/become-a-cause-champion/",
    },
  },
  leading: {
    eyebrow: "Overview",
    title: "Leading NGOs in Gurugram — Verified & Trusted",
    body: "Gurugram's mix of glass towers and urban villages creates sharp inequality — migrant workers' children out of school, injured strays on expressways, and CSR budgets seeking audited local partners. AnimalCare's Brick by Brick shelter build is anchored here on a 17,500 sq ft plot for long-term rehabilitation.",
  },
  featured: {
    eyebrow: "Programmes",
    title: "Featured programmes in Gurugram",
    items: [
      "Brick by Brick — stray rescue centre boundary wall campaign",
      "Corporate volunteering days for skills clinics and site builds",
      "Highway rescue coordination with NCR ambulance networks",
    ],
  },
  whyDonate: {
    eyebrow: "Trust",
    title: "Why Donate Through The Giving Circle?",
    items: [
      {
        title: "Verified & Trusted",
        body: "All NGOs undergo verification for legitimacy, compliance and transparency.",
        icon: "shield",
      },
      {
        title: "Real Impact Tracking",
        body: "Quarterly reporting so donors can track outcomes, not just spend.",
        icon: "impact",
      },
      {
        title: "Transparent Operations",
        body: "Clear fund utilisation updates and public reporting practices.",
        icon: "transparent",
      },
      {
        title: "Multiple Causes",
        body: "Support education, healthcare, animal welfare, disaster relief and more.",
        icon: "causes",
      },
      {
        title: "Secure Giving",
        body: "Simple, secure payments and a consistent donor experience.",
        icon: "secure",
      },
      {
        title: "Community Driven",
        body: "Join a giving community of Cause Champions creating collective impact.",
        icon: "community",
      },
    ],
  },
  categories: {
    eyebrow: "Causes",
    title: "Top NGO Categories in Gurugram",
    items: [
      {
        title: "Education",
        body: "Education, literacy and skill development programmes.",
        icon: "education",
      },
      {
        title: "Healthcare",
        body: "Medical camps, treatment access and preventive health.",
        icon: "healthcare",
      },
      {
        title: "Animal Welfare",
        body: "Rescue, vaccination, feeding and shelter programmes.",
        icon: "shelter",
      },
      {
        title: "Disaster Relief",
        body: "Emergency response and rehabilitation support.",
        icon: "disaster",
      },
      {
        title: "Women Empowerment",
        body: "Rights, education, skills training and livelihoods.",
        icon: "women",
      },
      {
        title: "Child Welfare",
        body: "Protection, nutrition, education and development.",
        icon: "child",
      },
      {
        title: "Environment",
        body: "Sustainability, clean-up and conservation work.",
        icon: "environment",
      },
      {
        title: "Rural Development",
        body: "Infrastructure, livelihoods and community development.",
        icon: "rural",
      },
    ],
  },
  howTo: {
    eyebrow: "Get started",
    title: "How to Support NGOs in Gurugram",
    steps: [
      {
        title: "Browse verified NGOs",
        body: "Explore verified NGOs in Gurugram working across multiple causes.",
      },
      {
        title: "Choose a cause",
        body: "Pick a cause that resonates: education, healthcare, animals, disaster relief and more.",
      },
      {
        title: "Donate securely",
        body: "Give through our platform with secure payments and transparent reporting.",
      },
      {
        title: "Track impact",
        body: "Receive updates and reports showing what your donation achieved.",
      },
    ],
    cta: { label: "Explore Live Causes", href: "/causes/" },
  },
  nearby: {
    eyebrow: "Nearby",
    title: "Explore NGOs in Nearby Locations",
    items: [
      {
        title: "Best NGOs in Delhi",
        body: "Discover verified NGOs and causes to support in Delhi.",
        href: "/ngos/best-ngo-in-delhi/",
      },
      {
        title: "Best NGOs in Noida",
        body: "Discover verified NGOs and causes to support in Noida.",
        href: "/ngos/best-ngo-in-noida/",
      },
      {
        title: "Best NGOs in Faridabad",
        body: "Discover verified NGOs and causes to support in Faridabad.",
        href: "/ngos/best-ngo-in-faridabad/",
      },
    ],
  },
  faqs: [
    {
      id: "gurugram-verify-ngo",
      question: "How do I verify an NGO in Gurugram?",
      answer:
        "Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual audited statements. The Giving Circle verifies these before listing.",
    },
    {
      id: "gurugram-tax-deductible",
      question: "Are donations tax-deductible?",
      answer:
        "Where the recipient NGO holds valid Section 80G approval, eligible donations may qualify for a tax deduction. The NGO issues the receipt and Form 10BE. Deduction rules depend on your tax regime — a tax adviser can confirm what applies to you.",
    },
    {
      id: "gurugram-impact",
      question: "How do I know my donation created impact?",
      answer:
        "Donations go directly to the partner NGO. On The Giving Circle you can follow live causes and receive updates on programme progress so you see outcomes — not only how funds were spent.",
    },
  ],
};

export const NGOS_CITY_NOIDA: NgosCityPage = {
  slug: "best-ngo-in-noida",
  city: "Noida",
  metaTitle: "Verified NGOs in Noida & Greater Noida | The Giving Circle",
  metaDescription:
    "FCRA-listed, 80G-eligible charities you can support with confidence: education, women's programmes, animal care, hunger relief, and CSR-ready partners across Noida Extension and Delhi NCR.",
  hero: {
    title: "Verified NGOs in Noida & Greater Noida",
    subtitle:
      "FCRA-listed, 80G-eligible charities you can support with confidence: education, women's programmes, animal care, hunger relief, and CSR-ready partners across Noida Extension and Delhi NCR.",
    badges: [
      "FCRA & 80G Verified",
      "Transparent Reporting",
      "Real Impact Data",
    ],
    primaryCta: { label: "Explore Live Causes", href: "/causes/" },
    secondaryCta: {
      label: "Become a Cause Champion",
      href: "/become-a-cause-champion/",
    },
  },
  leading: {
    eyebrow: "Overview",
    title: "Leading NGOs in Noida — Verified & Trusted",
    body: "Noida and Greater Noida absorb families priced out of Delhi — and with them, children who miss formal admission windows. Bridge programmes like #PehliClass at Mera Sahara pair documentation support with classroom catch-up before enrolment into UP or Delhi schools.",
  },
  featured: {
    eyebrow: "Programmes",
    title: "Featured programmes in Noida",
    items: [
      "#PehliClass / JWP — formal school bridge at Nithari",
      "Feeding and vaccination routes from Delhi NCR animal NGOs",
      "CSR-friendly education blocks for Noida Extension corporates",
    ],
  },
  whyDonate: {
    eyebrow: "Trust",
    title: "Why Donate Through The Giving Circle?",
    items: [
      {
        title: "Verified & Trusted",
        body: "All NGOs undergo verification for legitimacy, compliance and transparency.",
        icon: "shield",
      },
      {
        title: "Real Impact Tracking",
        body: "Quarterly reporting so donors can track outcomes, not just spend.",
        icon: "impact",
      },
      {
        title: "Transparent Operations",
        body: "Clear fund utilisation updates and public reporting practices.",
        icon: "transparent",
      },
      {
        title: "Multiple Causes",
        body: "Support education, healthcare, animal welfare, disaster relief and more.",
        icon: "causes",
      },
      {
        title: "Secure Giving",
        body: "Simple, secure payments and a consistent donor experience.",
        icon: "secure",
      },
      {
        title: "Community Driven",
        body: "Join a giving community of Cause Champions creating collective impact.",
        icon: "community",
      },
    ],
  },
  categories: {
    eyebrow: "Causes",
    title: "Top NGO Categories in Noida",
    items: [
      {
        title: "Education",
        body: "Education, literacy and skill development programmes.",
        icon: "education",
      },
      {
        title: "Healthcare",
        body: "Medical camps, treatment access and preventive health.",
        icon: "healthcare",
      },
      {
        title: "Animal Welfare",
        body: "Rescue, vaccination, feeding and shelter programmes.",
        icon: "shelter",
      },
      {
        title: "Disaster Relief",
        body: "Emergency response and rehabilitation support.",
        icon: "disaster",
      },
      {
        title: "Women Empowerment",
        body: "Rights, education, skills training and livelihoods.",
        icon: "women",
      },
      {
        title: "Child Welfare",
        body: "Protection, nutrition, education and development.",
        icon: "child",
      },
      {
        title: "Environment",
        body: "Sustainability, clean-up and conservation work.",
        icon: "environment",
      },
      {
        title: "Rural Development",
        body: "Infrastructure, livelihoods and community development.",
        icon: "rural",
      },
    ],
  },
  howTo: {
    eyebrow: "Get started",
    title: "How to Support NGOs in Noida",
    steps: [
      {
        title: "Browse verified NGOs",
        body: "Explore verified NGOs in Noida working across multiple causes.",
      },
      {
        title: "Choose a cause",
        body: "Pick a cause that resonates: education, healthcare, animals, disaster relief and more.",
      },
      {
        title: "Donate securely",
        body: "Give through our platform with secure payments and transparent reporting.",
      },
      {
        title: "Track impact",
        body: "Receive updates and reports showing what your donation achieved.",
      },
    ],
    cta: { label: "Explore Live Causes", href: "/causes/" },
  },
  nearby: {
    eyebrow: "Nearby",
    title: "Explore NGOs in Nearby Locations",
    items: [
      {
        title: "Best NGOs in Delhi",
        body: "Discover verified NGOs and causes to support in Delhi.",
        href: "/ngos/best-ngo-in-delhi/",
      },
      {
        title: "Best NGOs in Gurugram",
        body: "Discover verified NGOs and causes to support in Gurugram.",
        href: "/ngos/best-ngo-in-gurugram/",
      },
      {
        title: "Best NGOs in Faridabad",
        body: "Discover verified NGOs and causes to support in Faridabad.",
        href: "/ngos/best-ngo-in-faridabad/",
      },
    ],
  },
  faqs: [
    {
      id: "noida-verify-ngo",
      question: "How do I verify an NGO in Noida?",
      answer:
        "Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual audited statements. The Giving Circle verifies these before listing.",
    },
    {
      id: "noida-tax-deductible",
      question: "Are donations tax-deductible?",
      answer:
        "Where the recipient NGO holds valid Section 80G approval, eligible donations may qualify for a tax deduction. The NGO issues the receipt and Form 10BE. Deduction rules depend on your tax regime — a tax adviser can confirm what applies to you.",
    },
    {
      id: "noida-impact",
      question: "How do I know my donation created impact?",
      answer:
        "Donations go directly to the partner NGO. On The Giving Circle you can follow live causes and receive updates on programme progress so you see outcomes — not only how funds were spent.",
    },
  ],
};

export const NGOS_CITY_FARIDABAD: NgosCityPage = {
  slug: "best-ngo-in-faridabad",
  city: "Faridabad",
  metaTitle: "Best NGO in Faridabad | Verified NGOs | The Giving Circle",
  metaDescription:
    "Discover verified and trusted NGOs in Faridabad making a real impact. Connect with top-rated charity organizations through The Giving Circle and donate with confidence.",
  hero: {
    title: "Best NGO in Faridabad",
    subtitle:
      "Discover verified and trusted NGOs in Faridabad making a real impact. Connect with top-rated charity organizations through The Giving Circle and donate with confidence.",
    badges: [
      "FCRA & 80G Verified",
      "Transparent Reporting",
      "Real Impact Data",
    ],
    primaryCta: { label: "Explore Live Causes", href: "/causes/" },
    secondaryCta: {
      label: "Become a Cause Champion",
      href: "/become-a-cause-champion/",
    },
  },
  leading: {
    eyebrow: "Overview",
    title: "Leading NGOs in Faridabad — Verified & Trusted",
    body: "Faridabad's industrial belt and Ballabgarh periphery host dense worker colonies where NGOs focus on livelihoods, health camps, and peri-urban animal welfare. Verified partners here often serve both Haryana and Delhi border communities.",
  },
  featured: {
    eyebrow: "Programmes",
    title: "Featured programmes in Faridabad",
    items: [
      "Community health and education outreach in industrial colonies",
      "Cross-border NCR programmes from Delhi-listed verified NGOs",
      "Volunteer routes reachable from Badarpur metro corridor",
    ],
  },
  whyDonate: {
    eyebrow: "Trust",
    title: "Why Donate Through The Giving Circle?",
    items: [
      {
        title: "Verified & Trusted",
        body: "All NGOs undergo verification for legitimacy, compliance and transparency.",
        icon: "shield",
      },
      {
        title: "Real Impact Tracking",
        body: "Quarterly reporting so donors can track outcomes, not just spend.",
        icon: "impact",
      },
      {
        title: "Transparent Operations",
        body: "Clear fund utilisation updates and public reporting practices.",
        icon: "transparent",
      },
      {
        title: "Multiple Causes",
        body: "Support education, healthcare, animal welfare, disaster relief and more.",
        icon: "causes",
      },
      {
        title: "Secure Giving",
        body: "Simple, secure payments and a consistent donor experience.",
        icon: "secure",
      },
      {
        title: "Community Driven",
        body: "Join a giving community of Cause Champions creating collective impact.",
        icon: "community",
      },
    ],
  },
  categories: {
    eyebrow: "Causes",
    title: "Top NGO Categories in Faridabad",
    items: [
      {
        title: "Education",
        body: "Education, literacy and skill development programmes.",
        icon: "education",
      },
      {
        title: "Healthcare",
        body: "Medical camps, treatment access and preventive health.",
        icon: "healthcare",
      },
      {
        title: "Animal Welfare",
        body: "Rescue, vaccination, feeding and shelter programmes.",
        icon: "shelter",
      },
      {
        title: "Disaster Relief",
        body: "Emergency response and rehabilitation support.",
        icon: "disaster",
      },
      {
        title: "Women Empowerment",
        body: "Rights, education, skills training and livelihoods.",
        icon: "women",
      },
      {
        title: "Child Welfare",
        body: "Protection, nutrition, education and development.",
        icon: "child",
      },
      {
        title: "Environment",
        body: "Sustainability, clean-up and conservation work.",
        icon: "environment",
      },
      {
        title: "Rural Development",
        body: "Infrastructure, livelihoods and community development.",
        icon: "rural",
      },
    ],
  },
  howTo: {
    eyebrow: "Get started",
    title: "How to Support NGOs in Faridabad",
    steps: [
      {
        title: "Browse verified NGOs",
        body: "Explore verified NGOs in Faridabad working across multiple causes.",
      },
      {
        title: "Choose a cause",
        body: "Pick a cause that resonates: education, healthcare, animals, disaster relief and more.",
      },
      {
        title: "Donate securely",
        body: "Give through our platform with secure payments and transparent reporting.",
      },
      {
        title: "Track impact",
        body: "Receive updates and reports showing what your donation achieved.",
      },
    ],
    cta: { label: "Explore Live Causes", href: "/causes/" },
  },
  nearby: {
    eyebrow: "Nearby",
    title: "Explore NGOs in Nearby Locations",
    items: [
      {
        title: "Best NGOs in Delhi",
        body: "Discover verified NGOs and causes to support in Delhi.",
        href: "/ngos/best-ngo-in-delhi/",
      },
      {
        title: "Best NGOs in Gurugram",
        body: "Discover verified NGOs and causes to support in Gurugram.",
        href: "/ngos/best-ngo-in-gurugram/",
      },
      {
        title: "Best NGOs in Noida",
        body: "Discover verified NGOs and causes to support in Noida.",
        href: "/ngos/best-ngo-in-noida/",
      },
    ],
  },
  faqs: [
    {
      id: "faridabad-verify-ngo",
      question: "How do I verify an NGO in Faridabad?",
      answer:
        "Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual audited statements. The Giving Circle verifies these before listing.",
    },
    {
      id: "faridabad-tax-deductible",
      question: "Are donations tax-deductible?",
      answer:
        "Where the recipient NGO holds valid Section 80G approval, eligible donations may qualify for a tax deduction. The NGO issues the receipt and Form 10BE. Deduction rules depend on your tax regime — a tax adviser can confirm what applies to you.",
    },
    {
      id: "faridabad-impact",
      question: "How do I know my donation created impact?",
      answer:
        "Donations go directly to the partner NGO. On The Giving Circle you can follow live causes and receive updates on programme progress so you see outcomes — not only how funds were spent.",
    },
  ],
};

export const NGOS_FAQS: readonly FaqEntry[] = [
  {
    id: "ngos-how-verify-legitimate",
    question: "How do I verify if an NGO is legitimate?",
    answer:
      "Before an NGO appears on The Giving Circle, we check registration documents, 80G and where relevant FCRA certificates, and we meet the people who run it. You can also review registration and 80G details on each partner’s cause page.",
  },
  {
    id: "ngos-tax-deductible",
    question: "Are donations through The Giving Circle tax-deductible?",
    answer:
      "Where the recipient NGO holds valid Section 80G approval, eligible donations may qualify for a tax deduction. The NGO issues the receipt and Form 10BE. Deduction rules depend on your tax regime — a tax adviser can confirm what applies to you.",
  },
  {
    id: "ngos-csr",
    question: "Can my company donate through The Giving Circle for CSR?",
    answer:
      "Yes. Corporate teams can support verified causes and connect CSR budgets with measurable programmes. Explore live causes or partner with us to discuss organisational giving.",
  },
  {
    id: "ngos-what-is-giving-circle",
    question: "What is a Giving Circle and how does it work?",
    answer:
      "A Giving Circle brings people together around one verified cause. A Cause Champion starts a fundraiser, shares it with their network, and donations go directly to the partner NGO through its own payment gateway.",
  },
] as const;

/** Pehli Class cause detail — hero on the shared template. */

export const PEHLI_CLASS_HERO = {
  category: "Education · Out-of-School Children",
  title: "Pehli Class",
  orgLine: "A campaign by",
  orgName: "Joint Women's Programme (JWP)",
  tagline: "A first day of school is every child's right.",
  pitch:
    "At JWP's Mera Sahara centre in Noida, children who never started school, or fell out of it, catch up for up to a year, get their papers in order, and walk into a real classroom.",
  vetting: {
    title: "Verified NGO.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: [
    "Tax Benefits · 80G",
    "Serving Since 1977",
    "Noida, Uttar Pradesh",
  ] as const,
  primaryCta: {
    label: "Donate to Pehli Class",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@pehliclass",
    href: "https://www.instagram.com/pehliclass/",
    label: "Follow the campaign",
  },
  campaignLogo: {
    src: "/images/causes/pehli-class/pehli-logo-roundel.png" as string | null,
  },
  media: {
    src: "/images/causes/pehli-class/pehli-hero.jpg" as string | null,
    alt: "Children at Mera Sahara Centre in Noida holding their Ganesha drawings",
    caption: "Photo: Mera Sahara Centre, Noida",
  },
  stickyDonate: {
    label: "Donate to Pehli Class",
    href: "#support",
  },
} as const;

export const PEHLI_CLASS_ABOUT = {
  eyebrow: "About This Cause",
  title: "When the School Gate Stays Shut",
  body: "Every child in India has a right to go to school. For children from Noida's poorest homes, that right often stops at the gate. Their families want it for them, but the system asks for things they don't have.",
  cards: [
    {
      label: "Papers",
      title: "One Missing Document",
      body: "No birth certificate, Aadhaar, transfer certificate or PEN, and the admission stops right there.",
    },
    {
      label: "Learning",
      title: "Behind Before They Begin",
      body: "First-generation learners, with no one at home who can help them catch up.",
    },
    {
      label: "Time",
      title: "Told It's Too Late",
      body: "A twelve-year-old who has never been to school is told the lost years cannot be made up.",
    },
    {
      label: "Girls",
      title: "Kept Home First",
      body: "Adolescent girls are pulled out so that housework, or a younger brother's schooling, can come first.",
    },
  ] as const,
} as const;

export const PEHLI_CLASS_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "Close the Gap.",
  titleLine2: "Open the Gate.",
  body: "A child who is behind, and has no papers, stays outside. Fix both within a year, and the gate opens.",
  steps: [
    {
      label: "When We Find",
      title: "Children the System Missed",
      body: "Never enrolled, dropped out, or turned away. Like 30 children from Lohar families in roadside shelters, who had never been to school.",
      outcome: false,
    },
    {
      label: "And Bridge",
      title: "The Learning Gap",
      body: "Up to one year of classes at the Mera Sahara centre, following the state curriculum.",
      outcome: false,
    },
    {
      label: "And Secure",
      title: "Every Missing Paper",
      body: "Birth certificate, Aadhaar, transfer certificate, PEN: whatever the school asks for.",
      outcome: false,
    },
    {
      label: "Then They Walk Into",
      title: "Their Pehli Class, On Time",
      body: "A government or private school. For older girls, open schooling through NIOS and IGNOU.",
      outcome: true,
    },
  ] as const,
  footer:
    "How we know it's working: admissions we can count. 147 children in 2025-26, and more than 15 into private schools under RTE so far in 2026-27.",
} as const;

export const PEHLI_CLASS_HOW = {
  eyebrow: "How This Cause Works",
  title: "Bridge. Prepare. Admit.",
  body: "Three things the Mera Sahara centre does for every child, in one year at most.",
  cards: [
    {
      title: "Bridge Classes",
      body: "Classes that follow the state curriculum, so a child who started late, or never started, is ready for a mainstream school.",
      src: "/images/causes/pehli-class/pehli-how-bridge.jpg" as string | null,
      alt: "A teacher with children working in their notebooks on the floor of the Mera Sahara centre",
    },
    {
      title: "Papers and Admission",
      body: "JWP's team helps families get the documents schools ask for, then sees each child through admission, including RTE seats in private schools.",
      src: "/images/causes/pehli-class/pehli-how-papers.jpg" as string | null,
      alt: "A school admission letter handed over at the Mera Sahara centre",
    },
    {
      title: "Families Beside Them",
      body: "Parent meetings and school-readiness work, so a child who gets into school stays in school.",
      src: "/images/causes/pehli-class/pehli-how-families.jpg" as string | null,
      alt: "Parents and children gathered at the Mera Sahara centre",
    },
  ] as const,
} as const;

export const PEHLI_CLASS_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Students who grew up at the Mera Sahara centre, some of them now teaching there.",
  footer: "More voices added as children move into school",
  items: [
    {
      role: "Former Student",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "Teachers here saw me through school, and now they're encouraging me to graduate.",
      name: "Pritima",
      detail: "Student turned teacher, Mera Sahara Centre",
      photoSrc: "/images/causes/pehli-class/pehli-voice-pritima.jpg" as string | null,
      photoAlt: "Pritima, former student at Mera Sahara Centre",
      videoHref: null as string | null,
    },
    {
      role: "Teacher",
      roleTone: "teacher" as const,
      variant: "quote" as const,
      quote:
        "I started as a student here. Seven years later, I teach at Mera Sahara in Nithari.",
      name: "Shivani",
      detail: "Crèche teacher, Mera Sahara Centre",
      photoSrc: "/images/causes/pehli-class/pehli-voice-shivani.jpg" as string | null,
      photoAlt: "Shivani, crèche teacher at Mera Sahara Centre",
      videoHref: null as string | null,
    },
    {
      role: "Former Student",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "JWP is my second home — from class 1 to 5, then tailoring, and now computers.",
      name: "Moni",
      detail: "Former student, Mera Sahara Centre",
      photoSrc: "/images/causes/pehli-class/pehli-voice-moni.jpg" as string | null,
      photoAlt: "Moni, former student at Mera Sahara Centre",
      videoHref: null as string | null,
    },
  ],
} as const;

export const PEHLI_CLASS_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix:
    "keeps one child in bridge classes for three months, on the way to their first real classroom.",
  amounts: [
    { amount: 4800, label: "3 months" },
    { amount: 19000, label: "a full year" },
  ] as const,
  donateHref:
    "https://give.jwpindia.org/donate/supporting-children-s-5o6mxnd7?source=TGC",
  benefits: [
    {
      icon: "book" as const,
      title: "Bridge Classes",
      body: "Up to a year of catching up at the Mera Sahara centre, at the child's own pace.",
    },
    {
      icon: "file" as const,
      title: "Papers That Open the Gate",
      body: "Help getting a birth certificate, Aadhaar, transfer certificate or PEN.",
    },
    {
      icon: "workshops" as const,
      title: "A Seat in a Real School",
      body: "Admission to a government or private school, and support to stay there.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to Joint Women's Programme, through its own payment gateway and into its own bank account. JWP sends your 80G receipt.",
} as const;

export const PEHLI_CLASS_VETTING = {
  eyebrow: "Verified NGO",
  title: "Vetted by The Giving Circle",
  body: "We only list NGOs our own team has checked, and not every organisation that applies makes it. Here is what we checked for Joint Women's Programme before this campaign went live.",
  lastReviewed: "[month year]",
  checks: [
    {
      title: "Registration and tax documents checked, genuine and current",
      body: "Listed below with numbers you can check yourself",
    },
    {
      title: "Office visited by our team",
      body: "D-45, Press Enclave, Saket, New Delhi · [date]",
    },
    {
      title: "Leadership interviewed",
      body: "The people who run the programme, in person",
    },
    {
      title: "Field work seen",
      body: "[place, date] · we see the work on the ground wherever we can",
    },
    {
      title: "Written commitment to share updates",
      body: "Admissions and classroom photos, posted on this page",
    },
  ] as const,
  documents: [
    {
      badge: "80G",
      title: "80G approval",
      number: "AAAAJ3629F25DL02",
      note: "valid AY 2027-28 to 2031-32 · 50% tax deduction",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/Renewed-80-G-Copy.pdf",
    },
    {
      badge: "12AB",
      title: "12AB registration",
      number: "AAAAJ3629F25DL01",
      note: "valid AY 2027-28 to 2036-37",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/Renewed-12-AB-Copy.pdf",
    },
    {
      badge: "CSR-1",
      title: "CSR-1 registration",
      number: "CSR00001519",
      note: "can receive company CSR funds",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/Approval-Letter-for-form-CSR1.pdf",
    },
    {
      badge: "FCRA",
      title: "FCRA registration",
      number: "231661236",
      note: "renewed 18 Dec 2021, cleared for foreign contributions",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/JWP-FCRA-Current-Certificate.pdf",
    },
    {
      badge: "NGO Darpan",
      title: "NGO Darpan",
      number: "DL/2017/0167769",
      note: "NITI Aayog's national NGO registry",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/NGO-Darpan_JWP-Registration-Details-1.pdf",
    },
    {
      badge: "Reg.",
      title: "Society registration",
      number: "S-49003 of 2004",
      note: "Registrar of Societies, Delhi",
      href: "https://jwpindia.org/wp-content/uploads/2026/08/Certified-Copy-of-Registration-Certificate.pdf",
    },
  ] as const,
  goodToKnow:
    "vetting is not a financial audit, and we don't examine the NGO's accounts. It confirms the organisation is real, legally compliant, and run by people we have met.",
} as const;

export const PEHLI_CLASS_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "JC",
    portraitLabel: "Portrait from JWP",
    quote:
      "Our journey began with a clear objective: to create a society where every woman and child can thrive, regardless of class, caste, customs, religion, and gender.",
    name: "Jyotsna Chatterji",
    role: "Founder and Director, Joint Women's Programme · Former Professor, Calcutta University",
    photoSrc: "/images/volunteer/jyotsna-chatterji-jwp.jpg" as string | null,
    photoAlt: "Jyotsna Chatterji, Founder Director of Joint Women's Programme",
    social: [] as const,
  },
  eyebrow: "Impact So Far",
  title: "Real Classrooms. Real First Days.",
  body: "Updates from the Mera Sahara centre, shared with every circle.",
  stats: [
    { value: "147", label: "school admissions in 2025-26", confirm: false },
    {
      value: "15+",
      label: "into private schools under RTE in 2026-27",
      confirm: false,
    },
    { value: "228", label: "children enrolled at the centre", confirm: false },
    { value: "58", label: "supporters here", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "Circle time · Mera Sahara Centre",
      src: "/images/causes/pehli-class/pehli-impact-circle-time.png" as string | null,
      alt: "Teacher and children in a circle on the floor at Mera Sahara Centre",
      featured: true,
    },
    items: [
      {
        label: "“Be literate, stay strong”",
        src: "/images/causes/pehli-class/pehli-impact-uniform.jpg" as string | null,
        alt: "A child in a green school uniform, from behind",
      },
      {
        label: "Admission day",
        src: "/images/causes/pehli-class/pehli-impact-admission.png" as string | null,
        alt: "Parents holding an admission letter at the Mera Sahara Project",
      },
      {
        label: "Speaking up",
        src: "/images/causes/pehli-class/pehli-impact-speaking-up.png" as string | null,
        alt: "Children holding handwritten signs during a values session",
      },
      {
        label: "Pre-primary class",
        src: "/images/causes/pehli-class/pehli-impact-pre-primary.png" as string | null,
        alt: "Teacher and young children seated on a mat in pre-primary class",
      },
    ] as const,
  },
  instagram: {
    handle: "@pehliclass",
    href: "https://www.instagram.com/pehliclass/",
    body: "Follow every first day of school, in photos and reels.",
    cta: "Follow on Instagram",
    logoSrc: "/images/causes/pehli-class/pehli-logo-roundel.png" as string | null,
  },
} as const;

export const PEHLI_CLASS_FAQS = {
  eyebrow: "Questions About This Cause",
  title: "Frequently Asked Questions",
  body: "Clarity on where your gift goes, how the programme works, and how your circle can champion it.",
  items: [
    {
      question: 'What does "vetted by The Giving Circle" mean?',
      answer:
        "Our own team checked JWP's registration and tax documents, visited its office, and interviewed the people who run it. We see the work on the ground wherever we can, and JWP has committed in writing to share updates. Vetting is not a financial audit; we do not examine the NGO's accounts.",
    },
    {
      question: "Will I get an 80G receipt?",
      answer:
        "Yes. JWP holds a valid 80G certificate, and the receipt comes directly from JWP to the email address you give when you donate. Add your PAN when you donate so the receipt can be issued. 80G is a deduction under the old tax regime; your tax adviser can confirm what applies to you.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Straight to the NGO. Donations go directly to the partner NGO through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold, or process donation funds at any stage.",
    },
    {
      question: "What exactly does a gift pay for?",
      answer:
        "JWP puts the cost of bridging one child into a mainstream classroom at ₹19,000 for a full year: the bridge classes, help with missing documents, and the admission itself. You can give once, or every month, and a monthly gift can be cancelled at any time.",
    },
    {
      question: "Who are the children?",
      answer:
        "First-generation learners, children who dropped out, and children who have never been inside a classroom, from the communities around JWP's Mera Sahara centre in Nithari, Noida. Many were turned away for a missing document, or because no one helped them close the learning gap.",
    },
    {
      question: "What happens after the year?",
      answer:
        "Every child stays at the centre for one year at most. By then the aim is a seat in a government or private school, including the seats private schools keep free under the Right to Education Act. JWP keeps working with parents so that children who get into school stay there.",
    },
    {
      question: "What about older girls?",
      answer:
        "Some adolescent girls cannot go back to a regular school because of responsibilities at home. For them, JWP opens a route through open schooling with NIOS (Classes 9 to 12) and on to higher education with IGNOU.",
    },
    {
      question: "Can I raise funds for Pehli Class with my circle?",
      answer:
        "Yes. Become a Cause Champion: tell us how much you would like to raise, and we set up your fundraising page and materials to share on WhatsApp, Instagram or anywhere you like. It costs nothing, and someone from our team stays with you through it.",
    },
  ] as const,
} as const;

/** Hidden until real field videos are ready. */
export const PEHLI_CLASS_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From The Field",
  body: "Free to watch, and to share with your circle.",
  videos: [] as const,
} as const;

export const PEHLI_CLASS_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Pehli Class, bring your circle together, and help one more child reach their first day of school.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;

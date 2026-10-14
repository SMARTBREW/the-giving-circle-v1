/** Pawsitive Protectors cause detail — hero + campaign chrome on the shared template. */

export const PAWSITIVE_PROTECTORS_HERO = {
  category: "Animal & Community Welfare",
  title: "Pawsitive Protectors",
  orgLine: "A campaign by",
  orgName: "Animal Care",
  tagline: "Building rabies-free neighbourhoods",
  pitch:
    "Street dogs share our streets, and our safety. We vaccinate them against rabies, deworm them and fit reflective collars, so animals and neighbourhoods stay safer together.",
  vetting: {
    title: "Verified NGO Partner.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: [
    "Tax Benefits · 80G",
    "Working Since 2020",
    "1,584 Supporters",
  ] as const,
  primaryCta: {
    label: "Donate to Pawsitive Protectors",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@pawsitiveprotectors",
    href: "https://www.instagram.com/pawsitiveprotectors/",
    label: "Follow the campaign",
  },
  campaignLogo: {
    src: "/images/causes/pawsitive-protectors/pawsitive-logo-roundel.png" as string | null,
  },
  media: {
    src: "/images/causes/pawsitive-protectors/pawsitive-hero.jpg" as string | null,
    alt: "A street dog resting outdoors, cared for through Animal Care’s Pawsitive Protectors work",
    caption: "Photo: Animal Care",
  },
  stickyDonate: {
    label: "Donate to Pawsitive Protectors",
    href: "#support",
  },
} as const;

export const PAWSITIVE_PROTECTORS_ABOUT = {
  eyebrow: "About This Cause",
  title: "Protecting Lives Before They Need Rescue",
  body: "Animal welfare isn't only about rescuing injured animals. It's about preventing suffering before it begins, for the dogs on our streets and the families who live alongside them.",
  cards: [
    {
      label: "Health",
      title: "Rabies Is Still a Risk",
      body: "One unvaccinated dog can put a whole neighbourhood at risk, people and animals alike.",
    },
    {
      label: "Safety",
      title: "Invisible After Dark",
      body: "Street dogs are hard to see at night, and road accidents are one of the biggest dangers they face.",
    },
    {
      label: "Care",
      title: "No One to Treat Them",
      body: "Without an owner, worms and infections go untreated, and small problems turn serious.",
    },
    {
      label: "Community",
      title: "Fear Instead of Care",
      body: "When neighbourhoods fear street dogs, animals get chased away and feeders are left on their own.",
    },
  ] as const,
} as const;

export const PAWSITIVE_PROTECTORS_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "Protect Every Dog. Protect Every Street.",
  titleLine2: "",
  body: "When most of the dogs in an area are vaccinated, rabies stops spreading. That's why the Animal Care team works colony by colony, together with local feeders.",
  steps: [
    {
      label: "When We Vaccinate",
      title: "Street Dogs Against Rabies",
      body: "Each vaccinated dog is one less risk for the neighbourhood.",
      outcome: false,
    },
    {
      label: "And Deworm and Collar Them",
      title: "Healthier, and Seen at Night",
      body: "Fewer infections, fewer road accidents.",
      outcome: false,
    },
    {
      label: "And Bring Together",
      title: "Feeders, Residents and Schools",
      body: "So the community looks out for its dogs.",
      outcome: false,
    },
    {
      label: "Then",
      title: "Animals and People Live Safer, Together",
      body: "Neighbourhoods where no one has to fear the dog next door.",
      outcome: true,
    },
  ] as const,
  footer:
    "How we know it's working: every animal is documented and tracked, and follow-up visits check that dogs stay healthy and collars stay on.",
} as const;

export const PAWSITIVE_PROTECTORS_HOW = {
  eyebrow: "How This Cause Works",
  title: "Vaccinate. Protect. Educate.",
  body: "Three things the Animal Care team does in every neighbourhood Pawsitive Protectors reaches.",
  cards: [
    {
      title: "Vaccination & Deworming",
      body: "Mobile camps in high-risk colonies, set up with local feeders. Every dog is documented and tracked.",
      src: "/images/causes/pawsitive-protectors/pawsitive-how-vaccinate.jpg" as string | null,
      alt: "Animal Care volunteers treating a street dog during a vaccination drive",
    },
    {
      title: "Reflective Collars",
      body: "High-visibility collars that make street dogs easy to see on the road at night.",
      src: "/images/causes/pawsitive-protectors/pawsitive-how-collars.jpg" as string | null,
      alt: "A street dog wearing a reflective red collar with an Animal Care volunteer",
    },
    {
      title: "Community Education",
      body: "Friendly sessions with residents, schools and feeders on responsible feeding, care and reporting injuries.",
      src: "/images/causes/pawsitive-protectors/pawsitive-how-education.jpg" as string | null,
      alt: "Animal Care team holding an anti-rabies and deworming campaign banner",
    },
  ] as const,
} as const;

export const PAWSITIVE_PROTECTORS_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Supporters, feeders and the Animal Care team, in their own words.",
  footer: "More voices added after every drive",
  items: [
    {
      role: "Feeder",
      roleTone: "student" as const,
      variant: "quote" as const,
      quote:
        "Getting them vaccinated means I worry less, and my neighbours now see them as our dogs too.",
      name: "Ms. Sunamika",
      detail: "Community feeder, Delhi NCR",
      photoSrc: "/images/causes/pawsitive-protectors/pawsitive-voice-sunamika.png" as string | null,
      photoAlt: "Ms. Sunamika, community feeder",
      videoHref: null as string | null,
    },
    {
      role: "Volunteer",
      roleTone: "counsellor" as const,
      variant: "quote" as const,
      quote:
        "Seeing Animal Care’s dedication truly touched me. Supporting them felt like a simple way to help.",
      name: "Vanshu Saini",
      detail: "Passionate about animals",
      photoSrc: "/images/causes/pawsitive-protectors/pawsitive-voice-vanshu.jpg" as string | null,
      photoAlt: "Vanshu Saini with a mountain dog in the Himalayas",
      videoHref: null as string | null,
    },
    {
      role: "Supporter",
      roleTone: "parent" as const,
      variant: "quote" as const,
      quote:
        "Every update reminds me that even a small contribution can make a meaningful difference.",
      name: "Ritu Midha",
      detail: "Supporter of Animal Care",
      photoSrc: null as string | null,
      photoAlt: "Ritu Midha",
      videoHref: null as string | null,
    },
  ],
} as const;

export const PAWSITIVE_PROTECTORS_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix: "protects one street dog, and the people who care for it.",
  amounts: [
    { amount: 1000, label: "1 dog" },
    { amount: 5000, label: "5 dogs" },
    { amount: 10000, label: "10 dogs" },
  ] as const,
  donateHref: "#",
  benefits: [
    {
      icon: "syringe" as const,
      title: "Anti-Rabies Shot & Deworming",
      body: "Given by a trained paravet, with the vaccine kept cold all the way.",
    },
    {
      icon: "collar" as const,
      title: "Reflective Collar",
      body: "So drivers can see the dog on the road at night.",
    },
    {
      icon: "shield" as const,
      title: "Protection for Feeders",
      body: "Anti-rabies shots for the feeders and caregivers who look after the dogs.",
    },
    {
      icon: "home" as const,
      title: "Care for Sick Dogs",
      body: "Nutritious meals while a sick dog recovers in Animal Care's shelter.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to Animal Care, through its own payment gateway and into its own bank account. Animal Care sends your 80G receipt.",
} as const;

export const PAWSITIVE_PROTECTORS_VETTING = {
  eyebrow: "Verified Partner",
  title: "Vetted by The Giving Circle",
  body: "We only list NGOs our own team has checked, and not every organisation that applies makes it. Here is what we checked for Animal Care before this campaign went live.",
  lastReviewed: "[month year]",
  checks: [
    {
      title: "Registration and tax documents checked, genuine and current",
      body: "Listed below with numbers you can check yourself",
    },
    {
      title: "Office visited by our team",
      body: "Sultanpur, New Delhi · [date]",
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
      body: "Drive photos and progress, posted on this page",
    },
  ] as const,
  documents: [
    {
      badge: "80G",
      title: "80G approval",
      number: "AAKTA4778M24DL02",
      note: "valid AY 2024-25 to 2028-29 · 50% tax deduction",
      href: "/docs/animal-care/ac-80g.pdf",
    },
    {
      badge: "CSR-1",
      title: "CSR-1 registration",
      number: "CSR00108362",
      note: "can receive company CSR funds",
      href: "/docs/animal-care/ac-csr1.pdf",
    },
    {
      badge: "NGO Darpan",
      title: "NGO Darpan",
      number: "DL/2024/0390044",
      note: "NITI Aayog's national NGO registry",
      href: "/docs/animal-care/ac-ngo-darpan.pdf",
    },
    {
      badge: "Reg.",
      title: "Trust registration",
      number: "2023/16/IV/1478",
      note: "registered 30 Dec 2023, Delhi",
      href: "/docs/animal-care/ac-trust-registration.pdf",
    },
    {
      badge: "PAN",
      title: "PAN",
      number: "AAKTA4778M",
      note: "Income Tax Department",
      href: "/docs/animal-care/ac-pan.pdf",
    },
  ] as const,
  goodToKnow:
    "vetting is not a financial audit, and we don't examine the NGO's accounts. It confirms the organisation is real, legally compliant, and run by people we have met.",
} as const;

export const PAWSITIVE_PROTECTORS_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "VS",
    portraitLabel: "Portrait from Animal Care",
    quote:
      "Street dogs are part of every neighbourhood, whether we notice them or not. When a colony’s dogs are vaccinated and easy to see at night, the fear goes away and people start looking out for them. That change is what keeps both the dogs and the families safe.",
    name: "Vikas Singh",
    role: "Founder, Animal Care",
    photoSrc: "/images/causes/pawsitive-protectors/pawsitive-founder.jpg" as string | null,
    photoAlt: "Vikas Singh, founder of Animal Care, holding a puppy",
    social: [] as const,
  },
  eyebrow: "Impact So Far",
  title: "Real Drives. Real Change.",
  body: "Updates from the field, shared with every circle.",
  stats: [
    { value: "12,344+", label: "anti-rabies vaccinations", confirm: false },
    { value: "1,891+", label: "animals rescued", confirm: false },
    { value: "433+", label: "volunteers", confirm: false },
    { value: "1,584", label: "supporters here", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "Vaccination drive · Gurugram",
      src: "/images/causes/pawsitive-protectors/pawsitive-impact-featured.jpg" as string | null,
      alt: "Animal Care team vaccinating a street dog in Gurugram",
      featured: true,
    },
    items: [
      {
        label: "Vaccination drive",
        src: "/images/causes/pawsitive-protectors/pawsitive-impact-drive-1.jpg" as string | null,
        alt: "Animal Care volunteers with street dogs during a vaccination drive",
      },
      {
        label: "Awareness drive",
        src: "/images/causes/pawsitive-protectors/pawsitive-impact-awareness.jpg" as string | null,
        alt: "Residents and the Animal Care team with the anti-rabies campaign banner",
      },
      {
        label: "Vaccination drive",
        src: "/images/causes/pawsitive-protectors/pawsitive-impact-drive-2.jpg" as string | null,
        alt: "Animal Care team member with a street dog during a neighbourhood drive",
      },
      {
        label: "Vaccination drive",
        src: "/images/causes/pawsitive-protectors/pawsitive-impact-drive-3.jpg" as string | null,
        alt: "A feeder and paravet holding a street dog during vaccination",
      },
    ] as const,
  },
  instagram: {
    handle: "@pawsitiveprotectors",
    href: "https://www.instagram.com/pawsitiveprotectors/",
    body: "Follow every drive as it happens, in photos and reels.",
    cta: "Follow on Instagram",
    logoSrc: "/images/causes/pawsitive-protectors/pawsitive-logo-roundel.png" as string | null,
  },
} as const;

export const PAWSITIVE_PROTECTORS_FAQS = {
  eyebrow: "Questions About This Cause",
  title: "Frequently Asked Questions",
  body: "Clarity on where your gift goes, how the programme works, and how your circle can champion it.",
  items: [
    {
      question: 'What does "vetted by The Giving Circle" mean?',
      answer:
        "Our own team checked Animal Care's registration and tax documents, visited its office, and interviewed the people who run it. We see the work on the ground wherever we can, and Animal Care has committed in writing to share updates. Vetting is not a financial audit; we do not examine the NGO's accounts.",
    },
    {
      question: "Will I get an 80G receipt?",
      answer:
        "Yes. Animal Care holds a valid 80G certificate, and the receipt comes directly from Animal Care to the email address you give when you donate. 80G is a deduction under the old tax regime; your tax adviser can confirm what applies to you.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Straight to the NGO. Donations go directly to the partner NGO through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold, or process donation funds at any stage.",
    },
    {
      question: "Do you run drives in my city?",
      answer:
        "The Animal Care team works across Delhi NCR and has run anti-rabies drives in Mumbai. A drive in a new area depends on the number of street dogs there, and is set up together with the local feeders. Write to us and the team will take it from there.",
    },
    {
      question: "Who does the vaccinating?",
      answer:
        "The Animal Care team and its vets. Cause Champions raise funds and spread the word; they are not asked to handle animals.",
    },
    {
      question: "Can I raise funds for Pawsitive Protectors with my circle?",
      answer:
        "Yes. Become a Cause Champion: tell us how much you would like to raise, and we set up your fundraising page and materials to share on WhatsApp, Instagram or anywhere you like. It costs nothing, and someone from our team stays with you through it.",
    },
  ] as const,
} as const;

/** Hidden until real field videos are ready. */
export const PAWSITIVE_PROTECTORS_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From The Field",
  body: "Free to watch, and to share with your circle.",
  videos: [] as const,
} as const;

export const PAWSITIVE_PROTECTORS_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Pawsitive Protectors, bring your circle together, and help build rabies-free neighbourhoods.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;

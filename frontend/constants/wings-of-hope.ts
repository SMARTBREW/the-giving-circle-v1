/** Wings of Hope campaign detail - redesign copy. */

/** Shared section chrome — one scale across the Wings cause page. */
export const WINGS_SECTION = {
  pad: "flex w-full flex-col items-stretch !pt-4 sm:!pt-6 md:!pt-8 lg:!pt-8 min-[90rem]:!pt-10",
  padTightY:
    "flex w-full flex-col items-stretch !pt-4 sm:!pt-6 md:!pt-8 lg:!pt-8 min-[90rem]:!pt-10 !pb-4 sm:!pb-6 md:!pb-8 lg:!pb-8 min-[90rem]:!pb-10",
  eyebrow:
    "text-[0.6875rem] font-[700] leading-4 tracking-[0.08em] uppercase text-[var(--Giving-Red,#e62b4f)] sm:text-[0.75rem] sm:leading-5",
  title:
    "mt-2.5 w-full max-w-[36rem] font-['Georgia'] text-[1.625rem] font-[700] leading-8 tracking-normal text-[var(--Main-headings,#1c2426)] sm:mt-3 sm:text-[1.875rem] sm:leading-9 md:text-[2.125rem] md:leading-[2.5rem] lg:text-[2.25rem] lg:leading-[2.75rem] min-[90rem]:text-[2.5rem] min-[90rem]:leading-[3rem]",
  titleOnDark:
    "mt-2.5 w-full max-w-[36rem] font-['Georgia'] text-[1.625rem] font-[700] leading-8 tracking-normal text-[#FFFFFF] sm:mt-3 sm:text-[1.875rem] sm:leading-9 md:text-[2.125rem] md:leading-[2.5rem] lg:text-[2.25rem] lg:leading-[2.75rem] min-[90rem]:text-[2.5rem] min-[90rem]:leading-[3rem]",
  body: "mt-2.5 max-w-[36rem] text-[0.875rem] font-[400] leading-6 tracking-normal text-[var(--Subheading,#4a5558)] sm:mt-3 sm:text-[0.9375rem] sm:leading-6 md:text-[1rem] md:leading-7",
  bodyOnDark:
    "mt-2.5 max-w-[36rem] text-[0.875rem] font-[400] leading-6 tracking-normal text-white/85 sm:mt-3 sm:text-[0.9375rem] sm:leading-6 md:text-[1rem] md:leading-7",
} as const;

export const WINGS_OF_HOPE_HERO = {
  category: "Education & Health",
  title: "Wings of Hope",
  orgLine: "A campaign by",
  orgName: "Joint Women's Programme",
  tagline: "So girls do not drop out of school",
  /** Same pitch as homepage / cause card. */
  pitch:
    "No girl should leave school because she got her period. We give her pads, workshops and counselling, so she stays in class and keeps chasing her dreams.",
  vetting: {
    title: "Verified NGO Partner.",
    body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
    ctaLabel: "See what we checked",
    href: "#vetting",
  },
  chips: [
    "Tax Benefits · 80G",
    "Serving Since 1977",
    "3,079 Supporters",
  ] as const,
  primaryCta: {
    label: "Donate to Wings of Hope",
    href: "#support",
  },
  secondaryCta: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  instagram: {
    handle: "@wingsofhope.india",
    href: "https://www.instagram.com/wingsofhope.india/",
    label: "Follow the campaign",
  },
  media: {
    src: "/images/causes/woh-hero-original.png",
    alt: "A schoolgirl holding a Wings of Hope hygiene kit pouch",
    caption: "From a Wings of Hope drive",
  },
  stickyDonate: {
    label: "Donate to Wings of Hope",
    href: "#support",
  },
} as const;

export const WINGS_OF_HOPE_ABOUT = {
  eyebrow: "About This Cause",
  title: "When Periods Become Barriers",
  body: "Every month, girls across India miss school when their periods begin. A few missed days turn into weeks, and too many never return. Together, we can change that.",
  cards: [
    {
      label: "Access",
      title: "Pads Are Out of Reach",
      body: "For many families, pads cost more than they can spare each month, so girls stay home instead.",
    },
    {
      label: "Awareness",
      title: "No One Explains It",
      body: "Many girls get their first period before anyone talks to them about it, and myths fill the gap.",
    },
    {
      label: "Facilities",
      title: "No Safe Place to Change",
      body: "Without clean, private toilets at school, staying home feels like the only option.",
    },
    {
      label: "Stigma",
      title: "Silence at Home",
      body: "When parents and teachers don't talk about periods, girls learn to stay quiet and stay away.",
    },
  ] as const,
} as const;

export const WINGS_OF_HOPE_THEORY = {
  eyebrow: "Our Theory of Change",
  titleLine1: "Remove the Barriers.",
  titleLine2: "Keep Her in Class.",
  body: "Pads, knowledge and a supportive community work best together. Each step builds on the one before.",
  steps: [
    {
      label: "When We Give Her",
      title: "Free Reusable Pads",
      body: "Cost is no longer the reason she stays home.",
      outcome: false,
    },
    {
      label: "And Help Her Understand",
      title: "Her Body and Her Health",
      body: "In a safe space to ask what she can't ask at home.",
      outcome: false,
    },
    {
      label: "And Bring Together",
      title: "Parents, Teachers and Community",
      body: "So the people around her support her, not silence her.",
      outcome: false,
    },
    {
      label: "Then She",
      title: "Stays in Class and Keeps Chasing Her Dreams",
      body: "With confidence and dignity, every month.",
      outcome: true,
    },
  ] as const,
  footer:
    "How we know it's working: girls still using their pads months later, and still in class through their periods.",
} as const;

export const WINGS_OF_HOPE_HOW = {
  eyebrow: "How This Cause Works",
  title: "Educate. Equip. Empower.",
  body: "Three programmes that work together in every community Wings of Hope reaches.",
  cards: [
    {
      photoLabel: "Photo: pad distribution",
      title: "Pad Drives",
      body: "Free reusable, biodegradable pads, shared through schools, local NGOs and government partners, with a demo on use and care.",
      src: "/images/causes/woh-how-pad-distribute.png",
      alt: "Schoolgirls holding reusable pad kits at a Wings of Hope distribution drive",
    },
    {
      photoLabel: "Photo: classroom workshop",
      title: "Awareness Workshops",
      body: "Friendly, age-appropriate sessions on menstrual health and hygiene, in schools and communities.",
      src: "/images/causes/woh-how-classroom.png",
      alt: "Classroom menstrual health workshop with girls raising their hands",
    },
    {
      photoLabel: "Photo: mothers' session",
      title: "Community & Counselling",
      body: "Health camps and parent sessions that replace myths with facts, plus one-to-one counselling for girls.",
      src: "/images/causes/woh-how-mothers.png",
      alt: "Mothers and community members at a Wings of Hope session",
    },
  ] as const,
} as const;

export const WINGS_OF_HOPE_VOICES = {
  eyebrow: "In Their Own Words",
  title: "Voices From This Cause",
  body: "Girls, parents, teachers and counsellors describing the change they have seen.",
  footer: "6 voices · more added after every drive",
  items: [
    {
      role: "Counsellor",
      roleTone: "counsellor",
      variant: "quote",
      quote:
        "[A JWP counsellor on the question girls ask most, and how the answer lands.]",
      name: "[Name]",
      detail: "Counsellor, Joint Women's Programme",
      photoSrc: null as string | null,
      photoAlt: "Counsellor portrait",
      videoHref: null as string | null,
    },
    {
      role: "Facilitator",
      roleTone: "facilitator",
      variant: "quote",
      quote:
        "[A workshop facilitator on what shifts in the room when myths get replaced with facts.]",
      name: "[Name]",
      detail: "Facilitator, Wings of Hope",
      photoSrc: null as string | null,
      photoAlt: "Facilitator portrait",
      videoHref: null as string | null,
    },
    {
      role: "Student · Video",
      roleTone: "studentVideo",
      variant: "video",
      quote:
        "[A 30 to 60 second clip of a girl in her own words, filmed with her guardian's consent.]",
      name: "[First name only]",
      detail: "Class [9], [town]",
      photoSrc: null as string | null,
      photoAlt: "Student portrait",
      videoHref: "#",
    },
    {
      role: "Parent",
      roleTone: "parent",
      variant: "quote",
      quote:
        "[What they noticed at home. How conversations or attendance changed.]",
      name: "[First name only]",
      detail: "Parent · [Town]",
      photoSrc: null as string | null,
      photoAlt: "Parent portrait",
      videoHref: null as string | null,
    },
    {
      role: "Teacher",
      roleTone: "teacher",
      variant: "quote",
      quote:
        "[What they see in class: attendance, confidence, fewer absences.]",
      name: "[Name]",
      detail: "Teacher · [school]",
      photoSrc: null as string | null,
      photoAlt: "Teacher portrait",
      videoHref: null as string | null,
    },
    {
      role: "Student",
      roleTone: "student",
      variant: "quote",
      quote:
        "[In her own words: what changed for her after the workshop or receiving pads.]",
      name: "[First name only]",
      detail: "Class [8] · [Town]",
      photoSrc: null as string | null,
      photoAlt: "Student portrait",
      videoHref: null as string | null,
    },
  ] as const,
} as const;

export const WINGS_OF_HOPE_SUPPORT = {
  eyebrow: "What Your Support Funds",
  impactSuffix: "helps one girl stay in class and keep chasing her dreams.",
  amounts: [
    { amount: 1500, label: "1 girl" },
    { amount: 4500, label: "3 girls" },
    { amount: 15000, label: "10 girls" },
  ] as const,
  donateHref: "#",
  benefits: [
    {
      icon: "pads" as const,
      title: "Reusable Cloth Pads",
      body: "Her own supply, and how to wash and dry them safely.",
    },
    {
      icon: "care" as const,
      title: "Counselling & Care",
      body: "Someone she can turn to with her questions.",
    },
    {
      icon: "workshops" as const,
      title: "Menstrual Health Workshops",
      body: "For her, her classmates and the adults around them.",
    },
  ] as const,
  footer:
    "Every contribution goes directly to Joint Women's Programme, through its own payment gateway and into its own bank account. JWP sends your 80G receipt.",
} as const;

export const WINGS_OF_HOPE_VETTING = {
  eyebrow: "Verified Partner",
  title: "Vetted by The Giving Circle",
  body: "Before this cause went live, our team checked Joint Women's Programme the same way we check every partner: documents, a real office visit, and a conversation with the people who run it.",
  lastReviewed: "[month year]",
  checks: [
    {
      title: "Registration and tax documents checked",
      body: "Listed below. We keep copies on file.",
    },
    {
      title: "Office visited by our team",
      body: "[address] · [date]",
    },
    {
      title: "Leadership interviewed",
      body: "The people who run the work, not only a public face.",
    },
    {
      title: "Field work seen",
      body: "[place, date] - so the programme matches what is promised.",
    },
    {
      title: "Written commitment to share updates",
      body: "Drive photos and progress notes after every distribution.",
    },
  ] as const,
  documents: [
    {
      badge: "80G",
      title: "80G certificate",
      number: "[number]",
      note: "your gift gets a 50% tax deduction",
      href: "#",
    },
    {
      badge: "12AB",
      title: "12AB registration",
      number: "[number]",
      note: "tax-exempt status under Income Tax Act",
      href: "#",
    },
    {
      badge: "CSR-1",
      title: "CSR-1 approval",
      number: "[number]",
      note: "eligible for corporate CSR funding",
      href: "#",
    },
    {
      badge: "FCRA",
      title: "FCRA certificate",
      number: "[number]",
      note: "cleared to receive foreign contributions",
      href: "#",
    },
    {
      badge: "NGO Darpan",
      title: "NGO Darpan",
      number: "[number]",
      note: "listed on the government NGO portal",
      href: "#",
    },
    {
      badge: "Reg.",
      title: "Society registration",
      number: "[number]",
      note: "registered as a society under applicable law",
      href: "#",
    },
  ] as const,
  goodToKnow:
    "This is not a financial audit. It is our confirmation that Joint Women's Programme is a real, registered organisation, that we have met the people behind it, and that the documents they share with donors check out.",
} as const;

export const WINGS_OF_HOPE_IMPACT = {
  founder: {
    eyebrow: "Meet the Founder",
    initials: "JC",
    portraitLabel: "Portrait from JWP",
    quote:
      "A two or three line quote from Jyotsna Chatterji on why JWP took up menstrual health. JWP to supply.",
    name: "Jyotsna Chatterji",
    role: "Founder and Director, Joint Women's Programme · Former Professor, Calcutta University",
    photoSrc: null as string | null,
    photoAlt: "Jyotsna Chatterji, Founder Director of Joint Women's Programme",
  },
  eyebrow: "Impact So Far",
  title: "Real Drives. Real Change.",
  body: "Updates from the field, shared with every circle.",
  stats: [
    { value: "30,000+", label: "girls reached", confirm: true },
    { value: "200+", label: "workshops", confirm: true },
    { value: "3,079", label: "supporters here", confirm: false },
    { value: "1977", label: "JWP at work since", confirm: false },
  ] as const,
  gallery: {
    featured: {
      label: "Latest · School drive · [date]",
      src: "/images/causes/woh-impact-school-drive.png",
      alt: "Schoolgirls at B.S.M. Public School Nithari after a Wings of Hope drive",
      featured: true,
    },
    items: [
      {
        label: "Workshop · [date]",
        src: "/images/causes/woh-impact-workshop.png",
        alt: "Training-of-trainers workshop with community members in Burmu",
      },
      {
        label: "Mothers' session · [date]",
        src: "/images/causes/woh-impact-mothers-session.png",
        alt: "Mothers seated for a community session led by Wings of Hope facilitators",
      },
      {
        label: "Pad demo · [date]",
        src: "/images/causes/woh-impact-pad-demo.png",
        alt: "Facilitator demonstrating a reusable cloth pad at a session",
      },
      {
        label: "Health camp · [date]",
        src: null as string | null,
        alt: "Health camp",
      },
    ] as const,
  },
  instagram: {
    handle: "@wingsofhope.india",
    href: "https://www.instagram.com/wingsofhope.india/",
    body: "Follow every drive as it happens, in photos and reels.",
    cta: "Follow on Instagram",
  },
} as const;

export const WINGS_OF_HOPE_LEARN = {
  eyebrow: "Learn With Us",
  title: "Short Videos From Our Workshops",
  body: "Free to watch, and to share with a daughter, a student or a friend.",
  videos: [
    {
      title: "Using a Reusable Cloth Pad",
      body: "Folding, fitting, how often to change.",
      src: "/images/causes/woh-learn-cloth-pad.mp4",
      poster: "/images/causes/woh-learn-cloth-pad-poster.jpg",
    },
    {
      title: "Washing and Drying It Safely",
      body: "Why sunlight matters, what to avoid.",
      src: "/images/causes/woh-learn-washing.mp4",
      poster: "/images/causes/woh-learn-washing-poster.jpg",
    },
    {
      title: "Talking to Your Daughter",
      body: "For parents, before her first period.",
      src: "/images/causes/woh-learn-talking.mp4",
      poster: "/images/causes/woh-learn-talking-poster.jpg",
    },
  ] as const,
} as const;

export const WINGS_OF_HOPE_FAQS = {
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
        "Yes. Your gift goes directly to Joint Women's Programme through its own payment gateway. JWP issues your 80G receipt for eligible donations.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Every contribution goes directly to Joint Women's Programme, into its own bank account. Funds support menstrual health workshops, reusable pad kits, community sessions, and follow-up so girls keep attending school.",
    },
    {
      question: "Why reusable pads?",
      answer:
        "Reusable pads last for years, cost families less over time, and cut waste. Each kit comes with a simple demo on use and care so girls can manage periods with dignity and stay in class.",
    },
    {
      question: "Where does Wings of Hope work?",
      answer:
        "The programme runs through schools, local partners and community sessions, with a strong focus across Delhi NCR and partner regions where JWP already works with girls and families.",
    },
    {
      question: "Can I raise funds for Wings of Hope with my circle?",
      answer:
        "Yes. As a Cause Champion you can pool gifts with friends, family or colleagues and fund this live cause together. Every contribution still goes directly to JWP.",
    },
  ] as const,
} as const;

export const WINGS_OF_HOPE_CTA = {
  title: "Ready to Lead Your Circle?",
  body: "Become a Cause Champion for Wings of Hope, bring your circle together, and help keep girls in school.",
  primary: {
    label: "Be a Cause Champion",
    href: "/become-a-cause-champion/",
  },
  secondary: {
    label: "Donate Instead",
    href: "#support",
  },
} as const;

export const WINGS_OF_HOPE_EXPLORE = {
  eyebrow: "More Live Causes",
  title: "Keep Exploring",
  body: "Other verified campaigns your circle can champion next.",
  causes: [
    {
      id: "pehli-class",
      title: "PehliClass",
      meta: "Education · By JWP",
      photoLabel: "PehliClass photo",
    },
    {
      id: "pawsitive-protectors",
      title: "Pawsitive Protectors",
      meta: "Animal Welfare · By Animal Care",
      photoLabel: "Pawsitive Protectors photo",
    },
    {
      id: "community-forest-governance",
      title: "Forest Governance",
      meta: "Forest Rights · By ICFG",
      photoLabel: "Forest Governance photo",
    },
  ] as const,
} as const;

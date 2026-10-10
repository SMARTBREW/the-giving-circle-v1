import {
  GUARDIANS_OF_THE_GREEN_ABOUT,
  GUARDIANS_OF_THE_GREEN_CTA,
  GUARDIANS_OF_THE_GREEN_EXPLORE,
  GUARDIANS_OF_THE_GREEN_FAQS,
  GUARDIANS_OF_THE_GREEN_HERO,
  GUARDIANS_OF_THE_GREEN_HOW,
  GUARDIANS_OF_THE_GREEN_IMPACT,
  GUARDIANS_OF_THE_GREEN_LEARN,
  GUARDIANS_OF_THE_GREEN_SUPPORT,
  GUARDIANS_OF_THE_GREEN_THEORY,
  GUARDIANS_OF_THE_GREEN_VETTING,
  GUARDIANS_OF_THE_GREEN_VOICES,
} from "./guardians-of-the-green";
import {
  WINGS_OF_HOPE_ABOUT,
  WINGS_OF_HOPE_CTA,
  WINGS_OF_HOPE_EXPLORE,
  WINGS_OF_HOPE_FAQS,
  WINGS_OF_HOPE_HERO,
  WINGS_OF_HOPE_HOW,
  WINGS_OF_HOPE_IMPACT,
  WINGS_OF_HOPE_LEARN,
  WINGS_OF_HOPE_SUPPORT,
  WINGS_OF_HOPE_THEORY,
  WINGS_OF_HOPE_VETTING,
  WINGS_OF_HOPE_VOICES,
} from "./wings-of-hope";
import { LIVE_CAUSES, type LiveCause } from "./causes";

export type CausePageHeroContent = {
  category: string;
  title: string;
  orgLine: string;
  orgName: string;
  tagline: string;
  pitch: string;
  vetting: {
    title: string;
    body: string;
    ctaLabel: string;
    href: string;
  };
  chips: readonly string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  instagram: { handle: string; href: string; label: string };
  campaignLogo: { src: string | null };
  media: { src: string | null; alt: string; caption: string };
  stickyDonate: { label: string; href: string };
};

export type CausePageAboutContent = {
  eyebrow: string;
  title: string;
  body: string;
  cards: readonly {
    label: string;
    title: string;
    body: string;
  }[];
};

export type CausePageTheoryContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  body: string;
  steps: readonly {
    label: string;
    title: string;
    body: string;
    outcome: boolean;
  }[];
  footer: string;
};

export type CausePageHowContent = {
  eyebrow: string;
  title: string;
  body: string;
  cards: readonly {
    title: string;
    body: string;
    src: string | null;
    alt: string;
  }[];
};

export type CausePageVoicesContent = {
  eyebrow: string;
  title: string;
  body: string;
  footer: string;
  /** Video card CTA; defaults to “Watch her story” in the shared template. */
  videoCtaLabel?: string;
  items: readonly {
    role: string;
    roleTone:
      | "student"
      | "studentVideo"
      | "parent"
      | "teacher"
      | "counsellor"
      | "facilitator";
    variant: "quote" | "video";
    quote: string;
    name: string;
    detail: string;
    photoSrc: string | null;
    photoAlt: string;
    videoHref: string | null;
  }[];
};

export type CausePageSupportIcon = "pads" | "care" | "workshops" | "sprout" | "shield";

export type CausePageSupportContent = {
  eyebrow: string;
  impactSuffix: string;
  amounts: readonly { amount: number; label: string }[];
  donateHref: string;
  benefits: readonly {
    icon: CausePageSupportIcon;
    title: string;
    body: string;
  }[];
  footer: string;
};

export type CausePageVettingContent = {
  eyebrow: string;
  title: string;
  body: string;
  lastReviewed: string;
  checks: readonly { title: string; body: string }[];
  documents: readonly {
    badge: string;
    title: string;
    number: string;
    note: string;
    href: string;
  }[];
  goodToKnow: string;
};

export type CausePageImpactContent = {
  founder: {
    eyebrow: string;
    initials: string;
    portraitLabel: string;
    quote: string;
    name: string;
    role: string;
    photoSrc: string | null;
    photoAlt: string;
    social: readonly {
      label: string;
      handle: string;
      href: string;
    }[];
  };
  eyebrow: string;
  title: string;
  body: string;
  stats: readonly { value: string; label: string; confirm: boolean }[];
  gallery: {
    featured: {
      label: string;
      src: string | null;
      alt: string;
      featured: boolean;
    };
    items: readonly {
      label: string;
      src: string | null;
      alt: string;
    }[];
  };
  instagram: {
    handle: string;
    href: string;
    body: string;
    cta: string;
    logoSrc: string | null;
  };
};

export type CausePageLearnContent = {
  eyebrow: string;
  title: string;
  body: string;
  videos: readonly {
    title: string;
    body: string;
    src: string | null;
    poster: string | null;
  }[];
};

export type CausePageFaqsContent = {
  eyebrow: string;
  title: string;
  body: string;
  items: readonly { question: string; answer: string }[];
};

export type CausePageCtaContent = {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export type CausePageExploreContent = {
  eyebrow: string;
  title: string;
  body: string;
  causes: readonly {
    id: string;
    title: string;
    meta: string;
    photoLabel: string;
  }[];
};

/** Full cause detail page — same section order for every live cause. */
export type CausePageContent = {
  hero: CausePageHeroContent;
  about: CausePageAboutContent;
  theory: CausePageTheoryContent;
  how: CausePageHowContent;
  voices: CausePageVoicesContent;
  support: CausePageSupportContent;
  vetting: CausePageVettingContent;
  impact: CausePageImpactContent;
  learn: CausePageLearnContent;
  faqs: CausePageFaqsContent;
  cta: CausePageCtaContent;
  explore: CausePageExploreContent;
};

const ORG_NAME: Record<string, string> = {
  JWP: "Joint Women's Programme",
  ICFG: "Institute of Community Forest Governance",
  "Animal Care": "Animal Care",
};

function orgFullName(org: string) {
  return ORG_NAME[org] ?? org;
}

function exploreFor(causeId: string): CausePageExploreContent["causes"] {
  return LIVE_CAUSES.filter((item) => item.id !== causeId)
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      title: item.cardTitle,
      meta: `${item.category} · By ${item.org}`,
      photoLabel: `${item.cardTitle} photo`,
    }));
}

/** Placeholder page content until campaign copy and media are supplied. */
export function buildCausePageDraft(cause: LiveCause): CausePageContent {
  const name = cause.cardTitle;
  const orgName = orgFullName(cause.org);
  const pitch = cause.cardDescription;
  const aboutBody = cause.about[0] ?? pitch;
  const supportItems = cause.whatYourSupportDoes.slice(0, 3);
  const faqItems =
    cause.faqs.length > 0
      ? cause.faqs
      : [
          {
            question: 'What does "vetted by The Giving Circle" mean?',
            answer: `[Details on how we vetted ${orgName}. To be confirmed.]`,
          },
          {
            question: "Will I get an 80G receipt?",
            answer: `[Confirm 80G process for ${orgName}.]`,
          },
          {
            question: "Where does my donation go?",
            answer: `Every contribution goes directly to ${orgName}. [Programme detail to be confirmed.]`,
          },
        ];

  return {
    hero: {
      category: cause.category,
      title: name,
      orgLine: "A campaign by",
      orgName,
      tagline: "[Campaign tagline — to be confirmed]",
      pitch,
      vetting: {
        title: "Verified NGO Partner.",
        body: "Vetted by The Giving Circle team: documents, office visit and leadership.",
        ctaLabel: "See what we checked",
        href: "#vetting",
      },
      chips: [
        cause.trustBadges[0] ?? "Tax Benefits · 80G",
        cause.trustBadges[1] ?? "Verified NGO Partner",
        cause.supporters,
      ],
      primaryCta: {
        label: `Donate to ${name}`,
        href: "#support",
      },
      secondaryCta: {
        label: "Be a Cause Champion",
        href: "/become-a-cause-champion/",
      },
      instagram: {
        handle: "[@campaign.handle]",
        href: "#",
        label: "Follow the campaign",
      },
      campaignLogo: { src: null },
      media: {
        src: cause.src,
        alt: cause.alt,
        caption: `From a ${name} drive`,
      },
      stickyDonate: {
        label: `Donate to ${name}`,
        href: "#support",
      },
    },
    about: {
      eyebrow: "About This Cause",
      title: cause.aboutHeading || `About ${name}`,
      body: aboutBody,
      cards: [
        {
          label: "Need",
          title: "[Barrier one]",
          body: "[Short description of the first barrier this cause addresses.]",
        },
        {
          label: "Response",
          title: "[What we do]",
          body: "[How this programme responds on the ground.]",
        },
        {
          label: "Community",
          title: "[Who is reached]",
          body: `[Who ${name} serves — to be confirmed.]`,
        },
        {
          label: "Outcome",
          title: "[What changes]",
          body: "[The change supporters help make possible.]",
        },
      ],
    },
    theory: {
      eyebrow: "Our Theory of Change",
      titleLine1: "Remove the Barriers.",
      titleLine2: "Create Lasting Change.",
      body: `[How ${name} works, step by step. Copy to be confirmed.]`,
      steps: [
        {
          label: "When We Provide",
          title: "[Input one]",
          body: "[What supporters fund first.]",
          outcome: false,
        },
        {
          label: "And Support With",
          title: "[Input two]",
          body: "[Second programme pillar.]",
          outcome: false,
        },
        {
          label: "And Bring Together",
          title: "[Community]",
          body: "[Who around the beneficiary is involved.]",
          outcome: false,
        },
        {
          label: "Then",
          title: "[Desired outcome]",
          body: "[The lasting change this cause aims for.]",
          outcome: true,
        },
      ],
      footer: "[How we know it's working — metric or update cadence to confirm.]",
    },
    how: {
      eyebrow: "How This Cause Works",
      title: "How Your Circle Helps",
      body: `Three ways ${name} turns support into work on the ground.`,
      cards: (supportItems.length > 0
        ? supportItems
        : [
            "Fund programme delivery with the verified NGO partner",
            "Support community sessions and follow-up",
            "Share updates with every circle",
          ]
      )
        .slice(0, 3)
        .map((line, index) => ({
          title: ["Programme", "Community", "Follow-up"][index] ?? "Step",
          body: line,
          src: null,
          alt: `${name} photo slot ${index + 1}`,
        })),
    },
    voices: {
      eyebrow: "In Their Own Words",
      title: "Voices From This Cause",
      body: "People describing the change they have seen.",
      footer: "Voices · more added as updates arrive",
      items: [
        {
          role: "Partner",
          roleTone: "counsellor",
          variant: "quote",
          quote: "[Quote from a programme lead or counsellor.]",
          name: "[Name]",
          detail: orgName,
          photoSrc: null,
          photoAlt: "Partner portrait",
          videoHref: null,
        },
        {
          role: "Community",
          roleTone: "facilitator",
          variant: "quote",
          quote: "[Quote from a facilitator or community worker.]",
          name: "[Name]",
          detail: `Facilitator · ${name}`,
          photoSrc: null,
          photoAlt: "Facilitator portrait",
          videoHref: null,
        },
        {
          role: "Beneficiary · Video",
          roleTone: "studentVideo",
          variant: "video",
          quote: "[Short clip in their own words, with consent.]",
          name: "[First name only]",
          detail: "[Role · place]",
          photoSrc: null,
          photoAlt: "Portrait",
          videoHref: "#",
        },
        {
          role: "Family",
          roleTone: "parent",
          variant: "quote",
          quote: "[What changed at home.]",
          name: "[First name only]",
          detail: "Family · [Town]",
          photoSrc: null,
          photoAlt: "Family portrait",
          videoHref: null,
        },
        {
          role: "Teacher",
          roleTone: "teacher",
          variant: "quote",
          quote: "[What they see on the ground.]",
          name: "[Name]",
          detail: "Teacher · [place]",
          photoSrc: null,
          photoAlt: "Teacher portrait",
          videoHref: null,
        },
        {
          role: "Beneficiary",
          roleTone: "student",
          variant: "quote",
          quote: cause.quote?.text
            ? cause.quote.text
            : "[In their own words: what changed.]",
          name: cause.quote?.author ?? "[First name only]",
          detail: cause.quote?.role ?? "[Role · place]",
          photoSrc: null,
          photoAlt: "Portrait",
          videoHref: null,
        },
      ],
    },
    support: {
      eyebrow: "What Your Support Funds",
      impactSuffix: `helps ${name} keep moving.`,
      amounts: [
        { amount: 1500, label: "Starter gift" },
        { amount: 4500, label: "Circle gift" },
        { amount: 15000, label: "Drive gift" },
      ],
      donateHref:
        cause.id === "community-forest-governance"
          ? "https://give.icfgindia.org/donate/raise-guardians-of-th-ublrmceg?source=TGC"
          : "#",
      benefits: [
        {
          icon: "pads",
          title: supportItems[0] ? "Direct programme support" : "Kits & materials",
          body:
            supportItems[0] ??
            "[What this amount helps fund — to be confirmed.]",
        },
        {
          icon: "care",
          title: "Care & accompaniment",
          body:
            supportItems[1] ??
            "[Counselling, follow-up or care — to be confirmed.]",
        },
        {
          icon: "workshops",
          title: "Sessions & outreach",
          body:
            supportItems[2] ??
            "[Workshops or community sessions — to be confirmed.]",
        },
      ],
      footer: `Every contribution goes directly to ${orgName}, through its own payment gateway and into its own bank account. ${cause.org} sends your 80G receipt where eligible.`,
    },
    vetting: {
      eyebrow: "Verified Partner",
      title: "Vetted by The Giving Circle",
      body: `Before this cause went live, our team checked ${orgName} the same way we check every partner: documents, a real office visit, and a conversation with the people who run it.`,
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
          body: "[place, date] — so the programme matches what is promised.",
        },
        {
          title: "Written commitment to share updates",
          body: "Progress notes and photos after every drive.",
        },
      ],
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
      ],
      goodToKnow: `This is not a financial audit. It is our confirmation that ${orgName} is a real, registered organisation, that we have met the people behind it, and that the documents they share with donors check out.`,
    },
    impact: {
      founder: {
        eyebrow: "Meet the Founder",
        initials: orgName
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map((part) => part[0]?.toUpperCase() ?? "")
          .join(""),
        portraitLabel: `Portrait from ${cause.org}`,
        quote: `[A short quote from leadership on why ${orgName} runs this work. Partner to supply.]`,
        name: "[Founder / Director name]",
        role: `Leadership, ${orgName}`,
        photoSrc: null,
        photoAlt: `Leadership portrait, ${orgName}`,
        social: [],
      },
      eyebrow: "Impact So Far",
      title: "Real Drives. Real Change.",
      body: "Updates from the field, shared with every circle.",
      stats: cause.impact.slice(0, 4).map((stat) => ({
        value: stat.value,
        label: stat.label.toLowerCase(),
        confirm: false,
      })),
      gallery: {
        featured: {
          label: "Latest drive",
          src: null,
          alt: `${name} featured photo`,
          featured: true,
        },
        items: [
          { label: "Field update", src: null, alt: "Field update" },
          { label: "Workshop", src: null, alt: "Workshop" },
          { label: "Community", src: null, alt: "Community" },
          { label: "Follow-up", src: null, alt: "Follow-up" },
        ],
      },
      instagram: {
        handle: "[@campaign.handle]",
        href: "#",
        body: "Follow every drive as it happens, in photos and reels.",
        cta: "Follow on Instagram",
        logoSrc: null,
      },
    },
    learn: {
      eyebrow: "Learn With Us",
      title: "Short Videos From The Field",
      body: "Free to watch, and to share with your circle.",
      videos: [
        {
          title: "[Video title one]",
          body: "[One-line description.]",
          src: null,
          poster: null,
        },
        {
          title: "[Video title two]",
          body: "[One-line description.]",
          src: null,
          poster: null,
        },
        {
          title: "[Video title three]",
          body: "[One-line description.]",
          src: null,
          poster: null,
        },
      ],
    },
    faqs: {
      eyebrow: "Questions About This Cause",
      title: "Frequently Asked Questions",
      body: "Clarity on where your gift goes, how the programme works, and how your circle can champion it.",
      items: faqItems,
    },
    cta: {
      title: "Ready to Lead Your Circle?",
      body: `Become a Cause Champion for ${name}, bring your circle together, and help this work grow.`,
      primary: {
        label: "Be a Cause Champion",
        href: "/become-a-cause-champion/",
      },
      secondary: {
        label: "Donate Instead",
        href: "#support",
      },
    },
    explore: {
      eyebrow: "More Live Causes",
      title: "Keep Exploring",
      body: "Other verified campaigns your circle can champion next.",
      causes: exploreFor(cause.id),
    },
  };
}

const WINGS_PAGE: CausePageContent = {
  hero: {
    ...WINGS_OF_HOPE_HERO,
    campaignLogo: { src: WINGS_OF_HOPE_HERO.campaignLogo.src },
    media: { ...WINGS_OF_HOPE_HERO.media },
  },
  about: WINGS_OF_HOPE_ABOUT,
  theory: WINGS_OF_HOPE_THEORY,
  how: WINGS_OF_HOPE_HOW,
  voices: WINGS_OF_HOPE_VOICES,
  support: WINGS_OF_HOPE_SUPPORT,
  vetting: WINGS_OF_HOPE_VETTING,
  impact: {
    ...WINGS_OF_HOPE_IMPACT,
    instagram: {
      ...WINGS_OF_HOPE_IMPACT.instagram,
      logoSrc: "/images/causes/woh-logo-roundel.jpg",
    },
  },
  learn: WINGS_OF_HOPE_LEARN,
  faqs: WINGS_OF_HOPE_FAQS,
  cta: WINGS_OF_HOPE_CTA,
  explore: WINGS_OF_HOPE_EXPLORE,
};

const GUARDIANS_PAGE: CausePageContent = {
  hero: GUARDIANS_OF_THE_GREEN_HERO,
  about: GUARDIANS_OF_THE_GREEN_ABOUT,
  theory: GUARDIANS_OF_THE_GREEN_THEORY,
  how: GUARDIANS_OF_THE_GREEN_HOW,
  voices: GUARDIANS_OF_THE_GREEN_VOICES,
  support: GUARDIANS_OF_THE_GREEN_SUPPORT,
  vetting: GUARDIANS_OF_THE_GREEN_VETTING,
  impact: GUARDIANS_OF_THE_GREEN_IMPACT,
  learn: GUARDIANS_OF_THE_GREEN_LEARN,
  faqs: GUARDIANS_OF_THE_GREEN_FAQS,
  cta: GUARDIANS_OF_THE_GREEN_CTA,
  explore: GUARDIANS_OF_THE_GREEN_EXPLORE,
};

const CAUSE_PAGE_OVERRIDES: Partial<Record<string, CausePageContent>> = {
  "wings-of-hope": WINGS_PAGE,
  "community-forest-governance": GUARDIANS_PAGE,
};

export function getCausePageContent(causeId: string): CausePageContent | undefined {
  const override = CAUSE_PAGE_OVERRIDES[causeId];
  if (override) return override;

  const cause = LIVE_CAUSES.find((item) => item.id === causeId);
  if (!cause) return undefined;
  return buildCausePageDraft(cause);
}

export const CHAMPION_PAGE_HERO = {
  eyebrow: "Cause Champion.",
  titleLine1: "Turn Your Circle",
  titleLine2Before: "Into ",
  titleAccent: "Impact.",
  subtitle:
    "Become a Cause Champion for a verified cause you care about, and inspire your circle to support meaningful change.",
  primaryCta: { label: "Start Your Giving Circle", href: "/champion/apply" },
  secondaryCta: { label: "Explore Causes", href: "/#causes" },
  src: "/images/champions/tanya-with-ellanora.jpeg",
  alt: "Tanya with Ellanora",
  stats: [
    { value: "1000+", label: "Cause Champions" },
    { value: "80,000+", label: "Lives Impacted" },
    { value: "₹300L+", label: "Funds Mobilised" },
  ],
} as const;

export const CHAMPION_HOW_IT_WORKS = {
  eyebrow: "How It Works",
  title: "From Champions to Impact",
  arrowSrc: "/images/champions/how-it-works-arrow.png",
  steps: [
    {
      iconSrc: "/images/champions/find-cause-v2.png",
      title: "1. Find a Cause",
      body: "Explore the causes that matter to you and choose where you’d like your circle to make a difference.",
    },
    {
      iconSrc: "/images/champions/become-champion-v2.png",
      title: "2. Become a Champion",
      body: "Tell us you’d like to champion it. Our team helps set up your personalised fundraiser, goal and campaign link.",
    },
    {
      iconSrc: "/images/champions/rally-circle-v2.png",
      title: "3. Rally Your Circle",
      body: "Share your Giving Circle with your network, build support, and follow the impact you help create.",
    },
  ],
} as const;

export const CHAMPION_CAMPAIGNS = {
  eyebrow: "Featured Campaigns",
  title: "Causes You Can Champion",
  subtitle: "Explore verified campaigns and find one that speaks to you.",
  ctaLabel: "View All Live Causes",
  href: "/causes",
} as const;
export const CHAMPION_TRUST = {
  eyebrow: "Built on Trust",
  title: "Champion with Confidence",
  subtitle:
    "Everything you need to support a cause with clarity, confidence, and the right guidance at every step.",
  features: [
    {
      title: "Verified NGO Partners",
      body: "Every partner organisation is verified before listing, so you can confidently champion genuine causes now.",
      iconSrc: "/images/champions/trust-ngo-partners.png",
    },
    {
      title: "Trusted Campaigns",
      body: "Each campaign is listed with a verified NGO, so you can confidently put your name behind this cause today.",
      iconSrc: "/images/champions/trust-campaigns.png",
    },
    {
      title: "Direct Donations",
      body: "Donations go directly to the partner NGO through its own payment gateway and registered bank account only.",
      iconSrc: "/images/champions/trust-donations.png",
    },
    {
      title: "80G Receipts",
      body: "Eligible donors receive their 80G tax receipt directly from the respective partner NGO for every donation.",
      iconSrc: "/images/champions/trust-80g-receipts.png",
    },
    {
      title: "Transparent Updates",
      body: "Stay informed with campaign progress, donation updates, and stories showing the impact your circle create.",
      iconSrc: "/images/champions/trust-updates.png",
    },
    {
      title: "Dedicated Support",
      body: "Get guidance, campaign materials, updates, and ongoing support throughout your Cause Champion journey.",
      iconSrc: "/images/champions/trust-support.png",
    },
  ],
} as const;

export const CHAMPION_VOICES = {
  eyebrow: "Champion Voices",
  title: "What Our Champions Say",
  subtitle:
    "Real experiences from people who used their networks to support causes they care about.",
  quoteSrc: "/images/champions/quote.png",
  testimonials: [
    {
      quote:
        "I joined Wings of Hope because no girl should lose her education to something as ordinary as a period. Every girl deserves to finish school, build a career, earn her own income, and be heard as an equal.",
      name: "Shivi",
      role: "Cause Champion - Wings of Hope",
      imageSrc: "/images/champions/wings-of-hope-hygiene-kits.png",
      imageAlt:
        "Schoolgirls holding hygiene kits at a Wings of Hope health and hygiene session",
      avatarSrc: "/images/champions/shivi.png",
      avatarAlt: "Shivi",
    },
    {
      quote: "My Circle’s Support Gave Rescued Animals a Second Chance",
      name: "Tanya",
      role: "Cause Champion",
      imageSrc: "/images/champions/tanya-with-ellanora.jpeg",
      imageAlt: "Tanya with Ellanora",
      avatarSrc: "/images/champions/tanya-with-ellanora.jpeg",
      avatarAlt: "Tanya",
    },
    {
      quote: "In a Crisis, My Circle Chose to Show Up.",
      name: "Dhaval Patel",
      role: "Cause Champion",
      imageSrc: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
      imageAlt: "Flood relief volunteers helping families after a disaster",
      avatarSrc: "/images/testmi/f846f5578286c4f1943dd07a272ad57a92cd1b3a.png",
      avatarAlt: "Dhaval Patel",
    },
    {
      quote: "Together, We Helped Put Meals on Their Plates",
      name: "Saloni Joshi",
      role: "Cause Champion",
      imageSrc: "/images/causes/353777ccdbf9acbedc2cfa91e44db8b6ebe0d296.png",
      imageAlt: "A volunteer serving meals to children",
      avatarSrc: "/images/testmi/953105c0d2ea2d9d1703198bae02e59fa2c87e63.png",
      avatarAlt: "Saloni Joshi",
    },
    {
      quote: "I Realised My Network Could Do More Than I Imagined.",
      name: "Riya Sharma",
      role: "Cause Champion",
      imageSrc: "/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png",
      imageAlt: "A Cause Champion reading with schoolchildren",
      avatarSrc: "/images/cause-champion-hero.png",
      avatarAlt: "Riya Sharma",
    },
  ],
} as const;

export type ChampionTestimonial = (typeof CHAMPION_VOICES.testimonials)[number];

export const CHAMPION_MEET = {
  eyebrow: "Meet the Champions",
  title: "Turning Influence Into Impact",
  subtitle:
    "People from different walks of life are bringing their networks together to support meaningful causes.",
  ctaLabel: "Become a Cause Champion",
  href: "/champion/apply",
  people: [
    {
      name: "Shivi",
      role: "Cause Champion",
      src: "/images/champions/shivi.png",
      alt: "Shivi, Cause Champion",
    },
    {
      name: "Tanya with Ellanora",
      role: "Cause Champion",
      src: "/images/champions/tanya-with-ellanora.jpeg",
      alt: "Tanya with Ellanora",
    },
    {
      name: "Myra Gulati",
      role: "Content Creator",
      src: "/images/testmi/953105c0d2ea2d9d1703198bae02e59fa2c87e63.png",
      alt: "Myra Gulati, Cause Champion and content creator",
    },
    {
      name: "Samarth Pal",
      role: "Social Worker",
      src: "/images/testmi/f846f5578286c4f1943dd07a272ad57a92cd1b3a.png",
      alt: "Samarth Pal, Cause Champion and social worker",
    },
  ],
} as const;

export const CHAMPION_CTA = {
  src: "/images/champions/champion-cta-desktop.png",
  mobileSrc: "/images/champions/champion-cta-mobile.png",
  alt: "Cause Champions collaborating with community members",
  title: "Ready to Turn Your Circle Into Impact?",
  subtitle:
    "Bring your circle together around a cause you believe in, and turn shared support into meaningful change.",
  ctaLabel: "Become a Cause Champion",
  href: "/champion/apply",
} as const;

export const CHAMPION_APPLY = {
  title: "Champion a Cause",
  mobileTitle: "Become a Cause Champion",
  subtitle:
    "Choose a cause and bring your circle together to create meaningful impact.",
  steps: [
    {
      number: 1,
      title: "Choose A Cause",
      description: "Select the cause you want to support.",
    },
    {
      number: 2,
      title: "Reason for Support",
      description: "Choose what brings you to this cause.",
    },
    {
      number: 3,
      title: "Personal Details",
      description: "Add your basic contact information.",
    },
  ],
  step1: {
    progressLabel: "Step 1 of 3",
    question: "Which cause would you like to champion?",
    questionLine1: "Which cause would you like to",
    questionLine2: "champion?",
    nextLabel: "Next",
    otherPlaceholder: "Tell us about the cause you care about",
    causes: [
      {
        id: "education",
        label: "Education",
        iconSrc: "/images/forms/education.png",
      },
      {
        id: "animal-welfare",
        label: "Animal Welfare",
        iconSrc: "/images/forms/animal-welfare.png",
      },
      {
        id: "womens-health",
        label: "Women’s Health",
        iconSrc: "/images/forms/womens-health.png",
      },
      {
        id: "forest-governance",
        label: "Forest Rights",
        iconSrc: "/images/forms/forest-governance.svg",
      },
      {
        id: "other",
        label: "Other Cause",
        iconSrc: "/images/forms/other-cause.png",
      },
    ],
  },
  step2: {
    progressLabel: "Step 2 of 3",
    question: "What’s inspiring you to support this cause?",
    previousLabel: "Previous",
    nextLabel: "Next",
    otherPlaceholder: "Tell us a little more about your reason",
    reasons: [
      {
        id: "birthday",
        label: "Birthday",
        iconSrc: "/images/moments/birthday-v3.png",
      },
      {
        id: "anniversary",
        label: "Anniversary",
        iconSrc: "/images/moments/anniversary-v3.png",
      },
      {
        id: "remembrance",
        label: "Remembrance",
        iconSrc: "/images/moments/remembrance-v3.png",
      },
      {
        id: "other-occasion",
        label: "Other Occasion",
        iconSrc: "/images/forms/other-occasion.png",
      },
    ],
  },
  step3: {
    progressLabel: "Step 3 of 3",
    title: "Personal Details",
    subtitle: "Share your details so our team can help you get started.",
    previousLabel: "Previous",
    submitLabel: "Submit",
    agreeLabel:
      "I agree to receive updates from The Giving Circle about becoming a Cause Champion.",
    fields: {
      fullName: { label: "Full Name", placeholder: "John Doe", required: true },
      mobile: {
        label: "Mobile Number",
        placeholder: "98211 14112",
        required: true,
      },
      email: {
        label: "Email Address",
        placeholder: "john.doe@abc.com",
        required: true,
      },
      city: { label: "City", placeholder: "Mumbai", required: true },
    },
    cities: [
      "Mumbai",
      "Delhi",
      "Bengaluru",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Gurugram",
      "Noida",
      "Other",
    ],
  },
  thanks: {
    title: "Thank You!",
    eyebrow: "You’ve taken the first step to create change.",
    body: "Our team will connect with you shortly with relevant NGOs and campaigns based on your preferences.",
    inviteLabel: "Your Invite Link",
    inviteHint:
      "Share this link with friends, family or colleagues interested in becoming a Cause Champion.",
    inviteUrl: "thegivingcircle.in/ref/TGC84721",
    copyLabel: "Copy Link",
    homeLabel: "Back to Homepage",
    homeHref: "/",
  },
} as const;

export type ChampionApplyCauseId =
  (typeof CHAMPION_APPLY.step1.causes)[number]["id"];
export type ChampionApplyReasonId =
  (typeof CHAMPION_APPLY.step2.reasons)[number]["id"];

/** Occasion CTAs (Birthday / Anniversary / Remembrance) skip the reason step. */
export const CHAMPION_APPLY_PRESET_REASONS = [
  "birthday",
  "anniversary",
  "remembrance",
] as const satisfies readonly ChampionApplyReasonId[];

export type ChampionApplyPresetReason =
  (typeof CHAMPION_APPLY_PRESET_REASONS)[number];

export function isChampionApplyPresetReason(
  value: string | null | undefined,
): value is ChampionApplyPresetReason {
  return (
    !!value &&
    (CHAMPION_APPLY_PRESET_REASONS as readonly string[]).includes(value)
  );
}

export const VOLUNTEER_PAGE_HERO = {
  eyebrow: "Volunteer With Us.",
  titleLine1: "Show Up for",
  titleLine2Before: "Causes That ",
  titleAccent: "Matter.",
  subtitle:
    "Give your time, skills, and energy to verified causes. Walk with communities, support NGO partners, and help our circle create change on the ground.",
  primaryCta: { label: "Become a Volunteer", href: "/#contact" },
  secondaryCta: { label: "Explore Causes", href: "/causes" },
  src: "/images/cause-champion-hero.png",
  alt: "A volunteer smiling with children from our circle",
  stats: [
    { value: "7+", label: "Live Causes" },
    { value: "80,000+", label: "Lives Impacted" },
    { value: "₹300L+", label: "Funds Mobilised" },
  ],
} as const;

export const VOLUNTEER_TRUST = {
  eyebrow: "Why Volunteer Here",
  title: "Show Up with Confidence",
  subtitle:
    "Verified partners, clear roles, and support so your time creates real impact on the ground.",
  features: [
    {
      title: "Verified NGO Partners",
      body: "Every organisation you support is verified before listing, so your time goes toward genuine programmes.",
      iconSrc: "/images/champions/trust-ngo-partners.png",
    },
    {
      title: "Clear Roles",
      body: "We match your skills and availability with roles partners can host safely and meaningfully.",
      iconSrc: "/images/champions/trust-campaigns.png",
    },
    {
      title: "Dedicated Support",
      body: "Our team stays with you   from first conversation to your first day with a partner NGO.",
      iconSrc: "/images/champions/trust-support.png",
    },
  ],
} as const;

export const VOLUNTEER_HOW_IT_WORKS = {
  eyebrow: "How It Works",
  title: "From Interest to Impact",
  arrowSrc: "/images/champions/how-it-works-arrow.png",
  steps: [
    {
      iconSrc: "/images/champions/find-cause.svg",
      title: "1. Choose a Cause",
      body: "Explore verified causes across education, women’s health, animal welfare, and disaster relief   and pick where you want to show up.",
    },
    {
      iconSrc: "/images/champions/become-champion.svg",
      title: "2. Tell Us You’re Ready",
      body: "Share your skills, availability, and city. Our team matches you with a verified NGO partner and a clear way to help.",
    },
    {
      iconSrc: "/images/champions/rally-circle.svg",
      title: "3. Volunteer On the Ground",
      body: "Join workshops, feeding drives, classroom support, or relief work   and see the impact of showing up together.",
    },
  ],
} as const;

export const VOLUNTEER_MEET = {
  eyebrow: "Meet the Volunteers",
  title: "People Who Show Up for the Circle",
  subtitle:
    "Teachers, doctors, students, and professionals lending time and heart to verified causes across India.",
  ctaLabel: "Become a Volunteer",
  href: "/#contact",
} as const;

export const VOLUNTEER_CTA = {
  src: "/images/champions/volunteer-cta-desktop.png",
  mobileSrc: "/images/champions/champion-cta-mobile.png",
  alt: "Volunteers sharing and working together outdoors",
  title: "Ready to Give Your Time Where It Matters?",
  subtitle:
    "Tell us where you want to help. We’ll connect you with a verified partner and a clear place to start.",
  ctaLabel: "Become a Volunteer",
  href: "/#contact",
} as const;

export const PARTNER_APPLY = {
  title: "Partner as an NGO",
  mobileTitle: "Partner as an NGO",
  subtitle:
    "Join our verified partner circle and connect with Cause Champions who care about your work.",
  steps: [
    {
      number: 1,
      title: "Focus Areas",
      description: "Tell us where your NGO creates impact.",
    },
    {
      number: 2,
      title: "Contact Details",
      description: "Share your organisation details.",
    },
  ],
  step1: {
    progressLabel: "Step 1 of 2",
    questionLine1: "Which areas does your NGO",
    questionLine2: "work in?",
    nextLabel: "Next",
    otherPlaceholder: "Tell us about the focus of your work",
    focuses: [
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
    progressLabel: "Step 2 of 2",
    title: "Contact Details",
    subtitle:
      "Share your organisation and who we should speak with about partner registration.",
    previousLabel: "Previous",
    submitLabel: "Start Partner Registration",
    agreeLabel:
      "I agree to receive updates from The Giving Circle about NGO partnership and verified causes.",
    fields: {
      organizationName: {
        label: "Organization Name",
        placeholder: "Your NGO’s registered name",
        required: true,
      },
      country: {
        label: "Where you live",
        placeholder: "India",
        required: true,
      },
      contactPerson: {
        label: "Your full name",
        placeholder: "Full name",
        required: true,
      },
      email: {
        label: "Your personal email",
        placeholder: "hello@yourngo.org",
        required: true,
      },
      phone: {
        label: "Your contact number",
        placeholder: "98103 53603",
        required: true,
      },
    },
    countries: [
      "India",
      "Nepal",
      "Bangladesh",
      "Sri Lanka",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Other",
    ],
  },
  thanks: {
    title: "Thank You!",
    eyebrow: "You’ve taken the first step to partner with us.",
    body: "Our partnerships team will connect with you shortly to learn more about your programmes and verification next steps.",
    homeLabel: "Back to Homepage",
    homeHref: "/",
  },
} as const;

export type PartnerApplyFocusId =
  (typeof PARTNER_APPLY.step1.focuses)[number]["id"];

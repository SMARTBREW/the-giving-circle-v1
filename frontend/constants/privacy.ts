export const PRIVACY_PAGE = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  lastUpdated: "28 September 2026",
  /** Controller named in this policy — update if a separate registered entity is confirmed. */
  legalEntity: "The Giving Circle",
  siteUrl: "www.thegivingcircle.in",
} as const;

export type PrivacyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

export type PrivacySection = {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
};

export const PRIVACY_INTRO: PrivacyBlock[] = [
  {
    type: "p",
    text: "At The Giving Circle, we respect your privacy and are committed to handling personal data responsibly, transparently and in accordance with applicable law.",
  },
  {
    type: "p",
    text: `This Privacy Policy explains what personal data we collect, why we collect it, how we use and share it, how long we retain it, and the choices and rights available to you when you use ${PRIVACY_PAGE.siteUrl} and related services.`,
  },
];

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "about",
    title: "1. About This Privacy Policy",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy applies when you:",
      },
      {
        type: "ul",
        items: [
          "visit The Giving Circle website;",
          "make or attempt to make a donation;",
          "become a Cause Champion or participate in a Giving Circle;",
          "register for volunteer opportunities;",
          "submit campaign, profile or impact information;",
          "contact us, provide feedback or raise a grievance; or",
          "otherwise interact with The Giving Circle.",
        ],
      },
      {
        type: "p",
        text: "This Privacy Policy should be read together with our Terms of Use and any additional privacy notices shown when we collect personal data.",
      },
    ],
  },
  {
    id: "who-we-are",
    title: "2. Who We Are",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle is a social-impact and community-giving platform that connects individuals and communities with verified NGOs, social causes, fundraising campaigns and volunteer opportunities.",
      },
      {
        type: "p",
        text: `For the purposes of applicable data-protection law, ${PRIVACY_PAGE.legalEntity} is responsible for determining how personal data collected through The Giving Circle is processed, unless otherwise stated.`,
      },
    ],
  },
  {
    id: "who-applies",
    title: "3. Who This Policy Applies To",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy applies to website visitors, donors, Cause Champions, volunteers, NGO representatives, beneficiaries where relevant, and other individuals who interact with The Giving Circle.",
      },
    ],
  },
  {
    id: "what-we-collect",
    title: "4. What Personal Data Do We Collect?",
    blocks: [
      {
        type: "p",
        text: "Depending on how you use The Giving Circle, we may collect the following categories of personal data.",
      },
      { type: "h3", text: "Identity and Contact Information" },
      {
        type: "ul",
        items: [
          "name;",
          "email address;",
          "phone number;",
          "city or location information voluntarily provided by you; and",
          "other contact information you submit.",
        ],
      },
      { type: "h3", text: "Donation Information" },
      {
        type: "p",
        text: "When you make a donation, we may collect:",
      },
      {
        type: "ul",
        items: [
          "donor name;",
          "email address and phone number;",
          "donation amount;",
          "campaign or NGO supported;",
          "transaction reference and payment status; and",
          "information required for an eligible 80G receipt or donation acknowledgement.",
        ],
      },
      {
        type: "p",
        text: "Payment card, UPI, banking or other payment credentials may be processed directly by authorised payment service providers. The Giving Circle does not store complete card, UPI PIN or online-banking credentials where those credentials are handled directly by the payment provider.",
      },
      { type: "h3", text: "Cause Champion Information" },
      {
        type: "ul",
        items: [
          "name and contact information;",
          "profile information;",
          "campaign participation and activity;",
          "communication preferences; and",
          "content or materials submitted by you.",
        ],
      },
      { type: "h3", text: "Volunteer Information" },
      {
        type: "ul",
        items: [
          "name and contact details;",
          "availability;",
          "areas of interest;",
          "relevant skills or experience; and",
          "information required by the participating NGO for the relevant opportunity.",
        ],
      },
      { type: "h3", text: "Communications" },
      {
        type: "p",
        text: "We may collect information you provide when you contact support, submit a form, send us an email, provide feedback, raise a grievance or communicate with us through another channel.",
      },
      { type: "h3", text: "Technical and Usage Information" },
      {
        type: "ul",
        items: [
          "IP address;",
          "device and browser information;",
          "pages visited and referral source;",
          "approximate location derived from IP address;",
          "session and interaction information; and",
          "cookie or analytics identifiers.",
        ],
      },
    ],
  },
  {
    id: "how-we-collect",
    title: "5. How Do We Collect Personal Data?",
    blocks: [
      {
        type: "p",
        text: "We may collect personal data:",
      },
      {
        type: "ul",
        items: [
          "directly from you;",
          "when you submit forms or register for activities;",
          "when you donate;",
          "when you become a Cause Champion or volunteer;",
          "when you communicate with us;",
          "from participating NGOs where appropriate;",
          "through cookies and analytics technologies; and",
          "from authorised service providers involved in operating the platform.",
        ],
      },
    ],
  },
  {
    id: "other-people",
    title: "6. Information About Other People",
    blocks: [
      {
        type: "p",
        text: "If you provide personal data about another person, you should ensure that you have the appropriate authority or permission to provide that information and, where required, have informed that individual about how their information may be used.",
      },
      {
        type: "p",
        text: "This may apply, for example, to beneficiary stories, photographs, testimonials, volunteer referrals or campaign information submitted by Cause Champions or NGO representatives.",
      },
    ],
  },
  {
    id: "public-info",
    title: "7. Publicly Visible Information",
    blocks: [
      {
        type: "p",
        text: "Certain information that you choose to publish through The Giving Circle may be publicly accessible. This may include your name, profile information, Cause Champion details, campaign stories, photographs, videos, testimonials or campaign updates.",
      },
      {
        type: "p",
        text: "Public content may also appear in search-engine results or be shared through social-media platforms. Please avoid submitting personal or sensitive information that you do not want to make publicly available.",
      },
    ],
  },
  {
    id: "why-we-use",
    title: "8. Why Do We Use Your Personal Data?",
    blocks: [
      {
        type: "p",
        text: "We may use personal data to:",
      },
      {
        type: "ul",
        items: [
          "provide and operate The Giving Circle platform;",
          "enable donations and campaign participation;",
          "connect users with participating NGOs;",
          "facilitate volunteer opportunities;",
          "provide campaign and impact updates;",
          "issue or facilitate eligible donation documentation;",
          "respond to enquiries and support requests;",
          "send important service and transaction-related communications;",
          "prevent fraud, misuse and security incidents;",
          "improve website functionality and user experience;",
          "understand platform usage and performance;",
          "comply with legal and regulatory obligations; and",
          "protect the rights, safety and integrity of users, NGOs and The Giving Circle.",
        ],
      },
      {
        type: "p",
        text: "We aim to collect and use only the personal data reasonably necessary for the relevant purpose.",
      },
    ],
  },
  {
    id: "donations",
    title: "9. Donations & Payment Information",
    blocks: [
      {
        type: "p",
        text: "Donations made through The Giving Circle may be processed by participating NGOs, banks, payment gateways or authorised payment service providers.",
      },
      {
        type: "p",
        text: "Payment providers may collect information directly from you and process that information under their own terms and privacy policies. The Giving Circle may receive limited transaction information such as payment status, transaction reference, amount, donor details and the recipient campaign or NGO.",
      },
      {
        type: "p",
        text: "We do not require access to complete payment credentials where the payment provider can process the transaction independently.",
      },
    ],
  },
  {
    id: "champions-volunteers",
    title: "10. Cause Champions & Volunteers",
    blocks: [
      {
        type: "p",
        text: "Information provided by Cause Champions may be used to set up or manage campaign participation, communicate campaign updates, provide approved campaign materials, understand campaign engagement and support community-building activities.",
      },
      {
        type: "p",
        text: "Volunteer information may be shared with the participating NGO or organisation responsible for the relevant opportunity where necessary to process registration or participation.",
      },
    ],
  },
  {
    id: "ngo-partners",
    title: "11. NGO Partner Information",
    blocks: [
      {
        type: "p",
        text: "We may collect information from NGO representatives in connection with verification, onboarding, campaigns and ongoing partnerships. This may include:",
      },
      {
        type: "ul",
        items: [
          "representative names and contact details;",
          "organisational registration information;",
          "financial or audit-related documents;",
          "80G-related information;",
          "FCRA information where relevant;",
          "governance documentation; and",
          "programme or impact information.",
        ],
      },
      {
        type: "p",
        text: "Such information may be used for due diligence, compliance, campaign management and maintaining platform trust.",
      },
    ],
  },
  {
    id: "communications",
    title: "12. Communications & Marketing",
    blocks: [
      {
        type: "p",
        text: "We may use your contact information to send service-related communications such as donation confirmations, campaign updates, volunteer information, security notices and responses to support requests.",
      },
      {
        type: "p",
        text: "Where appropriate consent has been obtained, we may also send newsletters, campaign recommendations, fundraising updates or other promotional communications by email, SMS, WhatsApp or similar channels.",
      },
      {
        type: "p",
        text: "You may opt out of promotional communications using the unsubscribe option provided or by contacting us. Essential service or transaction-related communications may still be sent where necessary.",
      },
    ],
  },
  {
    id: "cookies",
    title: "13. Cookies, Analytics & Similar Technologies",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle may use cookies and similar technologies to:",
      },
      {
        type: "ul",
        items: [
          "keep the website functioning correctly;",
          "understand how visitors use the website;",
          "remember preferences;",
          "measure campaign and website performance;",
          "improve the website experience; and",
          "support analytics and communications.",
        ],
      },
      {
        type: "p",
        text: "Where required, users may be given choices regarding optional cookies. You may also be able to control cookies through your browser settings.",
      },
    ],
  },
  {
    id: "sharing",
    title: "14. How Do We Share Personal Data?",
    blocks: [
      {
        type: "p",
        text: "We may share personal data only where reasonably necessary for the purposes described in this Privacy Policy. Recipients may include:",
      },
      {
        type: "ul",
        items: [
          "participating NGOs;",
          "payment gateways and banks;",
          "website hosting providers;",
          "technology and analytics providers;",
          "communication service providers;",
          "professional advisers;",
          "regulators or government authorities where legally required; and",
          "other service providers assisting with operation of the platform.",
        ],
      },
      {
        type: "p",
        text: "We do not sell personal data to third parties.",
      },
    ],
  },
  {
    id: "third-parties",
    title: "15. Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle may rely on external services for functions such as payments, analytics, hosting, communications, forms, email delivery and social-media integrations.",
      },
      {
        type: "p",
        text: "These organisations may process personal data according to their own privacy policies. Users should review the privacy notices of third-party services they choose to use.",
      },
    ],
  },
  {
    id: "retention",
    title: "16. How Long Do We Keep Personal Data?",
    blocks: [
      {
        type: "p",
        text: "We retain personal data only for as long as reasonably necessary for the purpose for which it was collected, including:",
      },
      {
        type: "ul",
        items: [
          "providing requested services;",
          "maintaining transaction and donation records;",
          "resolving complaints or disputes;",
          "complying with tax, accounting or legal requirements;",
          "protecting against fraud or misuse; and",
          "maintaining legitimate organisational records.",
        ],
      },
      {
        type: "p",
        text: "Retention periods may vary depending on the type of information and applicable legal requirements. When personal data is no longer required, we may securely delete or anonymise it, subject to applicable law.",
      },
    ],
  },
  {
    id: "security",
    title: "17. Data Security & Data Breaches",
    blocks: [
      {
        type: "p",
        text: "We use reasonable administrative, technical and organisational safeguards designed to protect personal data against unauthorised access, loss, misuse, alteration, disclosure and destruction.",
      },
      {
        type: "p",
        text: "However, no online platform or transmission method can guarantee absolute security. Users should also take reasonable steps to protect their own devices and account information.",
      },
      {
        type: "p",
        text: "If we become aware of a personal data breach, we will take reasonable steps to investigate, contain and address the incident and make any notifications required under applicable law.",
      },
    ],
  },
  {
    id: "rights",
    title: "18. What Privacy Rights Do You Have?",
    blocks: [
      {
        type: "p",
        text: "Subject to applicable law, you may have rights relating to your personal data, including the ability to:",
      },
      {
        type: "ul",
        items: [
          "request information about how your personal data is processed;",
          "request access to personal data associated with you;",
          "request correction of inaccurate or incomplete information;",
          "request deletion or erasure where applicable;",
          "withdraw consent where processing is based on consent;",
          "raise a grievance regarding the handling of your personal data; and",
          "nominate another individual to exercise certain rights where permitted by law.",
        ],
      },
      {
        type: "p",
        text: "Requests may be subject to identity verification and applicable legal requirements.",
      },
    ],
  },
  {
    id: "consent",
    title: "19. Consent & Withdrawal",
    blocks: [
      {
        type: "p",
        text: "Where we rely on your consent to process personal data, that consent should be freely given, specific, informed and indicated through a clear affirmative action.",
      },
      {
        type: "p",
        text: "You may withdraw consent at any time where applicable. Withdrawal of consent will not affect processing that was lawful before the withdrawal.",
      },
      {
        type: "p",
        text: "Where personal data is necessary to provide a particular service, withdrawing consent may affect our ability to continue providing that service. The process for withdrawing consent should be reasonably easy and comparable to the process through which consent was originally provided.",
      },
    ],
  },
  {
    id: "children",
    title: "20. Children’s Privacy",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle is not intended to knowingly collect personal data from children without appropriate parental or guardian consent where such consent is required by applicable law.",
      },
      {
        type: "p",
        text: "If we become aware that personal data relating to a child has been collected without the required authorisation, we may take appropriate steps to remove or restrict that information.",
      },
    ],
  },
  {
    id: "international",
    title: "21. International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Some technology or service providers used by The Giving Circle may process or store personal data outside India. Where personal data is transferred internationally, we will take reasonable steps to ensure that such transfers comply with applicable Indian law and appropriate safeguards.",
      },
    ],
  },
  {
    id: "external-links",
    title: "22. Links to Other Websites",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle may contain links to participating NGOs, payment providers, social-media platforms and other external websites. These websites are operated by third parties and are governed by their own privacy policies. We encourage you to review the privacy policy of any third-party site you visit. The Giving Circle is not responsible for the privacy practices or content of external websites.",
      },
    ],
  },
];

export const TERMS_PAGE = {
  eyebrow: "Legal",
  title: "Terms of Use",
  lastUpdated: "28 September 2026",
  /** Controller named in these Terms - update if a separate registered entity is confirmed. */
  legalEntity: "The Giving Circle",
  siteUrl: "www.thegivingcircle.in",
  email: "hello@thegivingcircle.in",
  phone: "+91 98103 53603",
  phoneHref: "tel:+919810353603",
  location: "Gurugram, Haryana",
  supportHours: "Monday-Friday, 9:00 AM-6:00 PM IST",
  jurisdiction: "Gurugram, Haryana",
} as const;

export type TermsBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string };

export type TermsSection = {
  id: string;
  title: string;
  blocks: TermsBlock[];
};

export const TERMS_INTRO: TermsBlock[] = [
  {
    type: "p",
    text: "Welcome to The Giving Circle.",
  },
  {
    type: "p",
    text: `These Terms of Use (“Terms”) explain the rules that apply when you access or use ${TERMS_PAGE.siteUrl}, participate in a Giving Circle, support a social cause, make a donation, become a Cause Champion, explore volunteer opportunities, or otherwise use our services.`,
  },
  {
    type: "p",
    text: "Please read these Terms carefully. By accessing or using The Giving Circle, you agree to these Terms and our Privacy Policy.",
  },
];

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: "about",
    title: "1. About These Terms",
    blocks: [
      {
        type: "p",
        text: `These Terms form an agreement between you and ${TERMS_PAGE.legalEntity} (“The Giving Circle”, “we”, “us” or “our”).`,
      },
      {
        type: "p",
        text: "They apply to visitors, donors, Cause Champions, volunteers, NGO representatives and other users of our website and services.",
      },
      {
        type: "p",
        text: "If you do not agree with these Terms, please do not use the platform.",
      },
      {
        type: "p",
        text: "Certain services, campaigns, volunteer opportunities or partner programmes may also have additional terms. Where additional terms apply, they will be made available at the relevant point in your journey.",
      },
    ],
  },
  {
    id: "about-tgc",
    title: "2. About The Giving Circle",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle is a social-impact and community-giving platform in India that connects people with verified NGOs, social causes and opportunities to create meaningful impact.",
      },
      {
        type: "p",
        text: "The platform enables people to discover causes, support fundraising campaigns, participate in Giving Circles, become Cause Champions, volunteer and contribute their time, network or resources.",
      },
      {
        type: "p",
        text: "The Giving Circle supports social-impact initiatives across areas including education, women’s empowerment, healthcare, animal welfare, disaster relief, community development and other social causes.",
      },
      {
        type: "p",
        text: "Our role is to help supporters discover trusted NGO partners, participate in community giving and understand the impact created through their support.",
      },
      {
        type: "p",
        text: "Unless expressly stated otherwise, The Giving Circle acts as a platform connecting supporters with participating NGOs and does not itself implement every programme or activity displayed on the website.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    blocks: [
      {
        type: "p",
        text: "You may use The Giving Circle if you are legally capable of entering into a binding agreement under applicable Indian law.",
      },
      {
        type: "p",
        text: "If you are under 18 years of age, you should use the platform only with the involvement and consent of a parent or legal guardian.",
      },
      {
        type: "p",
        text: "When providing information to The Giving Circle, you agree that such information will be accurate, current and complete.",
      },
      {
        type: "p",
        text: "You must not impersonate another individual or organisation, create a misleading identity or knowingly provide false information.",
      },
      {
        type: "p",
        text: "Certain donations, volunteering opportunities, campaigns or programmes may have additional eligibility requirements.",
      },
    ],
  },
  {
    id: "how-it-works",
    title: "4. How The Giving Circle Works",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle enables individuals and communities to discover and support verified social causes through a structured community-giving model.",
      },
      {
        type: "p",
        text: "Depending on the services available at the time, you may be able to:",
      },
      {
        type: "ul",
        items: [
          "discover verified NGO partners and social causes;",
          "donate to eligible campaigns;",
          "start or participate in a Giving Circle;",
          "become a Cause Champion;",
          "share campaigns with your personal or professional network;",
          "receive campaign and impact updates;",
          "explore volunteer opportunities; and",
          "learn more about NGOs and social-impact programmes.",
        ],
      },
      {
        type: "p",
        text: "A Cause Champion is an individual who chooses to advocate for, support or mobilise their community around a social cause or campaign available through The Giving Circle.",
      },
      {
        type: "p",
        text: "The availability of particular campaigns, features or programmes may change over time.",
      },
    ],
  },
  {
    id: "donations",
    title: "5. Donations, Payments & 80G Receipts",
    blocks: [
      {
        type: "h3",
        text: "How are donations made through The Giving Circle?",
      },
      {
        type: "p",
        text: "Donations made through The Giving Circle are directed to the relevant participating NGO and do not form part of The Giving Circle’s own funds, unless expressly stated otherwise for a particular programme.",
      },
      {
        type: "p",
        text: "Payment processing may be facilitated through authorised third-party payment gateways, banks or payment service providers.",
      },
      {
        type: "p",
        text: "Before completing a donation, please review the campaign details, donation amount, recipient organisation and other information shown during the payment process.",
      },
      {
        type: "h3",
        text: "Are donations eligible for an 80G tax deduction?",
      },
      {
        type: "p",
        text: "Where the recipient NGO holds valid approval under Section 80G of the Income-tax Act, 1961, eligible donations may qualify for a tax deduction in accordance with applicable law.",
      },
      {
        type: "p",
        text: "Where applicable, the recipient NGO may issue the relevant donation acknowledgement and Form 10BE containing the information required for claiming an eligible deduction.",
      },
      {
        type: "p",
        text: "Eligibility for a deduction depends on factors including:",
      },
      {
        type: "ul",
        items: [
          "the recipient organisation;",
          "the type of donation;",
          "the payment method;",
          "the donor’s tax regime; and",
          "applicable tax rules at the time of donation.",
        ],
      },
      {
        type: "p",
        text: "Section 80G deductions are generally not available to individual taxpayers opting for the new tax regime.",
      },
      {
        type: "p",
        text: "Cash donations exceeding ₹2,000 are not eligible for deduction under Section 80G.",
      },
      {
        type: "p",
        text: "Displaying a campaign or NGO on The Giving Circle does not by itself mean that every donation will qualify for a tax deduction.",
      },
      {
        type: "p",
        text: "Donors should consult a qualified tax professional regarding their individual tax position.",
      },
      { type: "h3", text: "Payment Information" },
      {
        type: "p",
        text: "Payments may be processed by independent payment gateways, banks or financial service providers. Their own terms, privacy policies and security practices may apply.",
      },
      {
        type: "p",
        text: "The Giving Circle does not guarantee uninterrupted payment processing and is not responsible for failures caused by third-party payment providers, banks, network providers or systems outside our reasonable control.",
      },
    ],
  },
  {
    id: "cause-champions",
    title: "6. Cause Champion Responsibilities",
    blocks: [
      {
        type: "p",
        text: "Cause Champions help build awareness and community participation around social causes.",
      },
      {
        type: "p",
        text: "If you become a Cause Champion, you agree to communicate responsibly, accurately and transparently.",
      },
      {
        type: "p",
        text: "You must not:",
      },
      {
        type: "ul",
        items: [
          "misrepresent a campaign, NGO or beneficiary;",
          "make guarantees about fundraising results or programme outcomes;",
          "collect funds outside approved channels while representing them as donations made through The Giving Circle;",
          "publish false or misleading campaign or impact information;",
          "misuse beneficiary stories, images, videos or personal information;",
          "create artificial donations, engagement or campaign activity;",
          "make unauthorised commitments on behalf of The Giving Circle or an NGO; or",
          "use your association with The Giving Circle for unlawful or misleading purposes.",
        ],
      },
      {
        type: "p",
        text: "Campaign information and approved assets provided by The Giving Circle or a participating NGO should be used in their intended context.",
      },
      {
        type: "p",
        text: "Being a Cause Champion does not make you an employee, agent, legal representative or authorised spokesperson of The Giving Circle or any participating NGO unless expressly confirmed through a separate written agreement.",
      },
    ],
  },
  {
    id: "ngo-verification",
    title: "7. Partner NGOs & Verification",
    blocks: [
      {
        type: "h3",
        text: "How does The Giving Circle verify NGO partners?",
      },
      {
        type: "p",
        text: "The Giving Circle conducts verification and due-diligence checks before listing participating NGO partners on the platform.",
      },
      {
        type: "p",
        text: "Depending on the organisation and programme, these checks may include reviewing:",
      },
      {
        type: "ul",
        items: [
          "organisational registration details;",
          "audited financial information or accounts;",
          "Section 80G approval or related documentation;",
          "programme and impact information;",
          "organisational background;",
          "governance documentation; and",
          "where relevant, FCRA registration or prior permission.",
        ],
      },
      {
        type: "p",
        text: "FCRA-related checks are relevant where an organisation receives or intends to receive foreign contributions in accordance with applicable Indian law.",
      },
      {
        type: "p",
        text: "Verification is intended to improve transparency and trust but does not constitute a guarantee of an NGO’s future conduct, financial position, regulatory status or programme outcomes.",
      },
      {
        type: "p",
        text: "Participating NGOs remain responsible for ensuring that the information and documents they provide are accurate, current and complete.",
      },
      {
        type: "p",
        text: "The Giving Circle may request updated documentation and may suspend, restrict or remove an NGO or campaign where information becomes outdated, incomplete or raises material compliance, trust or safety concerns.",
      },
    ],
  },
  {
    id: "volunteers",
    title: "8. Volunteer Opportunities",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle may display volunteer opportunities offered by participating NGOs or other organisations.",
      },
      {
        type: "p",
        text: "Unless expressly stated otherwise, the organisation offering the opportunity is responsible for volunteer selection, onboarding, supervision, schedules, safety procedures and programme requirements.",
      },
      {
        type: "p",
        text: "Before participating, volunteers should review the relevant opportunity carefully and provide accurate information during registration.",
      },
      {
        type: "p",
        text: "Volunteer opportunities may be modified, postponed or cancelled by the relevant organisation.",
      },
      {
        type: "p",
        text: "Participation in a volunteer opportunity does not create an employment relationship with The Giving Circle.",
      },
    ],
  },
  {
    id: "user-content",
    title: "9. User Content & Permissions",
    blocks: [
      {
        type: "p",
        text: "Users may be able to submit or share content including testimonials, photographs, videos, comments, campaign stories, updates or other materials (“User Content”).",
      },
      {
        type: "p",
        text: "You retain ownership of User Content that belongs to you.",
      },
      {
        type: "p",
        text: "By submitting User Content to The Giving Circle, you confirm that:",
      },
      {
        type: "ul",
        items: [
          "you have the necessary rights and permissions to share it;",
          "the content does not infringe another person’s rights; and",
          "where required, you have obtained appropriate permissions from identifiable individuals appearing in the content.",
        ],
      },
      {
        type: "p",
        text: "You grant The Giving Circle a non-exclusive, worldwide and royalty-free licence to host, reproduce, format, display and communicate such content where reasonably necessary to operate, explain or promote the platform, campaign or related social-impact activity.",
      },
      {
        type: "p",
        text: "Where User Content includes beneficiaries, children or vulnerable individuals, appropriate consent, privacy and safeguarding requirements must be followed.",
      },
      {
        type: "p",
        text: "We may remove User Content that violates these Terms, applicable law, privacy rights, intellectual-property rights or our trust and safety standards.",
      },
    ],
  },
  {
    id: "prohibited",
    title: "10. Prohibited Use",
    blocks: [
      {
        type: "p",
        text: "You must not use The Giving Circle to:",
      },
      {
        type: "ul",
        items: [
          "commit fraud or facilitate unlawful activity;",
          "impersonate another individual or organisation;",
          "create or promote false or misleading fundraising campaigns;",
          "misrepresent the destination or purpose of donations;",
          "exploit beneficiaries or vulnerable individuals;",
          "harass, threaten or unlawfully discriminate against others;",
          "upload malicious software or interfere with website security;",
          "attempt unauthorised access to accounts, systems or data;",
          "scrape or systematically extract platform content without permission;",
          "infringe intellectual-property, privacy or other legal rights;",
          "manipulate campaign statistics, donations or engagement;",
          "send spam or unauthorised commercial communications; or",
          "use The Giving Circle’s name, brand or NGO relationships in a false or misleading manner.",
        ],
      },
      {
        type: "p",
        text: "We may restrict or suspend access where we reasonably believe these Terms or applicable law have been violated.",
      },
    ],
  },
  {
    id: "campaigns-refunds",
    title: "11. Campaign Review, Updates & Refunds",
    blocks: [
      { type: "h3", text: "How are campaigns reviewed?" },
      {
        type: "p",
        text: "Campaigns may undergo review before or after publication.",
      },
      {
        type: "p",
        text: "The Giving Circle may request additional information from an NGO, Cause Champion or other relevant party in order to verify campaign details.",
      },
      {
        type: "p",
        text: "Campaigns may be edited, paused, rejected or removed where:",
      },
      {
        type: "ul",
        items: [
          "information cannot reasonably be verified;",
          "required documentation is unavailable;",
          "content is misleading or inaccurate;",
          "trust or safety concerns arise; or",
          "a campaign appears inconsistent with applicable law or platform standards.",
        ],
      },
      { type: "h3", text: "What happens after a donation?" },
      {
        type: "p",
        text: "Where available, participating NGOs or The Giving Circle may provide donors with campaign progress, fund-utilisation or impact updates.",
      },
      {
        type: "p",
        text: "The timing, frequency and level of reporting may vary depending on the NGO, programme and nature of the campaign.",
      },
      { type: "h3", text: "Can a donation be refunded?" },
      {
        type: "p",
        text: "Donations are generally intended to be final once they have been successfully processed and transferred or committed to the recipient NGO.",
      },
      {
        type: "p",
        text: "Refunds, reversals or corrections may be considered in limited circumstances such as:",
      },
      {
        type: "ul",
        items: [
          "duplicate payments;",
          "technical payment errors;",
          "unauthorised transactions;",
          "an incorrectly processed transaction; or",
          "circumstances where a refund is required under applicable law.",
        ],
      },
      {
        type: "p",
        text: `Refund requests should be sent to ${TERMS_PAGE.email} with relevant transaction information.`,
      },
      {
        type: "p",
        text: "Any refund may depend on the transaction status, recipient NGO, payment service provider and applicable legal requirements.",
      },
      {
        type: "p",
        text: "Where a separate Refund or Cancellation Policy applies, that policy will form part of these Terms.",
      },
    ],
  },
  {
    id: "third-parties",
    title: "12. Third-Party Websites & Services",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle may contain links to NGO websites, payment gateways, social-media platforms or other third-party services.",
      },
      {
        type: "p",
        text: "These websites and services are operated independently from The Giving Circle.",
      },
      {
        type: "p",
        text: "We do not control their content, availability, security practices, privacy policies or terms.",
      },
      {
        type: "p",
        text: "A link to a third-party service does not necessarily mean that The Giving Circle endorses every statement, activity, service or product offered by that third party.",
      },
      {
        type: "p",
        text: "Users should review the relevant terms and privacy policies before using external services.",
      },
    ],
  },
  {
    id: "ip",
    title: "13. Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle website and its original content, design, interface, graphics, logos, icons, platform features, text and other materials may be protected by copyright, trademark and other applicable intellectual-property laws.",
      },
      {
        type: "p",
        text: "Unless written permission is provided, you may not reproduce, distribute, sell, modify or commercially exploit protected platform materials.",
      },
      {
        type: "p",
        text: "Names, logos, photographs, videos and other materials belonging to participating NGOs or third parties remain the property of their respective owners.",
      },
      {
        type: "p",
        text: "Users may share publicly available campaign links and approved campaign assets for genuine fundraising or awareness purposes, provided that such materials are not altered in a misleading way and do not imply an unauthorised endorsement.",
      },
    ],
  },
  {
    id: "availability",
    title: "14. Platform Availability & Fundraising Outcomes",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle aims to keep the platform available, secure and reliable but cannot guarantee uninterrupted access.",
      },
      {
        type: "p",
        text: "The platform or particular features may occasionally be unavailable because of:",
      },
      {
        type: "ul",
        items: [
          "scheduled maintenance;",
          "system updates;",
          "security requirements;",
          "technical problems;",
          "payment-provider interruptions; or",
          "circumstances outside our reasonable control.",
        ],
      },
      {
        type: "p",
        text: "We may modify, add, suspend or discontinue particular platform features where reasonably necessary.",
      },
      {
        type: "h3",
        text: "Does The Giving Circle guarantee that a campaign will reach its fundraising goal?",
      },
      {
        type: "p",
        text: "No.",
      },
      {
        type: "p",
        text: "Fundraising outcomes depend on factors including donor participation, campaign reach, timing, available networks and external circumstances.",
      },
      {
        type: "p",
        text: "The Giving Circle does not guarantee that a campaign will achieve a particular:",
      },
      {
        type: "ul",
        items: [
          "fundraising amount;",
          "campaign target;",
          "number of donors or supporters; or",
          "social-impact outcome.",
        ],
      },
      {
        type: "p",
        text: "Impact information may also evolve as participating NGOs implement programmes and provide updated reporting.",
      },
    ],
  },
  {
    id: "liability-privacy",
    title: "15. Liability, Privacy & Changes to Terms",
    blocks: [
      {
        type: "p",
        text: "The Giving Circle aims to provide accurate, current and useful information.",
      },
      {
        type: "p",
        text: "However, campaign and NGO information may include information supplied by participating NGOs, Cause Champions, payment providers and other third parties.",
      },
      {
        type: "p",
        text: "To the extent permitted under applicable law, The Giving Circle will not be liable for indirect, incidental or consequential losses arising from matters outside our reasonable control.",
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes or limits any right or liability that cannot lawfully be excluded or limited under applicable Indian law.",
      },
      { type: "h3", text: "Privacy" },
      {
        type: "p",
        text: "The privacy of users, donors, volunteers and other participants is important to us.",
      },
      {
        type: "p",
        text: "Our collection, use, storage and handling of personal information are described in our Privacy Policy.",
      },
      {
        type: "p",
        text: "Users should review the Privacy Policy to understand how personal information is handled when using The Giving Circle.",
      },
      { type: "h3", text: "Changes to These Terms" },
      {
        type: "p",
        text: "We may update these Terms when our services, legal requirements, operational practices or platform features change.",
      },
      {
        type: "p",
        text: "When material changes are made, we may update the “Last Updated” date and, where appropriate, provide additional notice.",
      },
      {
        type: "p",
        text: "Continued use of The Giving Circle after updated Terms become effective constitutes acceptance of the revised Terms, subject to applicable law.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "16. Governing Law, Contact & Grievance Officer",
    blocks: [
      {
        type: "p",
        text: "These Terms are governed by the laws of India.",
      },
      {
        type: "p",
        text: `Subject to applicable law and any mandatory dispute-resolution requirements, disputes relating to these Terms or use of The Giving Circle will be subject to the jurisdiction of the competent courts at ${TERMS_PAGE.jurisdiction}.`,
      },
      { type: "h3", text: "Contact The Giving Circle" },
      {
        type: "p",
        text: "For general questions about the platform, campaigns, donations or these Terms:",
      },
      {
        type: "ul",
        items: [
          "The Giving Circle",
          TERMS_PAGE.legalEntity,
          `${TERMS_PAGE.location}, India`,
          `Email: ${TERMS_PAGE.email}`,
          `Support: ${TERMS_PAGE.phone}`,
          `Support Hours: ${TERMS_PAGE.supportHours}`,
        ],
      },
      { type: "h3", text: "Grievance Officer" },
      {
        type: "p",
        text: "For complaints or grievances relating to the platform or services, please contact:",
      },
      {
        type: "ul",
        items: [
          "Grievance Officer: The Giving Circle",
          "Designation: Grievance Officer",
          `Email: ${TERMS_PAGE.email}`,
          `Address: ${TERMS_PAGE.location}, India`,
          `Phone: ${TERMS_PAGE.phone}`,
        ],
      },
      {
        type: "p",
        text: "Please provide enough information about your concern for us to review and respond appropriately.",
      },
    ],
  },
];

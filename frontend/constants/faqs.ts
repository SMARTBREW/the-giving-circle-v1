/**
 * Site FAQ source of truth.
 * Visible answer text must match FAQPage JSON-LD word for word.
 * Stable `id` slugs are permanent deep-link anchors — do not renumber or rename lightly.
 */

export type FaqLink = {
  /** Exact substring of `answer` to wrap in a link */
  label: string;
  href: string;
};

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  links?: readonly FaqLink[];
};

export const SITE_FAQS = [
  {
    id: "what-is-the-giving-circle",
    question: "What is The Giving Circle?",
    answer:
      "The Giving Circle is an Indian fundraising platform for people who want to make a difference. You choose a cause you care about, start a fundraiser for the verified NGO working on it, and raise funds by sharing it with your personal and professional network. We call these volunteer fundraisers Cause Champions.",
    links: [
      { label: "cause you care about", href: "/causes" },
      { label: "Cause Champions", href: "/become-a-cause-champion" },
    ],
  },
  {
    id: "how-do-i-start-a-fundraiser-for-an-ngo-in-india",
    question: "How do I start a fundraiser for an NGO in India?",
    answer:
      "Choose a cause from the causes we work on, tell us the amount you would like to raise, and we set up your fundraising page and communication materials. You share them with your network on WhatsApp, Instagram or anywhere else you spend time, and donations go straight to the verified NGO working on that cause. Someone from our team stays with you through it. There is nothing to download and nothing to pay.",
    links: [
      { label: "causes we work on", href: "/causes" },
      { label: "tell us the amount you would like to raise", href: "/champion/apply" },
    ],
  },
  {
    id: "what-is-a-cause-champion",
    question: "What is a Cause Champion?",
    answer:
      "A Cause Champion is a volunteer fundraiser. You pick a cause, pledge an amount you would like to raise, and share your fundraising page with the people who know you. The donations directly go to the verified NGO behind the cause. Cause Champions never handle or receive donation funds themselves.",
    links: [
      { label: "pick a cause", href: "/causes" },
      { label: "pledge an amount you would like to raise", href: "/champion/apply" },
    ],
  },
  {
    id: "does-it-cost-anything-to-start-a-fundraiser",
    question: "Does it cost anything to start a fundraiser?",
    answer:
      "No. Starting a fundraiser costs you nothing. There is no joining fee, no charge for your page or your poster, and no minimum you have to raise. Being a Cause Champion is a volunteer role, so you are not paid on what you raise. You give your voice to the cause; the money goes to the NGO.",
  },
  {
    id: "what-if-i-do-not-raise-the-amount-i-pledged",
    question: "What if I do not raise the amount I pledged?",
    answer:
      "Nothing happens, and you owe nothing. There is no financial liability on you if you do not raise it. The amount you pledge is a target you set for yourself, not a commitment you owe to anyone. Whatever you raise reaches the cause.",
  },
  {
    id: "how-much-time-does-fundraising-take",
    question:
      "How much time does fundraising take, and how long does my fundraiser run?",
    answer:
      "It takes very little of your time and it is entirely flexible. We create all the communication material, and you share it with your network on WhatsApp, Instagram and any other social media. You decide how long to keep your fundraiser running. There is no fixed term and no minimum period.",
  },
  {
    id: "what-support-do-i-get-to-run-my-fundraiser",
    question: "What support do I get to run my fundraiser?",
    answer:
      "A fundraising page with your own link, a personalised poster you can share, and someone from our team to help you through it. We also share the facts that can help you with creating a video appeal if you’d like to do so. When a donation comes in we thank the donor on behalf of you, the NGO and The Giving Circle, and we let you know.",
  },
  {
    id: "can-i-start-a-fundraiser-for-my-birthday-wedding-or-another-occasion",
    question:
      "Can I start a fundraiser for my birthday, wedding or another occasion?",
    answer:
      "Yes, and it is one of the best reasons to start. A birthday, a wedding or an anniversary, a run you are training for, a milestone at work, or the memory of someone you have lost. Tell us the date when you start and we will arrange it for you.",
    links: [{ label: "Tell us the date when you start", href: "/champion/apply" }],
  },
  {
    id: "can-i-raise-funds-in-someone-elses-name",
    question:
      "Can I raise funds in someone else's name, for family or friends?",
    answer:
      "Yes. You can dedicate your fundraiser to someone, and many Cause Champions do: in honour of a parent, in celebration of a friend, in memory of someone they have lost. Tell us and we will put it on your page. The funds you raise go to the verified NGO behind the cause, never to an individual.",
    links: [{ label: "Tell us and we will put it on your page", href: "/champion/apply" }],
  },
  {
    id: "can-i-raise-money-for-a-persons-medical-treatment",
    question:
      "Can I raise money for a person's medical treatment or personal needs?",
    answer:
      "No. Every rupee raised through The Giving Circle goes to a verified NGO, never to an individual, so this is not the place to raise money for medical bills, education fees or a personal emergency. Other crowdfunding platforms in India are built for exactly that, and they will serve you better.",
  },
  {
    id: "can-school-and-college-students-start-a-fundraiser",
    question: "Can school and college students start a fundraiser?",
    answer:
      "Yes, and many do. A fundraiser travels on trust rather than on money, so you do not need a large following or a network with deep pockets. Students are often better at this than they expect, because the people around them pay attention to what they care about.\n\nIf you are under 18, you will need a parent's or guardian's consent.\n\nAt the end of your fundraiser we issue a certificate together with the partner NGO, which you are welcome to use for a college application or a CV.",
    links: [{ label: "partner NGO", href: "/causes" }],
  },
  {
    id: "how-can-i-volunteer-with-an-ngo-in-india",
    question: "How can I volunteer with an NGO in India?",
    answer:
      "There are two ways to volunteer through The Giving Circle.\n\nBecome a Cause Champion. Give your voice to a cause you believe in and raise awareness and funds for the NGO working on it. This can be done entirely online, from anywhere.\n\nVolunteer directly with one of our partner NGOs. Bring your time and your skills, on the field or off it, and we will put you in touch with the right organisation.\n\nTell us which appeals to you through the form on this site and we will take it from there.",
    links: [
      { label: "Become a Cause Champion", href: "/become-a-cause-champion" },
      { label: "Volunteer directly with one of our partner NGOs", href: "/volunteer" },
      { label: "form on this site", href: "/volunteer" },
    ],
  },
  {
    id: "do-i-get-a-certificate-for-volunteering-or-fundraising",
    question: "Do I get a certificate for volunteering or fundraising?",
    answer:
      "Yes. At the end of your fundraiser we issue a certificate jointly with the partner NGO you raised for, so it carries their name alongside ours. Students are welcome to use it for a college application, a CV or a school community-service requirement. We also tell you what your fundraising went on to support.",
  },
  {
    id: "where-does-my-donation-go",
    question: "Where does my donation go?",
    answer:
      "Straight to the NGO. Donations go directly to the partner NGO through the NGO's own payment gateway and into the NGO's own bank account. The Giving Circle does not receive, hold, or process donation funds at any stage.",
  },
  {
    id: "will-i-get-an-80g-tax-exemption-receipt",
    question: "Will I get an 80G tax exemption receipt for my donation?",
    answer:
      "Yes. We only work with NGOs that hold a valid 80G certificate, and the receipt is issued directly by the NGO rather than by The Giving Circle, because your donation is made through the NGO's own payment gateway. It reaches you on the email address you give when you donate, so do check it is correct.\n\n80G is claimed against the financial year in which you give, not the year you file. A gift made on 30 March belongs to the financial year that is ending; one made on 2 April belongs to the next.\n\nOne thing worth knowing: 80G is a deduction under the old tax regime. If you file under the new regime you will not be able to claim it, though your donation reaches the cause exactly the same way. Your tax adviser is the right person to confirm what applies to you.",
  },
  {
    id: "can-i-get-a-refund-on-my-donation",
    question: "Can I get a refund on my donation?",
    answer:
      "Donations are generally not refundable. Each partner NGO sets its own refund policy and most do not offer one. If something has gone wrong with your payment, email us at hello@thegivingcircle.in within 24 hours of donating and we will take it up with the NGO directly.",
    links: [
      {
        label: "hello@thegivingcircle.in",
        href: "mailto:hello@thegivingcircle.in",
      },
    ],
  },
  {
    id: "can-an-nri-or-someone-living-outside-india-donate",
    question: "Can an NRI or someone living outside India donate?",
    answer:
      "Yes, if you are an Indian citizen giving from an Indian bank account. You can be anywhere in the world when you give. Our fundraisers do not accept foreign contributions, so gifts from foreign nationals or from overseas bank accounts cannot be processed.",
  },
  {
    id: "is-the-giving-circle-safe-to-donate-through",
    question: "Is The Giving Circle safe to donate through?",
    answer:
      "Your money never passes through us, which is the first thing to know. Donations go into the partner NGO's own bank account through its own payment gateway, and The Giving Circle does not receive, hold or process donation funds at any stage.\n\nEvery NGO on the platform has been checked by our own team before it was listed. We verify that it is registered, that its 80G and where relevant its FCRA certificates are genuine and current, and we visit its office and meet the people who run it. Not every organisation that approaches us is listed.\n\nYou can see each partner's registration and 80G numbers on its page and check them yourself. We would rather you did.",
    links: [{ label: "Every NGO on the platform", href: "/causes" }],
  },
  {
    id: "how-does-the-giving-circle-verify-its-partner-ngos",
    question: "How does The Giving Circle verify its partner NGOs?",
    answer:
      "Before an NGO appears on The Giving Circle, we go and meet it.\n\nWe start with the documents. We check that the organisation is registered, and that its tax exemption certificates, its 80G and where relevant its FCRA, are genuine and current. This is done by our own team.\n\nWe then visit its office and meet the people who run it. We ask how the work is done and how the organisation is run, and we see that work on the ground wherever we can. Not every organisation that approaches us is listed.\n\nEvery partner also commits, in writing, to sharing updates on the work your donation supports. That is a condition of being listed, not a courtesy.\n\nWe should also tell you what we do not do. We do not audit an NGO's accounts. Our verification tells you that an organisation is real, compliant, and run by people we have met and questioned. It is not a financial audit.",
  },
  {
    id: "which-causes-and-ngos-can-i-raise-funds-for",
    question: "Which causes and NGOs can I raise funds for?",
    answer:
      "You can raise funds for any cause and any NGO listed on The Giving Circle. Our partners work on girls' education, care for street animals, menstrual health and hunger, and more organisations join as they pass verification. See every cause and every partner NGO, then pick the one you would want to talk to your own friends about.",
    links: [
      { label: "See every cause and every partner NGO", href: "/causes" },
    ],
  },
  {
    id: "can-i-raise-funds-for-an-ngo-that-is-not-listed",
    question: "Can I raise funds for an NGO that is not listed?",
    answer:
      "Tell us about them. We can only list NGOs that pass our verification, so we would need to review their registration and tax exemption documents and meet them first. If you work with an organisation you trust, we would like to hear about it.",
    links: [{ label: "Tell us about them", href: "/partner" }],
  },
  {
    id: "we-are-an-ngo-how-can-we-partner",
    question: "We are an NGO. How can we partner with The Giving Circle?",
    answer:
      "We would like to hear from you. Get in touch through the form on this site. Every organisation goes through the same verification, which includes a review of your registration and tax exemption documents, a visit to your office and a conversation with the people running the work.",
    links: [{ label: "form on this site", href: "/partner" }],
  },
] as const satisfies readonly FaqEntry[];

export type SiteFaqId = (typeof SITE_FAQS)[number]["id"];

const FAQ_BY_ID = Object.fromEntries(
  SITE_FAQS.map((faq) => [faq.id, faq]),
) as Record<SiteFaqId, FaqEntry>;

export function getFaq(id: SiteFaqId): FaqEntry {
  return FAQ_BY_ID[id];
}

export function faqsByIds(ids: readonly SiteFaqId[]): FaqEntry[] {
  return ids.map((id) => FAQ_BY_ID[id]);
}

/** Full /faqs page — all entries, stable order */
export const ALL_FAQS: readonly FaqEntry[] = SITE_FAQS;

export const FAQS_PAGE = {
  eyebrow: "Frequently Asked Questions",
  title: "Everything You Need to Know",
  subtitle:
    "Answers about Cause Champions, donations, 80G receipts, volunteering, and how we verify NGO partners.",
} as const;

/** Home section — high-intent overview */
export const HOME_FAQ_IDS = [
  "what-is-the-giving-circle",
  "how-do-i-start-a-fundraiser-for-an-ngo-in-india",
  "what-is-a-cause-champion",
  "does-it-cost-anything-to-start-a-fundraiser",
  "where-does-my-donation-go",
  "will-i-get-an-80g-tax-exemption-receipt",
] as const satisfies readonly SiteFaqId[];

export const FAQ_ITEMS = faqsByIds(HOME_FAQ_IDS);

export const ABOUT_FAQ_IDS = [
  "what-is-the-giving-circle",
  "where-does-my-donation-go",
  "is-the-giving-circle-safe-to-donate-through",
  "how-does-the-giving-circle-verify-its-partner-ngos",
  "will-i-get-an-80g-tax-exemption-receipt",
  "we-are-an-ngo-how-can-we-partner",
] as const satisfies readonly SiteFaqId[];

export const ABOUT_FAQS = {
  eyebrow: "About The Giving Circle",
  title: "Questions About Who We Are",
  subtitle:
    "How we verify partners, where gifts go, and what makes our circle different from a typical donation portal.",
  items: faqsByIds(ABOUT_FAQ_IDS),
} as const;

export const CHAMPION_FAQ_IDS = [
  "what-is-a-cause-champion",
  "does-it-cost-anything-to-start-a-fundraiser",
  "what-support-do-i-get-to-run-my-fundraiser",
  "what-if-i-do-not-raise-the-amount-i-pledged",
  "how-much-time-does-fundraising-take",
  "can-i-start-a-fundraiser-for-my-birthday-wedding-or-another-occasion",
  "can-i-raise-funds-in-someone-elses-name",
  "can-school-and-college-students-start-a-fundraiser",
  "do-i-get-a-certificate-for-volunteering-or-fundraising",
  "where-does-my-donation-go",
] as const satisfies readonly SiteFaqId[];

export const CHAMPION_FAQS = {
  eyebrow: "Cause Champion FAQs",
  title: "Everything You Need to Know",
  subtitle:
    "Learn how to become a Cause Champion, engage your circle, and support a verified cause with confidence.",
  items: faqsByIds(CHAMPION_FAQ_IDS),
} as const;

export const VOLUNTEER_FAQ_IDS = [
  "how-can-i-volunteer-with-an-ngo-in-india",
  "what-is-a-cause-champion",
  "can-school-and-college-students-start-a-fundraiser",
  "do-i-get-a-certificate-for-volunteering-or-fundraising",
  "is-the-giving-circle-safe-to-donate-through",
] as const satisfies readonly SiteFaqId[];

export const VOLUNTEER_FAQS = {
  eyebrow: "Volunteer FAQs",
  title: "Everything You Need to Know",
  subtitle:
    "Practical answers about volunteering, students, certificates, and how volunteering relates to becoming a Cause Champion.",
  items: faqsByIds(VOLUNTEER_FAQ_IDS),
} as const;

export const PARTNER_FAQ_IDS = [
  "we-are-an-ngo-how-can-we-partner",
  "how-does-the-giving-circle-verify-its-partner-ngos",
  "can-i-raise-funds-for-an-ngo-that-is-not-listed",
  "where-does-my-donation-go",
  "which-causes-and-ngos-can-i-raise-funds-for",
] as const satisfies readonly SiteFaqId[];

export const PARTNER_FAQS = {
  eyebrow: "NGO Partner FAQs",
  title: "Partnering With The Giving Circle",
  subtitle:
    "How verification works, where donations go, and how to join as a verified NGO partner.",
  items: faqsByIds(PARTNER_FAQ_IDS),
} as const;

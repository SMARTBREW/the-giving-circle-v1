export const BLOG_HERO = {
  eyebrow: "Giving Guides",
  title: "The Giving Circle Blog",
  subtitle:
    "Practical, trust-first guides for families, students, and donors: education and 80G, verified NGO partnerships, internships with impact, Cause Champions and Young Champions, and summers that colleges can recognise for the right reasons.",
  src: "/images/causes/92db69bff355c2fc20daf700e27d23cf0f6b57dd.png",
  alt: "A schoolgirl smiling in class, representing learning and community giving",
  ctaLabel: "Browse Guides",
  ctaHref: "#guides",
} as const;

export const BLOG_ARTICLES_INTRO = {
  eyebrow: "Guides & Insights",
  title: "Read Before You Give",
  subtitle:
    "Clear writing for Cause Champions, families, students, and companies — verification, 80G, and collective impact without the jargon.",
} as const;

export const BLOG_FILTER_ALL = "All Guides";

export const BLOG_REACH = {
  eyebrow: "Why These Guides Matter",
  title: "Clarity Before You Give",
  subtitle:
    "Every guide is written so Cause Champions, families, and companies can give with verification, 80G clarity, and real outcomes in mind.",
} as const;

export const BLOG_CTA = {
  src: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
  alt: "A volunteer with a rescued dog",
  title: "Ready to Give with Confidence?",
  subtitle:
    "Explore verified causes, start a giving circle, and support outcomes you can follow.",
  ctaLabel: "Explore Live Causes",
  href: "/causes",
  objectPosition: "object-[42%_40%] sm:object-[50%_40%]",
} as const;

export const BLOG_ARTICLES = [
  {
    id: "meaningful-summer-projects-india",
    category: "Student & Family Guide",
    updated: "20 May 2026",
    title: "Meaningful Summer Projects for High School Students in India",
    summary:
      "What is worth doing with a summer when your child is aiming for universities abroad. A guide for Indian families thinking carefully about extracurriculars.",
    sections: [
      {
        heading: "Start with purpose, not a checklist",
        paragraphs: [
          "A strong summer project is not the longest list of activities. It is a focused piece of work your child can explain: what they noticed, what they did, who they worked with, and what changed.",
          "Admissions readers look for continuity and reflection. A few weeks with a verified cause, documented properly, often says more than scattered one-day visits.",
        ],
      },
      {
        heading: "What makes a project meaningful",
        paragraphs: [
          "Choose a cause your child can stay with: education support, menstrual health awareness, animal welfare, or community volunteering through a Young Champion pathway.",
          "Prefer partners who can confirm hours, describe the role clearly, and share what the work contributed to on the ground.",
        ],
        list: [
          "A clear need the project addresses",
          "A role the student can actually do",
          "Evidence: photos, notes, certificates from verified partners",
          "A short reflection written in the student’s own words",
        ],
      },
      {
        heading: "How families can support without taking over",
        paragraphs: [
          "Parents help most by asking good questions and protecting time, not by designing the project for the student. Let your child lead conversations with NGO partners and keep a simple weekly log.",
          "If university applications are the horizon, treat the summer as practice in responsibility and community, not as a marketing campaign.",
        ],
      },
    ],
  },
  {
    id: "community-service-college-applications-india",
    category: "Student & Family Guide",
    updated: "03 Jun 2026",
    title: "Does Community Service Help with US/UK College Applications?",
    summary:
      "An honest look at what admissions offices have publicly said they value, and how Indian students can think about service work without falling into the most common traps.",
    sections: [
      {
        heading: "Service helps when it is real",
        paragraphs: [
          "Community service can strengthen an application when it shows sustained interest, initiative, and learning. It rarely helps when it looks staged, short-lived, or written in someone else’s voice.",
          "US and UK readers have said they value contribution and character. They are also alert to packaged volunteering that exists only for a résumé line.",
        ],
      },
      {
        heading: "Common traps for Indian applicants",
        paragraphs: [
          "Avoid stacking unrelated causes in a single summer. Avoid certificates with no description of what you did. Avoid claiming impact numbers you cannot explain.",
        ],
        list: [
          "One cause area sustained over time beats five logos",
          "Document hours and responsibilities carefully",
          "Write reflection that names people, places, and trade-offs",
          "Link service to academic or personal interests when it is genuine",
        ],
      },
      {
        heading: "A better way to frame your work",
        paragraphs: [
          "Describe the problem, your role, what was hard, and what you learned. If you worked through The Giving Circle as a Young Champion or volunteer, say what the verified NGO partnership made possible and how your circle showed up.",
        ],
      },
    ],
  },
  {
    id: "how-to-donate-for-child-education-in-india-80g",
    category: "Giving Guide",
    updated: "20 Jul 2026",
    title:
      "Maximize Your Impact: Support Child Education in India and Gain 80G Tax Benefits",
    summary:
      "Donate for child education in India and enjoy 80G tax deductions. Discover impactful NGOs and track your donations effectively.",
    sections: [
      {
        heading: "Why education giving needs verification",
        paragraphs: [
          "Supporting a child’s education is one of the clearest ways to create lasting change. Verification matters because donations should reach classrooms, learning support, and documented outcomes, not opaque middle layers.",
          "On The Giving Circle, contributions go directly to verified NGO partners. We help Cause Champions pool support and follow impact reporting from the ground.",
        ],
      },
      {
        heading: "Step-by-step: donate for child education",
        paragraphs: ["A practical sequence for donors in India:"],
        list: [
          "Choose the education outcome you care about: school access, bridge learning, or girls’ education",
          "Pick a verified NGO and live cause with clear reporting",
          "Confirm 80G eligibility and keep your receipt",
          "Invite your circle if you want to champion the cause together",
          "Ask for updates so you can see what changed",
        ],
      },
      {
        heading: "80G basics for education donations",
        paragraphs: [
          "Section 80G can allow a deduction on eligible donations when you have a valid receipt. Rules and limits vary, so confirm details with your tax advisor.",
          "Save every receipt with the NGO name, PAN, registration details, your details, amount, and date.",
        ],
      },
    ],
  },
  {
    id: "verified-ngos-in-delhi",
    category: "Trust & Verification Guide",
    updated: "20 Jul 2026",
    title:
      "Your Essential Guide to Trustworthy NGOs in Delhi for Verified Philanthropy",
    summary:
      "Discover verified NGOs in Delhi for impactful donations. Empower education and social causes in 2026 with transparency and trust.",
    sections: [
      {
        heading: "What “verified” should mean",
        paragraphs: [
          "A trustworthy NGO can show registration, financial accountability, and a clear programme story. In Delhi and NCR, many organisations do strong work; the question is whether you can verify credentials and follow outcomes.",
          "The Giving Circle partners only with NGOs that meet our verification standards, so Cause Champions can fund live causes with more clarity.",
        ],
      },
      {
        heading: "Signals to check before you give",
        paragraphs: ["Use this checklist whether you give through our platform or directly:"],
        list: [
          "Legal registration and public identity",
          "80G certification where tax deduction matters",
          "Audited accounts you can review",
          "Programme detail: who is served, where, and how",
          "Impact updates that go beyond fundraising photos",
        ],
      },
      {
        heading: "Giving with your circle in Delhi",
        paragraphs: [
          "If you live in Delhi NCR, consider visiting a project site when partners welcome supporters. Seeing classrooms, shelters, or community sessions turns remote giving into a relationship.",
        ],
      },
    ],
  },
  {
    id: "csr-projects-in-india",
    category: "CSR for Companies",
    updated: "20 Jul 2026",
    title:
      "Updated Trends in CSR Initiatives in India for 2026: Key Insights and Developments",
    summary:
      "Explore the latest CSR trends in India for 2026, focusing on NGO partnerships, funding dynamics, and emerging technologies in corporate philanthropy.",
    sections: [
      {
        heading: "CSR is moving toward accountable partnerships",
        paragraphs: [
          "Companies planning CSR projects in India are under more pressure to show outcomes, not only spend. Verified NGO partners, clear scopes, and monitoring rhythms matter as much as the cause theme.",
          "Education, women’s empowerment, animal welfare, and disaster readiness remain strong themes when they connect to community need and measurable delivery.",
        ],
      },
      {
        heading: "A practical planning sequence",
        paragraphs: ["For teams building a CSR plan:"],
        list: [
          "Define the outcome and geography",
          "Shortlist verified NGO partners with delivery capacity",
          "Agree budget, milestones, and reporting cadence",
          "Decide what employees or giving circles can join",
          "Publish learning, not only announcement copy",
        ],
      },
      {
        heading: "Where giving circles fit",
        paragraphs: [
          "Employee giving circles can multiply CSR when people pool support around a live cause. Pair corporate funding with transparent NGO delivery so teams see what their circle helped move.",
        ],
      },
    ],
  },
  {
    id: "what-is-a-philanthropist-india",
    category: "Giving Guide",
    updated: "10 Apr 2026",
    title:
      "Philanthropist Meaning in India: 80G Gifts, CSR & Giving Circles (Not Just Billionaires)",
    summary:
      "India-specific breakdown: philanthropist vs donor, how CSR reshaped volunteering budgets, recurring giving with 80G receipts, and links to verified NGOs so Google snippets match Indian tax terminology.",
    sections: [
      {
        heading: "Philanthropy is not only for ultra-wealthy givers",
        paragraphs: [
          "In India, a philanthropist is anyone who gives time or resources for public good with intention. That includes monthly donors, Cause Champions who gather their network, and companies running CSR with verified partners.",
          "The useful distinction is not the size of the cheque. It is whether giving is accountable, repeated, and connected to real organisations.",
        ],
      },
      {
        heading: "80G, CSR, and giving circles",
        paragraphs: [
          "80G receipts help individual taxpayers document eligible donations. CSR structures how companies allocate mandated social spend. Giving circles let people pool smaller gifts into a shared cause.",
          "Together, these tools make collective giving practical for Indian households and workplaces.",
        ],
      },
    ],
  },
  {
    id: "what-is-philanthropy-india",
    category: "Giving Guide",
    updated: "10 Apr 2026",
    title: "What is Philanthropy? Why India Needs More Collective Giving",
    summary:
      "Philanthropy in India spans CSR, temples and digital giving, but Section 80G receipts, audited NGOs and monthly habits are what separate one-off sympathy from accountable impact.",
    sections: [
      {
        heading: "A working definition",
        paragraphs: [
          "Philanthropy is organised generosity: people and institutions directing resources toward social good. In India it includes religious giving, CSR, digital campaigns, and community giving circles.",
          "Accountable philanthropy adds verification, receipts, and impact reporting so trust can grow.",
        ],
      },
      {
        heading: "Why collective giving matters here",
        paragraphs: [
          "One-off sympathy helps in a moment. Collective giving funds programmes that need months of delivery: classrooms, health education, shelter care, and disaster recovery.",
          "When Cause Champions invite their circle, small gifts become steady support for verified NGOs.",
        ],
      },
    ],
  },
  {
    id: "how-to-donate-to-ngos-india",
    category: "Giving Guide",
    updated: "10 Apr 2026",
    title: "How to Donate to NGOs in India: A Complete Guide (2026)",
    summary:
      "A step-by-step guide to donating to verified NGOs in India. Learn how to find trustworthy organisations, verify credentials, claim 80G tax benefits, and track your impact.",
    sections: [
      {
        heading: "Why NGO verification matters before donating",
        paragraphs: [
          "India has a vast number of registered NGOs, but only a fraction are active, transparent, and publishing verified impact data. Verification protects your gift and the communities you hope to support.",
          "Street fundraisers and social posts can move hearts quickly. A few credential checks make sure money reaches the intended programme.",
        ],
      },
      {
        heading: "Step-by-step: how to donate to an NGO in India",
        paragraphs: ["Follow this process for every donation:"],
        list: [
          "Decide your cause area: education, health, animal welfare, women empowerment, disaster relief, or CSR",
          "Find NGOs working in that area with verifiable credentials",
          "Check FCRA registration on the Ministry of Home Affairs portal when relevant",
          "Verify 80G certification on the Income Tax e-filing portal",
          "Ask for audited financial statements from recent years",
          "Review impact reports from previous work",
          "Donate through a trusted platform that holds partners accountable",
          "Save your donation receipt for 80G claims",
        ],
      },
      {
        heading: "How to verify an NGO’s credentials",
        paragraphs: [
          "The three credentials every serious NGO in India should be able to discuss are FCRA (when foreign funds apply), 80G certification, and audited financials.",
          "Also check public registration details and whether the organisation can explain programmes in plain language.",
        ],
        list: [
          "FCRA: check at mha.gov.in when applicable",
          "80G: check via Income Tax portals",
          "Audited accounts: ask the NGO or review their site",
          "Registration: NGO Darpan and other public records",
        ],
      },
      {
        heading: "80G tax deduction: what donors need to know",
        paragraphs: [
          "Section 80G can allow eligible donations to reduce taxable income, often at 50% of the donated amount subject to limits. Always confirm with your tax advisor.",
          "A valid receipt should include the NGO’s name, PAN, 80G details, your name and PAN, amount, and date.",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: ["Even careful donors slip into these habits:"],
        list: [
          "Giving from emotional posts without verifying the NGO",
          "Handing cash without credentials or receipts",
          "Never asking for impact updates",
          "One-time gifts only, when recurring support sustains programmes",
          "Misplacing 80G receipts at tax time",
        ],
      },
    ],
  },
  {
    id: "how-to-donate-for-women-empowerment-india",
    category: "Giving Guide",
    updated: "10 Apr 2026",
    title:
      "How to Donate for Women Empowerment in India: NGOs, Tax Benefits and Impact",
    summary:
      "Find verified NGOs working on women empowerment in India. Learn how to donate effectively, claim 80G tax benefits, and track real outcomes for women and girls.",
    sections: [
      {
        heading: "What effective support looks like",
        paragraphs: [
          "Women’s empowerment work in India spans education, livelihoods, health knowledge, and safety. Strong programmes name the community, the activity, and the outcome they track.",
          "Causes like menstrual health education help girls stay in school with dignity. Verified NGO partners make that support accountable.",
        ],
      },
      {
        heading: "How to give well",
        paragraphs: ["Practical steps:"],
        list: [
          "Choose a live cause with a clear women’s or girls’ outcome",
          "Confirm the NGO is verified and 80G-ready if you need a receipt",
          "Prefer updates that describe sessions, participants, and follow-up",
          "Consider becoming a Cause Champion so your circle can fund together",
        ],
      },
    ],
  },
  {
    id: "cas-duke-of-edinburgh-volunteer-certificate-india",
    category: "Student & Family Guide",
    updated: "25 Jun 2026",
    title: "CAS, Duke of Edinburgh & Verified Volunteer Certificates in India",
    summary:
      "A practical guide for Indian students to service hours and certificates that count toward CAS, DofE, and PVSA. What the frameworks require, and how to document properly.",
    sections: [
      {
        heading: "Know what your framework asks for",
        paragraphs: [
          "CAS, Duke of Edinburgh, and similar programmes reward service that is planned, supervised, and reflected upon. A certificate alone is rarely enough without a clear activity record.",
          "Ask your school coordinator what evidence format they accept before you start.",
        ],
      },
      {
        heading: "Document as you go",
        paragraphs: ["Keep a simple folder:"],
        list: [
          "Dates and hours",
          "Supervisor name and organisation",
          "Role description",
          "Photos or work samples where appropriate",
          "A short reflection after each block of work",
        ],
      },
      {
        heading: "Choose verified partners",
        paragraphs: [
          "Work with organisations that understand student documentation. Verified NGO partners and structured Young Champion projects make it easier to show real service without inventing hours.",
        ],
      },
    ],
  },
  {
    id: "volunteer-project-ideas-students-india",
    category: "Student & Family Guide",
    updated: "25 Jun 2026",
    title: "Five Volunteer Project Ideas for Indian Students This Summer",
    summary:
      "Concrete projects students can take on across menstrual hygiene, women’s empowerment, hunger, animal welfare, and education. For IB, DofE, and college applicants.",
    sections: [
      {
        heading: "Pick one lane and go deep",
        paragraphs: [
          "Here are five directions students in India can take seriously with verified partners and clear documentation.",
        ],
        list: [
          "Menstrual health education support with classroom sessions",
          "Education bridge support for out-of-school learners",
          "Animal welfare feeding, awareness, or shelter support",
          "Community hunger or meal programmes with supervised roles",
          "Young Champion fundraising for a live cause with your circle",
        ],
      },
      {
        heading: "Make the project countable",
        paragraphs: [
          "Write a one-page plan: goal, weekly hours, supervisor, and success measure. Finish with a reflection that admissions or CAS supervisors can read in minutes.",
        ],
      },
    ],
  },
  {
    id: "parents-guide-meaningful-summer-india",
    category: "Family & Parent Guide",
    updated: "25 Jun 2026",
    title:
      "A Parent’s Guide to a Meaningful Summer: Helping Your Teen Use This Break Well",
    summary:
      "How to help your teenager use the summer well, without it turning into another item on your to-do list. For Indian parents thinking about universities abroad.",
    sections: [
      {
        heading: "Your job is scaffolding, not starring",
        paragraphs: [
          "Teens grow when they own the project. Parents help by setting boundaries on time, safety, and honesty, then stepping back so the student can lead.",
          "A meaningful summer can include rest, reading, and one community commitment done well.",
        ],
      },
      {
        heading: "Questions that help",
        paragraphs: ["Try these instead of assigning a packed calendar:"],
        list: [
          "What problem do you actually care about?",
          "Who can supervise this work?",
          "What will you be able to describe in September?",
          "How will we protect sleep and family time?",
        ],
      },
      {
        heading: "Where The Giving Circle fits",
        paragraphs: [
          "If your teen wants structured volunteering or a Young Champion path with verified NGOs, explore live causes together and let them make the first outreach.",
        ],
      },
    ],
  },
] as const;

export type BlogArticle = (typeof BLOG_ARTICLES)[number];
export type BlogSection = BlogArticle["sections"][number];

export function getBlogArticle(id: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.id === id);
}

export function getBlogCategories(): string[] {
  return [...new Set(BLOG_ARTICLES.map((article) => article.category))];
}

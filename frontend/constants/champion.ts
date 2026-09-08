export const CHAMPION_PAGE_HERO = {
  eyebrow: "Cause Champion.",
  titleLine1: "Turn Your Circle",
  titleLine2Before: "Into ",
  titleAccent: "Impact.",
  subtitle:
    "Become a Cause Champion for a verified cause you care about, and inspire your circle to support meaningful change.",
  primaryCta: { label: "Start Your Giving Circle", href: "/#contact" },
  secondaryCta: { label: "Explore Causes", href: "/#causes" },
  src: "/images/cause-champion-hero.png",
  alt: "A Cause Champion smiling with children from our circle",
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
      iconSrc: "/images/champions/find-cause.svg",
      title: "1. Find a Cause",
      body: "Explore the causes that matter to you and choose where you’d like your circle to make a difference.",
    },
    {
      iconSrc: "/images/champions/become-champion.svg",
      title: "2. Become a Champion",
      body: "Tell us you’d like to champion it. Our team helps set up your personalised fundraiser, goal and campaign link.",
    },
    {
      iconSrc: "/images/champions/rally-circle.svg",
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
  cards: [
    {
      category: "Education",
      categoryClassName: "text-[var(--Brand-Deep-Blue,#3976A8)]",
      title: "Keep Girls in School With Better Period Care",
      titleLines: null,
      org: "JWP",
      location: "Uttarakhand",
      raised: "₹1,92,000",
      goal: "₹3,00,000",
      percent: 55,
      supporters: "500 Supporters",
      daysLeft: "24 Days Left",
      src: "/images/stories/c0fcbd6be0a24b7c89a15933e825abe1b1a9ea02.png",
      alt: "Schoolgirls with menstrual health education materials",
      href: "/causes",
    },
    {
      category: "Animal Welfare",
      categoryClassName: "text-[var(--Brand-Green-Teal,#00A98F)]",
      title: "Give Injured Street Animals a Second Chance",
      titleLines: ["Give Injured Street Animals", "a Second Chance"] as const,
      org: "Animal Care",
      location: "Mumbai",
      raised: "₹4,50,000",
      goal: "₹6,00,000",
      percent: 60,
      supporters: "320 Supporters",
      daysLeft: "18 Days Left",
      src: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
      alt: "A volunteer caring for a rescued dog",
      href: "/causes",
    },
    {
      category: "Disaster Relief",
      categoryClassName: "text-[var(--Brand-Coral,#ED3B58)]",
      title: "Help Families Rebuild After the Uttarakhand Floods",
      titleLines: null,
      org: "GUS",
      location: "Uttarakhand",
      raised: "₹6,20,000",
      goal: "₹8,50,000",
      percent: 70,
      supporters: "410 Supporters",
      daysLeft: "12 Days Left",
      src: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
      alt: "Volunteers helping families after flooding in the mountains",
      href: "/causes",
    },
  ],
} as const;

export type ChampionCampaignCard = (typeof CHAMPION_CAMPAIGNS.cards)[number];

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
      title: "No Girl Should Miss School Because of Her Period.",
      body: "Periods should never stand between a girl and her education. Using my platform to bring people together helped support menstrual health awareness and access, turning conversations online into meaningful change for young girls.",
      name: "Ayesha Kapoor",
      role: "Content Creator, Mumbai",
      imageSrc: "/images/stories/c0fcbd6be0a24b7c89a15933e825abe1b1a9ea02.png",
      imageAlt:
        "Schoolgirls with menstrual health education materials at a Wings of Hope session",
      avatarSrc: "/images/testmi/099e4d57b98ec71c66eb071e71b13ef69b282c7d.png",
      avatarAlt: "Ayesha Kapoor",
    },
    {
      title: "My Circle’s Support Gave Rescued Animals a Second Chance",
      body: "Championing animal welfare with The Giving Circle helped me bring more people to a cause I deeply care about. The team made it easy to share the campaign, keep my network updated, and show the impact their support created for rescued animals.",
      name: "Dr. Rajesh Nair",
      role: "Veterinarian, Bengaluru",
      imageSrc: "/images/causes/b84b54a937c5a76ee7ec494500962ef6787e488c.png",
      imageAlt: "A veterinarian with a rescued dog",
      avatarSrc: "/images/testmi/096f144ac332a86ad699acc4cdc8e2eff813d811.png",
      avatarAlt: "Dr. Rajesh Nair",
    },
    {
      title: "In a Crisis, My Circle Chose to Show Up.",
      body: "Seeing families lose so much overnight made me want to do something that truly mattered. Bringing my network together, sharing the campaign, and watching support reach affected communities made the journey deeply meaningful.",
      name: "Dhaval Patel",
      role: "Entrepreneur, Ahmedabad",
      imageSrc: "/images/stories/c8329e59978e6b525af70415259a31cd1f388a41.png",
      imageAlt: "Flood relief volunteers helping families after a disaster",
      avatarSrc: "/images/testmi/f846f5578286c4f1943dd07a272ad57a92cd1b3a.png",
      avatarAlt: "Dhaval Patel",
    },
    {
      title: "Together, We Helped Put Meals on Their Plates",
      body: "No child should have to worry about where their next meal will come from. Bringing my network together helped turn that concern into real support, and knowing those meals reached children made every effort feel worthwhile.",
      name: "Saloni Joshi",
      role: "HR Manager, Pune",
      imageSrc: "/images/causes/353777ccdbf9acbedc2cfa91e44db8b6ebe0d296.png",
      imageAlt: "A volunteer serving meals to children",
      avatarSrc: "/images/testmi/953105c0d2ea2d9d1703198bae02e59fa2c87e63.png",
      avatarAlt: "Saloni Joshi",
    },
    {
      title: "I Realised My Network Could Do More Than I Imagined.",
      body: "Becoming a Cause Champion with The Giving Circle helped me support education for underprivileged children. The team made it easy to start my campaign, reach my network, and keep supporters updated, turning my circle into real impact.",
      name: "Riya Sharma",
      role: "Philanthropist, Mumbai",
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
  href: "/#contact",
  people: [
    {
      name: "Ajay Mehrotra",
      role: "Entrepreneur",
      src: "/images/testmi/096f144ac332a86ad699acc4cdc8e2eff813d811.png",
      alt: "Ajay Mehrotra, Cause Champion and entrepreneur",
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
    {
      name: "Riya Singh",
      role: "Cardiologist",
      src: "/images/testmi/099e4d57b98ec71c66eb071e71b13ef69b282c7d.png",
      alt: "Riya Singh, Cause Champion and cardiologist",
    },
  ],
} as const;

export const CHAMPION_FAQS = {
  eyebrow: "Cause Champion FAQs",
  title: "Everything You Need to Know",
  subtitle:
    "Learn how to become a Cause Champion, engage your circle, and support a verified cause with confidence.",
  items: [
    {
      question: "What is a Cause Champion?",
      answer:
        "A Cause Champion is a volunteer fundraiser. You pick a cause, pledge an amount you would like to raise, and share your fundraising page with the people who know you. The donations directly go to the verified NGO behind the cause. Cause Champions never handle or receive donation funds themselves.",
    },
    {
      question: "Does it cost anything to start a fundraiser?",
      answer:
        "No. It costs nothing to start a Giving Circle and become a Cause Champion. Donations go directly to the verified NGO.",
    },
    {
      question: "What support do I get to run my fundraiser?",
      answer:
        "Our team helps set up your personalised fundraiser, goal, and campaign link, and stays with you throughout. You get guidance, campaign materials, progress updates, and ongoing support so you can rally your circle with confidence.",
    },
    {
      question: "What if I do not raise the amount I pledged?",
      answer:
        "Your pledge is a goal, not a commitment you are held to. Every gift your circle makes still goes directly to the verified NGO. You can keep sharing, adjust your goal with our team, or close the fundraiser when you are ready—there is no penalty for falling short.",
    },
    {
      question: "Where does my donation go?",
      answer:
        "Donations go directly to the partner NGO through its own payment gateway and registered bank account. The Giving Circle does not hold or receive the funds—we verify partners and help you run the Giving Circle.",
    },
    {
      question: "Can I start a fundraiser for my birthday, wedding or another occasion?",
      answer:
        "Yes. Many Cause Champions mark birthdays, weddings, anniversaries, and other milestones by starting a Giving Circle for a verified cause. Choose a cause you care about, set your goal, and invite guests and loved ones to give instead of—or alongside—gifts.",
    },
  ],
} as const;

export const CHAMPION_CTA = {
  src: "/images/champions/image.png",
  alt: "A Cause Champion delivering relief supplies to a family in need",
  title: "Ready to Turn Your Circle Into Impact?",
  subtitle:
    "Bring your circle together around a cause you believe in, and turn shared support into meaningful change.",
  ctaLabel: "Become a Cause Champion",
  href: "/#contact",
} as const;

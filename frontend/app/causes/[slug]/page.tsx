import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CauseDetailTemplate from "../_sections/cause-page/cause-detail-template";
import {
  LIVE_CAUSES,
  getCausePageContent,
  getLiveCause,
} from "@/constants";

export function generateStaticParams() {
  return LIVE_CAUSES.map((cause) => ({ slug: cause.id }));
}

/** Per-cause SEO metadata   title ≤60 chars, description ~155 chars, OG image from cause asset. */
const CAUSE_SEO: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  "wings-of-hope": {
    title: "Wings of Hope: Menstrual Health for Girls | The Giving Circle",
    description:
      "22,000+ girls empowered across Delhi NCR. Champion menstrual health education & reusable kits with JWP so girls stay in school every month. Donate via 80G NGO.",
    keywords:
      "menstrual health India, period poverty Delhi, girls education NGO India, Wings of Hope JWP, 80G donation, reusable sanitary kits, school attendance girls India",
  },
  "pehli-class": {
    title: "PehliClass: First Day of School for Every Child | The Giving Circle",
    description:
      "Bridge out-of-school children into formal classrooms at Mera Sahara, Nithari (Delhi NCR). ₹1,600/month sponsors one child's full bridge year with JWP. 80G eligible.",
    keywords:
      "out-of-school children India, bridge school Nithari, JWP education NGO, first generation learner India, school enrolment Delhi NCR, 80G donation education, PehliClass",
  },
  "community-forest-governance": {
    title: "Forest Rights and Community Governance by ICFG | The Giving Circle",
    description:
      "2,000+ villages mobilised, 10,000+ hectares protected in Jharkhand. Champion tribal forest rights with ICFG under FRA 2006. 50,000+ saplings planted   donate directly.",
    keywords:
      "community forest governance India, Forest Rights Act 2006, ICFG tribal rights, forest conservation Jharkhand, indigenous forest dwellers, FRA donation, sapling India",
  },
  "pawsitive-protectors": {
    title: "Pawsitive Protectors: Street Animal Vaccinations | The Giving Circle",
    description:
      "7,126 animals helped, 142,000+ people protected. Champion free rabies vaccinations for street animals in Mumbai with Animal Care NGO. Zero Rabies mission. Donate now.",
    keywords:
      "street animal welfare India, rabies vaccination Mumbai, Animal Care NGO, stray dog care India, community animal welfare, 80G animal welfare donation, Zero Rabies India",
  },
  "bowls-of-hope": {
    title: "Bowls of Hope: Daily Feeding for Stray Animals | The Giving Circle",
    description:
      "1,859 feeding bowls installed for 2,000+ Delhi strays. Champion daily meals and veterinary care at Animal Care shelters. Every gift goes directly to the NGO.",
    keywords:
      "stray animal feeding Delhi, animal shelter donation India, Animal Care feeding programme, street dog welfare Delhi, animal welfare NGO India, bowls of hope donation",
  },
  "brick-by-brick": {
    title: "Brick by Brick: Build an Animal Shelter in Gurgaon | The Giving Circle",
    description:
      "₹10 sponsors one brick on a 17,500 sq ft Animal Care rescue plot in Gurgaon. Champion the boundary wall for India's Zero Rabies mission. Watch every brick laid.",
    keywords:
      "animal shelter Gurgaon, Zero Rabies India, Animal Care rescue centre, sponsor a brick India, stray animal shelter build, animal welfare donation Haryana",
  },
  "flood-animal-rescue": {
    title: "Emergency Animal Rescue: Floods India | The Giving Circle",
    description:
      "812 animals rescued in Uttarakhand & Punjab. Champion emergency rescue and rehabilitation for flood-affected animals with Animal Care. Urgent, verified, direct donations.",
    keywords:
      "flood animal rescue India, Uttarakhand animal welfare, emergency pet rescue flood India, disaster animal relief NGO, Animal Care Uttarakhand Punjab, flood relief donation",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) {
    return { title: "Live Cause | The Giving Circle" };
  }

  const seo = CAUSE_SEO[slug] ?? {
    title: `${cause.title} | The Giving Circle`,
    description: cause.summary,
    keywords: `${cause.category} NGO India, donate ${cause.category.toLowerCase()}, The Giving Circle`,
  };

  const ogImageUrl = cause.src.startsWith("/")
    ? `https://www.thegivingcircle.in${cause.src}`
    : cause.src;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://www.thegivingcircle.in/causes/${slug}/`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://www.thegivingcircle.in/causes/${slug}/`,
      siteName: "The Giving Circle",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: cause.alt,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function CauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = getLiveCause(slug);
  if (!cause) notFound();

  const pageContent = getCausePageContent(cause.id);
  if (!pageContent) notFound();

  const canonicalUrl = `https://www.thegivingcircle.in/causes/${slug}/`;
  const seo = CAUSE_SEO[slug] ?? {
    title: cause.title,
    description: cause.summary,
    keywords: "",
  };
  const ogImageUrl = cause.src.startsWith("/")
    ? `https://www.thegivingcircle.in${cause.src}`
    : cause.src;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        name: cause.org,
        description: cause.summary,
        url: canonicalUrl,
        logo: "https://www.thegivingcircle.in/logo.png",
        image: ogImageUrl,
        areaServed: cause.location,
        potentialAction: {
          "@type": "DonateAction",
          target: canonicalUrl,
          name: `Donate to ${cause.title}`,
        },
      },
      {
        "@type": "WebPage",
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        inLanguage: "en-IN",
        isPartOf: {
          "@type": "WebSite",
          name: "The Giving Circle",
          url: "https://www.thegivingcircle.in",
        },
        ...(cause.faqs.length > 0
          ? {
              mainEntity: cause.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }
          : {}),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CauseDetailTemplate content={pageContent} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CauseDetailTemplate from "../_sections/cause-page/cause-detail-template";
import {
  getCausePageContent,
  getLiveCause,
  getVisibleCauses,
  isCauseMuted,
} from "@/constants";
import { absoluteMediaUrl, SITE_LOGO_URL } from "@/lib/cloudinary";

export function generateStaticParams() {
  // Muted causes stay in LIVE_CAUSES / source; omit from public export until unmuted.
  return getVisibleCauses().map((cause) => ({ slug: cause.id }));
}

const ORG_FULL_NAME: Record<string, string> = {
  JWP: "Joint Women's Programme",
  ICFG: "Institute of Community Forest Governance",
  "Animal Care": "Animal Care",
};

/** Per-cause SEO metadata   title ≤60 chars, description ~155 chars, OG image from cause asset. */
const CAUSE_SEO: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  "wings-of-hope": {
    title: "Wings of Hope: ₹1,500 Helps One Girl Stay in Class",
    description:
      "Give children the chance to learn, grow and look ahead with hope. Discover Wings of Hope and see how you can support children who need it most.",
    keywords:
      "menstrual health India, period poverty Delhi, girls education NGO India, Wings of Hope JWP, 80G donation, reusable sanitary kits, school attendance girls India",
  },
  "pehli-class": {
    title: "Help a Child Get Into School | Support PehliClass",
    description:
      "A missing birth certificate or Aadhaar can shut the school gate on a child. PehliClass in Nithari fixes the papers, closes the gap and gets them enrolled",
    keywords:
      "out-of-school children India, bridge school Nithari, JWP education NGO, first generation learner India, school enrolment Delhi NCR, 80G donation education, PehliClass",
  },
  "community-forest-governance": {
    title: "Community Forest Governance | Support Forest Communities",
    description:
      "Support local communities working on forest conservation, natural resource management and sustainable livelihoods through community-led forest governance.",
    keywords:
      "Guardians of the Green, community forest governance India, ICFG Jharkhand, native tree planting, Adivasi guardians, FRA 2006, 80G donation forest",
  },
  "pawsitive-protectors": {
    title: "Pawsitive Protectors | Support Animal Welfare in India",
    description:
      "Help animals get food, medical care and protection through Pawsitive Protectors. Support animals facing neglect, injury or hardship and donate today.",
    keywords:
      "street animal welfare India, rabies vaccination Mumbai, Animal Care NGO, stray dog care India, community animal welfare, 80G animal welfare donation, Zero Rabies India",
  },
  "bowls-of-hope": {
    title: "Fill a Bowl. Speed a Recovery | Bowls of Hope",
    description:
      "Animals healing at the Animal Care Shelter need nutritious food every day. Bowls of Hope keeps their bowls full. Donate or champion the cause.",
    keywords:
      "animal shelter feeding Delhi, Animal Care Bowls of Hope, recovery meals for street dogs, animal welfare NGO India, 80G animal donation, summer water bowls Delhi NCR",
  },
  "brick-by-brick": {
    title: "Lay a Brick. Raise a Wall | Brick by Brick",
    description:
      "Animal Care is building Shukrana in Gurugram — a shelter and hospital for street animals. Every ₹10 lays one brick in the boundary wall. Donate or champion the cause.",
    keywords:
      "Shukrana Animal Care Centre, animal shelter Gurugram, sponsor a brick India, Animal Care Sector 78, street animal hospital Gurgaon, 80G animal welfare donation",
  },
  "flood-animal-rescue": {
    title: "Donate for Flood Animal Rescue in India | Rescue on Call",
    description:
      "Donate for emergency animal rescue during floods in India. Animal Care's Rescue on Call pulls animals out of flood zones, treats them and shelters them.",
    keywords:
      "flood animal rescue India, Uttarakhand animal welfare, emergency pet rescue flood India, disaster animal relief NGO, Animal Care Uttarakhand Punjab, flood relief donation",
  },
};

function causeOgImageUrl(src: string) {
  return absoluteMediaUrl(src, { width: 1200, height: 630, crop: "fill" });
}

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

  const ogImageUrl = causeOgImageUrl(cause.src);

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
  if (!cause || isCauseMuted(cause.id)) notFound();

  const pageContent = getCausePageContent(cause.id);
  if (!pageContent) notFound();

  const canonicalUrl = `https://www.thegivingcircle.in/causes/${slug}/`;
  const seo = CAUSE_SEO[slug] ?? {
    title: cause.title,
    description: cause.summary,
    keywords: "",
  };
  const ogImageUrl = causeOgImageUrl(cause.src);
  const orgName = ORG_FULL_NAME[cause.org] ?? cause.org;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        name: orgName,
        description: cause.summary,
        url: canonicalUrl,
        logo: SITE_LOGO_URL,
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

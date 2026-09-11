"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CampaignCard from "@/components/campaign-card";
import FilterChips from "@/components/filter-chips";
import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import {
  CAUSE_FILTER_ALL,
  CAUSES_LIST_INTRO,
  LIVE_CAUSES,
  getCauseCategories,
  toCampaignCard,
} from "@/constants";

export default function LiveCausesGrid() {
  const searchParams = useSearchParams();
  const categories = useMemo(() => getCauseCategories(), []);
  const options = useMemo(
    () => [CAUSE_FILTER_ALL, ...categories],
    [categories],
  );
  const [filter, setFilter] = useState(CAUSE_FILTER_ALL);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category)) {
      setFilter(category);
    }
  }, [searchParams, categories]);

  const visible =
    filter === CAUSE_FILTER_ALL
      ? LIVE_CAUSES
      : LIVE_CAUSES.filter((cause) => cause.category === filter);

  return (
    <PageSection
      id="live-causes"
      tone="gray"
      fade={false}
      innerClassName="flex flex-col items-center"
    >
      <SectionIntro
        eyebrow={CAUSES_LIST_INTRO.eyebrow}
        title={CAUSES_LIST_INTRO.title}
        subtitle={CAUSES_LIST_INTRO.subtitle}
      />

      <div className="mt-8 w-full sm:mt-10 lg:mt-12">
        <FilterChips options={options} value={filter} onChange={setFilter} />
      </div>

      <ul className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-6 min-[90rem]:grid-cols-3 min-[90rem]:gap-6">
        {visible.map((cause) => (
          <li key={cause.id} className="min-w-0">
            <CampaignCard card={toCampaignCard(cause)} />
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-[1rem] text-[var(--Subheading,#45564B)]">
          No live causes in this category right now. Try another filter.
        </p>
      ) : null}
    </PageSection>
  );
}

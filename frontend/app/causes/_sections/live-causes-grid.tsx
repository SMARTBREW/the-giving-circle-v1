"use client";

import { useEffect, useMemo, useState } from "react";
import CampaignCard from "@/components/campaign-card";
import FilterChips from "@/components/filter-chips";
import SectionIntro from "@/components/section-intro";
import PageSection from "@/components/page-section";
import {
  CAUSE_FILTER_ALL,
  CAUSES_LIST_INTRO,
  getCauseCategories,
  getVisibleCauses,
  toCampaignCard,
} from "@/constants";

export default function LiveCausesGrid() {
  const categories = useMemo(() => getCauseCategories(), []);
  const causes = useMemo(() => getVisibleCauses(), []);
  const options = useMemo(
    () => [CAUSE_FILTER_ALL, ...categories],
    [categories],
  );
  const [filter, setFilter] = useState(CAUSE_FILTER_ALL);

  // Read ?category= after paint. useSearchParams() bails this list out of the
  // static HTML, so the cards popped in later and shoved the page down.
  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    if (category && categories.includes(category)) {
      setFilter(category);
    }
  }, [categories]);

  const visible =
    filter === CAUSE_FILTER_ALL
      ? causes
      : causes.filter((cause) => cause.category === filter);

  return (
    <PageSection
      id="live-causes"
      tone="gray"
      fade={false}
      pad="tight-top"
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

      <ul className="mt-8 grid w-full grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-5 min-[56.25rem]:grid-cols-3 min-[56.25rem]:gap-4 lg:mt-12 lg:gap-5 min-[90rem]:gap-6">
        {visible.map((cause, index) => (
          <li key={cause.id} className="min-w-0">
            <CampaignCard
              card={toCampaignCard(cause)}
              priority={index === 0}
            />
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-[1rem] text-subhead">
          No live causes in this category right now. Try another filter.
        </p>
      ) : null}
    </PageSection>
  );
}

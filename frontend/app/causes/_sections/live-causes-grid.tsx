"use client";

import { useState } from "react";
import CauseCard from "@/components/cause-card";
import { CAUSE_CARDS, CAUSE_FILTER_ALL } from "@/constants";
import CausesFilters from "./causes-filters";

export default function LiveCausesGrid() {
  const [filter, setFilter] = useState<string>(CAUSE_FILTER_ALL);
  const cards =
    filter === CAUSE_FILTER_ALL
      ? CAUSE_CARDS
      : CAUSE_CARDS.filter((cause) => cause.label === filter);

  return (
    <>
      <div className="mt-12 w-full">
        <CausesFilters value={filter} onChange={setFilter} />
      </div>
      <ul className="mt-12 flex w-full flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-[1.5rem]">
        {cards.map((cause) => (
          <CauseCard
            key={cause.label}
            label={cause.label}
            src={cause.src}
            alt={cause.alt}
          />
        ))}
      </ul>
    </>
  );
}

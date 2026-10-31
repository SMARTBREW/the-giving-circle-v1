/** Shared brand accents used across cause-detail cards. */
export const CAUSE_CARD_ACCENTS = [
  {
    ring: "border-circle",
    hoverBorder:
      "group-hover/cause-card:border-circle group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-circle",
    bar: "bg-circle",
    soft: "bg-[rgba(2,147,140,0.12)] text-circle",
    check: "bg-circle",
    value: "text-circle",
  },
  {
    ring: "border-circle",
    hoverBorder:
      "group-hover/cause-card:border-circle group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-circle",
    bar: "bg-circle",
    soft: "bg-[rgba(2,147,140,0.12)] text-circle",
    check: "bg-circle",
    value: "text-circle",
  },
  {
    ring: "border-[var(--Brand-Coral,#d4284a)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Coral,#d4284a)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Coral,#d4284a)]",
    bar: "bg-[var(--Brand-Coral,#d4284a)]",
    soft: "bg-[rgba(230,43,79,0.12)] text-giving-red",
    check: "bg-[var(--Brand-Coral,#d4284a)]",
    value: "text-giving-red",
  },
  {
    ring: "border-[var(--Brand-Deep-Blue,#0b619a)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Deep-Blue,#0b619a)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Deep-Blue,#0b619a)]",
    bar: "bg-[var(--Brand-Deep-Blue,#0b619a)]",
    soft: "bg-[rgba(11,97,154,0.12)] text-giving-blue",
    check: "bg-[var(--Brand-Deep-Blue,#0b619a)]",
    value: "text-giving-blue",
  },
] as const;

export function getCauseCardAccent(index: number) {
  return CAUSE_CARD_ACCENTS[index % CAUSE_CARD_ACCENTS.length];
}

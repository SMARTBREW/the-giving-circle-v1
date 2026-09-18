/** Shared brand accents used across cause-detail cards. */
export const CAUSE_CARD_ACCENTS = [
  {
    ring: "border-[var(--Main-CTA-button,#02938c)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Main-CTA-button,#02938c)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Main-CTA-button,#02938c)]",
    bar: "bg-[var(--Main-CTA-button,#02938c)]",
    soft: "bg-[rgba(2,147,140,0.12)] text-[var(--Main-CTA-button,#02938c)]",
    check: "bg-[var(--Main-CTA-button,#02938c)]",
    value: "text-[var(--Main-CTA-button,#02938c)]",
  },
  {
    ring: "border-[var(--Brand-Green-Teal,#02938c)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Green-Teal,#02938c)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Green-Teal,#02938c)]",
    bar: "bg-[var(--Brand-Green-Teal,#02938c)]",
    soft: "bg-[rgba(2,147,140,0.12)] text-[var(--Brand-Green-Teal,#02938c)]",
    check: "bg-[var(--Brand-Green-Teal,#02938c)]",
    value: "text-[var(--Brand-Green-Teal,#02938c)]",
  },
  {
    ring: "border-[var(--Brand-Coral,#e62b4f)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Coral,#e62b4f)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Coral,#e62b4f)]",
    bar: "bg-[var(--Brand-Coral,#e62b4f)]",
    soft: "bg-[rgba(230,43,79,0.12)] text-[var(--Brand-Coral,#e62b4f)]",
    check: "bg-[var(--Brand-Coral,#e62b4f)]",
    value: "text-[var(--Brand-Coral,#e62b4f)]",
  },
  {
    ring: "border-[var(--Brand-Deep-Blue,#0b619a)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Deep-Blue,#0b619a)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Deep-Blue,#0b619a)]",
    bar: "bg-[var(--Brand-Deep-Blue,#0b619a)]",
    soft: "bg-[rgba(11,97,154,0.12)] text-[var(--Brand-Deep-Blue,#0b619a)]",
    check: "bg-[var(--Brand-Deep-Blue,#0b619a)]",
    value: "text-[var(--Brand-Deep-Blue,#0b619a)]",
  },
] as const;

export function getCauseCardAccent(index: number) {
  return CAUSE_CARD_ACCENTS[index % CAUSE_CARD_ACCENTS.length];
}

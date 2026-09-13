/** Shared brand accents used across cause-detail cards. */
export const CAUSE_CARD_ACCENTS = [
  {
    ring: "border-[var(--Main-CTA-button,#228b22)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Main-CTA-button,#228b22)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Main-CTA-button,#228b22)]",
    bar: "bg-[var(--Main-CTA-button,#228b22)]",
    soft: "bg-[rgba(34,139,34,0.12)] text-[var(--Main-CTA-button,#228b22)]",
    check: "bg-[var(--Main-CTA-button,#228b22)]",
    value: "text-[var(--Main-CTA-button,#228b22)]",
  },
  {
    ring: "border-[var(--Brand-Green-Teal,#00A98F)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Green-Teal,#00A98F)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Green-Teal,#00A98F)]",
    bar: "bg-[var(--Brand-Green-Teal,#00A98F)]",
    soft: "bg-[rgba(0,169,143,0.12)] text-[var(--Brand-Green-Teal,#00A98F)]",
    check: "bg-[var(--Brand-Green-Teal,#00A98F)]",
    value: "text-[var(--Brand-Green-Teal,#00A98F)]",
  },
  {
    ring: "border-[var(--Brand-Coral,#ED3B58)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Coral,#ED3B58)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Coral,#ED3B58)]",
    bar: "bg-[var(--Brand-Coral,#ED3B58)]",
    soft: "bg-[rgba(237,59,88,0.12)] text-[var(--Brand-Coral,#ED3B58)]",
    check: "bg-[var(--Brand-Coral,#ED3B58)]",
    value: "text-[var(--Brand-Coral,#ED3B58)]",
  },
  {
    ring: "border-[var(--Brand-Deep-Blue,#3976A8)]",
    hoverBorder:
      "group-hover/cause-card:border-[var(--Brand-Deep-Blue,#3976A8)] group-hover/cause-card:ring-1 group-hover/cause-card:ring-inset group-hover/cause-card:ring-[var(--Brand-Deep-Blue,#3976A8)]",
    bar: "bg-[var(--Brand-Deep-Blue,#3976A8)]",
    soft: "bg-[rgba(57,118,168,0.12)] text-[var(--Brand-Deep-Blue,#3976A8)]",
    check: "bg-[var(--Brand-Deep-Blue,#3976A8)]",
    value: "text-[var(--Brand-Deep-Blue,#3976A8)]",
  },
] as const;

export function getCauseCardAccent(index: number) {
  return CAUSE_CARD_ACCENTS[index % CAUSE_CARD_ACCENTS.length];
}

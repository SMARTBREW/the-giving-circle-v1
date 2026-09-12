/** Shared brand accents used across cause-detail cards. */
export const CAUSE_CARD_ACCENTS = [
  {
    ring: "border-[var(--Main-CTA-button,#00A3BE)]",
    bar: "bg-[var(--Main-CTA-button,#00A3BE)]",
    soft: "bg-[rgba(0,163,190,0.12)] text-[var(--Main-CTA-button,#00A3BE)]",
    check: "bg-[var(--Main-CTA-button,#00A3BE)]",
    value: "text-[var(--Main-CTA-button,#00A3BE)]",
  },
  {
    ring: "border-[var(--Brand-Green-Teal,#00A98F)]",
    bar: "bg-[var(--Brand-Green-Teal,#00A98F)]",
    soft: "bg-[rgba(0,169,143,0.12)] text-[var(--Brand-Green-Teal,#00A98F)]",
    check: "bg-[var(--Brand-Green-Teal,#00A98F)]",
    value: "text-[var(--Brand-Green-Teal,#00A98F)]",
  },
  {
    ring: "border-[var(--Brand-Coral,#ED3B58)]",
    bar: "bg-[var(--Brand-Coral,#ED3B58)]",
    soft: "bg-[rgba(237,59,88,0.12)] text-[var(--Brand-Coral,#ED3B58)]",
    check: "bg-[var(--Brand-Coral,#ED3B58)]",
    value: "text-[var(--Brand-Coral,#ED3B58)]",
  },
  {
    ring: "border-[var(--Brand-Deep-Blue,#3976A8)]",
    bar: "bg-[var(--Brand-Deep-Blue,#3976A8)]",
    soft: "bg-[rgba(57,118,168,0.12)] text-[var(--Brand-Deep-Blue,#3976A8)]",
    check: "bg-[var(--Brand-Deep-Blue,#3976A8)]",
    value: "text-[var(--Brand-Deep-Blue,#3976A8)]",
  },
] as const;

export function getCauseCardAccent(index: number) {
  return CAUSE_CARD_ACCENTS[index % CAUSE_CARD_ACCENTS.length];
}

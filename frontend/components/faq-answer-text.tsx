import Link from "next/link";
import type { ReactNode } from "react";
import type { FaqLink } from "@/constants/faqs";

/**
 * Renders FAQ answer text with optional internal links.
 * Linked phrases must be exact substrings of `text` so visible copy matches JSON-LD.
 */
export default function FaqAnswerText({
  text,
  links,
  className,
}: {
  text: string;
  links?: readonly FaqLink[];
  className?: string;
}) {
  const paragraphs = text.split("\n\n");

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={index > 0 ? "mt-4" : undefined}
        >
          {renderWithLinks(paragraph, links)}
        </p>
      ))}
    </div>
  );
}

function renderWithLinks(
  text: string,
  links: readonly FaqLink[] | undefined,
): ReactNode {
  if (!links?.length) return text;

  // Longer labels first so overlapping phrases resolve predictably
  const ordered = [...links].sort((a, b) => b.label.length - a.label.length);
  type Piece = { start: number; end: number; href: string; label: string };
  const hits: Piece[] = [];

  for (const link of ordered) {
    let from = 0;
    while (from < text.length) {
      const start = text.indexOf(link.label, from);
      if (start === -1) break;
      const end = start + link.label.length;
      const overlaps = hits.some((h) => start < h.end && end > h.start);
      if (!overlaps) hits.push({ start, end, href: link.href, label: link.label });
      from = end;
    }
  }

  if (!hits.length) return text;

  hits.sort((a, b) => a.start - b.start);
  const nodes: ReactNode[] = [];
  let cursor = 0;

  hits.forEach((hit, i) => {
    if (hit.start > cursor) nodes.push(text.slice(cursor, hit.start));
    nodes.push(
      <Link
        key={`${hit.href}-${hit.start}-${i}`}
        href={hit.href}
        className="font-[500] text-[var(--Main-CTA-button,#02938c)] underline underline-offset-2"
      >
        {hit.label}
      </Link>,
    );
    cursor = hit.end;
  });

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

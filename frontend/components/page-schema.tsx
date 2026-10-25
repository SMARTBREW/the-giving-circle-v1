import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/constants/schema";

/** WebPage + BreadcrumbList JSON-LD for a public page. */
export default function PageSchema({
  path,
  name,
  description,
  crumb,
  crumbs,
}: {
  /** Canonical path with a trailing slash, e.g. `/about/`. */
  path: string;
  name: string;
  description: string;
  /** Last breadcrumb label when the trail is Home → this page. */
  crumb?: string;
  /** Full trail after Home. Overrides `crumb`. */
  crumbs?: readonly { name: string; path: string }[];
}) {
  const trail = crumbs ?? [{ name: crumb ?? name, path }];

  return (
    <>
      <JsonLd data={webPageSchema(path, name, description)} />
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}

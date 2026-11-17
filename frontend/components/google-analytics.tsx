/** Public GA4 measurement ID (safe to ship in the browser). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZNMJNDF71S";

/**
 * Google Analytics 4 — classic gtag snippet for the document <head>.
 * Render this inside root layout <head> so it ships sitewide.
 */
export default function GoogleAnalytics() {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== "true") return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        id="ga4-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  );
}

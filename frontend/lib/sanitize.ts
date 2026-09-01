import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(htmlContent: string): string {
  return DOMPurify.sanitize(htmlContent);
}

export function sanitizeUrl(url: string): string {
  if (url.startsWith("javascript:") || url.startsWith("data:")) {
    return "#";
  }
  return url;
}

export function safeRedirectPath(
  url: string,
  origin: string,
  fallback = "/",
): string {
  try {
    const parsed = new URL(url, origin);
    if (parsed.origin === origin) {
      return parsed.pathname;
    }
    return fallback;
  } catch {
    return fallback;
  }
}

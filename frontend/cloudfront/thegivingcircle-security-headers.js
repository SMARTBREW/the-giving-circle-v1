/**
 * CloudFront Function (viewer-response) — security headers for static S3 origin.
 * Free-tier distributions cannot attach custom Response Headers Policies;
 * this function applies the same CSP/HSTS/etc. on every response.
 */
function handler(event) {
  var response = event.response;
  var headers = response.headers;

  headers['strict-transport-security'] = {
    value: 'max-age=63072000; includeSubdomains; preload',
  };
  headers['x-content-type-options'] = { value: 'nosniff' };
  headers['x-frame-options'] = { value: 'DENY' };
  headers['referrer-policy'] = { value: 'strict-origin-when-cross-origin' };
  headers['x-xss-protection'] = { value: '1; mode=block' };
  headers['permissions-policy'] = {
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  };
  headers['content-security-policy'] = {
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://res.cloudinary.com https:; media-src 'self' blob: https://res.cloudinary.com; connect-src 'self' https://api.thegivingcircle.in https://vitals.vercel-insights.com https://va.vercel-scripts.com https://res.cloudinary.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
  };

  return response;
}

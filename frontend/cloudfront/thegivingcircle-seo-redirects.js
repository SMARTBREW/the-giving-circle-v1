/**
 * CloudFront Function (viewer-request) — SEO 301 redirects for S3 static hosting.
 * Attach to distribution E1N8EZN5Z7I1E7 on viewer-request.
 */
var CANONICAL_HOST = 'www.thegivingcircle.in';
var BASE = 'https://' + CANONICAL_HOST;

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var qs = request.querystring;
  var host = request.headers.host && request.headers.host.value
    ? request.headers.host.value
    : CANONICAL_HOST;

  function redirect(path) {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: BASE + path },
        'cache-control': { value: 'public, max-age=3600' },
      },
    };
  }

  // 1. Force canonical host: apex (and any non-www) -> https://www
  if (host !== CANONICAL_HOST) {
    var parts = [];
    for (var key in qs) {
      if (qs[key] && qs[key].value !== undefined) {
        parts.push(qs[key].value === '' ? key : key + '=' + qs[key].value);
      }
    }
    var suffix = parts.length ? '?' + parts.join('&') : '';
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: BASE + uri + suffix },
        'cache-control': { value: 'public, max-age=3600' },
      },
    };
  }

  // Strip trailing slash for matching (except root)
  var path = uri;
  if (path.length > 1 && path.charAt(path.length - 1) === '/') {
    path = path.slice(0, -1);
  }

  // /local-seo/{slug} → canonical city page
  function localSeoTarget(path) {
    if (path.indexOf('/local-seo/') !== 0) return null;
    var slug = path.slice('/local-seo/'.length);
    var variantPrefixes = [
      'top-ngo-in-',
      'verified-ngo-in-',
      'trusted-ngo-in-',
      'leading-ngo-in-',
    ];
    for (var v = 0; v < variantPrefixes.length; v++) {
      if (slug.indexOf(variantPrefixes[v]) === 0) {
        return '/ngos/best-ngo-in-' + slug.slice(variantPrefixes[v].length);
      }
    }
    if (slug === 'ngo-in-noida') return '/ngos/best-ngo-in-noida';
    if (slug === 'ngo-in-gurugram') return '/ngos/best-ngo-in-gurugram';
    if (slug.indexOf('best-ngo-in-') === 0) return '/ngos/' + slug;
    return '/ngos';
  }

  function resolveNgoSlug(slug) {
    var variantPrefixes = [
      'top-ngo-in-',
      'verified-ngo-in-',
      'trusted-ngo-in-',
      'leading-ngo-in-',
    ];
    for (var i = 0; i < variantPrefixes.length; i++) {
      if (slug.indexOf(variantPrefixes[i]) === 0) {
        return 'best-ngo-in-' + slug.slice(variantPrefixes[i].length);
      }
    }
    if (slug === 'ngo-in-noida') return 'best-ngo-in-noida';
    if (slug === 'ngo-in-gurugram') return 'best-ngo-in-gurugram';
    if (
      slug === 'best-ngo-in-delhi' ||
      slug === 'best-ngo-in-gurugram' ||
      slug === 'best-ngo-in-noida' ||
      slug === 'best-ngo-in-faridabad'
    ) {
      return slug;
    }
    return '';
  }

  var rules = {
    // Current site routes (legacy → new)
    '/live-causes': '/causes',
    '/champion': '/become-a-cause-champion',
    '/impact-stories': '/stories',
    '/impact-stories-details': '/stories',
    '/what-is-a-giving-circle': '/about',
    '/giving-circle': '/about',
    // Legacy SEO / old SPA paths
    '/local-seo': '/ngos',
    '/khushi-ngo-detail': '/causes/wings-of-hope',
    '/khushi-cause-details': '/causes/wings-of-hope',
    '/jwp-cause-details': '/causes/wings-of-hope',
    '/donate-for-education-india': '/causes/pehli-class',
    '/pehli-class-cause-details': '/causes/pehli-class',
    '/nonprofit-organizations': '/causes',
    '/ngo-detail/1': '/causes/wings-of-hope',
    '/ngo-detail/2': '/causes/pawsitive-protectors',
    '/ngo-detail/3': '/causes/wings-of-hope',
    '/ngo/animalcare-india': '/causes/pawsitive-protectors',
    '/animalcare-ngo-detail': '/causes/pawsitive-protectors',
    '/ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/animal-emergency': '/animal-emergency.html',
    '/ngos/top-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/verified-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/trusted-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/leading-ngo-in-delhi': '/ngos/best-ngo-in-delhi',
    '/ngos/top-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/verified-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/trusted-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/leading-ngo-in-gurugram': '/ngos/best-ngo-in-gurugram',
    '/ngos/top-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/verified-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/trusted-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/leading-ngo-in-noida': '/ngos/best-ngo-in-noida',
    '/ngos/top-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/verified-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/trusted-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
    '/ngos/leading-ngo-in-faridabad': '/ngos/best-ngo-in-faridabad',
  };

  if (rules[path]) {
    return redirect(rules[path]);
  }

  var localTarget = localSeoTarget(path);
  if (localTarget) {
    return redirect(localTarget);
  }

  if (path.indexOf('/ngo/') === 0 && path.toLowerCase().indexOf('jwp') !== -1) {
    return redirect('/causes/wings-of-hope');
  }

  if (path.indexOf('/ngo-detail/') === 0) {
    return redirect('/causes');
  }

  if (path.indexOf('/ngos/') === 0 && path !== '/ngos') {
    var ngoSlug = path.slice('/ngos/'.length);
    var resolvedSlug = resolveNgoSlug(ngoSlug);
    if (resolvedSlug && resolvedSlug !== ngoSlug) {
      return redirect('/ngos/' + resolvedSlug);
    }
    if (!resolvedSlug) {
      return redirect('/ngos');
    }
  }

  // Block schema placeholder crawl (legacy SearchAction URL)
  if (path === '/causes' && qs.search && qs.search.value === '{search_term_string}') {
    return redirect('/causes');
  }

  // Pretty-URL rewrite for static (SSG) hosting on an S3 REST origin:
  // extensionless "page" requests -> the pre-rendered .../index.html object.
  // Skip known extensionless assets (Next /icon route, etc.).
  var ASSET_EXACT = {
    '/icon': true,
    '/icon.png': true,
    '/apple-icon': true,
    '/apple-icon.png': true,
    '/favicon.ico': true,
  };
  if (ASSET_EXACT[path] || ASSET_EXACT[uri]) {
    return request;
  }

  var lastSlash = uri.lastIndexOf('/');
  var lastSegment = uri.substring(lastSlash + 1);
  if (lastSegment.indexOf('.') === -1) {
    if (uri.charAt(uri.length - 1) === '/') {
      request.uri = uri + 'index.html';
    } else {
      request.uri = uri + '/index.html';
    }
  }

  return request;
}

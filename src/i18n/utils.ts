import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStaticPaths() {
  // Only return non-default languages for [lang] routes
  // Default language (en) uses direct routes without prefix
  return Object.keys(ui)
    .filter(lang => lang !== defaultLang)
    .map((lang) => ({
      params: { lang },
    }));
}

// Get the path for a specific language
export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  // Remove leading slash if present
  let cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Always add trailing slash unless empty
  if (cleanPath && !cleanPath.endsWith('/')) {
    cleanPath += '/';
  }
  // For default language (en), don't add prefix
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }
  // For other languages, add language prefix
  return `/${lang}/${cleanPath}`;
}

// Get current path without language prefix
export function getPathWithoutLang(url: URL) {
  const pathSegments = url.pathname.split('/').filter(Boolean);
  
  // If first segment is a language, remove it
  if (pathSegments.length > 0 && pathSegments[0] in ui) {
    pathSegments.shift();
  }
  
  return '/' + pathSegments.join('/');
}

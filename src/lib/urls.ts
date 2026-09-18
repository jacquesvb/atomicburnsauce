const RAW_BASE = import.meta.env.BASE_URL || '/';

export const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;

const isAbsoluteUrl = (path: string) =>
  /^[a-z][a-z0-9+.-]*:\/\//i.test(path) || path.startsWith('//');

export function withBase(path = '/'): string {
  if (isAbsoluteUrl(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path;
  }

  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;

  if (base && (clean === base || clean.startsWith(`${base}/`))) {
    return clean;
  }

  return `${base}${clean}` || '/';
}

export function absolute(path: string, site?: URL | string): string {
  const origin = site ?? 'https://atomicburnsauce.com';
  return new URL(withBase(path), origin).toString();
}

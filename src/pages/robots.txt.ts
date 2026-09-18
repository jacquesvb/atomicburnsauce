import type { APIRoute } from 'astro';
import { absolute } from '../lib/urls';

export const GET: APIRoute = ({ site }) => {
  const sitemap = absolute('/sitemap-index.xml', site);
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

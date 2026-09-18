import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/posts';
import { absolute } from '../lib/urls';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const site = context.site?.toString() ?? 'https://atomicburnsauce.com';

  return rss({
    title: 'AtomicBurnsauce',
    description: 'Notes, sounds, and moving pictures.',
    site: absolute('/', site),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: absolute(`/blog/${post.id}/`, site),
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}

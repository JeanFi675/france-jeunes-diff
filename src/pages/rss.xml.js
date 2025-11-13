import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: 'Championnats de France Jeunes Escalade 2026 - Blog',
    description: 'Actualités et articles des Championnats de France Jeunes Escalade 2026',
    site: context.site,
    items: blog
      .sort((a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link: `/blog/${post.slug}`,
        categories: post.data.tags || [],
      })),
    customData: `<language>fr-fr</language>`,
  });
}

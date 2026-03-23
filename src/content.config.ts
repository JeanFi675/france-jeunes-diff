import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';
import { getFlickrAlbumInfo } from './lib/flickr';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    flickrAlbumUrl: z.string().url().optional(),
  }).transform(async (data) => {
    if (data.flickrAlbumUrl && data.flickrAlbumUrl.includes('/photos/')) {
      const { title: flickrTitle } = await getFlickrAlbumInfo(data.flickrAlbumUrl);
      return {
        ...data,
        albumTitle: flickrTitle,
        photoCredit: 'Marie-Pierre LAFONTAINE',
      };
    }
    return {
      ...data,
      albumTitle: undefined,
      photoCredit: undefined,
    };
  }),
});

export const collections = {
  blog: blogCollection,
};

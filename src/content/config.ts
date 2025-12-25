import { defineCollection, z } from 'astro:content';
import { getFlickrAlbumInfo } from '../lib/flickr';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    flickrAlbumUrl: z.string().url().optional(),
  }).transform(async (data) => {
    // Si une URL Flickr est fournie, récupère automatiquement le titre
    // Le crédit photo est toujours Marie-Pierre LAFONTAINE
    // Si c'est une vidéo, on ne fait rien de spécial côté métadonnées
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


import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';


export const prerender = false;

export const GET: APIRoute = async () => {
  if (import.meta.env.PROD) {
    return new Response(JSON.stringify({ error: 'Not available in production' }), {
      status: 404,
    });
  }

  const blogDir = path.join(process.cwd(), 'src/content/blog');

  try {
    if (!fs.existsSync(blogDir)) {
      return new Response(JSON.stringify({ files: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.md'));

    return new Response(JSON.stringify({ files }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
     return new Response(JSON.stringify({ error: 'Failed to read directory' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

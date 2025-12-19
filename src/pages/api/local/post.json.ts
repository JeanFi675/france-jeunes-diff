
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = false;

export const GET: APIRoute = async ({ url, request }) => {
  console.log('API Request URL:', url.toString());
  console.log('API Request SearchParams:', url.searchParams.toString());
  
  if (import.meta.env.PROD) {
    return new Response(JSON.stringify({ error: 'Not available in production' }), {
      status: 404,
    });
  }

  const filename = url.searchParams.get('file');
  console.log('Requested filename:', filename);

  if (!filename) {
    return new Response(JSON.stringify({ error: 'File parameter is required', url: url.toString() }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic security: simple check to avoid directory traversal
  // We assume the user is trusted in local dev, but still good practice to lock to a dir.
  const safeFilename = path.basename(filename); 
  const filePath = path.join(process.cwd(), 'src/content/blog', safeFilename);

  if (!filePath.startsWith(path.join(process.cwd(), 'src/content/blog'))) {
      return new Response(JSON.stringify({ error: 'Invalid file path' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
      });
  }

  try {
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (import.meta.env.PROD) {
    return new Response(JSON.stringify({ error: 'Not available in production' }), {
      status: 404,
    });
  }

  try {
    const body = await request.json();
    const { file, content } = body;

    if (!file || content === undefined) {
      return new Response(JSON.stringify({ error: 'File and content are required' }), {
        status: 400,
      });
    }

    const safeFilename = path.basename(file);
    const filePath = path.join(process.cwd(), 'src/content/blog', safeFilename);
    
     if (!filePath.startsWith(path.join(process.cwd(), 'src/content/blog'))) {
          return new Response(JSON.stringify({ error: 'Invalid file path' }), {
              status: 403,
              headers: { 'Content-Type': 'application/json' },
          });
      }

    fs.writeFileSync(filePath, content, 'utf-8');

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to save file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

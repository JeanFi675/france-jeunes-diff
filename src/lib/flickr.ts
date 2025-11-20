/**
 * Décode les entités HTML (&#x27; -> ', &amp; -> &, etc.)
 */
function decodeHTMLEntities(text: string): string {
  const entities: { [key: string]: string } = {
    '&#x27;': "'",
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&nbsp;': ' ',
    '&#39;': "'",
  };

  let decoded = text;
  // Traite aussi les entités numériques génériques
  decoded = decoded.replace(/&#(\d+);/g, (match, code) => {
    return String.fromCharCode(parseInt(code, 10));
  });
  decoded = decoded.replace(/&#x([0-9a-f]+);/gi, (match, code) => {
    return String.fromCharCode(parseInt(code, 16));
  });

  // Traite les entités nommées
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.split(entity).join(char);
  }

  return decoded;
}

/**
 * Récupère les informations d'un album Flickr
 * @param albumUrl URL de l'album Flickr
 * @returns Titre et crédit du photographe
 */
export async function getFlickrAlbumInfo(albumUrl: string) {
  try {
    // Extrait l'ID utilisateur et l'ID d'album de l'URL
    const match = albumUrl.match(/\/photos\/([^/]+)\/albums\/(\d+)/);
    if (!match) {
      console.warn(`Format d'URL Flickr invalide: ${albumUrl}`);
      return { title: null, photographer: null };
    }

    const [, userId, albumId] = match;

    // Récupère la page HTML de l'album Flickr
    const response = await fetch(`https://www.flickr.com/photos/${userId}/albums/${albumId}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!response.ok) {
      console.warn(`Impossible de récupérer l'album Flickr: ${response.statusText}`);
      return { title: null, photographer: null };
    }

    const html = await response.text();

    // Extrait le titre de l'album depuis la balise meta
    let title = null;

    // Cherche dans les meta tags (plus fiable que le HTML direct)
    const metaMatch = html.match(/<meta name="title" content="([^"]+)"/);
    if (metaMatch) {
      title = metaMatch[1].trim();
      // Décode les entités HTML
      title = decodeHTMLEntities(title);
    }

    // Extrait le nom du photographe - cherche dans les données JSON ou le HTML
    let photographer = null;

    // Essaye d'abord de trouver dans les données structurées (JSON-LD ou data attributes)
    const jsonMatch = html.match(/"name":"([^"]+)".*?"owner":/);
    if (jsonMatch) {
      photographer = jsonMatch[1].trim();
    }

    // Si pas trouvé, cherche dans le HTML classique
    if (!photographer) {
      const photoPatterns = [
        /class="[^"]*owner-name[^"]*"[^>]*>([^<]+)<\/a>/,
        /class="[^"]*photog[^"]*"[^>]*>([^<]+)<\/a>/,
        /by\s+<a[^>]*>([^<]+)<\/a>/i,
      ];

      for (const pattern of photoPatterns) {
        const match = html.match(pattern);
        if (match) {
          photographer = match[1].trim();
          break;
        }
      }
    }

    return { title, photographer };
  } catch (error) {
    console.error(`Erreur lors de la récupération des infos Flickr: ${error}`);
    return { title: null, photographer: null };
  }
}

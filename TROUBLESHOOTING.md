# 🔧 Guide de Dépannage - Astro + GitHub Pages

## 🚨 Problème : CSS ne se charge pas sur GitHub Pages

### Symptômes
- Le site fonctionne parfaitement en local (`npm run dev`)
- Sur GitHub Pages, le site s'affiche sans styles CSS (aspect basique HTML)
- Les assets (images, JS) peuvent également ne pas se charger

### Cause Racine
Quand un site Astro est déployé sur GitHub Pages dans un sous-répertoire (ex: `https://username.github.io/repository-name/`), les liens vers les assets CSS, JS et images sont générés sans le préfixe du répertoire.

**Exemple du problème :**
- ❌ Lien généré : `href="/assets/style.css"`
- ✅ Lien attendu : `href="/repository-name/assets/style.css"`

### ⚡ Solution Définitive

Dans `astro.config.ts`, utiliser la configuration `build.assetsPrefix` :

```typescript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name/',
  
  build: {
    assets: 'assets',
    assetsPrefix: '/repository-name/', // 🔑 Solution clé
  },
  
  // ❌ NE PAS utiliser vite.base pour les assets
  vite: {
    // base: '/repository-name/', // Cause des problèmes
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
```

### 🔍 Vérification de la Solution

1. **Build local :**
   ```bash
   npm run build
   ```

2. **Vérifier le HTML généré :**
   ```bash
   grep -E "(href.*\.css|src.*\.js)" dist/index.html
   ```
   
   Doit afficher des liens avec le préfixe :
   ```html
   <link href="/repository-name/assets/style.css" rel="stylesheet">
   <script src="/repository-name/assets/script.js"></script>
   ```

3. **Test en ligne :**
   - Aller sur `https://username.github.io/repository-name/`
   - Ouvrir les DevTools → Network
   - Vérifier que les CSS se chargent (statut 200)

### ❌ Solutions qui NE marchent PAS

1. **`vite.base`** - Cause des doubles slashes et des chemins incorrects
2. **Seulement `base`** - Ne préfixe pas les assets
3. **Modification manuelle des templates** - Trop complexe et non maintenable

### 📝 Configuration Complète Recommandée

```typescript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Configuration de base
  output: 'static',
  site: 'https://username.github.io',
  base: '/repository-name/',
  trailingSlash: 'always',
  
  // Configuration build (ESSENTIEL pour GitHub Pages)
  build: {
    assets: 'assets',           // Évite les underscores _astro
    assetsPrefix: '/repository-name/', // Préfixe tous les assets
  },
  
  // Intégrations
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  
  // Vite (sans base pour les assets)
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
```

### 🛠 GitHub Actions Workflow

Assurer que le workflow utilise l'action officielle Astro :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Install, build, and upload
        uses: withastro/action@v4
```

### 🔗 Fichiers Essentiels

1. **`public/.nojekyll`** - Fichier vide pour éviter Jekyll
2. **Permissions GitHub Pages** - Actions → Settings → Pages → Source: GitHub Actions

### 📚 Ressources

- [Documentation Astro GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Configuration assetsPrefix](https://docs.astro.build/en/reference/configuration-reference/#buildassetsprefix)

---

**💡 Résumé :** Le paramètre `build.assetsPrefix` est LA solution pour les problèmes de CSS sur GitHub Pages avec Astro.
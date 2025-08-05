# Guide complet : Site de compétition d'escalade avec Astro + GitHub Pages

## 📋 Vue d'ensemble du projet

### Objectifs
- **Landing page moderne** pour une compétition d'escalade avec effet "wow"
- **Blog intégré** pour articles hebdomadaires sur l'organisation
- **Système de newsletter** pour 100-500 abonnés
- **Gestion sans code** pour contributeurs non-techniques
- **Hébergement gratuit** sur GitHub Pages avec domaine personnalisé
- **Backend** via NocoDB et n8n uniquement

### Stack technique
- **Framework** : Astro (moderne, rapide, SEO-friendly)
- **Style** : Tailwind CSS
- **CMS** : Decap CMS (ex-Netlify CMS)
- **Newsletter** : n8n + NocoDB + Brevo
- **Hébergement** : GitHub Pages
- **Domaine** : xxxx.caflarochebonneville.fr

### Coût total : 0€
Toutes les solutions choisies sont gratuites pour votre volume d'utilisation.

## 🚀 Installation pas à pas

### Prérequis
- Compte GitHub
- Node.js installé (version 18 ou supérieure)
- Git installé

### Étape 1 : Créer le projet Astro (30 minutes)

```bash
# Créer le projet avec le template AstroWind
npm create astro@latest competition-escalade -- --template onwidget/astrowind

# Naviguer dans le dossier
cd competition-escalade

# Installer les dépendances
npm install

# Tester localement
npm run dev
```

Ouvrez http://localhost:4321 pour voir votre site.

### Étape 2 : Initialiser GitHub et déployer (15 minutes)

```bash
# Initialiser Git
git init
git add .
git commit -m "Initial commit - Competition escalade"

# Créer un repo sur GitHub (via l'interface web)
# Puis connecter votre projet local
git remote add origin https://github.com/VOTRE-USERNAME/competition-escalade
git push -u origin main
```

### Étape 3 : Configurer GitHub Pages (20 minutes)

1. Créez le fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi
          
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}
          
      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}
        
      - name: Build with Astro
        run: |
          ${{ steps.detect-package-manager.outputs.runner }} astro build
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Dans les paramètres GitHub :
   - Allez dans Settings → Pages
   - Source : GitHub Actions
   - Le site sera disponible à : https://VOTRE-USERNAME.github.io/competition-escalade

### Étape 4 : Configurer le domaine personnalisé (30 minutes)

1. Créez le fichier `public/CNAME` :
```
xxxx.caflarochebonneville.fr
```

2. Dans votre zone DNS (chez votre registrar) :
   - Créez un enregistrement CNAME
   - De : `xxxx`
   - Vers : `VOTRE-USERNAME.github.io`

3. Dans GitHub Settings → Pages :
   - Custom domain : `xxxx.caflarochebonneville.fr`
   - Enforce HTTPS : ✓

## 📝 Configuration de Decap CMS (1 heure)

### Installation

1. Créez `public/admin/index.html` :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin - Compétition Escalade</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

2. Créez `public/admin/config.yml` :

```yaml
backend:
  name: github
  repo: VOTRE-USERNAME/competition-escalade
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
  cms_label_prefix: decap-cms/

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

locale: 'fr'

collections:
  - name: "blog"
    label: "Articles"
    folder: "src/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Titre", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Date de publication", name: "pubDate", widget: "datetime"}
      - {label: "Image principale", name: "image", widget: "image", required: false}
      - {label: "Catégorie", name: "category", widget: "select", options: ["Organisation", "Bénévoles", "Compétition", "Sponsors"]}
      - {label: "Contenu", name: "body", widget: "markdown"}

  - name: "pages"
    label: "Pages"
    files:
      - label: "Page d'accueil"
        name: "home"
        file: "src/data/homepage.json"
        fields:
          - {label: "Titre principal", name: "hero_title", widget: "string"}
          - {label: "Sous-titre", name: "hero_subtitle", widget: "string"}
          - {label: "Texte du bouton", name: "hero_cta", widget: "string"}
          - {label: "Date de l'événement", name: "event_date", widget: "datetime"}
          - label: "Sections"
            name: "sections"
            widget: "list"
            fields:
              - {label: "Titre", name: "title", widget: "string"}
              - {label: "Contenu", name: "content", widget: "markdown"}
```

### Configuration OAuth GitHub

1. Créez une OAuth App sur GitHub :
   - Settings → Developer settings → OAuth Apps → New OAuth App
   - Application name : `CMS Competition Escalade`
   - Homepage URL : `https://xxxx.caflarochebonneville.fr`
   - Callback URL : `https://api.netlify.com/auth/done`

2. Notez le Client ID et Client Secret

3. Utilisez Netlify (gratuit) pour l'authentification :
   - Créez un compte Netlify
   - Site settings → Identity → Enable Git Gateway
   - Ajoutez vos credentials GitHub OAuth

## 📧 Configuration Newsletter avec n8n et NocoDB (3 heures)

### Partie 1 : Setup NocoDB

1. Créez un compte gratuit sur [NocoDB Cloud](https://app.nocodb.com)

2. Créez une base de données `newsletter_escalade`

3. Créez une table `subscribers` avec les colonnes :
   - `id` (Auto increment)
   - `email` (Email, Required, Unique)
   - `nom` (Single line text)
   - `prenom` (Single line text)
   - `date_inscription` (DateTime, Default: NOW)
   - `statut` (Single select: actif, desabonne)
   - `token_desinscription` (Single line text)

### Partie 2 : Setup n8n

1. Créez un compte gratuit sur [n8n Cloud](https://app.n8n.io)

2. Créez un workflow "Inscription Newsletter" :

```json
{
  "name": "Inscription Newsletter Escalade",
  "nodes": [
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "webhookId": "inscription-newsletter",
      "parameters": {
        "path": "inscription-newsletter",
        "responseMode": "onReceived",
        "responseData": "allEntries"
      }
    },
    {
      "name": "Validation Email",
      "type": "n8n-nodes-base.if",
      "position": [450, 300],
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{$json.email}}",
              "operation": "regex",
              "value2": "^[^@]+@[^@]+\\.[^@]+$"
            }
          ]
        }
      }
    },
    {
      "name": "NocoDB - Vérifier doublon",
      "type": "n8n-nodes-base.nocodb",
      "position": [650, 300],
      "parameters": {
        "operation": "list",
        "tableId": "VOTRE_TABLE_ID",
        "filterType": "manual",
        "filters": {
          "conditions": [
            {
              "field": "email",
              "condition": "eq",
              "value": "={{$json.email}}"
            }
          ]
        }
      }
    },
    {
      "name": "NocoDB - Créer abonné",
      "type": "n8n-nodes-base.nocodb",
      "position": [850, 300],
      "parameters": {
        "operation": "create",
        "tableId": "VOTRE_TABLE_ID",
        "fieldsUi": {
          "fieldValues": [
            {
              "fieldName": "email",
              "fieldValue": "={{$json.email}}"
            },
            {
              "fieldName": "nom",
              "fieldValue": "={{$json.nom}}"
            },
            {
              "fieldName": "prenom",
              "fieldValue": "={{$json.prenom}}"
            },
            {
              "fieldName": "statut",
              "fieldValue": "actif"
            },
            {
              "fieldName": "token_desinscription",
              "fieldValue": "={{$random.uuid}}"
            }
          ]
        }
      }
    },
    {
      "name": "Brevo - Email bienvenue",
      "type": "n8n-nodes-base.brevo",
      "position": [1050, 300],
      "parameters": {
        "operation": "send",
        "subject": "Bienvenue à la compétition d'escalade !",
        "fromEmail": "competition@caflarochebonneville.fr",
        "toEmail": "={{$json.email}}",
        "templateId": "1",
        "jsonParameters": true,
        "options": {
          "params": {
            "PRENOM": "={{$json.prenom}}",
            "TOKEN": "={{$json.token_desinscription}}"
          }
        }
      }
    }
  ]
}
```

3. Récupérez l'URL du webhook pour l'intégrer dans votre formulaire

### Partie 3 : Formulaire Newsletter sur le site

Créez `src/components/Newsletter.astro` :

```astro
---
const webhookUrl = import.meta.env.PUBLIC_N8N_WEBHOOK_URL || 'https://VOTRE-INSTANCE.n8n.io/webhook/inscription-newsletter';
---

<section class="bg-gray-900 py-16">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">
      Restez informé de la compétition
    </h2>
    
    <form 
      id="newsletter-form" 
      class="max-w-md mx-auto"
      data-webhook-url={webhookUrl}
    >
      <div class="mb-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Votre email"
          class="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
        />
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          class="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
        />
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          class="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-orange-500 focus:outline-none"
        />
      </div>
      
      <button
        type="submit"
        class="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        S'inscrire à la newsletter
      </button>
      
      <div id="newsletter-message" class="mt-4 text-center hidden"></div>
    </form>
  </div>
</section>

<script>
  const form = document.getElementById('newsletter-form') as HTMLFormElement;
  const message = document.getElementById('newsletter-message');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch(form.dataset.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        message.textContent = 'Inscription réussie ! Vérifiez votre boîte mail.';
        message.className = 'mt-4 text-center text-green-400';
        form.reset();
      } else {
        throw new Error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      message.textContent = 'Une erreur est survenue. Veuillez réessayer.';
      message.className = 'mt-4 text-center text-red-400';
    }
    
    message.classList.remove('hidden');
  });
</script>
```

## 🎨 Personnalisation pour la compétition d'escalade

### Structure des pages

```
src/
├── pages/
│   ├── index.astro          # Landing page
│   ├── programme.astro      # Programme de la compétition
│   ├── benevoles.astro      # Appel aux bénévoles
│   ├── inscriptions.astro   # Inscriptions compétiteurs
│   └── blog/
│       └── [...slug].astro  # Articles de blog
├── content/
│   └── blog/
│       ├── 2025-01-15-lancement-competition.md
│       └── 2025-01-22-recherche-benevoles.md
├── components/
│   ├── Hero.astro           # Section hero avec compte à rebours
│   ├── Categories.astro     # Catégories de compétition
│   ├── Sponsors.astro       # Logos partenaires
│   └── Newsletter.astro     # Formulaire newsletter
└── layouts/
    └── Layout.astro         # Layout principal
```

### Exemple de composant Hero avec animations

Créez `src/components/Hero.astro` :

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/escalade-hero.jpg';

const eventDate = new Date('2025-06-15T09:00:00');
---

<section class="relative h-screen flex items-center justify-center overflow-hidden">
  <!-- Image de fond -->
  <div class="absolute inset-0 z-0">
    <Image 
      src={heroImage} 
      alt="Compétition d'escalade" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  
  <!-- Contenu -->
  <div class="relative z-10 text-center text-white px-4">
    <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
      Compétition d'Escalade 2025
    </h1>
    <p class="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
      15-16 Juin • La Roche-sur-Foron
    </p>
    
    <!-- Compte à rebours -->
    <div id="countdown" class="flex justify-center gap-4 mb-8">
      <div class="bg-orange-500 rounded-lg p-4 animate-fade-in-up animation-delay-400">
        <div class="text-3xl font-bold" id="days">00</div>
        <div class="text-sm">Jours</div>
      </div>
      <div class="bg-orange-500 rounded-lg p-4 animate-fade-in-up animation-delay-500">
        <div class="text-3xl font-bold" id="hours">00</div>
        <div class="text-sm">Heures</div>
      </div>
      <div class="bg-orange-500 rounded-lg p-4 animate-fade-in-up animation-delay-600">
        <div class="text-3xl font-bold" id="minutes">00</div>
        <div class="text-sm">Minutes</div>
      </div>
    </div>
    
    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-700">
      <a href="/inscriptions" class="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all hover:scale-105">
        S'inscrire à la compétition
      </a>
      <a href="/benevoles" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
        Devenir bénévole
      </a>
    </div>
  </div>
  
  <!-- Indicateur de scroll -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
  }
  
  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-400 { animation-delay: 0.4s; }
  .animation-delay-500 { animation-delay: 0.5s; }
  .animation-delay-600 { animation-delay: 0.6s; }
  .animation-delay-700 { animation-delay: 0.7s; }
</style>

<script define:vars={{ eventDate }}>
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = new Date(eventDate).getTime() - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 60000); // Update every minute
</script>
```

## 📊 Configuration SEO et performances

### astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://xxxx.caflarochebonneville.fr',
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  image: {
    domains: ['images.unsplash.com'],
  },
});
```

## 📱 Workflow pour les contributeurs

### Pour publier un article de blog

1. Aller sur `https://xxxx.caflarochebonneville.fr/admin`
2. Se connecter avec son compte GitHub
3. Cliquer sur "Articles" → "Nouvel article"
4. Remplir les champs :
   - Titre
   - Description
   - Image (glisser-déposer)
   - Catégorie
   - Contenu (éditeur markdown visuel)
5. Cliquer sur "Publier"
6. L'article apparaît automatiquement sur le site

### Pour modifier la page d'accueil

1. Dans l'admin, aller sur "Pages" → "Page d'accueil"
2. Modifier les textes
3. Sauvegarder
4. Les changements sont visibles en 2-3 minutes

## 🚀 Commandes utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Mettre à jour Astro
npm run astro update

# Vérifier les problèmes
npm run astro check
```

## 📈 Évolution future

### Si la newsletter dépasse 500 abonnés
1. Passer à Brevo Lite (19€/mois pour 20k emails)
2. Ou migrer vers n8n self-hosted (10€/mois VPS)

### Si le site devient plus complexe
1. Ajouter Astro DB pour données dynamiques
2. Intégrer Stripe pour paiements inscriptions
3. Ajouter authentification pour espace compétiteur

### Pour plus d'animations
1. Installer GSAP : `npm i gsap`
2. Ou Framer Motion avec React : `npm i @astrojs/react framer-motion`

## 🆘 Support et ressources

- **Documentation Astro** : https://docs.astro.build
- **Decap CMS** : https://decapcms.org/docs
- **n8n** : https://docs.n8n.io
- **NocoDB** : https://docs.nocodb.com
- **Communauté Astro France** : Discord Astro

## ✅ Checklist de lancement

- [ ] Projet Astro créé et fonctionnel localement
- [ ] Repository GitHub configuré
- [ ] GitHub Actions déployé
- [ ] Domaine personnalisé configuré
- [ ] Decap CMS installé et OAuth configuré
- [ ] Comptes NocoDB et n8n créés
- [ ] Workflow newsletter testé
- [ ] Premier article de blog publié
- [ ] Formation des contributeurs effectuée
- [ ] Site en ligne et accessible !

---

*Dernière mise à jour : Août 2025*
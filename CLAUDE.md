# CLAUDE.md - Competition Escalade Project

## Project Overview

Site web pour une compétition d'escalade avec Astro, GitHub Pages, et gestion de contenu simplifiée.

### Tech Stack

- **Framework**: Astro v5.7.3 avec template AstroWind
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (pour gestion de contenu sans code)
- **Newsletter**: n8n + NocoDB + Brevo (à configurer)
- **Hosting**: GitHub Pages
- **Domain**: À configurer sur xxxx.caflarochebonneville.fr

## Project Structure

```
/
├── src/
│   ├── pages/           # Pages du site
│   ├── components/      # Composants réutilisables
│   ├── content/         # Contenu du blog
│   ├── layouts/         # Layouts de page
│   └── assets/          # Images et styles
├── public/              # Fichiers statiques
│   └── admin/           # Interface Decap CMS
└── .github/workflows/   # CI/CD avec GitHub Actions
```

## Commands

```bash
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Linter le code
npm run format    # Formater le code
```

## Development Guidelines

### Git Workflow

- Branch principale: `main`
- Déploiement automatique via GitHub Actions
- Commits réguliers avec messages descriptifs

### Content Management

- Articles de blog dans `src/content/blog/`
- Configuration Decap CMS dans `public/admin/`
- Images dans `src/assets/images/`

### Styling

- Utiliser Tailwind CSS classes
- Composants dans `src/components/`
- Respecter le design system AstroWind

## TODO

- [ ] Configurer le domaine personnalisé
- [ ] Personnaliser le design pour l'escalade
- [ ] Configurer Decap CMS avec OAuth GitHub
- [ ] Implémenter le système de newsletter
- [ ] Créer les pages spécifiques (programme, bénévoles, inscriptions)
- [ ] Ajouter le composant Hero avec compte à rebours
- [ ] Intégrer les premiers articles de blog

## Deployment

Le site se déploie automatiquement sur GitHub Pages à chaque push sur `main`.
URL temporaire: https://JeanFi675.github.io/france-jeunes-diff

## Resources

- [Guide original](./competition-escalade-astro-guide.md)
- [Astro Docs](https://docs.astro.build)
- [AstroWind Theme](https://github.com/onwidget/astrowind)
- [Tailwind CSS](https://tailwindcss.com)

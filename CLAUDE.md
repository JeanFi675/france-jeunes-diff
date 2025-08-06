# CLAUDE.md - Championnats de France Escalade 2026

## 🎯 Vue d'ensemble du projet

Landing page **100% statique** pour les Championnats de France Jeunes Difficulté 2026 à Saint-Pierre-en-Faucigny.

**Philosophie du projet** : ZÉRO JavaScript client, architecture ultra-minimaliste, style néo-brutaliste inspiré de l'affiche officielle.

## 🛠️ Stack technique

**Framework** : Astro v5.7.3 (SSG uniquement)  
**Styling** : CSS pur avec variables custom  
**Fonts** : Impact, Space Grotesk, Space Mono (Google Fonts)  
**Hosting** : GitHub Pages  
**Build** : GitHub Actions avec rebuild quotidien  
**Performance** : Time to Interactive = 0ms (pas de JS)

## 🎨 Design System Néo-Brutaliste

### Palette de couleurs (affiche Saint-Étienne)
```css
--brutal-black: #000000;
--brutal-mint: #7FE5B0;    /* Vert menthe signature */
--brutal-white: #FFFFFF;
--brutal-gray: #1A1A1A;    /* Textes secondaires */
```

### Typographie
```css
--font-heading: 'Impact', 'Arial Black', sans-serif;      /* Titres écrasés */
--font-body: 'Space Grotesk', sans-serif;                 /* Corps */
--font-mono: 'Space Mono', monospace;                     /* Accents */
```

### Effets signature
- **Rotations** : -3deg à +3deg aléatoires
- **Ombres** : box-shadow dures SANS blur
- **Bordures** : 4px minimum
- **Hover** : translate(-4px, -4px) + shadow agrandie
- **Animations** : @keyframes CSS uniquement

## 📁 Architecture du code

```
src/
├── components/
│   ├── atoms/              # Composants de base réutilisables
│   │   ├── BrutalButton.astro     # Boutons avec effets
│   │   ├── BrutalHeading.astro    # Titres Impact
│   │   └── BrutalBadge.astro      # Badges rotatés
│   ├── blocks/             # Sections de la landing page
│   │   ├── HeroSection.astro      # Hero avec titre géant
│   │   ├── EventDateSection.astro # J-XXX calculé au build
│   │   ├── ProgramSection.astro   # 2 cartes overlap
│   │   ├── VenueSection.astro     # Lieu + carte statique
│   │   ├── StatsSection.astro     # Chiffres outline
│   │   └── CTASection.astro       # Boutons + footer
│   └── layout/
│       └── BaseLayout.astro       # Layout unique
├── pages/
│   └── index.astro         # Page finale assemblée
└── styles/
    └── brutal.css          # CSS néo-brutaliste global
```

## 🔧 Commandes

```bash
npm run dev      # Serveur développement
npm run build    # Build statique pour GitHub Pages
npm run preview  # Prévisualisation locale du build
```

## 🎨 Composants disponibles

### BrutalButton
```astro
<BrutalButton href="/contact" variant="primary" rotation={-2}>
  Contact
</BrutalButton>
```
**Variants** : `primary`, `secondary`, `outline`

### BrutalHeading  
```astro
<BrutalHeading level={1} shadow={true} glitch={false} rotation={-1}>
  Titre Impact
</BrutalHeading>
```

### BrutalBadge
```astro
<BrutalBadge variant="mint" animated={true} rotation={2}>
  FFME OFFICIEL
</BrutalBadge>
```

## 📋 Contenus et données

### Événement
- **Dates** : 16-17 mai 2026
- **Lieu** : Complexe sportif du Pays Rochois, Saint-Pierre-en-Faucigny (74)
- **Participants** : ~300 jeunes grimpeurs
- **Catégories** : U15, U17, U19 (filles/garçons)

### Contact organisation
**Email** : j.duheron@caflarochebonneville.fr  
**Club** : CAF La Roche Bonneville  
**Adresse** : 110 rue des Alpes, 74800 Saint-Pierre-en-Faucigny

### Programme
**Samedi 16 mai** : Qualifications toutes catégories  
**Dimanche 17 mai** : Finales + remise des prix + live streaming

## 🚀 Déploiement GitHub Pages

### Configuration
- **Repo** : `JeanFi675/france-jeunes-diff`
- **URL** : `https://JeanFi675.github.io/france-jeunes-diff`
- **Branch de déploiement** : `gh-pages` (automatique)

### GitHub Actions
```yaml
# Rebuild quotidien à 5h pour mettre à jour J-XXX
- cron: '0 5 * * *'
# Build à chaque push sur main
```

## 🎯 Principes de développement

### DRY (Don't Repeat Yourself)
- CSS custom properties pour toutes les valeurs
- Composants atomiques réutilisables
- Props pour variations au build time

### KISS (Keep It Simple Stupid)  
- **ZÉRO JavaScript client**
- Une seule page HTML finale
- CSS vanilla sans preprocesseur
- Architecture plate (max 2 niveaux)

### SOLID (adapté au statique)
- **Single Responsibility** : 1 composant = 1 bloc HTML
- **Open/Closed** : Props pour variations au build
- **Interface Segregation** : Slots Astro pour contenu flexible

## ⚡ Performance garantie

- **TTI** : 0ms (pas de JS à exécuter)
- **Lighthouse** : 100/100 Performance
- **Taille** : ~50KB HTML+CSS (gzipped)
- **Compatible** : JavaScript désactivé

## 🔍 Maintenance

### Mise à jour du countdown
- **Automatique** : Rebuild quotidien via GitHub Actions
- **Manuel** : Push sur main déclenche rebuild
- **Calcul** : Au build time dans `EventDateSection.astro`

### Modification de contenu
- **Textes** : Directement dans les composants `.astro`
- **Couleurs** : Variables CSS dans `brutal.css`  
- **Fonts** : Import Google Fonts dans `BaseLayout.astro`

### Debug build
```bash
npm run build    # Vérifier erreurs de build
npm run preview  # Tester en local avant push
```

## 🎨 Conventions de code

### Nommage
- **Composants** : PascalCase (ex: `BrutalButton`)
- **Props** : camelCase (ex: `rotation`, `isAnimated`)
- **CSS** : kebab-case (ex: `brutal-section`, `brutal-btn`)
- **Variables** : kebab-case (ex: `--brutal-mint`)

### CSS
- **Pas de preprocesseur** : CSS vanilla uniquement
- **Custom properties** : Préfixées `--brutal-*`
- **Classes** : Préfixées `.brutal-*`
- **Animations** : Nommées `@keyframes brutal-*`

### Structure fichiers
- **1 composant** = 1 fichier `.astro`
- **Imports relatifs** : `../atoms/`, `../blocks/`
- **Props TypeScript** : Interface exportée en haut
- **Styles scoped** : `<style>` dans composant si nécessaire

## 🎯 Objectifs qualité

- **Accessibilité** : HTML sémantique, contrastes respectés
- **SEO** : Meta tags, titre descriptif, description
- **Mobile** : CSS responsive mobile-first
- **Navigateurs** : Compatible tous navigateurs modernes

## 📚 Ressources

- **Specs complètes** : `LANDING_PAGE_SPECS.md`
- **Astro docs** : https://docs.astro.build
- **Google Fonts** : Impact, Space Grotesk, Space Mono
- **Affiche référence** : `AFFICHE-CHPT-FRANCE-2025-ST-ETIENNE-J-1-283x400.jpg`
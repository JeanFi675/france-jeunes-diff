# Architecture du Projet

Le projet est construit avec **Astro**, un framework web moderne conçu pour la vitesse, utilisant une architecture en "îlots" (Island Architecture).

## Pile Technique

- **Framework** : [Astro v5+](https://astro.build/)
- **Langage** : TypeScript
- **Styles** : Vanilla CSS avec variables globales (`src/styles/`)
- **Linter** : ESLint + Prettier
- **Scripts** : JavaScript / TypeScript natif

## Structure des Dossiers

```text
/
├── docs/           # Documentation technique (ici)
├── public/         # Fichiers statiques (images, vidéos, polices)
├── src/
│   ├── components/ # Composants UI (Atomic Design)
│   │   ├── atoms/  # Petites unités (boutons, badges, cartes)
│   │   ├── blocks/ # Sections de page (Hero, Partners, Contact)
│   │   └── layout/ # Structures globales (BaseLayout)
│   ├── content/    # Contenu géré par Astro (Blog)
│   ├── data/       # Données de configuration (competition-data.js)
│   ├── lib/        # Utilitaires et bibliothèques simples
│   ├── pages/      # Routes du site (index.astro, blog, admin)
│   ├── scripts/    # Logique client-side (modals, utils)
│   └── styles/     # Fichiers CSS globaux
└── astro.config.ts # Configuration Astro
```

## Flux de Données

Le projet utilise une approche **DRY (Don't Repeat Yourself)** en centralisant les informations de l'événement dans `src/data/competition-data.js`.

1. Les données sont éditées dans `competition-data.js`.
2. Les composants Astro importent cet objet pour afficher les textes, liens et images.
3. Lors de la compilation (`astro build`), Astro génère des fichiers HTML statiques ultra-rapides.

## Design System : Neobrutalisme

Le site utilise un style **Neobrutaliste** (souvent appelé "Brutal" dans le code) caractérisé par :

- Des ombres portées noires et épaisses.
- Des bordures prononcées.
- Des couleurs vives et contrastées.
- Des polices de caractère géométriques (`Space Grotesk`).

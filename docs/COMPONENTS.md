# Inventaire des Composants UI

Le projet suit une version simplifiée de l'**Atomic Design** pour organiser les composants.

## Layouts (`src/components/layout/`)

- **BaseLayout.astro** : La structure HTML principale (Head, Body, Scripts globaux). Il accepte des props comme `title` et `description` pour le SEO.
- **BlogPostLayout.astro** : Version spécifique pour les articles du blog.

## Atoms (`src/components/atoms/`)

Ce sont les composants de base réutilisables à travers tout le site.

- **BrutalButton.astro** : Bouton avec effet d'ombre neobrutaliste.
- **BrutalBadge.astro** : Petit badge pour les étiquettes (ex: "QUALIFICATIONS").
- **BrutalCard.astro** : Conteneur avec bordures et ombres pour encadrer du contenu.
- **ChampionCard.astro** : Carte spécifique pour afficher les athlètes de l'Arène.
- **PartnerLogo.astro** : Gestion de l'affichage des logos partenaires avec rotation aléatoire.

## Blocks (`src/components/blocks/`)

Ce sont des sections de page complètes, souvent composées de plusieurs Atoms.

- **HeroSection.astro** : Entête de la page d'accueil avec le titre principal.
- **ArenaChampionsSection.astro** : Section complexe affichant le mur, l'histoire et les champions.
- **ProgramSection.astro** : Affichage des horaires du samedi et dimanche.
- **PartnersSection.astro** : Grille des partenaires (FFME, Club, Collectivités).
- **ContactSection.astro** : Formulaire de contact pour l'événement.

## Utilisation des Styles

Les composants utilisent principalement des variables CSS définies globalement pour maintenir la cohérence :

- `--brutal-black`
- `--brutal-white`
- `--brutal-ice` (vert menthe signature)
- Les ombres sont souvent appliquées via la classe globale `.brutal-card` ou équivalente.

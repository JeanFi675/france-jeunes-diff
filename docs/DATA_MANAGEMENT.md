# Gestion des Données

La majorité du contenu textuel et des configurations du site est centralisée dans un seul fichier pour faciliter les mises à jour sans avoir à fouiller dans les composants HTML/Astro.

## Fichier Central : `src/data/competition-data.js`

Ce fichier exporte un objet `competitionData` contenant plusieurs sections :

### 1. Informations de l'Événement (`event`)

Modifiez ici le nom, les dates, le lieu et l'adresse GPS de la compétition.

```javascript
event: {
  name: 'Championnats de France Jeunes de Difficulté',
  dates: '16-17 mai 2026',
  // ...
}
```

### 2. Partenaires (`partners`)

Les partenaires sont triés par catégories (FFME, Club, Collectivités). Chaque partenaire possède :

- `src` : Nom du fichier image (dans `public/images/logos/`)
- `alt` : Texte alternatif
- `url` : Lien vers le site du partenaire
- `rotation` : Angle d'inclinaison pour le style Neobrutaliste.

### 3. Arène des Champions (`arena`)

Contient les données techniques du mur, les événements historiques et la liste des athlètes (`champions`).

## Mise à jour des Images et Vidéos

- **Logos Partenaires** : `/public/images/logos/`
- **Photos Champions** : `/public/images/champions/`
- **Vidéos** : `/public/videos/`

> [!IMPORTANT]
> Après chaque modification dans `competition-data.js`, le site doit être recompilé (`npm run build`) pour que les changements soient effectifs en production.

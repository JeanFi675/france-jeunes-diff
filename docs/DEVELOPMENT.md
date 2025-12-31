# Développement et Déploiement

Ce guide détaille les commandes et les processus pour travailler sur le projet.

## Prérequis

- **Node.js** : Version 18 ou supérieure.
- **NPM** : Installé avec Node.js.

## Commandes NPM (Scripts)

| Commande          | Description                                                       |
| :---------------- | :---------------------------------------------------------------- |
| `npm install`     | Installe les dépendances du projet.                               |
| `npm run dev`     | Lance le serveur de développement local (`localhost:4321`).       |
| `npm run build`   | Génère le site statique dans le dossier `dist/`.                  |
| `npm run preview` | Prévisualise localement le contenu du dossier `dist/`.            |
| `npm run check`   | Vérifie les types TypeScript et la structure Astro.               |
| `npm run lint`    | Analyse le code pour détecter des erreurs de style ou de logique. |

## Workflow de Développement

1.  **Lancer le mode dev** : `npm run dev`.
2.  **Modifier le code** : Les changements sont appliqués en temps réel (Hot Module Replacement).
3.  **Vérifier la qualité** : `npm run lint` et `npm run check`.
4.  **Builder** : `npm run build` avant tout déploiement.

## Déploiement

Le site est conçu pour être hébergé sur n'importe quel serveur de fichiers statiques (GitHub Pages, Netlify, Vercel).

Un script `deploy.sh` est présent à la racine pour automatiser le processus si nécessaire.

> [!TIP]
> Toujours vérifier que le dossier `dist/` généré contient bien toutes les ressources (images/vidéos) après un build significatif.

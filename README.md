# Portfolio de Kyumirei

## Configuration

### Page principale - catégories d'art
Actuellement les catégories sont générées à partir des dossiers créés dans `src\assets\art_gallery`.

Exemple : `01_illustration`, `02_peinture_sur_bois` etc.

### Page principale - images
Les images sont chargées depuis les catégories créées dans `src\assets\art_gallery`.

Note : les images lourdes mettront plus de temps à charger sur le site.

### Page "à propos" - texte
Éditer le fichier `src\pages\AboutPage\AboutPage.tsx`.

### Avatar de la barre de gauche
Remplacer le fichier `src\assets\avatar.jpg`.

### Couleurs et polices
Éditer les fichiers `src\constants\theme.ts` et `src\index.css`.

## Lancement du site sur un ordinateur local
### Prérequis :
Node.js 24 (https://nodejs.org/en/download)
### Commandes
`npm install` : installer les dépendances

`npm run dev` : lancer l'application en local

`npm run test` : lancer les tests

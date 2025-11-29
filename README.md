# Princess Crêpe Website 🍰

Site vitrine statique pour la crêperie japonaise **Princess Crêpe** (Paris 4ème).
Développé avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

## 🚀 Démarrage rapide

1.  **Installer les dépendances** :
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Modification du contenu

Tout le contenu du site est géré via des fichiers de configuration simples dans le dossier `data/`.

### Modifier le Menu
Ouvrez `data/menu.ts`.
Vous pouvez ajouter, modifier ou supprimer des catégories et des items.
*   `price` : le prix en euros (ex: `4.5` pour 4,50 €).
*   `highlight: true` : met l'item en gras/couleur pour le mettre en avant.

### Modifier les Infos (Horaires, Adresse, Liens)
Ouvrez `data/site.ts`.
Vous y trouverez :
*   Les horaires d'ouverture.
*   Les liens vers les réseaux sociaux (Instagram, Facebook).
*   L'adresse et les liens Google Maps / TripAdvisor.

### Modifier les Photos
Les composants (comme `GallerySection.tsx`) utilisent actuellement des placeholders.
Pour ajouter de vraies photos :
1.  Placez vos images dans le dossier `public/images/`.
2.  Dans `components/GallerySection.tsx`, remplacez les `div` placeholders par le composant `<Image />` de Next.js.

## 🎨 Personnalisation du Design

Le thème (couleurs, polices) est configuré dans :
*   `tailwind.config.ts` : Palette de couleurs (`princess-pink`, `princess-choco`, etc.).
*   `app/globals.css` : Styles globaux et variables CSS.

## 📦 Déploiement

Ce site est optimisé pour être déployé sur **Vercel**.
Il suffit de connecter votre repository GitHub à Vercel et le déploiement se fera automatiquement.
Aucune base de données n'est requise.

---
*Fait avec ♥ pour Princess Crêpe*

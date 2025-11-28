1. Routing et navigation

Le projet utilise le système de routing Angular pour organiser l’application en plusieurs vues indépendantes (ex. Home, About).
Le composant racine contient un <router-outlet> qui sert de point d’injection dynamique pour les pages.
Les routes sont définies dans un tableau Routes, permettant de mapper une URL vers un composant.
La navigation est assurée via routerLink et routerLinkActive, utilisés dans un composant d’interface (header).
Ce mécanisme permet une application de type SPA (Single Page Application), où les changements d’écran s’effectuent sans rechargement complet de la page.

2. Lazy Loading

Le projet illustre également le principe de lazy loading, une optimisation qui consiste à charger certains composants uniquement au moment où ils deviennent nécessaires.
Au lieu d’inclure tous les écrans dans le bundle initial, les routes peuvent être configurées avec loadComponent, ce qui entraîne la création de bundles séparés.
Ce fonctionnement réduit le temps de chargement initial, améliore les performances, et adapte le chargement du code aux besoins réels de navigation.
Ce mécanisme est particulièrement pertinent pour les sections rarement visitées ou volumineuses.

3. État, services et réactivité (RxJS)

L’état applicatif est géré à travers un service Angular fournissant un flux de données réactif basé sur un BehaviorSubject.
Les composants consomment ces données via un Observable exposé (task$), et l’affichage est mis à jour automatiquement grâce à AsyncPipe.
L’ajout d’une tâche déclenche un next() sur le BehaviorSubject, permettant au template lié d’être réactualisé sans logique complémentaire.
Le projet illustre ainsi l’usage combiné de RxJS, du data-binding Angular, et de l’injection de dépendances pour mettre en place une gestion d’état simple, réactive et centralisée.

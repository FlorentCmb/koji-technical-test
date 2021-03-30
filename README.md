# Questions du test techniques

## Quelle librairie allez vous utiliser pour gérer l'état de l'application ?

Pour gérer l'état de l'application, j'utiliserai la librairie react-redux, car il faut que les données utilisateurs soient accessibles sur chacunes des pages de l'application. De cette manière, un utilisateur "lambda" n'aura pas accès aux pages qui sont réservées à l'admin.

## Quelles pages sont nécessaires ?

Il y aura besoin de la page de register / login pour permettre aux utilisateurs de créer un compte ou de se connecter, d'une page d'accueil, qui contiendra les articles créés par les utilisateurs. Ensuite, il faudra une page de création d'articles, qui sera une sorte de formulaire que l'utilisateur devra remplir, et une page qui détaillera un article, avec peut-être la possibilité de modifier ou supprimer celui-ci.

## Comment allez-vous agencer votre navigation ?

Pour la navigation, j'utiliserai la librairie react-router-dom, en vérifiant à chaque fois le rôle de l'utilisateur actuel, pour qu'il ne puisse pas accéder à des pages qui ne le concernent pas. Il y aura donc un lien vers la page d'accueil, un lien vers la création d'articles, et les articles listés dans la page d'accueil contiendront aussi un lien pour consulter ces derniers.

## Quelles sont les requêtes d'api dont vous allez avoir besoin au minimum ?

Au minimum, il y aura besoin de deux requêtes GET, une requête POST, et peut-être une requête PUT et une DELETE (si l'on souhaite pouvoir modifier / supprimer des articles).

## Comment allez-vous gérer l'exécution des requêtes d'api et le retour asynchrone de celles-ci ?

La gestion des requêtes API peut se faire avec la librairie Axios, qui permet donc les requêtes asynchrones et la gestion des réponses. Ensuite, si l'on a récupéré des données via ces requêtes, on peut les envoyer dans Redux afin de les rendre accessibles.

## Comment allez-vous gérer l'authentification ?

L'authentification peut se gérer avec Axios aussi, la requête envoyée sera ensuite gérée par une autre librairie en back, passportjs, afin de renvoyer une réponse ainsi que les données utilisateur.

## Bonus: Vous devez mettre en place une version "dark" optionnel dans l'application. Comment allez-vous procéder ?

J'utiliserais react-redux, déjà mis en place, pour garder en mémoire le thème actuel du site, par exemple, ce sera une clé `theme` dont la valeur serait "white" ou "dark", ou bien une clé `darkTheme` qui aurait donc une valeur booléene.

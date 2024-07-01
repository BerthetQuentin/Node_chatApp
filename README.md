# node_chatapp

node_chatapp est une application de chat utilisant les websockets.

## Installation

Clonez le repository et installez les dépendances :

```bash
git clone https://github.com/BERTHETQuentin/node_chatApp.git
cd node_chatApp
npm i
```
## Utilisation 

pour démarrer le serveur, exécutez la commande suivant :

```bash
cd src/
node server.js
```

Le serveur sera accessible à l'adresse `http://localhost:3000`

## Structure du projet 

```bash
node_chatapp/
├── public/
│   └── index.html          # Fichier HTML principal pour l'interface utilisateur
├── src/
│   └── server.js           # Fichier serveur principal de l'application
├── .gitignore              # Fichier pour exclure les fichiers et répertoires spécifiques de Git
├── .gitattributes          # Fichier pour configurer les attributs spécifiques à Git
├── package.json            # Fichier de configuration du projet Node.js
├── package-lock.json       # Fichier de verrouillage des versions des dépendances
└── README.md               # Documentation du projet
```

## Dépendances 

Les dépendances du projet sont listées dans le fichier `package.json`

- `express`: ^4.19.2
- `socket.io`: ^4.7.5
- `ws`: ^8.17.1

## Contribuer

Les contributions sont les bienvenues. Veuillez suivre les étapes suivantes pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nom-de-la-fonctionnalité`).
3. Commitez vos modifications (`git commit -m 'Ajout de la fonctionnalité X'`).
4. Poussez votre branche (`git push origin feature/nom-de-la-fonctionnalité`).
5. Ouvrez une Pull Request.

## Bugs et améliorations

Si vous trouvez des bugs ou avez des suggestions d'améliorations, veuillez utiliser le [système de tickets](https://github.com/QuentinBerhet/node_chatApp/issues)

## Licence

Ce projet est sous licence ISC.

## Auteur

- Quentin Berthet : [github](https://github.com/QuentinBerthet)
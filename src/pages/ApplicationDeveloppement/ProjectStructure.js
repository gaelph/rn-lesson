import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";

export default function ProjectStructure() {
  return (
    <div className="w-full">
      <h1>Structures de Projets</h1>

      <h2>Organisation des projets</h2>

      <p>
        Il y a plein de bonnes façons d’organiser un projet. Voici quelques unes
        d’entre-elles pour des projets de différentes tailles. Si vous êtes déjà
        familier·ère avec le développement web et React, l’organisation des
        projets et sensiblement la même.
      </p>

      <h3>Petits projets</h3>

      <p>
        Pour une petite application, tous les composants peuvent aller dans le
        même dossier&nbsp;:
      </p>

      <pre>
        {`MyApp
├── components
│   ├── Avatar.js
│   ├── Button.js
│   └── List.js
└── App.js`}
      </pre>

      <p>
        Généralement, on a un composant par fichier, et ce composant devrait
        être le «&nbsp;default export&nbsp;». Le fichier a le même nom que le
        componant, et les noms de composants commencent par une majuscule. Le
        nom du fichier commence donc par une majuscule aussi.
      </p>

      <h3>Projets moyens</h3>

      <p>
        Si l’application grandit, on séparera les composants
        «&nbsp;écrans&nbsp;» dans un dossier{" "}
        <span className="code">screen</span> et créera des sous-dossiers dans{" "}
        <span className="code">components</span>. Un composant
        «&nbsp;écran&nbsp;» est un composant qui occupe tout l’écran, un peu
        comme une page en web.
      </p>

      <p>
        On aura également tendance à séparer les{" "}
        <span className="code">navigators</span>, responsables de la navigation
        dans l’application.
      </p>

      <pre>
        {`MyApp
├── components
│   ├── buttons
│   │   ├── RoundButton.js
│   │   └── SquareButton.js
│   ├── cards
│   │   ├── ArticleCard.js
│   │   ├── ImageCard.js
│   │   └── VideoCard.js
│   ├── Avatar.js
│   └── List.js
├── screens
│   ├── Feed.js
│   ├── Search.js
│   ├── Post.js
│   ├── Reply.js
│   ├── Profile.js
│   └── Settings.js
├── navigators
│   ├── RootStackNavigator.js
│   └── ProfileTabNavigator.js
└── App.js`}
      </pre>

      <p>Autres catégories communes&nbsp;:</p>

      <ul>
        <li>
          <span className="code">api</span>: appels HTTP à une API{" "}
        </li>
        <li>
          <span className="code">assets</span>: images et autres fichiers{" "}
        </li>
        <li>
          <span className="code">hooks</span>: hooks custom
        </li>
        <li>
          <span className="code">state</span>: reducers ou autres fonctions pour
          gérer l’état global de l’application{" "}
        </li>
        <li>
          <span className="code">styles</span>: couleurs et élements de style
          partagés (parfois appelé theme)
        </li>
        <li>
          <span className="code">utils</span>: autres fonctions comme le
          formattage de chaîne ou de date{" "}
        </li>
      </ul>

      <pre>
        {`MyApp
├── api
│   ├── twitter.js
│   ├── facebook.js
│   └── instagram.js
├── assets
│   ├── app-icon.png
│   └── splash-screen.png
├── hooks
│   ├── useInterval.js
│   └── useLogin.js
├── state
│   ├── posts.js
│   ├── users.js
│   └── tweets.js
├── styles
│   ├── colors.js
│   ├── textStyles.js
│   └── spacing.js
├── utils
│   ├── generateUuid.js
│   └── formatCurrency.js
└── ...`}
      </pre>

      <h3>Grands Projets</h3>

      <p>
        Quand un projet grandit est inclut un grand nombre de fonctionnalités,
        il est commun de catégoriser les fichiers par domaine, ou
        fonctionnalités, à la racine du projet. (c.f.{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Conception_pilot%C3%A9e_par_le_domaine"
          taget="_blank"
          rel="noreferrer"
        >
          Domain Driven Development
        </a>
        )
      </p>

      <p>
        Les dossiers de fonctionnalités sont souvent groupés dans un dossier
        modules, ou packages, ou apps. Les composants et utilitaires partagés
        entre fonctionnalités vivront dans un dossier spécial et traité comme
        une API publique.
        <br />
        Chaque fonctionnalité ne doit faire référence qu’à des fichiers de son
        dossier ou du dossier partagé.
      </p>

      <pre>
        {`MyApp
├── modules
│   ├── accounts
│   │   ├── components
│   │   │   ├── UserProfile.js
│   │   │   └── LoginInput.js
│   │   ├── screens
│   │   │   ├── Profile.js
│   │   │   ├── Login.js
│   │   │   └── Deactivate.js
│   │   ├── utils
│   │   │   └── formatAccountName.js
│   │   └── App.js
│   ├── growth
│   │   ├── components
│   │   ├── screens
│   │   ├── utils
│   │   └── App.js
│   ├── privacy
│   │   ├── components
│   │   ├── screens
│   │   ├── utils
│   │   └── App.js
│   └── shared
│       ├── components
│       │   ├── Avatar.js
│       │   ├── Button.js
│       │   └── List.js
│       └── utils
│           └── format.js
└── App.js`}
      </pre>

      <h2>Séparation des responsabilités</h2>

      <p>
        Dans React (Native), le composant n’est qu’une brique de notre UI.
        Certains frameworks ont des concepts de «&nbsp;vue&nbsp;» et de
        «&nbsp;controllers&nbsp;», mais rien de tout ça n’existe dans React.
        C’est au développeur de faire le travail.
      </p>

      <p>
        Une façon de faire commune est de séparer les composants de présentation
        des conteneurs (containers).
      </p>

      <h3>Containers</h3>

      <p>
        Les containers contiennent la logique métier. C’est un peu comme des
        controllers (mais pas vraiment non plus).
      </p>

      <p>
        Les containers ont connaissance des données et de la logique de votre
        application. Il récupèrent les données et les passent, avec les
        callbacks, aux components présentationnels. Ils s’occupent de mettre à
        jour les données quand l’utilisateur interagit avec l’application. Ils
        ne devraient pas rendre de composants commet Text ou Image – ça, c’est
        pour les composants présentationnels.
      </p>

      <h3>Composants présentationnels</h3>

      <p>
        Ceux-là rendent la partie visible de l’UI, et ne devraient pas contenir
        de logique applicative. Dans l’idéal ils n’utilisent que leurs props, si
        bien qu’ils pourraient être utilisés dans d’autres applications sans
        modifications.
        <br />
        On les appelle souvent «&nbsp;composants&nbsp;», par opposition aux
        «&nbsp;containers&nbsp;».
      </p>

      <p>
        Bien séparer la logique de la présentation permet de partager du code
        facilement entre applications de projets différents et donc de gagner du
        temps.
      </p>

      <h3>Exemple</h3>

      <pre>
        {`MyApp
├── components
│   ├── buttons
│   │   ├── RoundButton.js
│   │   └── SquareButton.js
│   ├── cards
│   │   ├── ArticleCard.js
│   │   ├── ImageCard.js
│   │   └── VideoCard.js
│   ├── Avatar.js
│   └── List.js
├── containers
│   ├── CardList.js
│   ├── UserProfile.js
│   └── RelatedTweets.js
├── screens
│   ├── Feed.js
│   ├── Search.js
│   ├── Post.js
│   ├── Reply.js
│   ├── Profile.js
│   └── Settings.js
└── ...`}
      </pre>

      <BottomButtons
        backTo="/application-development"
        backLabel="Développement d’Application"
        nextTo="/application-development/android-and-ios"
        nextLabel="Android et iOS"
      />
    </div>
  );
}

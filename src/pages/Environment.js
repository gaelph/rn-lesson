import React from "react";

import BottomButtons from "../components/BottomButtons";

export default function Environment() {
  return (
    <div className="w-full">
      <h1>Environment</h1>

      <p>Il y a deux façon courantes de commencer un projet React Native</p>

      <h2>
        <a href="https://docs.expo.io" taget="_blank" rel="noreferrer">
          Expo
        </a>
      </h2>

      <p>
        C’est un utilitaire qui permet de configurer et publier rapidement un
        projet React Native. Probablement la meilleure option pour commencer.
        <br />
        Qui plus est, Expo fourni de nombreuses librairies (maintenues et à
        jour) pour interagir avec les appareils mobile.
      </p>

      <p>
        Expo se propose même de compiler les binaires et de packager les
        appliactions pour vous. Vous pouvez donc compiler une application iOS
        sans Mac — mais pas le tester, donc ce n’est pas recommandé… <br />
        Avec un compte gratuit, l’attente peut être longue avant d’avoir votre
        APK/APP.
      </p>

      <p>
        L’inconvénient, c’est tous les modules développés pour React Native ne
        sont nécessairement compatible avec Expo, et qu’il n’est pas possible de
        coder les siens. Il est cependant possible de commencer un projet avec
        Expo, puis d’« éjecter » si nécessaire.
      </p>

      <p>
        Un autre point à retenir est que la partie JavaScript de l’application
        est hébergée par Expo sur Amazon S3. Ça peut ne pas plaire à votre
        client de savoir que son application et son code source est en accès
        public.
      </p>

      <h2>
        <a
          href="https://www.npmjs.com/package/react-native"
          target="_blank"
          rel="noreferrer"
        >
          React Native
        </a>
      </h2>

      <p>
        Si vous devez développer vos propres modules, ou avez besoin de modules
        incompatible avec Expo, il est toujours possible de démarrer votre
        développement avec la CLI de React Native.
      </p>

      <p>
        Vous devrez compiler localement (pas de file d’attente), mais il vous
        faudra un Mac pour iOS.
        <br />
        Le bundle js est embarqué avec l’application.
        <br />
        Vous pouvez installer tous les modules conçus pour React Native.
      </p>

      <BottomButtons
        backTo="/"
        backLabel="Vite, React Native"
        nextTo="/specific-components"
        nextLabel="Composants Spécifiques"
      />
    </div>
  );
}

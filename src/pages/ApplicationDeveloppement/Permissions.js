import React from "react";
import BottomButtons from "../../components/BottomButtons";

import Playground from "../../components/Playground";

export default function Geoloc() {
  return (
    <div className="w-full">
      <h1>Permissions</h1>
      <p>
        Les platformes mobiles (iOS et Android) ont chacune leur façon de gérer
        le consentement de l’utilisateur pour accéder aux capteurs,
        géolocaliastion, données des contacts, etc…
      </p>

      <p>
        Dans les deux cas, les fonctionnalités auxquelles on accède doivent être
        déclarées à l’avance, et un dialogue de confirmation sera présenté à
        l’utilisateur.
      </p>

      <h2>iOS</h2>

      <p>
        Pour iOS et macOS, c’est fait dans l’IDE d’Apple XCode, en activant ou
        désactivant des <span className="code">Entitlements</span>.
      </p>

      <h2>Android</h2>

      <p>
        Android nous demande plus de travail&nbsp;: il faut modifier les fichier
        AndroidManifest.xml pour y déclarer les permissions à utiliser&nbsp;;
        puis utiliser le module <span className="code">PermissionsAndroid</span>{" "}
        (voir{" "}
        <a
          href="https://reactnative.dev/docs/permissionsandroid"
          target="_blank"
          rel="noreferrer"
        >
          la documentation
        </a>
        ) pour personnaliser le message afficher à l’utilisateur.
      </p>

      <h2>Quand demander la permissions</h2>

      <p>Deux écoles&nbsp;:</p>
      <ul>
        <li>
          Au lancement de l’application. Mais s’il y en a beaucoup, ça peut être
          un frein.
        </li>
        <li>
          Au premier usage de la foncionnalité. Mais si ça arrive souvent, ça
          peut gêner l’utilisateur…
        </li>
      </ul>

      <BottomButtons
        backTo="/application-development/sensors"
        backLabel="Capteurs"
      />
    </div>
  );
}

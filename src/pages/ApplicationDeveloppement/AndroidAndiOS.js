import React from "react";
import BottomButtons from "../../components/BottomButtons";

import Playground from "../../components/Playground";

export default function Geoloc() {
  return (
    <div className="w-full">
      <h1>Android et iOS (et web, et …)</h1>
      <p>
        Les platformes mobiles implémentent de nombreuses choses de manières
        différtentes&nbsp;: la navigation, l’accès aux stockage, certains
        éléments d’interface…
      </p>

      <p>
        Il est important de prendre en compte la plateforme cible, parce que les
        habitudes des utilisateurs y sont parfois très différentes. Vous
        tomberez probablement dans des cas où vous devrez coder des
        comportements différents pour chaque plateforme (Deep Links, date
        pickers …). Les tailles d’écran (tablettes, par exemple) pouvant varier,
        les tailles de vos images doivent aussi s’adapter.
      </p>

      <p>Heureusement, React Native a des outils pour ça</p>

      <h2>Les tailles d’images</h2>

      <p>
        Dans le développement d’applications mobile natif, il convient d’avoir
        deux ou trois exemplaires d’une image à différentes tailles&nbsp;:
        taille réelle (1x), deux fois la taille (2x), trois fois la taille (3x)…
      </p>

      <p>
        Sur Android, il y a un dossier pour chaque taille (hdi, xhdi, xxhdi, …).
        <br />
        Sur iOS, il faut utiliser l’IDE d’Apple et leur « Asset Manager ».
        <br />
        React Native, cette fois, nous sauve.
      </p>

      <p>
        On a vu qu’il est possible d’embarquer des images dans une application
        via un simple{" "}
        <span className="code">import image from './assets/image.png';</span>.
      </p>

      <p>
        Si vous avez trois exemplaires de l’image pour trois tailles d’écran, le
        simple{" "}
        <span className="code">import image from './assets/image.jpg'</span>{" "}
        suffit. React Native choisie le bon fichier parmi{" "}
        <span className="code">image.jpg</span> (1x),{" "}
        <span className="code">image@x2.jpg</span> (2x) et{" "}
        <span className="code">image@x3.jpg</span> (3x). :wa
      </p>

      <h2>Différentes implémentations pour diférentes platformes</h2>

      <p>
        Il peut arriver que vous ayez besoin de d’implémenter des comportements
        différents en foncion de la platforme cible. Pour cela, React Native se
        base sur l’extension du fichier.
      </p>

      <p>Par exemple&nbsp;:</p>

      <ul>
        <li>
          <span className="code">MonComposant.ios.js</span>&nbsp;: sera utilisé
          pour iOS
        </li>
        <li>
          <span className="code">MonComposant.android.js</span>&nbsp;: sera
          utilisé pour Android
        </li>
        <li>
          <span className="code">MonComposant.web.js</span>&nbsp;: sera utilisé
          pour Web
        </li>
      </ul>

      <BottomButtons
        backTo="/application-development/project-structure"
        backLabel="Structures de Projets"
        nextTo="/application-development/navigation"
        nextLabel="Navigation"
      />
    </div>
  );
}

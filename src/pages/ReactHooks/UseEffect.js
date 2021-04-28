import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseEffect() {
  return (
    <div className="w-full">
      <h1>{"useEffect()"}</h1>

      <p>
        On utilise <span className="code">useEffect</span> pour appeler des
        fonctions avec des «&nbsp;effets de bord&nbsp;», comme des requêtes
        HTTP, écrire ou lire depuis <span className="code">AsyncStorage</span>,
        etc.
      </p>

      <h3>API</h3>

      <p>Il prend 2 paramètres&nbsp;:</p>

      <ul>
        <li>
          <span className="code">callback</span> - une fonction avec effets de
          bord
        </li>
        <li>
          <span className="code">dependences</span> - un tableau optionnel avec
          les dépendances
        </li>
      </ul>

      <p>
        Au rendu, la callback sera appelée si une des valeurs passées dans les
        dépendances change. En somme, <span className="code">useEffect</span>{" "}
        fonctionne comme un écouteur posé sur les dépendances.
      </p>

      <h3>Exemple</h3>

      <p>
        Dans cet exemple, on logue à chaque que count est un multiple de 3.{" "}
      </p>

      <Playground
        code={`import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  const countEvery3 = Math.floor(count / 3)

  useEffect(() => {
    console.log(countEvery3)
  }, [countEvery3])

  return (
    <Button
      title={\`Plus ! \${count}\`}
      onPress={() => {
        setCount(count + 1)
      }}
    />
  )
}
      `}
      />

      <h3>Dépendances vides ou undefined</h3>

      <p>
        Si les dépendances sont un tableau vide ou{" "}
        <span className="code">undefined</span>, le comportement de{" "}
        <span className="code">useEffect</span>
        sera différent&nbsp;:
      </p>

      <ul>
        <li>
          <span className="code">[]</span> - la callback est appelée au montage
          du composant ;
        </li>
        <li>
          <span className="code">undefined</span> - la callback est appelée à
          chaque rendu.
        </li>
      </ul>

      <p>
        Dans le cas du tableau vide, le comportement est semblable à{" "}
        <span className="code">componentDidMount</span>.
      </p>

      <h3>La retour de la callback</h3>

      <p>
        La callback passée à <span className="code">useEffect</span> peut
        retourner une fonction. Si une dépendance change, cette fonction sera
        appelée avant la callback. <br />
        Ça permet, par exemple, d’appeller un{" "}
        <span className="code">clearInterval</span>,{" "}
        <span className="code">unsubscribe</span> sur un Observable, ou
        d’enlever des écouteurs.
      </p>

      <p>
        Si les dépendances sont un tableau vide, le comportement est semblable à{" "}
        <span className="code">componentWillUnmount</span>.
      </p>

      <BottomButtons
        backTo="/react-hooks/usestate"
        backLabel="useState()"
        nextTo="/react-hooks/useref"
        nextLabel="useRef()"
      />
    </div>
  );
}

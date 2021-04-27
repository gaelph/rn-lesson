import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseEffect() {
  return (
    <div className="w-full">
      <h1>Hooks Custom</h1>

      <p>
        On peut composer de nouveaux hooks à partir de ceux de base. Par
        convention tous les hooks utilisent le préfixe{" "}
        <span className="code">use</span>. Ex.{" "}
        <span className="code">useUser</span>,{" "}
        <span className="code">useStore</span>, etc.
      </p>

      <h2>Exemple</h2>

      <p>
        Ici on crée un hook <span className="code">useInterval</span> pour
        exécuter une fonction à interval régulier. C’est plus compliqué qu’il
        n’y paraît, et je vous recommande chaudement de vous garder ça sous le
        coude.
        <br />
        Le plus, c’est qu’on peut changer le delay et la callback n’importe
        quand.
      </p>

      <blockquote>
        Exemple dégoté sur&nbsp;:
        <br />
        <a
          href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
          target="_blank"
          rel="noreferrer"
        >
          https://overreacted.io/making-setinterval-declarative-with-react-hooks/
        </a>
      </blockquote>

      <Playground
        code={`import React, { useState, useEffect, useRef } from 'react'
import { Text } from 'react-native'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback.current()
      }, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default function App() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return <Text style={{ fontSize: 120 }}>{count}</Text>
}`}
      />

      <BottomButtons
        backTo="/react-hooks/other"
        backLabel="Autres hooks"
        nextTo="/application-development"
        nextLabel="Développement d’applicatons"
      />
    </div>
  );
}

import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseRef() {
  return (
    <div className="w-full">
      <h1>{"useRef()"}</h1>

      <p>
        Avec <span className="code">useRef</span>, on peut créer et mettre à
        jour une variable mutable qui existe aussi longtemps que le composant.
      </p>

      <p>
        Après avoir assigné la ref à une variable, on utilise{" "}
        <span className="code">.current</span> pour accéder à sa valeur.
      </p>

      <h3>Exemple</h3>

      <p>
        Dans cette exemple, on stocke la valeur de retour de{" "}
        <span className="code">setInterval</span>, ce qui nous permet d’appeler{" "}
        <span className="code">clearInterval</span> plus tard, au démontage du
        composant par exemple.
      </p>

      <Playground
        code={`import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    )

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 120 }}>{count}</Text>
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current)
        }}
      />
    </View>
  )
}
      `}
      />

      <BottomButtons
        backTo="/react-hooks/useeffect"
        backLabel="useEffect()"
        nextTo="/react-hooks/others"
        nextLabel="Autres Hooks"
      />
    </div>
  );
}

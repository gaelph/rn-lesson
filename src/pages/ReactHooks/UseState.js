import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseState() {
  return (
    <div className="w-full">
      <h1>{"useState()"}</h1>
      <p>
        Le hook <span className="code">useState</span> permet de se
        «&nbsp;souvenir&nbsp;» d’une valeur dans un composant fonctionnel. Comme
        un composant fonctionnel peut être appelé de nombreuses fois durant son
        cycle de vie, toutes les variables déclrées normalement seront
        réinitialisées. Avec <span className="code">useState</span>, React se
        souviendra de l’état de cette variable pour nous.
      </p>
      <h3>API</h3>
      <p>
        Ce hook ne prend qu’un argument, l’état initial, et retourne un tableau
        avec deux éléments&nbsp;:
      </p>
      <ul>
        <li>
          <span className="code">state</span> - l’état courant
        </li>
        <li>
          <span className="code">setState</span> - une fonction pour modifier
          l’état
        </li>
      </ul>
      <p>
        Ex.{" "}
        <span className="code">
          const [state, setState] = useState(initialValue)
        </span>
      </p>
      <h3>Exemple</h3>
      <p>
        Dans cet exemple, on utilise <span className="code">useState</span> pour
        ajouter des valeurs à un tableau
      </p>
      <p>
        On peut utiliser <span className="code">useState</span> pour y stocker
        tout type de valeur&nbsp;: un nombre, une chaîne, un tableau, un objet,
        etc.
      </p>
      <Playground
        code={`import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1

export default function App() {
  const [diceRolls, setDiceRolls] = useState([])

  return (
    <View>
      <Button
        title="Lancez le dé !"
        onPress={() => {
          setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}
      `}
      />

      <h2>Mutabilité</h2>

      <p>
        Notez que quand on appelle <span className="code">setDiceRolls()</span>,
        on n’appelle pas
        <span className="code">diceRolls.push(randomDiceRoll())</span>. Au lieu
        de cela, on passe un nouveau tableau contenant tous les elements de{" "}
        <span className="code">diceRoll</span> et la nouvelle valeur.
        Pourquoi&nbsp;?
      </p>

      <p>
        Les hooks peuvent déclencher un rendu de nos composant et une mise à
        jour de l’UI.
        <span className="code">useState</span> déclenche un rendu quand{" "}
        <span className="code">setDiceRolls</span> est appelé avec une nouvelle
        valeur. En interne, React utilise <span className="code">===</span> pour
        comparer l’ancienne valeur. Si on ne change que le contenu de l’objet ou
        du tableau (ex. <span className="code">Array.push()</span>),{" "}
        <span className="code">useState</span> ne pourra détecter le changement
        et ne déclenchera pas de rendu.
      </p>

      <BottomButtons
        backTo="/react-hooks"
        backLabel="React… avec les hooks !"
        nextTo="/react-hooks/useeffect"
        nextLabel="useEffect()"
      />
    </div>
  );
}

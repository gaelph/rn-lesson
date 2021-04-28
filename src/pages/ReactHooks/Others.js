import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseEffect() {
  return (
    <div className="w-full">
      <h1>{"Autres Hooks"}</h1>
      <h2>useMemo</h2>
      <p>
        <span className="code">useMemo</span> s’utilise pour
        «&nbsp;mémoïser&nbsp;» le résultat d’une opération, c’est-à-dire garder
        en mémoire le résulat, et ne répéter l’opération que si les paramètres
        d’entrée changent.
      </p>
      <h3>API</h3>
      <p>Il prend 2 paramètres&nbsp;:</p>
      <ul>
        <li>
          <span className="code">callback</span> - une fonction qui retourne une
          valeur
        </li>
        <li>
          <span className="code">dependences</span> - un tableau avec les
          dépendances
        </li>
      </ul>
      <p>Il retourne la valeur de retour de la callback.</p>
      <p>
        Ex.{" "}
        <span className="code">
          {"const value = useMemo(() => a + b, [a, b])"}
        </span>
      </p>
      <p>
        Au rendu, la callback sera appelée si une des valeurs passées dans les
        dépendances change. En somme, <span className="code">useMemo</span>{" "}
        fonctionne comme un écouteur posé sur les dépendances.
      </p>
      <h2>useCallback</h2>
      <p>
        <span className="code">useCallback</span> s’utilise pour
        «&nbsp;mémoïser&nbsp;» une fonction qui serait ensuite passée en props à
        des composants enfants.
      </p>
      <p>
        En effet, comme les composants fonctionnels sont appelés fréquemment,
        une fonction déclarée dans un composant, telle qu’un onClick serait
        redéfinie à chaque rendu, créant une nouvelle référence. Comme React
        utilise <span className="code">===</span> pour comparer les props et
        déterminer si un composant doit être rendu, les composants enfants
        utilisant la fonction onClick seraient systématiquement rendus.
      </p>
      <h3>API</h3>
      <p>Il prend 2 paramètres&nbsp;:</p>
      <ul>
        <li>
          <span className="code">callback</span> - une fonction
        </li>
        <li>
          <span className="code">dependences</span> - un tableau avec les
          dépendances
        </li>
      </ul>
      <p>Il retourne la callback.</p>
      <p>
        Ex.{" "}
        <span className="code">
          {
            "const onClick = useCallback(event => console.log(event.target.value), [])"
          }
        </span>
      </p>
      <h2>useReducer</h2>
      <p>
        Le hook <span className="code">useReducer</span> est semblable au hook{" "}
        <span className="code">useState</span>, mais avec une approche plus
        structurée pour gérer des valeurs plus complexes.
      </p>
      <p>
        On l’utilise habituellement pour un état qui contient sous-valeurs.{" "}
        <br />
        Par exemple l’état d’une requête HTTP, dont les sous-valeurs seraient
        <span className="code">loading</span>,{" "}
        <span className="code">error</span>,{" "}
        <span className="code">result</span>.
      </p>
      <blockquote>
        Il s’inspire de{" "}
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          Redux
        </a>
        , et en a les inconvénients&nbsp;: beaucoup de boilerplate.{" "}
      </blockquote>
      <h3>API</h3>
      <p>Il requiert 2 paramètre&nbsp;:</p>

      <ul>
        <li>
          <span className="code">reducer</span> – une fonction sans effets de
          bord qui prend l’état courant et une action, et retourne un nouvel
          état basé sur l’action
        </li>
        <li>
          <span className="code">initialState</span> – la valeur initiale de
          l’état
        </li>
      </ul>

      <p>
        Il retourne l’état courant et une fonction{" "}
        <span className="code">dispatch</span> pour modifier l’état.
      </p>
      <h3>Exemple</h3>
      <p>
        Dans cet exemple, <span className="code">useReducer</span> nous permet
        de stocker le prénom et le nom dans un seul objet.
      </p>
      <blockquote>
        Par convention, les actions sont des objets avec une propriété
        <span className="code">type</span> et une propriété{" "}
        <span className="code">payload</span>. Toujours par convention, la
        valeur de <span className="code">type</span> est une chaine en snake
        case majuscule&nbsp;:
        <span className="code">"SET_FIRSTNAME"</span>
      </blockquote>
      <Playground
        code={`import React, { useReducer } from 'react'
import { View, Text, TextInput } from 'react-native'

const ACTIONS = {
  SET_FIRSTNAME: "SET_FIRSTNAME",
  SET_LASTNAME: "SET_LASTNAME",
}

const INITIAL_STATE = {
  first: '',
  last: '',
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_FIRSTNAME:
      return { ...state, first: payload }
    case ACTIONS.SET_LASTNAME:
      return { ...state, last: payload }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <View>
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="Prénom"
        value={state.first}
        onChangeText={(text) => {
          dispatch({ type: ACTIONS.SET_FIRSTNAME, payload: text })
        }}
      />
      <TextInput
        style={{ fontSize: 32 }}
        placeholder="Nom"
        value={state.last}
        onChangeText={(text) => {
          dispatch({ type: 'last', payload: text })
        }}
      />
      <Text style={{ fontSize: 32 }}>
        Salut {state.first} {state.last} !
      </Text>
    </View>
  )
}
      `}
      />
      <BottomButtons
        backTo="/react-hooks/useref"
        backLabel="useRef()"
        nextTo="/react-hooks/custom"
        nextLabel="Hooks Custom"
      />
    </div>
  );
}

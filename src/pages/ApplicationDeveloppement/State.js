import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";
import Playground from "../../components/Playground";

export default function State() {
  return (
    <div className="w-full">
      <h1>État Global</h1>
      <p>
        Comme React ne se préocuppe que de la vue, il ne fourni de bonne
        solution pour gérer l’état global des données de l’application. Or, à
        mesure qu’une application grandit, il peut devenir difficile de gérer
        l’ensemble des données qui vivent&nbsp;: infos utilisateur, contenu
        téléchargé depuis une API, images, etc.
      </p>
      <p>
        Il y a, comme souvent, plusieurs façons de faire, en fonction de la
        taille de votre application.
      </p>

      <h2>Options communes</h2>

      <table>
        <thead>
          <tr>
            <th>Options</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>useReducer</th>
            <td>
              C’est un hook fourni par React. Ça peut suffire pour commencer,
              mais c’est pénible à utiliser.
            </td>
          </tr>
          <tr>
            <th>Zustand</th>
            <td>
              Une solution simple et efficace, que l’on détaille plus loin.
              Utilise des hooks, ou des observables pour notifier des
              changements et mettre à jour l’UI. Supporte les actions
              asynchrones, la persistance…
            </td>
          </tr>
          <tr>
            <th>Redux</th>
            <td>
              Solution très populaire. Nécessite beaucoup de boileplate et
              d’utilitaires tiers pour fonctionner. Souvent overkill.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Zustand</h2>

      <blockquote>
        Documentation :{" "}
        <a
          href="https://github.com/pmndrs/zustand"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/pmndrs/zustand
        </a>
      </blockquote>

      <p>
        Comme Redux, Zustand permet de créer des stores pour y stocker des états
        complexes. Il peut y avoir plusieurs stores dans la même application.
      </p>

      <p>
        Contrairement à Redux, définir un store, son état initial, et les
        actions pour le modifier est très simple&nbsp;:
      </p>

      <Playground
        noPlayer
        height={300}
        code={`import create from 'zustand'

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore`}
      />

      <p>
        Et pour utiliser le store dans les composants, c’est tout aussi
        simple&nbsp;:{" "}
      </p>

      <Playground
        noPlayer
        height={300}
        code={`import useStore from '../state'
function BearCounter() {
  const bears = useStore(state => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}`}
      />

      <h2>Persistance</h2>

      <p>
        La persitance données est essentielle parce qu’on ne veut pas que
        l’utilisateur perde toutes ses données à chaque fois qu’il quitte
        l’appli.
        <br />
        Pour ça, nous avons <span className="code">AsyncStorage</span> (qui
        n’est plus une API fournie par React Native, mais une librairie
        tierce)&nbsp;:{" "}
        <a
          href="https://react-native-async-storage.github.io/async-storage/docs/install"
          target="_blank"
          rel="noreferrer"
        >
          Async Storage
        </a>
        ).
      </p>
      <p>
        <span className="code">AsyncStorage</span> reprend les methodes{" "}
        <span className="code">setItem</span>
        et <span className="code">getItem</span> des{" "}
        <span className="code">localStorage</span> et
        <span className="code">sessionStorage</span> de la WebAPI, à la
        différence près qu’elles sont asynchrones (elles retournent des
        Promise).
      </p>

      <h3>Avec Zustand</h3>

      <Playground
        noPlayer
        height={400}
        code={`import create from "zustand"
import { persist } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(persist(
  (set, get) => ({
    fishes: 0,
    addAFish: () => set({ fishes: get().fishes + 1 })
  }),
  {
    name: "food-storage", // unique name
    getStorage: () => AsyncStorage,
  }
))`}
      />

      <BottomButtons
        backTo="/application-development/navigation"
        backLabel="Navigation"
        nextTo="/application-development/animations"
        nextLabel="Animations"
      />
    </div>
  );
}

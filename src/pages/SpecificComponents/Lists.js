import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function ListsPages() {
  return (
    <div className="w-full">
      <h1>Listes</h1>
      <h2>Scroll View</h2>

      <p>
        Les <span className="code">ScrollView</span> permettent permettent
        d’avoir une surface scrollable, autant verticalement que
        horizontalement. <br />
        Elles offrent beaucoup de possibilités de customization,{" "}
        <a href="https://reactnative.dev/docs/scrollview">
          (voir la documentation offcielle)
        </a>{" "}
        mais pour de meilleurs performances, on préfèrera les{" "}
        <span className="code">FlatList</span> et{" "}
        <span className="code">SectionList</span>.
      </p>

      <h2>Flat List</h2>

      <p>
        Les <span className="code">FlatList</span> sont utilisées pour les grand
        quantité de contenu scrollable (c.f. Twitter ou Tumblr). Elles ont les
        mêmes props que
        <span className="code">ScrollView</span> dont elles héritent, mais avec
        des performances accrues&nbsp;: seul le contenu visible à l’écran est
        rendu, et seules les rangées nécessitant une mise à jour sont
        re-rendues.
        <br />
        Ells peuvent être scrollées horizontalement ou verticalement.
      </p>

      <p>
        Elles ne rendent pas leur enfants, mais utilsent la prop{" "}
        <span className="code">renderItem</span>. Celle-ci est une fonction qui
        prend comme paramètre un élément du tableau{" "}
        <span className="code">data</span>, et retourne un Element React.
        <br />
        Chaque élément du tableau <span className="code">data</span> doit avoir
        un identifiant unique pour que React puisse déterminer les
        réarrangements. Par défaut, React utilise{" "}
        <span className="code">item.key</span>, mais ça peut être configuré avec
        la prop <span className="code">keyExtractor</span>.
      </p>

      <Playground
        code={`import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
]

export default function App() {
  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})
      `}
      />

      <h2 className="mt-6">Section List</h2>

      <p>
        Les <span className="code">SectionList</span> sont comme les{" "}
        <span className="code">FlatList</span>, mais peuvent avoir des entêtes
        de section et des groupes de rangés distincts.
      </p>

      <p>
        <span className="code">SectionList</span> rend chaque élément du tableau
        passé en prop <span className="code">sections</span> en utilisant les
        props <span className="code">renderSectionHeader</span> et{" "}
        <span className="code">renderItem</span>. Chaque élément de{" "}
        <span className="code">sections</span> doit être un objet avec un
        identifiant unique, un tableau <span className="code">data</span>{" "}
        contenant les données. Chaque élément de{" "}
        <span className="code">data</span> doit également avoir son identifiant
        unique.
        <br />
        Si la prop <span className="code">renderItem</span> fonctionne comme
        pour <span className="code">FlatList</span>,{" "}
        <span className="code">renderSectionHeader</span> prend un élément de{" "}
        <span className="code">sections</span> comme paramètre.
      </p>

      <h3>Exemple avec la même renderItem pour toutes les sections</h3>

      <Playground
        code={`import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
  },
]

export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})
      `}
      />

      <h3>Exemple avec une renderItem par section</h3>

      <p>
        Une fonction <span className="code">renderItem</span> peut être
        spécifiée dans le tableau <span className="code">sections</span>, une
        par section, au lieu d’une prop de{" "}
        <span className="code">SectionList</span>. Chaque section peut être
        rendue différamment. Une alternative serait d’utiliser les données des
        éléments des <span className="code">data</span> pour rendre chaque
        élément différamment.
      </p>

      <Playground
        code={`import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'View' },
      { id: '1', text: 'Text' },
      { id: '2', text: 'Image' },
    ],
    renderItem: ({ item }) => {
      return <Text style={styles.row}>{item.text}</Text>
    },
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'ScrollView' },
      { id: '4', text: 'ListView' },
    ],
    renderItem: ({ item }) => <Text style={styles.rowDark}>{item.text}</Text>,
  },
]

export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderSectionHeader={({ section }) => {
        return <Text style={styles.header}>{section.title}</Text>
      }}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
    fontWeight: 'bold',
  },
})
      `}
      />

      <BottomButtons
        backTo="/specific-components/touchables"
        backLabel="Touchables"
        nextTo="/react-hooks"
        nextLabel="React… avec les hooks !"
      />
    </div>
  );
}

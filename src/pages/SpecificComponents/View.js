import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function ViewAndStyleSheet() {
  return (
    <div className="w-full">
      <h1>{"<View />"} et StyleSheet</h1>
      <h2>Le composant {"<View />"}</h2>
      <p>
        Les <span className="code">View</span> sont les briques les plus
        basiques de React Native. Il s’agit d’une façade pour l’équivalent natif
        de la plateforme cible&nbsp;:
      </p>
      <ul>
        <li>Pour iOS - UIView</li>
        <li>Pour Android - android.view</li>
        <li>Pour Web - {"<div />"}</li>
      </ul>
      <p>
        Les <span className="code">View</span> sont principalement utilisées
        pour styliser et positionner leurs éléments enfants.
        <br />
        L’exemple ci-dessous a deux <span className="code">View</span>&nbsp;:
        l’élément extérieur spécifie l’alignement de celui contenu à
        l’intérieur&nbsp;; l’élément intérieur dessine un carré bleu.
      </p>
      <Playground
        code={`import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
})
      `}
      />
      <h2 className="mt-8">Styles et mise en page</h2>
      <blockquote>
        Les styles sont généralement définis dans le même fichier que le
        composant qui les utilise, via{" "}
        <span className="code">StyleSheet.create()</span>.
      </blockquote>
      <p>
        Les composants spécifient la disposition de leurs enfants en utilisant
        l’algorithme flexbox. Il permet de déclarer des vues qui s’étandent ou
        qui s’étrécissent pour remplir des écrans de différentes dimensions. On
        peut mélanger à sa guise ces éléments qui s’ajustent automatiquement
        avec des éléments à taille fixe comme{" "}
        <span className="code">width: 100</span>.
      </p>
      <p>
        Pour choisir le «&nbsp;layout&nbsp;» pour les composants enfants, nous
        avons à faire 3 choix&nbsp;:
      </p>
      <table>
        <thead>
          <tr>
            <th>Propriété</th> <th>Défaut</th> <th>Options</th>{" "}
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="code">flexDirection</span>
            </td>{" "}
            <td>
              <span className="code">column</span>
            </td>{" "}
            <td>
              <span className="code">row</span>,{" "}
              <span className="code">column</span>
            </td>{" "}
            <td>
              On veut une disposition vertical (column) or horizontale (
              row)&nbsp;? Ce choix détermine l’axe principal du layout.
            </td>
          </tr>
          <tr>
            <td>
              <span className="code">justifyContent</span>
            </td>{" "}
            <td>
              <span className="code">flex-start</span>
            </td>{" "}
            <td>
              <span className="code">flex-start</span>,{" "}
              <span className="code">center</span>,{" "}
              <span className="code">flex-end</span>,
              <span className="code">space-around</span>,{" "}
              <span className="code">space-between</span>
            </td>{" "}
            <td>
              Comment le contenu doit-il être distrbué le long de l’axe
              principal&nbsp;? Au début, au centre, à la fin, en répartissant
              l’espace&nbsp;?
            </td>
          </tr>
          <tr>
            <td>
              <span className="code">alignItems</span>
            </td>{" "}
            <td>
              <span className="code">stretch</span>
            </td>{" "}
            <td>
              <span className="code">flex-start</span>,{" "}
              <span className="code">center</span>,{" "}
              <span className="code">flex-end</span>,{" "}
              <span className="code">stretch</span>
            </td>{" "}
            <td>
              Comment le contenun doit être aligné le long de l’axe
              secondaire&nbsp;? (Si l’axe principal est «&nbsp;row&nbsp;», le
              secondaire est «&nbsp;column&nbsp;», et vice-versa) Le contenu
              doit-il être aligne au début, au centre, à la fin ou étiré pour
              remplir son parent&nbsp;?
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        L’exemple suivant vous permet d’essayer les difféentes combinaisons.
      </p>

      <Playground
        files={{
          "App.js": `import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import Toggle from './Toggle'

export default function App() {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

  return (
    <View style={styles.container}>
      <Toggle
        label={'Axe principal (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => {
          setFlexDirection(option)
        }}
      />
      <Toggle
        label={\`Distribution \${primaryAxis.toLowerCase()}e (justifyContent)\`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <Toggle
        label={\`Alignement \${secondaryAxis.toLowerCase()} (alignItems)\`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => {
          setAlignItems(option)
        }}
      />
      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },
})
`,
          "Toggle.js": `import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Toggle({ label, options, value, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <Button
            color={option === value ? '#3B6CD4' : '#AAA'}
            onPress={() => onChange(option)}
            title={option}
            key={option}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 12,
  },
  label: {
    fontSize: 14,
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
`,
        }}
      />

      <BottomButtons
        backTo="/specific-components"
        backLabel="Composants Spécifiques"
        nextTo="/specific-components/text"
        nextLabel="<Text />"
      />
    </div>
  );
}

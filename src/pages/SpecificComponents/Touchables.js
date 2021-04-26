import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function TouchablesPage() {
	return (
		<div className="w-full">
			<h1>Touchables</h1>
			<h2>Touchable Opacity</h2>

			<p>
				Quand l’utilisateur touche ce composant, son opacité est réduite,
				jusqu’à ce qu’il soit relaché.
				<br />
				Il peut être stylisé, disposé via{" "}
				<span className="code">StyleSheet</span>, comme une{" "}
				<span className="code">View</span>.
			</p>

			<p>
				L’opacité peut-être configurée via la prop{" "}
				<span className="code">activeOpacity</span>
			</p>

			<blockquote>
				C’est le type de bouton le plus commun dans une application React
				Native.
			</blockquote>

			<Playground
				code={`import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Appuyez-moi dessus !</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{\`Appuyé \${count} fois\`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
      `}
			/>

			<h2 className="mt-6">Touchable Highlight</h2>

			<p>La couleur de ce composant change quand on appuie dessus.</p>

			<p>
				Cette couleur peut être configurée avec la prop{" "}
				<span className="code">underlayColor</span>
			</p>

			<Playground
				code={`import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        underlayColor="#FAB"
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Appuyez-moi !</Text>
      </TouchableHighlight>
      <Text style={styles.text}>{\`Appuyé \${count} fois\`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    backgroundColor: '#F88',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
      `}
			/>

			<BottomButtons
				backTo="/specific-components/button"
				backLabel="<Button />"
				nextTo="/specific-components/lists"
				nextLabel="Lists"
			/>
		</div>
	);
}

import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function UseState() {
	return (
		<div className="w-full">
			<h1>{"useState()"}</h1>
			{/* <h2>Le composant {"<View />"}</h2> */}
			<p>
				<span className="code">Text</span> est utilisé pour afficher du texte.
				Contrairement à ce qu’on a l’habitude de voir dans le navigateur, tout
				texte doit être «&nbsp;emballé&nbsp;» dans un composant{" "}
				<span className="code">{"<Text />"}</span>.
			</p>
			<Playground
				code={`import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,
  },
})
      `}
			/>

			<BottomButtons
				backTo="/specific-components/view"
				backLabel="<View /> et StyleSheet"
				nextTo="/specific-components/image"
				nextLabel="<Image />"
			/>
		</div>
	);
}

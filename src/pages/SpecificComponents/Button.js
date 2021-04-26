import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function ButtonPage() {
	return (
		<div className="w-full">
			<h1>{"<Button />"}</h1>
			{/* <h2>Le composant {"<View />"}</h2> */}

			<p>
				Le composant <span className="code">{"<Button />"}</span> permet
				d’affiche un bouton en utilisant les styles natifs de chaque plateforme.
			</p>

			<p>
				Se ce composant est pratique, il n’est pas très configurable. Si vous
				voulez changer le style au-delà de la couleur de fond, vous utilierez
				plutôt des composants Touchable.
			</p>

			<Playground
				code={`import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button
        title={'Pressez moi!'}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <Text style={styles.text}>{\`Pressé \${count} fois\`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
      `}
			/>

			<BottomButtons
				backTo="/specific-components/text-input"
				backLabel="<TextInput />"
				nextTo="/specific-components/touchables"
				nextLabel="Touchables"
			/>
		</div>
	);
}

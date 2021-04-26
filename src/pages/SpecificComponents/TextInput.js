import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function ImagePage() {
	return (
		<div className="w-full">
			<h1>{"<TextInput />"}</h1>
			{/* <h2>Le composant {"<View />"}</h2> */}

			<p>
				Une exemple de saisie utilisateur. <br />
				Le composant <span className="code">{"<TextInput />"}</span> est très
				riche et offre de nombreuses possibilités pour formater, valider la
				saisie, choisir le type de clavier virtuel à afficher, etc.
				<br />
				La liste complète des props est disponible sur{" "}
				<a href="https://reactnative.dev/docs/textinput">
					la documentation offcielle de React Native
				</a>
			</p>

			<p>
				Son fonctionnement n’est pas très diffétent d’un{" "}
				<span className="code">{"<input />"}</span> du navigateur. On utilise un
				état, <span className="code">text</span>, pour conserver la valeur
				courante du champ. On passe text au{" "}
				<span className="code">TextInput</span> dans la prop value, et à chaque
				fois que <span className="code">onChangeText()</span>
				sera appelée, on mettra l’état à jour en appelant{" "}
				<span className="code">setText()</span>.
			</p>

			<blockquote>
				Nous utilisons le hook <span className="code">useState</span> pour
				stocker la valeur. On le traite dans un autre chapitre.
			</blockquote>

			<Playground
				code={`import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default function App() {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Votre texte ici…"
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        Vous avez écrit : {text}
      </Text>
    </View>
  )
}
      `}
			/>

			<BottomButtons
				backTo="/specific-components/image"
				backLabel="<Image />"
				nextTo="/specific-components/button"
				nextLabel="<Button />"
			/>
		</div>
	);
}

import React from "react";

import Playground from "../../components/Playground";
import BottomButtons from "../../components/BottomButtons";

export default function ImagePage() {
	return (
		<div className="w-full">
			<h1>{"<Image />"}</h1>
			{/* <h2>Le composant {"<View />"}</h2> */}
			<p>
				<span className="code">Image</span> est utilisé pour afficher des
				images. Les images peuvent être téléchargées dynamiquement ou importées
				comme des fichiers, qui seront embarqués avec l’application.
			</p>

			<p>
				Pour embarquer une image dans l’application, importez le fichier en
				indiquant son chemin, avec l’extension. Qu’on soit sur Android ou iOS,
				le même fichier sera utilsé. En écrivant{" "}
				<span className="code">import './test.png' </span>, le fichier le plus
				approprié pour la taille de l’appareil sera choisi parmi&nbsp;:{" "}
				<span className="code">test.png</span>,{" "}
				<span className="code">test@2x.png</span>, or{" "}
				<span className="code">test@3x.png</span>.
			</p>

			<p>
				La mise en page pour les images téléchargées et les images embalquées.
			</p>

			<ul>
				<li>
					<strong>Images embarquées&nbsp;:</strong> le fichier est analysé à la
					compilation et les dimensions sont incluses dans les métadonnées de
					l’application. Les dimensions du composant{" "}
					<span className="code">Image</span> sont donc celle de l’image par
					défaut&nbsp;;
				</li>
				<li>
					<strong>Images téléchargées&nbsp;:</strong> les dimensions ne sont pas
					connues à la compilation, donc elles sont à 0 par défaut. Pour que
					l’image puisse s’afficher à l’écran, nous devons indiquer la hauteur
					et la largeur (en dur, ou via flexbox).
				</li>
			</ul>

			<Playground
				code={`import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function App() {
  return (
    <Image
      style={styles.image}
      source={{ uri: 'https://picsum.photos/200' }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})
      `}
			/>

			<BottomButtons
				backTo="/specific-components/text"
				backLabel="<Text />"
				nextTo="/specific-components/text-input"
				nextLabel="<TextInput />"
			/>
		</div>
	);
}

import React from "react";
import { Link } from "react-router-dom";

import BottomButtons from "../../components/BottomButtons";

export default function SpecificComponents() {
	return (
		<div className="w-full">
			<h1>Composants Spécifiques</h1>

			<h2>Les briques de base</h2>

			<p>
				Dans le monde de React Native, il n’y a pas de DOM à proprement parler.
				Pas de <span className="code">div</span>,{" "}
				<span className="code">span</span>, ni de{" "}
				<span className="code">ul</span> ou de <span className="code">li</span>.
				Cedendant, React Native inclus quelques composants de base prêts à
				l’emploi. Comme avec React, ces composants peuvent combinés pour
				construire des composants plus complexes.
			</p>

			<p>
				Presque tous les composants de base étandent le composant{" "}
				<span className="code">View</span>, et acceptent une prop optionnelle{" "}
				<span className="code">style</span>. Comme le CSS dans un navigateur, le
				style comprends aussi bien des propriétés d’apparence, comme les bordure
				et les couleurs, que des propriétés de mise en page. Il s’agit d’un
				sous-ensemble du CSS qui utilie l’algorithme « flexbox ».
			</p>

			<p>Voyons à quoi ça ressemble dans des exemples concrets.</p>

			<BottomButtons
				backTo="/"
				backLabel="Vite, React Native"
				nextTo="/specific-components/view"
				nextLabel="<View /> et StyleSheet"
			/>
		</div>
	);
}

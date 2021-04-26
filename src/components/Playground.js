import React from "react";
import Playground from "javascript-playgrounds";

export default function CustomPlayground(props) {
	return (
		<Playground
			style={{ with: 800, height: 600, marginTop: 16, marginBottom: 16 }}
			preset="react-native"
			panes={[
				"editor",
				{
					type: "player",
					scale: 0.8,
					width: 300,
				},
			]}
			{...props}
		/>
	);
}

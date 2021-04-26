import React from "react";
import BottomButtons from "../../components/BottomButtons";

export default function ReactHooks() {
	return (
		<div className="w-full">
			<h1>React… avec les hooks&nbsp;!</h1>

			<p>
				Cette section est plus un rappel, pour ceux qui se seraient déjà
				frotté·e·s aux fameux hooks de React, ou une succincte introduction pour
				les autres.
			</p>

			<BottomButtons
				backTo="/specific-components/lists"
				backLabel="Listes"
				nextTo="/react-hooks/usestate"
				nextLabel="useState()"
			/>
		</div>
	);
}

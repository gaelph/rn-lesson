import React from "react";
import { Link } from "react-router-dom";
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

      <p>
        Si les hooks n’ont déjà plus de secrets pour vous, vous pouvez passer au{" "}
        <Link to="/application-development/">développement d’application</Link>
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

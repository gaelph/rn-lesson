import React from "react";
import { Link } from "react-router-dom";

function L({ to, label, children }) {
  return (
    <li>
      <Link to={to}>{label}</Link>
      {children && <ol>{children}</ol>}
    </li>
  );
}

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <h5>Vite, React-Native&nbsp;!</h5>
      </Link>
      <ol>
        <L to="/specific-components" label="Composants Spécifiques">
          <L to="/specific-components/view" label={"<View /> et StyleSheet"} />
          <L to="/specific-components/text" label={"<Text />"} />
          <L to="/specific-components/image" label={"<Image />"} />
          <L to="/specific-components/text-input" label={"<TextInput />"} />
          <L to="/specific-components/button" label={"<Button />"} />
          <L to="/specific-components/touchables" label={"Touchables"} />
          <L to="/specific-components/lists" label={"Listes"} />
        </L>
        <L to="/react-hooks" label="React… avec les hooks !">
          <L to="/react-hooks/usestate" label="useState()" />
          <L to="/react-hooks/useeffect" label="useEffect()" />
          <L to="/react-hooks/useref" label="useRef()" />
          <L to="/react-hooks/others" label="Autres hooks" />
          <L to="/react-hooks/custom" label="Hooks custom" />
        </L>
        <L to="/application-development" label="Développement d’applications">
          <L
            to="/application-development/project-structure"
            label="Structures de projets"
          />
          <L to="/application-development/navigation" label="Navigation" />
          <L
            to="/application-development/state"
            label="État global et persistance"
          />
          <L to="/application-development/animations" label="Animations" />
          <L to="/application-development/sensors" label="Capteurs" />
        </L>
      </ol>
    </div>
  );
}

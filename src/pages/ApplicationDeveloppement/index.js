import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";

export default function ApplicationDeveloppement() {
  return (
    <div className="w-full">
      <h1>Développement d’Application</h1>

      <p>
        Maintenant que nous avons vu les composants de base de React Native et
        le fonctionnement des Hooks de React, nous sommes capables de créer des
        vues pour notre application. Cependant, il reste encore pas mal de
        choses à voir pour développer une App complète&nbsp;:
      </p>

      <ul>
        <li>
          <Link to="/application-development/project-structure">
            Structures de Projets
          </Link>
        </li>
        <li>
          <Link to="/application-development/navigation">Navigation</Link>
        </li>
        <li>
          <Link to="/application-development/state-management">
            État global et persistance
          </Link>
        </li>
        <li>
          <Link to="/application-development/animations">Animations</Link>
        </li>
        <li>
          <Link to="/application-development/capteurs">Capteurs</Link>
        </li>
      </ul>

      <BottomButtons
        backTo="/react-hooks/custom"
        backLabel="Hooks Custom"
        nextTo="/application-development/project-structure"
        nextLabel="Structures de Projets"
      />
    </div>
  );
}

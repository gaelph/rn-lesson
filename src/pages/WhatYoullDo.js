import React from "react";

export default function WhatYoullDo() {
  return (
    <div className="w-full">
      <h1>Ce que vous allez faire</h1>

      <p>Une application météo, avec les fonctionnalités suivant</p>
      <ol>
        <li>
          Une page pévisions : 7 jours, une image, une icone, les minimales, et
          les maximales
        </li>
        <li>
          Une page recherche : saisie, option géolocalisation, et liste des
          résultats
        </li>
        <li>Une page favoris : liste des favoris</li>
      </ol>

      <p>
        <img width="400" src={`${process.env.PUBLIC_URL}/assets/home.png`} />
      </p>
      <p>
        <img width="400" src={`${process.env.PUBLIC_URL}/assets/search.png`} />
      </p>
      <p>
        <img
          width="400"
          src={`${process.env.PUBLIC_URL}/assets/favorits.png`}
        />
      </p>
    </div>
  );
}

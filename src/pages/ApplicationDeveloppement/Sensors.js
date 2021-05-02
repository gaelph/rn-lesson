import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";
import Playground from "../../components/Playground";

export default function Sensors() {
  return (
    <div className="w-full">
      <h1>Capteurs</h1>
      <p>
        Comme pour la navigation et la persistance, à cause des trop grandes
        différences entre les plateformes, React Native ne fourni pas de module
        dédié aux capteurs.
      </p>
      <p>
        Mais il y a{" "}
        <a
          clasName="code"
          href="https://react-native-sensors.github.io/docs/Installation.html"
          target="_blank"
          rel="noreferrer"
        >
          react-native-sensors
        </a>{" "}
        !
      </p>
      <p>Ce module donne accès à&nbsp;:</p>
      <ul>
        <li>
          <span className="code">accelerometer</span> – accélération
        </li>
        <li>
          <span className="code">gyroscope</span> – rotation
        </li>
        <li>
          <span className="code">magnetometer</span> – bousole
        </li>
        <li>
          <span className="code">barometer</span> - pression atmosphérique
        </li>
      </ul>
      <p>
        <span className="code">react-native-sensors</span> exporte des
        observables RxJs mais il est aisé de les emballer dans des hooks. Par
        exemple&nbsp;
      </p>
      <Playground
        noPlayer
        height={350}
        code={`import { accelerometer } from 'react-native-sensors'
import { useState, useEffect } from 'react'

export default function useAccelerometer() {
  const [data, setData] = useState(null)

  useEffect(() => {
     const subscription = accelerometer.subscribe(d => setData(d))

     return () => subscription.unsubscribe()
  }, [])

  return data
}`}
      />
      <BottomButtons
        backTo="/application-development/animations"
        backLabel="Animations"
        nextTo="/application-development/permissions"
        nextLabel="Permissions"
      />
    </div>
  );
}

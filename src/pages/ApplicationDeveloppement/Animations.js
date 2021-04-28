import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";
import Playground from "../../components/Playground";

export default function Animations() {
  return (
    <div className="w-full">
      <h1>Animations</h1>
      <p>
        L’API <span className="code">Animated</span> nous permet d’animer le
        style des composants.
      </p>
      <p>Il y a 4 quatre parties fondamentale à cette API&nbsp;:</p>
      <ul>
        <li>
          <span className="code">Animated.Value</span> - emballe une valeur
          numérique pour être utisée dans les styles (ou interpolate, voir plus
          bas){" "}
        </li>
        <li>
          <span className="code">Animated.View</span>,{" "}
          <span className="code">Animated.Text</span>, ... - composants spéciaux
          qui peuvent être animés (les autres ne le peuvent pas, vous aurez des
          erreurs bizarres){" "}
        </li>
        <li>
          <span className="code">Animated.timing</span>,{" "}
          <span className="code">Animated.spring</span>, ... - types d’animation{" "}
        </li>
        <li>
          <span className="code">.start()</span> - BAM ! Démarre l’animation
        </li>
      </ul>
      <p>Voyons ça étape par étape</p>
      <h2>1. Créer une Animated.Value</h2>
      <p>
        Pour emballer la valeur, appelez{" "}
        <span className="code">new Animated.Value(value)</span>.
      </p>
      <Playground
        noPlayer
        height={300}
        code={`import React, { useRef } from 'react'
import { Animated } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  // ...
}`}
      />
      <h2>2. Choissez un composant à animer</h2>
      <p>
        <span className="code">Animated</span> exporte des versions spéciales de{" "}
        <span className="code">View</span>, <span className="code">Text</span>,
        et de <span className="code">Image</span>. Ces composants peuvent avoir
        des Animated.Value dans leur prop style. Pour animer autre chose, vous
        pouvez aussi emballer n’importe quel composant&nbsp;:
        <span clasName="code">
          const AnimatedButton = Animated.createAnimatedComponent(Button)
        </span>
        .
      </p>
      <p>Et puis, on peut utiliser cette Animated.Value dans le style</p>
      <blockquote>
        Ça ne marchera pas, parcequ’on n’a pas indiqué de style à animer !
      </blockquote>
      <Playground
        code={`import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button title="Animate" />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}`}
      />
      <h2>3. Animer !</h2>
      <p>
        Choisissez une fonction d’animation, comme{" "}
        <span className="code">Animated.timing</span>, et appellez
        <span className="code">.start()</span>. L’animation dois se déclencher
        quand on clique sur le bouton.
      </p>
      <p>
        On veut utiliser l’option <span className="code">useNativeDriver</span>{" "}
        dès que possible – Ça améliore considérablement les performances, mais
        ne peut être utilisé que sur des propriétés qui n’affectent pas la mise
        en page.
      </p>
      <p>
        Pour déplacer un élément, ou changer ses dimensions, on préfèrera
        utiliser la propriété <span className="code">transform</span>.<br />
        Ex.{" "}
        <span className="code">
          {"style={{ transform: [{ translateX: value }] }}"}
        </span>
      </p>
      <blockquote>N’oubliez pas d’appeler .start()!</blockquote>
      <Playground
        code={`import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0))

  return (
    <>
      <Button
        title="Animate"
        onPress={() => {
          const animation = Animated.timing(value.current, {
            toValue: 1,
            useNativeDriver: true,
          })

          animation.start()
        }}
      />
      <Animated.Text style={{ opacity: value.current, fontSize: 42 }}>
        Hello!
      </Animated.Text>
    </>
  )
}`}
      />
      <h2>Interpolation</h2>
      <p>
        Pour des animations plus complexes, on peut n’utiliser qu’une
        <span className="code">Animated.Value</span>, mais l’interpoler dans
        différentes régions pour d’autres styles.
      </p>
      <Playground
        code={`import React, { useRef } from 'react'
import { Animated, Button } from 'react-native'

export default function MyComponent() {
  const value = useRef(new Animated.Value(0.1))

  return (
    <>
      <Button
        title="Animate"
        onPress={() => {
          const animation = Animated.timing(value.current, {
            toValue: 1,
            useNativeDriver: true,
          })

          animation.start()
        }}
      />
      <Animated.Text
        style={{
          opacity: value.current,
          fontSize: 42,
          transform: [
            {
              translateY: value.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 400],
              }),
            },
          ],
        }}
      >
        Hello!
      </Animated.Text>
    </>
  )
}`}
      />
      <h2>Autres Animations</h2>
      <p>
        Il y a d’autres animations que <span className="code">timing</span> :{" "}
        <span className="code">delay</span> et{" "}
        <span className="code">spring</span>. On peut aussi changer la fonction
        de easing, créer des séquences, avoir plusieurs animations en parallèle…
        Il y a aussi d’autre opérations que l’interpolation.
      </p>
      <p>
        La{" "}
        <a
          href="https://reactnative.dev/docs/animated"
          target="_blank"
          rel="noreferrer"
        >
          documentation
        </a>{" "}
        couvre tout ce qui est disponible.
      </p>
      <BottomButtons
        backTo="/application-development/state"
        backLabel="État global et persitance"
        nextTo="/application-development/sensors"
        nextLabel="Capteurs"
      />
    </div>
  );
}

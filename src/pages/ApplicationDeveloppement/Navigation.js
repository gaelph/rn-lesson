import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";
import Playground from "../../components/Playground";

export default function Navigation() {
  return (
    <div className="w-full">
      <h1>Navigation</h1>
      <p>
        La navigation entre les différentes plateformes est une chose
        compliquée. iOS et Android ont deux approches complètement difféentes
        sur le sujet, et aucune des deux n’est semblable à la navigation dans le
        navigateur. Pour cette raison, React Native ne fourni aucun outil pour
        la gérer.
      </p>
      <p>
        Nous allons donc devoir recourir à une librairie tierce&nbsp;:
        <a href="https://reactnavigation.org/" target="_blank" rel="noreferrer">
          react-navigation
        </a>
        .
      </p>

      <p>La documentation de react-navigation explique comment l’installer.</p>

      <blockquote>
        Il est essentiel d’installer au minimum les modules suivants:
        @react-navigation/native, @react-navigation/stack. Si vous souhaitez
        utiliser les menus latéraux, installez aussi @react-navigation/drawer.
        Et @react-navigation/bottom-tabs pour les tabs.
      </blockquote>

      <h2>NavigationContainer</h2>

      <p>C’est lui qui contient et gère le contexte de navigation.</p>

      <p>
        Toutes les pages (screens) doivent être des composants enfants d’un
        NavigationContainer. Ce composant parent de toute l’application doit
        être un des premiers (sinon le premier) à apparaître dans la hiérarchie
        des composants.
      </p>

      <p>Par conséquent, dans votre App.js, on devrait trouver&nbsp;:</p>

      <Playground
        noPlayer
        height={300}
        code={`import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      {/* ...Navigators ... */}
    </NavigationContainer>
  )
}`}
      />

      <blockquote>
        Les hooks useNavigation et useRoute ne peuvent être utilisés que dans
        des composants enfants de NavigationContainer.
      </blockquote>

      <h2>Les Navigators</h2>

      <p>
        Les navigators regroupent les pages entre lesquelles il est possible de
        naviguer.{" "}
      </p>

      <p>Il en existe de trois sortes&nbsp;:</p>
      <ul>
        <li>
          <span className="code">createStackNavigator</span> depuis
          @react-navigation/stack
        </li>
        <li>
          <span className="code">createBottomTabNavigator</span> depuis
          @react-navigation/bottom-tabs
        </li>
        <li>
          <span className="code">createDrawerNavigator</span> depuis
          @react-navigation/drawer
        </li>
      </ul>

      <p>
        Par habitude, ils vivent dans un dossier spécifique du projet&nbsp;:
        navigators
      </p>

      <p>
        On va d’abord créer un stack navigator, qui est le plus simple. Ainsi,
        dans un fichier /navigators/MainNavigator.js, on aurait&nbsp;:
      </p>

      <Playground
        noPlayer
        height={300}
        code={`
import { createStackNavigator } from '@react-navigation/stack'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'
import Screen3 from '../screens/Screen3'

const Root = createStackNavigator()

export default function MainNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen name="Screen1" component={Screen1} />
      <Root.Screen name="Screen2" component={Screen2} />
      <Root.Screen name="Screen3" component={Screen3} />
    </Root.Navigator>
  )
}
      `}
      />

      <h2>Naviguer</h2>
      <blockquote>
        Comme indiqué precédemment, les hooks useNavigation et useRoute ne
        peuvent être utilisés que dans des screens ou des composants enfants de
        screens.
      </blockquote>

      <p>Chaque navigateur a sa propre fonction pour naviguer</p>
      <ul>
        <li>
          Stack: <span className="code">push</span>
        </li>
        <li>
          Tabs: <span className="code">navigate</span>
        </li>
        <li>
          Drawer: <span className="code">openDrawer</span>
        </li>
      </ul>

      <p>
        Pour naviguer, on donne le nom de l’écran et, optionnellement, des
        paramètres, ex.{" "}
        <span className="code">
          navigator.push("Screen2", {`{ paramA: "Hello!" }`})
        </span>
        .
      </p>

      <p>Voyons ce à quoi ça pourrait ressembler</p>

      <Playground
        noPlayer
        height={400}
        files={{
          "Screen1.js": `import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {
  const navigation = useNavigation()

  return (
    <Button
      onPress={() => {
        navigation.push('Screen2', { paramA: 'Hello!' })
      }}
    />
  )
}
          `,
          "Screen2.js": `import { useRoute } from '@react-navigation/native'

const Screen2 = () => {
  const route = useRoute()

  return <Text>{route.params.paramA}</Text>
}
          `,
        }}
      />

      <BottomButtons
        backTo="/application-development/project-structure"
        backLabel="Structures"
        nextTo="/application-development/state"
        nextLabel="État global et persistance"
      />
    </div>
  );
}

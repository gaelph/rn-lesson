import React from "react";
import { Link } from "react-router-dom";
import BottomButtons from "../../components/BottomButtons";
import Playground from "../../components/Playground";

export default function Navigation() {
  return (
    <div className="w-full">
      <h1>Navigation</h1>
      <p>
        La navigation entre les différentes plateforme est une chose compliquée.
        iOS et Android ont deux approches complètement difféentes sur les sujet,
        et aucune des deux n’est semblable à la navigation dans le navigateur.
        Pour cette raison, React Native ne fourni aucun outil pour la gérer.
      </p>
      <p>
        Nous allons donc devoir recourir à une librairie tierce&nbsp;:
        react-navigation.
      </p>
      <p>La documentation de react-navigation explique comment l’installer.</p>
      <p>Ensuite il nous reste 3 choses à faire&nbsp;:</p>
      <ul>
        <li>
          Emballer notre application dans un{" "}
          <span className="code">{"<NavigationContainer>"}</span> importé depuis
          @react-navigation/native
        </li>
        <li>
          Créer l’un de ces navigateurs&nbsp;:
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
        </li>
        <li>Créer les écrans de l’application</li>
      </ul>
      <h3>1. Créer un navigateur</h3>
      <p>On va d’abord créer un stack navigator, qui est le plus simple.</p>
      <Playground
        noPlayer
        height={300}
        code={`
import { createStackNavigator } from '@react-navigation/stack'

const Root = createStackNavigator()
      `}
      />
      <h3>2. Créer les écrans</h3>
      <p>Un composant par écran.</p>
      <p>
        Les écrans sont des composants React comme les autres. Ils reçoivent des
        props spécifiques à la navigation
      </p>
      <Playground
        noPlayer
        height={300}
        code={`const Screen1 = ({ navigation, route }) => {
  return <Text>Screen1</Text>
}
`}
      />
      <h3>3. On rend le tout</h3>
      <p>Enfin, on rend un NavigationContainer avec notre navigator dedans.</p>
      <p>
        Chaque écran défini une route dans l’app. On peut imbriquer des
        navigators, un stack navigator dans un tab navigator : on peut utiliser
        un autre navigator comme screen.
      </p>
      <blockquote>
        En revanche, on n’a besoin que d’un NavigationContainer.
      </blockquote>
      <Playground
        noPlayer
        height={400}
        code={`import { NavigationContainer } from '@react-navigation/native'

// ...

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Screen1" component={Screen1} />
        <Root.Screen name="Screen2" component={Screen2} />
        <Root.Screen name="Screen3" component={Screen3} />
      </Root.Navigator>
    </NavigationContainer>
  )
}`}
      />
      <h2>Naviguer</h2>
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
  const route = useRoute()

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
  const rout = useRoute()

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

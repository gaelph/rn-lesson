import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";

import Home from "./pages/Home";

import SpecificComponents from "./pages/SpecificComponents";
import ViewAndStyleSheet from "./pages/SpecificComponents/View";
import Text from "./pages/SpecificComponents/Text";
import Image from "./pages/SpecificComponents/Image";
import TextInput from "./pages/SpecificComponents/TextInput";
import Button from "./pages/SpecificComponents/Button";
import Touchables from "./pages/SpecificComponents/Touchables";
import Lists from "./pages/SpecificComponents/Lists";

import ReactHooks from "./pages/ReactHooks";
import UseState from "./pages/ReactHooks/UseState";
import UseEffect from "./pages/ReactHooks/UseEffect";
import UseCallback from "./pages/ReactHooks/UseCallback";
import UseRef from "./pages/ReactHooks/UseRef";
import UseMemo from "./pages/ReactHooks/UseMemo";
import UseReducer from "./pages/ReactHooks/UseReducer";

function App() {
	return (
		<div className="flex App">
			<Router>
				<Menu />
				<div className="w-5/6 p-16 px-48">
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>

						{/* Specific Components */}
						<Route exact path="/specific-components">
							<SpecificComponents />
						</Route>
						<Route exact path="/specific-components/view">
							<ViewAndStyleSheet />
						</Route>
						<Route exact path="/specific-components/text">
							<Text />
						</Route>
						<Route exact path="/specific-components/image">
							<Image />
						</Route>
						<Route exact path="/specific-components/text-input">
							<TextInput />
						</Route>
						<Route exact path="/specific-components/button">
							<Button />
						</Route>
						<Route exact path="/specific-components/touchables">
							<Touchables />
						</Route>
						<Route exact path="/specific-components/lists">
							<Lists />
						</Route>

						{/* React Hooks */}
						<Route exact path="/react-hooks">
							<ReactHooks />
						</Route>
						<Route exact path="/react-hooks/usestate">
							<UseState />
						</Route>
						<Route exact path="/react-hooks/useeffect">
							<UseEffect />
						</Route>
						<Route exact path="/react-hooks/usecallback">
							<UseCallback />
						</Route>
						<Route exact path="/react-hooks/useref">
							<UseRef />
						</Route>
						<Route exact path="/react-hooks/usememo">
							<UseMemo />
						</Route>
						<Route exact path="/react-hooks/usereducer">
							<UseReducer />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;

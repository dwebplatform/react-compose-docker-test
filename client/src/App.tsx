import { NavBarComponent } from './components/general/NavBarComponent';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from "react-router-dom";

import { ServicePage } from './pages/ServicePage';
import { HomePage } from './pages/HomePage';
import { TestPage } from './pages/TestPage';
import { Microservice1 } from './pages/Microcervice1';
import { Microservice2 } from './pages/Microservice2';
import { PaintGraph } from './pages/PaintGraph';
import { EditorPage } from './pages/EditorPage';
function App() {

	return (
		<Router>
			<Link to='/test-page'>
			<div
			style={{
				margin: '20px',
				padding:'10px',
				background:'red',
				border:'none',
				borderRadius: '8px'
			}}
			>Тестовая страница</div>
			</Link>
			<div>
				<NavBarComponent />
				<Route path="/">
					<Redirect to="/home" />
				</Route>
				<Switch>
					<Route path="/home" exact>
						<HomePage />
					</Route>
					<Route path="/services/:tag" exact>
						<ServicePage />
					</Route>
					<Route path="/test-page" exact>
						<TestPage />
					</Route>
					<Route path="/services/supported-services/4" exact>
						<Microservice1 />
					</Route>
					<Route path="/services/supported-services/1" exact>
						<Microservice2 />
					</Route>
					<Route path="/services/supported-services/7" exact>
						<PaintGraph />
					</Route>
					<Route path="/services/supported-services/8" exact>
						<EditorPage />
					</Route>
				</Switch>
			</div>
		</Router>

	);
}

export default App;

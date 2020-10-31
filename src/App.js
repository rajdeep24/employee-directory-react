import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./containers/About/About";
import Discover from "./containers/Discover/Discover";
import Search from "./containers/Search/Search";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/discover" component={Discover} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/about" component={About} />
				</Switch>
			</Router>
		</>
	);
}

export default App;

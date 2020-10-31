import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/EmployeeTable" component={EmployeeTable} />
				</Switch>
			</Router>
		</>
	);
}

export default App;

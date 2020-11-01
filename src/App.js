import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<EmployeeTable />
			<Footer />
		</>
	);
}

export default App;

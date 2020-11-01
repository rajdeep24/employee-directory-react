import React from "react";
import Api from "../../utility/Api";

class EmployeeTable extends React.Component {
	state = {
		result: [],
	};
	componentDidMount() {
		this.employeeDirectory();
	}
	employeeDirectory = () => {
		Api.getUsers()
			//.then((res) => console.log(res.data));
			.then((res) => this.setState({ result: res.data.results }));
	};

	handleInputChange = (event) => {
		const value = event.target.value;
	};

	render() {
		return (
			<>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Image</th>
								<th scope="col" className="sort-name" onClick={this.handleSort}>
									Name <span className="glyphicon">&#xe119;</span>
								</th>
								<th scope="col">Phone</th>
								<th scope="col">Email</th>
								<th scope="col">DOB</th>
							</tr>
						</thead>
						<tbody>
							{this.state.result.map((element) => (
								<tr>
									<th scope="row">
										<img
											alt={element.name.first}
											src={element.picture.thumbnail}
										></img>
									</th>
									<td>
										{element.name.first} {element.name.last}
									</td>
									<td>{element.phone}</td>
									<td>{element.email}</td>
									<td>{element.dob.date.replace(/T.*/, "")}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default EmployeeTable;

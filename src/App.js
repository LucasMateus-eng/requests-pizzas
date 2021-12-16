import { useState } from "react";
import "./App.css";
import NewRequest from "./components/NewRequests/NewRequest";
import Requests from "./components/Requests/Requests";

const DUMMY_REQUESTS = [
	{
		id: "e1",
		product: "Nordestina - G",
		amount: 39.9,
		payment: "Cartão de crédito",
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		product: "Calabresa - M",
		amount: 30.0,
		payment: "Cartão de crédito",
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		product: "Portuguesa - P",
		amount: 15.0,
		payment: "Em dinheiro",
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		product: "Marguerita - M",
		amount: 30.0,
		payment: "Via pix",
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [requests, setRequests] = useState(DUMMY_REQUESTS);

	const newRequestAddHandler = (newRequest) => {
		setRequests((prevRequests) => {
			return [newRequest, ...prevRequests];
		});
	};

	return (
		<div className="container">
			<NewRequest onAddNewRequest={newRequestAddHandler} />
			<Requests items={requests} />
		</div>
	);
}

export default App;

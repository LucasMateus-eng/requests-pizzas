import Card from "../UI/Card";
import RequestItem from "./RequestItem";
import "./Requests.css";

const Requests = (props) => {
	return (
		<Card className="requests">
			{props.items.map((request) => (
				<RequestItem
					key={request.id}
					product={request.product}
					amount={request.amount}
					payment={request.payment}
					date={request.date}
				/>
			))}
		</Card>
	);
};

export default Requests;

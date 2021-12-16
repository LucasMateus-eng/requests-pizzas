import Card from "../UI/Card";
import RequestForm from "./RequestForm";
import "./NewRequest.css";

const NewRequest = (props) => {
	const requestSubmitHandler = (enteredData) => {
		const newRequest = {
			...enteredData,
			id: Math.random().toString(),
		};

		props.onAddNewRequest(newRequest);
	};

	return (
		<Card className="new-request">
			<RequestForm onSubmitData={requestSubmitHandler} />
		</Card>
	);
};

export default NewRequest;

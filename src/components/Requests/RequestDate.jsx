import "./RequestDate.css";

const RequestDate = (props) => {
	const month = props.date.toLocaleString("pt-br", { month: "long" });
	const day = props.date.toLocaleString("pt-br", { day: "2-digit" });
	const year = props.date.getFullYear();

	return (
		<div className="request-item__date">
			<span className="request-item__date-month">{month}</span>
			<span className="request-item__date-year">{year}</span>
			<span className="request-item__date-day">{day}</span>
		</div>
	);
};

export default RequestDate;

import RequestDate from "./RequestDate";
import "./RequestItem.css";

const RequestItem = (props) => {
	return (
		<div className="request-item">
			<RequestDate date={props.date} />
			<div className="request-item__description">
				<p className="request-item__product">{props.product}</p>
				<div className="request-item__payment">
					<p className="request-item__payment-method">
						{props.payment}
					</p>
					<div className="request-item__amount">
						<p>R${props.amount}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestItem;

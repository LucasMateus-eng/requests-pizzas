import { useState } from "react";
import Button from "../UI/Button";
import "./RequestForm.css";

const RequestForm = (props) => {
	const [enteredProduct, setEnteredProduct] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredPayment, setEnteredPayment] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const productChangeHandler = (event) => {
		setEnteredProduct(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const paymentChangeHandler = (event) => {
		setEnteredPayment(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const dataSubmitHandler = (event) => {
		event.preventDefault();

		const enteredData = {
			product: enteredProduct,
			amount: +enteredAmount,
			payment: enteredPayment,
			date: new Date(enteredDate.split("-")),
		};

		props.onSubmitData(enteredData);

		setEnteredProduct("");
		setEnteredAmount("");
		setEnteredPayment("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={dataSubmitHandler}>
			<div className="new-request__controls">
				<div className="new-request__control">
					<label>Sabor da pizza</label>
					<input
						type="text"
						name="product"
						value={enteredProduct}
						onChange={productChangeHandler}
					/>
				</div>
				<div className="new-request__control">
					<label>Preço - R$</label>
					<input
						type="number"
						name="amount"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-request__control">
					<label>Tipo de pagamento</label>
					<input
						type="text"
						name="payment"
						id="payment"
						value={enteredPayment}
						onChange={paymentChangeHandler}
					/>
				</div>
				<div className="new-request__control">
					<label>Data da compra</label>
					<input
						type="date"
						name="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-request__actions">
				<Button type="button" className="cancel">
					Cancelar
				</Button>
				<Button type="submit" className="add">
					Adicionar
				</Button>
			</div>
		</form>
	);
};

export default RequestForm;

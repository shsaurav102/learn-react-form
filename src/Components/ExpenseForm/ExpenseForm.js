import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmmount, setEnteredAmmount] = useState("");
  const onTitleChangeHandler = (event) => {
    event.preventDefault();
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };
  const onDateChangeHandler = (event) => {
    event.preventDefault();
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };
  const onAmmountChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAmmount(event.target.value);
    console.log(enteredAmmount);
  };
  const onSumbmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      ammout: enteredAmmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmmount("");
  };
  return (
    <div>
      <form onSubmit={onSumbmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Item</label>
            <input
              type="text"
              onChange={onTitleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="Date"
              min="2019-01-01"
              max="2021-12-31"
              onChange={onDateChangeHandler}
              value={enteredDate}
            />
          </div>
          <div className="new-expense__control">
            <label>Ammount</label>
            <input
              type="number"
              min="1"
              max="10000"
              onChange={onAmmountChangeHandler}
              value={enteredAmmount}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;

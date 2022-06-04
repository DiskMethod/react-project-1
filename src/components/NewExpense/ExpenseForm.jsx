import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const addNewClickHandler = (e) => {
    setShowForm(true);
  };

  const cancelClickHandler = (e) => {
    setShowForm(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      amount: parseFloat(amount),
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      {showForm ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={date}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelClickHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button onClick={addNewClickHandler}>Add New Expense</button>
      )}
    </>
  );
};

export default ExpenseForm;

import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses found.</h2>
  );

  if (props.expenses.length) {
    expensesContent = props.expenses.map((curr) => {
      return <ExpenseItem key={curr.id} expense={curr} />;
    });
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;

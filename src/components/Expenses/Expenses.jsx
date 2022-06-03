import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  // props.expenses is an array of objects:
  // { id, title, amount, date }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChange={handleChange} selectedValue={filter} />
        {props.expenses.map((curr, idx) => {
          return <ExpenseItem key={idx} expense={curr} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;

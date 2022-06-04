import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expenses.css";

// props.expenses is an array of objects:
// { id, title, amount, date }
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filteredExpenses = props.expenses.filter((curr) => {
    return curr.date.getFullYear() === parseInt(filterYear);
  });

  const handleFilter = (e) => {
    setFilterYear(e.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChange={handleFilter} selectedValue={filterYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

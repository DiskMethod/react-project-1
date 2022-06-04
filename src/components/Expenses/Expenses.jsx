import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filteredExpenses = props.expenses.filter((curr) => {
    return curr.date.getFullYear() === parseInt(filterYear);
  });

  console.log(filteredExpenses);

  const handleFilter = (e) => {
    setFilterYear(e.target.value);
  };
  // props.expenses is an array of objects:
  // { id, title, amount, date }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChange={handleFilter} selectedValue={filterYear} />
        {filteredExpenses.map((curr) => {
          return <ExpenseItem key={curr.id} expense={curr} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;

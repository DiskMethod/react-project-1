import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 5.99,
    date: new Date(2022, 3, 20),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 500.0,
    date: new Date(2022, 5, 24),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.0,
    date: new Date(2022, 4, 16),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((currExpenses) => [expense, ...currExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

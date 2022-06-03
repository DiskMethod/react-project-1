import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

function App() {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

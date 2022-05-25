import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  // props.expenses is an array of objects:
  // { id, title, amount, date }
  return (
    <Card className="expenses">
      {props.expenses.map((curr, idx) => {
        return <ExpenseItem expense={curr} />;
      })}
    </Card>
  );
}

export default Expenses;

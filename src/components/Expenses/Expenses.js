import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        itemTitle={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        itemTitle={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        itemTitle={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        itemTitle={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </Card>
  );
}

export default Expenses;

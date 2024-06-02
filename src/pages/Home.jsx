import SelectMonth from "../components/SelectMonth";
import ExpensesList from "../components/ExpensesList.jsx";
import AddExpenses from "../components/AddExpenses.jsx";
import { ExpenseContext } from "../contexts/ExpenseContext.jsx";
import { useContext } from "react";

const Home = () => {
  const { expenses, selectedMonth } = useContext(ExpenseContext);
  const filterExpense = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === selectedMonth
  );
  console.log(filterExpense);
  console.log(selectedMonth);
  return (
    <>
      <AddExpenses />
      <SelectMonth />
      <ExpensesList expenses={filterExpense} />
    </>
  );
};

export default Home;

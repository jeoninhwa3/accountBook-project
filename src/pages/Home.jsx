import SelectMonth from "../components/SelectMonth";
import ExpensesList from "../components/ExpensesList.jsx";
import AddExpenses from "../components/AddExpenses.jsx";

const Home = ({ selectedMonth, setSelectedMonth, expenses, setExpenses }) => {
  const filterExpense = expenses.filter(
    (expense) => parseInt(expense.date.split("-")[1]) === selectedMonth
  );
  return (
    <>
      <AddExpenses setExpenses={setExpenses} />
      <SelectMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        setExpenses={setExpenses}
      />
      <ExpensesList expenses={filterExpense} setExpenses={setExpenses} />
    </>
  );
};

export default Home;

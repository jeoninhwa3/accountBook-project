import SelectMonth from "../components/SelectMonth";
import ExpensesList from "../components/ExpensesList.jsx";
import AddExpenses from "../components/AddExpenses.jsx";

const Home = ({ selectedMonth, setSelectedMonth, expenses, setExpenses }) => {
  return (
    <>
      <AddExpenses setExpenses={setExpenses} />
      <SelectMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        setExpenses={setExpenses}
      />
      <ExpensesList expenses={expenses} setExpenses={setExpenses} />
    </>
  );
};

export default Home;

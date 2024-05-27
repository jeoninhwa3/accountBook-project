import SelectMonth from "../components/SelectMonth";
import ExpensesList from "../components/ExpensesList.jsx";

const Home = () => {
  return (
    <>
      {/* <지출 등록 /> */}
      <SelectMonth />
      <ExpensesList />
    </>
  );
};

export default Home;

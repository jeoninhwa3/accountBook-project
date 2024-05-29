import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../Layout";

const Router = ({ selectedMonth, setSelectedMonth, expenses, setExpenses }) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                expenses={expenses}
                setExpenses={setExpenses}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

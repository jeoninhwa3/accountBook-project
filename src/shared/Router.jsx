import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../Layout";
import ExpenseProvider from "../contexts/ExpenseContext";

const Router = () => {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ExpenseProvider>
  );
};

export default Router;

import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import dummy from "./dummy.json";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(() => {
    return localStorage.getItem("month")
      ? parseInt(localStorage.getItem("month"))
      : 0;
  });
  const [expenses, setExpenses] = useState(() => {
    return dummy.filter((el) => {
      return (
        parseInt(el.date.split("-")[1]) ===
        parseInt(localStorage.getItem("month"))
      );
    });
  });
  return (
    <>
      <GlobalStyle />
      <Router
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </>
  );
}

export default App;

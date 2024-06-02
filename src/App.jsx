import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import dummy from "./dummy.json";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [expenses, setExpenses] = useState(dummy);
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

import { createContext } from "react";
import dummy from "../dummy.json";
import { useState } from "react";

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [expenses, setExpenses] = useState(dummy);
  return (
    <ExpenseContext.Provider
      value={{ expenses, setExpenses, selectedMonth, setSelectedMonth }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;

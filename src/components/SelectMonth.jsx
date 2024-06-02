import styled from "styled-components";
import { useEffect, useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext.jsx";

// styled component
const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 30px 30px 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
`;
const StLi = styled.li`
  padding: 20px 0;
  background-color: ${(props) => (props.$active ? "#05b38f" : "#eee")};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const SelectMonth = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { selectedMonth, setSelectedMonth } = useContext(ExpenseContext);

  useEffect(() => {
    handleClick(selectedMonth);
  }, []);

  const handleClick = (month) => {
    localStorage.setItem("month", month);
    setSelectedMonth(month);
  };
  return (
    <StUl>
      {months.map((month, index) => {
        return (
          <StLi
            key={index}
            $active={selectedMonth === month}
            onClick={() => handleClick(month)}
          >
            {month} 월
          </StLi>
        );
      })}
    </StUl>
  );
};

export default SelectMonth;

import styled from "styled-components";
import dummy from "../dummy.json";
import { useEffect } from "react";

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

const SelectMonth = ({ selectedMonth, setSelectedMonth, setExpenses }) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    handleClick(selectedMonth);
  }, []);

  const handleClick = (index) => {
    localStorage.setItem("month", index);
    setSelectedMonth(index);
    setExpenses(
      dummy.filter((el) => {
        return parseInt(el.date.split("-")[1]) === months[index];
      })
    );
  };
  return (
    <StUl>
      {months.map((month, index) => {
        return (
          <StLi
            key={index}
            $active={selectedMonth === index}
            onClick={() => handleClick(index)}
          >
            {month} 월
          </StLi>
        );
      })}
    </StUl>
  );
};

export default SelectMonth;

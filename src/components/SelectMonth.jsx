import styled from "styled-components";
import dummy from "../dummy.json";
import { useEffect } from "react";

// styled component
const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #fff;
`;
const StLi = styled.li`
  padding: 20px 0;
  background-color: ${(props) => (props.$active ? "pink" : "#eee")};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const SelectMonth = ({ selectedMonth, setSelectedMonth, setExpenses }) => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    localStorage.setItem("month", JSON.stringify(selectedMonth + 1));
  }, [selectedMonth]);

  const handleClick = (index) => {
    setSelectedMonth(index);
    setExpenses(
      dummy.filter((el) => {
        return parseInt(el.date.split("-")[1]) == months[index];
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

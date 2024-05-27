import { useState } from "react";
import styled from "styled-components";

// styled component
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #fff;
`;
const Li = styled.li`
  padding: 20px 0;
  background-color: ${(props) => (props.$active ? "pink" : "#eee")};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`;

const SelectMonth = () => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const handleClick = (index) => {
    setSelectedMonth(index);
    console.log(index);
  };
  return (
    <Ul>
      {months.map((month, index) => {
        return (
          <Li
            key={index}
            $active={selectedMonth === index}
            onClick={() => handleClick(index)}
          >
            {month}
          </Li>
        );
      })}
    </Ul>
  );
};

export default SelectMonth;

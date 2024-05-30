import { Link } from "react-router-dom";
import styled from "styled-components";

// styled component
const StUl = styled.ul`
  display: grid;
  row-gap: 10px;
  padding: 20px;
  margin: 30px 30px 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
`;
const StLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #eee;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.01);
  }
`;
const StDesc = styled.p`
  width: 930px;
  margin-top: 3px;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ExpensesList = ({ expenses }) => {
  return (
    <StUl>
      {expenses.map((el) => {
        return (
          <li key={el.id}>
            <StLink to={`/detail/${el.id}`}>
              <div>
                <p>{el.date}</p>
                <StDesc>
                  {el.item} - {el.description}
                </StDesc>
              </div>
              <p>
                <strong>{el.amount}</strong> 원
              </p>
            </StLink>
          </li>
        );
      })}
    </StUl>
  );
};

export default ExpensesList;

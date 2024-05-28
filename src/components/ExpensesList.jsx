import { Link } from "react-router-dom";
import styled from "styled-components";

// styled component
const StUl = styled.ul`
  display: grid;
  row-gap: 10px;
  padding: 20px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #fff;
`;
const StLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #eee;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    box-shadow: 5px 5px 10px gray;
  }
`;
const StDesc = styled.p`
  width: 930px;
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
          <StLi key={el.id}>
            <Link to={`/detail/${el.id}`}>
              <div>
                <p>{el.date}</p>
                <StDesc>
                  {el.item} - {el.description}
                </StDesc>
              </div>
              <p>
                <strong>{el.amount}</strong> 원
              </p>
            </Link>
          </StLi>
        );
      })}
    </StUl>
  );
};

export default ExpensesList;

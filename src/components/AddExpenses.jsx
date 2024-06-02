import styled from "styled-components";
import uuid from "react-uuid";
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext.jsx";

// styled components
const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  margin: 0 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.2);
`;
const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
const StInput = styled.input`
  padding: 9px 18px 7px;
  margin-top: 7px;
  border: 1px solid #eee;
  border-radius: 5px;
`;
const StBtn = styled.button`
  padding: 10px 20px;
  margin-top: 7px;
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
`;

const AddExpenses = () => {
  const { setExpenses } = useContext(ExpenseContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    // 유효성 검사
    if (!date.trim()) {
      alert("날짜를 입력해주세요.");
      return;
    }
    if (!item.trim()) {
      alert("항목을 입력해주세요.");
      return;
    }
    if (!amount.trim()) {
      alert("금액을 입력해주세요.");
      return;
    }
    if (!description.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const nextExpense = {
      id: uuid(),
      date,
      item,
      amount,
      description,
    };

    setExpenses((prev) => [...prev, nextExpense]);
    e.target.reset();
  };

  return (
    <StForm onSubmit={onSubmit}>
      <StLabel>
        날짜
        <StInput
          name="date"
          type="date"
          min="2024-01-01"
          max="2024-12-31"
          placeholder="날짜 입력"
        />
      </StLabel>
      <StLabel>
        항목
        <StInput name="item" type="text" placeholder="지출 항목" />
      </StLabel>
      <StLabel>
        금액
        <StInput name="amount" type="number" placeholder="지출 금액" />
      </StLabel>
      <StLabel>
        내용
        <StInput name="description" type="text" placeholder="지출 내용" />
      </StLabel>
      <StBtn type="submit">저장</StBtn>
    </StForm>
  );
};

export default AddExpenses;

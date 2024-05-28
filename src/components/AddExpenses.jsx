import styled from "styled-components";
import uuid from "react-uuid";

// styled components
const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  border-radius: 10px;
  background-color: #fff;
`;
const StLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const AddExpenses = ({ setExpenses }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

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

    const nextExpenses = {
      id: uuid(),
      date,
      item,
      amount,
      description,
    };

    setExpenses((prev) => [...prev, nextExpenses]);
    e.target.reset();
  };

  return (
    <StForm onSubmit={onSubmit}>
      <StLabel>
        날짜
        <input
          name="date"
          type="date"
          min="2024-01-01"
          max="2024-12-31"
          placeholder="날짜 입력"
        />
      </StLabel>
      <StLabel>
        항목
        <input name="item" type="text" placeholder="지출 항목" />
      </StLabel>
      <StLabel>
        금액
        <input name="amount" type="number" placeholder="지출 금액" />
      </StLabel>
      <StLabel>
        내용
        <input name="description" type="text" placeholder="지출 내용" />
      </StLabel>
      <button type="submit">저장</button>
    </StForm>
  );
};

export default AddExpenses;

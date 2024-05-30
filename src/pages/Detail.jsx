import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

// styled components
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: 0 30px;
  border-radius: 10px;
  background-color: #fff;
`;
const StForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 13px;
`;
const StInput = styled.input`
  padding: 9px 35px 7px 18px;
  margin-top: 7px;
  border: 1px solid #eee;
  border-radius: 5px;
`;
const StBtnBox = styled.div`
  margin-top: 30px;
`;
const StBtn = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: 1px solid #eee;
  border-radius: 5px;
  cursor: pointer;
`;

const Detail = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const selectedExpense = expenses.find((el) => el.id === id);
  const [date, setDate] = useState(selectedExpense.date);
  const [item, setItem] = useState(selectedExpense.item);
  const [amount, setAmount] = useState(selectedExpense.amount);
  const [description, setDescription] = useState(selectedExpense.description);

  const editExpense = () => {
    if (!item.trim() || !description.trim()) {
      alert("항목과 내용을 모두 입력해주세요.");
      return;
    }

    const newExpenses = expenses.map((expense) => {
      if (expense.id !== id) {
        return expense;
      } else {
        return {
          ...expense,
          date: date,
          item: item,
          amount: amount,
          description: description,
        };
      }
    });
    setExpenses(newExpenses);
    navigate("/");
    console.log(newExpenses);
  };
  const deleteExpense = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      const newExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(newExpenses);
      navigate("/");
    }
  };

  return (
    <StContainer>
      <StForm>
        <StLabel>
          날짜
          <StInput
            name="date"
            id={date}
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="날짜 입력"
          />
        </StLabel>
        <StLabel>
          항목
          <StInput
            name="item"
            id={item}
            defaultValue={item}
            onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="지출 항목"
          />
        </StLabel>
        <StLabel>
          금액
          <StInput
            name="amount"
            id={amount}
            defaultValue={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="지출 금액"
          />
        </StLabel>
        <StLabel>
          내용
          <StInput
            name="description"
            id={description}
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="지출 내용"
          />
        </StLabel>
      </StForm>
      <StBtnBox>
        <StBtn onClick={editExpense} type="submit">
          수정
        </StBtn>
        <StBtn onClick={deleteExpense} type="submit">
          삭제
        </StBtn>
        <StBtn
          onClick={() => {
            navigate("/");
          }}
          type="submit"
        >
          뒤로가기
        </StBtn>
      </StBtnBox>
    </StContainer>
  );
};

export default Detail;

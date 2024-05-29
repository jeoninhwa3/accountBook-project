import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";

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

const Detail = ({ expenses }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const expense = location.state;
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleSubmit = () => {
    if (!itemRef.trim() || !descriptionRef.trim()) {
      alert("항목과 내용을 모두 입력해주세요.");
    }
  };
  const handelDelete = () => {
    confirm("정말로 삭제하시겠습니까?");
    const deleteId = expense.id;
    filterDelete(deleteId);
    navigate("/");
  };

  const filterDelete = (deleteId) => {
    return expenses.filter((expense) => {
      return deleteId !== expense.id;
    });
  };

  return (
    <StContainer>
      <StForm>
        <StLabel>
          날짜
          <StInput
            ref={dateRef}
            name="date"
            defaultValue={location.state.date}
            type="text"
            placeholder="날짜 입력"
          />
        </StLabel>
        <StLabel>
          항목
          <StInput
            ref={itemRef}
            name="item"
            defaultValue={location.state.item}
            type="text"
            placeholder="지출 항목"
          />
        </StLabel>
        <StLabel>
          금액
          <StInput
            ref={amountRef}
            name="amount"
            defaultValue={location.state.amount}
            type="number"
            placeholder="지출 금액"
          />
        </StLabel>
        <StLabel>
          내용
          <StInput
            ref={descriptionRef}
            name="description"
            defaultValue={location.state.description}
            type="text"
            placeholder="지출 내용"
          />
        </StLabel>
      </StForm>
      <StBtnBox>
        <StBtn onClick={handleSubmit} type="submit">
          수정
        </StBtn>
        <StBtn onClick={handelDelete} type="submit">
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

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Detail = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <StForm>
        <StLabel>
          날짜
          <StInput name="date" type="text" placeholder="날짜 입력" />
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
      </StForm>
      <StBtnBox>
        <StBtn type="submit">수정</StBtn>
        <StBtn type="submit">삭제</StBtn>
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

import styled from "styled-components";

// styled components
const StContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 800px;
  padding-bottom: 30px;
  background-color: #05b38f;
  border: 7px solid #fff;
  border-radius: 50px;
  box-shadow: 10px 10px 20px #eee;
  overflow-y: auto;
`;

const StHeader = styled.header`
  position: absolute;
  top: 40px;
  left: 50px;
`;

const StLogo = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`;

const StMain = styled.main`
  margin-top: 130px;
`;

const Layout = ({ children }) => {
  return (
    <StContainer>
      <StHeader>
        <StLogo>Account Book</StLogo>
      </StHeader>
      <StMain>{children}</StMain>
    </StContainer>
  );
};

export default Layout;

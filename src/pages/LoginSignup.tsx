import styled from "styled-components";

import LoginSignupform from "../features/authentication/LoginSignupform";

import Logo from "../ui/sidebar/Logo";

const LoginContainer = styled.div`
  display: flex;
  background-color: var(--color-grey-0);
  min-height: 100vh;
`;
const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 54rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  border: 1px solid var(--color-grey-300);
  padding: 0 5% 0 5%;
  margin-top: 0;
`;

const StyledLoginSignup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* padding: 5%; */
`;

function LoginSignup() {
  return (
    <LoginContainer>
      <LoginLayout>
        <Logo />
        <LoginSignupform />
      </LoginLayout>
      <StyledLoginSignup>
        <Img src="\src\data\img\s4.png" />
      </StyledLoginSignup>
    </LoginContainer>
  );
}

export default LoginSignup;

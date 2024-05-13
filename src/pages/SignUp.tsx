import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

import Logo from "../ui/sidebar/Logo";

const SignupContainer = styled.div`
  display: flex;
  background-color: var(--color-brand-0);
  min-height: 100vh;
`;
const SignupLayout = styled.main`
  display: grid;
  grid-template-columns: 54rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  border: 1px solid var(--color-grey-300);
  padding: 0 5% 0 5%;
  margin-top: 0;
`;
function SignUp() {
  return (
    <SignupContainer>
      <SignupLayout>
        <Logo />
        <Heading as="h2">Create your account</Heading>
        <SignupForm />
      </SignupLayout>
    </SignupContainer>
  );
}

export default SignUp;

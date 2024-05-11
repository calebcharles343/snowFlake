import styled from "styled-components";

const StyledLogin = styled.div`
  height: calc(100vh - 5rem);
  margin: 2.5rem;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("../Login.jpg");
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

function Login() {
  return <StyledLogin>Login</StyledLogin>;
}

export default Login;

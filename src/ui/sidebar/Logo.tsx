import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  height: 2.4rem;
  width: auto;
`;

const LogoLebel = styled.p`
  font-size: 1.8rem;
  color: var(--color-indigo-700);
  font-weight: 700;
`;
function Logo() {
  // const ref = useRef();
  return (
    <StyledLogo>
      <Img src="\src\data\img\Snoflake.png" alt="Logo" />
      <LogoLebel>Snowflake</LogoLebel>
    </StyledLogo>
  );
}

export default Logo;

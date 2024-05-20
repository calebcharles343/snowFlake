import styled, { css } from "styled-components";

interface LogoT {
  size: "medium";
}
const StyledLogo = styled.div<Partial<LogoT>>`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  ${({ size }) => size === "medium" && css``}
`;

const Img = styled.img<Partial<LogoT>>`
  height: 2.4rem;
  width: auto;
  ${({ size }) =>
    size === "medium" &&
    css`
      height: 5rem;
      width: 5rem;
    `}
`;

const LogoLebel = styled.p<Partial<LogoT>>`
  font-size: 1.8rem;
  color: var(--color-brand-800);
  font-weight: 700;
  ${({ size }) =>
    size === "medium" &&
    css`
      font-size: 2.8rem;
    `}
`;
function Logo() {
  // const ref = useRef();
  return (
    <StyledLogo>
      <Img
        size="medium"
        src="https://puhxyxdebgyylukivpcd.supabase.co/storage/v1/object/public/Logo/logo.png?t=2024-05-20T05%3A07%3A30.603Z"
        alt="Logo"
      />
      <LogoLebel size="medium">Snow</LogoLebel>
    </StyledLogo>
  );
}

export default Logo;

import styled from "styled-components";

import Button from "../Button";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;

  background-color: var(--color-brand-0);
  grid-row: 1/-1;

  padding: 50px 30px;
  height: 100vh;

  //////////////////////////////////////
  //MEDIA QUERRY
  /////////////////////////////////////

  //small
  @media (min-width: 640px) {
    font-size: 14px;
    line-height: 20px;

    //  margin-top: ;
  }

  //medium
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  //large
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }

  //extra large
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 28px;
  }

  //extra extra large
  @media (min-width: 1536px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const ButtonStyle = styled.div`
  margin-top: auto;
`;

function Sidebar() {
  return (
    <StyledAside>
      <Logo />
      <MainNav />
      <ButtonStyle>
        <Button size="fill" variation="primary">
          Guide
        </Button>
      </ButtonStyle>
    </StyledAside>
  );
}

export default Sidebar;

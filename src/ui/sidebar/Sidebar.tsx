import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  grid-row: 1/-1;

  padding: 50px 0 50px 0;
  height: 100vh;

  overflow: hidden;
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
  position: fixed;
  top: 84rem;
`;

function Sidebar() {
  return (
    <StyledAside>
      <div>
        <Logo />
        <MainNav />
      </div>
      <ButtonStyle>
        {/* <Button size="large" variation="primary">
          Guide
        </Button> */}
      </ButtonStyle>
    </StyledAside>
  );
}

export default Sidebar;

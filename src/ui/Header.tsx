import styled from "styled-components";
import LogOut from "../features/authentication/LogOut";
import HomeSearchList from "../features/home/HomeSearchList";

const StyledHeader = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HomeSearchList />
      <StyledAuthContainer>
        <StyledAuthContainer>
          <LogOut />
          <span>Log out</span>
        </StyledAuthContainer>
      </StyledAuthContainer>
    </StyledHeader>
  );
}

export default Header;

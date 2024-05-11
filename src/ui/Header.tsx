import styled from "styled-components";
import HomeSearchList from "../features/home/HomeSearchList";

const StyledHeader = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <HomeSearchList />
    </StyledHeader>
  );
}

export default Header;

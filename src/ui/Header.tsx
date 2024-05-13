import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";
import HomeSearchList from "../features/home/HomeSearchList";

import { StyledNavLink } from "./sidebar/SidebarSytle";

const StyledHeader = styled.div`
  padding: 2rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <HomeSearchList />
      <div>
        <StyledNavLink to="/signup">
          <HiOutlineUser />
          <span>Sign up</span>
        </StyledNavLink>
      </div>
    </StyledHeader>
  );
}

export default Header;

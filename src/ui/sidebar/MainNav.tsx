import NavList, { StyledNavLink, List } from "./SidebarSytle";
import { HiOutlineHome, HiOutlineChartBarSquare } from "react-icons/hi2";

function MainNav() {
  return (
    <nav>
      <NavList>
        <List>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </List>

        <List>
          <StyledNavLink to="/chart">
            <HiOutlineChartBarSquare />
            <span>Chart</span>
          </StyledNavLink>
        </List>
      </NavList>
    </nav>
  );
}

export default MainNav;

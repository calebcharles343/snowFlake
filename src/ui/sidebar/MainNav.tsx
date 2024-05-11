import NavList, { StyledNavLink, List } from "./SidebarSytle";
import {
  HiOutlineHome,
  HiOutlineChartBarSquare,
  HiOutlineBanknotes,
  HiOutlineChatBubbleLeft,
  HiOutlineInformationCircle,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

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
          <StyledNavLink to="/assets">
            <HiOutlineBanknotes />
            <span>Assets</span>
          </StyledNavLink>
        </List>

        <List>
          <StyledNavLink to="/chart">
            <HiOutlineChartBarSquare />
            <span>Chart</span>
          </StyledNavLink>
        </List>

        <List>
          <StyledNavLink to="/support">
            <HiOutlineChatBubbleLeft />
            <span>Support</span>
          </StyledNavLink>
        </List>

        <List>
          <StyledNavLink to="/reports">
            <HiOutlineInformationCircle />
            <span>Reports</span>
          </StyledNavLink>
        </List>

        <List>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </List>
      </NavList>
    </nav>
  );
}

export default MainNav;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 0 0 0.4rem;
`;

const List = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: Var(--color-grey-500);

    font-weight: 500;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: Var(--color-grey-800);
    // background-color: white;
    border-color: var(--color-brand-700);
    border-radius: 50px;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: Var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: Var(--color-grey-800);
  }
`;

export { StyledSidebar, StyledNavLink, List };

export default NavList;

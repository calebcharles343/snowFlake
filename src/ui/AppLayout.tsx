import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import TraderProfile from "./traderProfile/TraderProfile";
// import TraderProfile from "./traderProfile/ProfileStyle";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 25rem 7fr 1.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
`;

const Main = styled.div`
  background-color: var(--color-brand-0);
  height: 100vh;
  border: 1px solid var(--color-grey-300);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Header />
        <Outlet />
      </Main>
      <TraderProfile />
    </StyledAppLayout>
  );
}

export default AppLayout;

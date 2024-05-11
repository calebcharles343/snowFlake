import styled from "styled-components";

import Home from "./Home";

const StyledDashboard = styled.div`
  /* width: 100%; */
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Home />
    </StyledDashboard>
  );
}

export default Dashboard;

import styled from "styled-components";
import HomeActivity from "../features/home/HomeActivity";
import HomeAssets from "../features/home/HomeAssets";

const StyledHome = styled.div`
  padding: 2rem;
`;

function Home() {
  return (
    <StyledHome>
      <HomeAssets />
      <HomeActivity />
    </StyledHome>
  );
}

export default Home;

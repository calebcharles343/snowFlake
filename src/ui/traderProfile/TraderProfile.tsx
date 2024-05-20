import styled from "styled-components";
import ProfileAssets from "./ProfileAssets";
import Profile from "./Profile";
import ProfileAccount from "./ProfileAccount";
import ProfileFlex from "./ProfileStyle";

import { UserDataT } from "../../Interfaces";

import { useCurrentUser } from "../../features/authentication/useCurrentUser";
import Spinner from "../Spinner";

const StyledTraderProfile = styled.div`
  background-color: var(--color-grey-0);

  grid-column: 3/4;
  grid-row: -4/-3;
  overflow: hidden;
`;

// const ButtonStyle = styled.div`
//   display: flex;

//   align-items: center;
//   justify-content: center;
//   /* width: 100%; */
// `;

// const ButtonTextStyle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
// `;

function TraderProfile() {
  const { isLoading, currentUser } = useCurrentUser();

  if (isLoading) return <Spinner />;
  const user = currentUser?.user_metadata;

  const joined = currentUser?.confirmed_at!;

  return (
    <StyledTraderProfile>
      <ProfileFlex type="containerFlex">
        <Profile user={user as UserDataT} />
        <ProfileAccount joined={joined} />
        <ProfileAssets />
        {/* <ButtonStyle>
          <Button size="large" variation="primary">
            <ButtonTextStyle>
              <HiArrowsUpDown />
              <span>Trade Now</span>
            </ButtonTextStyle>
          </Button>
        </ButtonStyle> */}
      </ProfileFlex>
    </StyledTraderProfile>
  );
}

export default TraderProfile;

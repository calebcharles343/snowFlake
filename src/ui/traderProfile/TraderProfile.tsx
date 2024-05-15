import styled from "styled-components";
import ProfileAssets from "./ProfileAssets";
import Profile from "./Profile";
import ProfileAccount from "./ProfileAccount";
import ProfileFlex from "./ProfileStyle";
import Button from "../Button";
import { HiArrowsUpDown } from "react-icons/hi2";
import { UserDataT } from "../../Interfaces";

import { useCurrentUser } from "../../features/authentication/useCurrentUser";
import Spinner from "../Spinner";

const StyledTraderProfile = styled.div`
  background-color: var(--color-brand-50);

  grid-column: 3/4;
  grid-row: -4/-3;
`;

const ButtonStyle = styled.div`
  align-items: flex-end;
  /* width: 100%; */
`;

const ButtonTextStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

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
        <ButtonStyle>
          <Button size="fill" variation="primary">
            <ButtonTextStyle>
              <HiArrowsUpDown />
              <span>Trade Now</span>
            </ButtonTextStyle>
          </Button>
        </ButtonStyle>
      </ProfileFlex>
    </StyledTraderProfile>
  );
}

export default TraderProfile;

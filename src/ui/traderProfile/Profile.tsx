import styled from "styled-components";
import { useState } from "react";

import ProfileFlex from "./ProfileStyle";
import Modal from "../Modal";

import SpinnerMini from "../SpinnerMini";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";
import { UserDataT } from "../../Interfaces";
// import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";

const StyledImg = styled.img`
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  margin-top: 10px;
  //////////////////////////////////////
  //MEDIA QUERRY
  /////////////////////////////////////

  //small
  @media (min-width: 640px) {
    height: 8rem;
    width: 8rem;
    //  margin-top: ;
  }

  //medium
  @media (min-width: 768px) {
  }

  //large
  @media (min-width: 1024px) {
  }

  //extra large
  @media (min-width: 1280px) {
  }

  //extra extra large
  @media (min-width: 1536px) {
  }
`;
const ProfileButton = styled.button`
  border: 1px solid var(--color-grey-300);
  padding: 5px 10px;
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

interface ProfileT {
  // isLoading: boolean;
  user: UserDataT;
  // error: Error | null;
}

function Profile({ user }: ProfileT) {
  const [isOpen, setIsOpen] = useState(false);

  //userData ? useEditProfileStore.setState({ user: userData }) : null;
  //;

  // const { image, last_name, first_name } = userData;

  const photoSrc = user.avatar || "src/data/img/PhotoOutline.jpg";
  const firstName = user.firstName || "User";
  const lastName = user.lastName || "Name";

  return (
    <>
      <ProfileFlex type="profile">
        <h2>Trader Profile</h2>
        <StyledImg src={` ${photoSrc}`} alt="Avatar" />
        <p>{`${firstName} ${lastName}`} </p>
        <ProfileButton onClick={() => setIsOpen(!isOpen)}>
          Edit Profile
        </ProfileButton>
      </ProfileFlex>

      {isOpen && (
        <Modal onCloseModal={() => setIsOpen(false)}>
          <UpdateUserDataForm />
        </Modal>
      )}
    </>
  );
}

export default Profile;

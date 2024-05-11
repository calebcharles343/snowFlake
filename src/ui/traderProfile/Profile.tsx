import styled from "styled-components";
import { useState } from "react";

import ProfileFlex from "./ProfileStyle";
import Modal from "../Modal";
import EditProfileForm from "./EditProfileForm";

import SpinnerMini from "../SpinnerMini";
import { FormDataT } from "../../Interfaces";

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
  isLoading: boolean;
  user: FormDataT[];
  error: Error | null;
}

function Profile({ isLoading, user }: ProfileT) {
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <SpinnerMini />;

  const userData = user![0];

  //userData ? useEditProfileStore.setState({ user: userData }) : null;
  //;

  const { image, last_name, first_name } = userData;

  const photoSrc = image || "src/data/img/PhotoOutline.jpg";
  const firstName = first_name || "User";
  const lastName = last_name || "Name";

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
          <EditProfileForm userToEdit={userData} />
        </Modal>
      )}
    </>
  );
}

export default Profile;

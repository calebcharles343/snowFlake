import styled from "styled-components";
import { useState } from "react";

import ProfileFlex from "./ProfileStyle";
import Modal from "../Modal";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";
import { UserDataT } from "../../Interfaces";
import UpdatePasswordForm from "../../features/authentication/UpdatePasswordForm";
import Button from "../Button";
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

  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const photoSrc = user.avatar || "src/data/img/PhotoOutline.jpg";
  const firstName = user.firstName || "User";
  const lastName = user.lastName || "Name";

  function handleClick() {
    setIsOpen(!isOpen);
    setEditProfile(true);
  }

  function handleEdit() {
    setEditProfile(true);
    setChangePassword(false);
  }
  function handlePassword() {
    setChangePassword(true);
    setEditProfile(false);
  }

  return (
    <>
      <ProfileFlex type="profile">
        <h2>Trader Profile</h2>
        <StyledImg src={` ${photoSrc}`} alt="Avatar" />
        <p>{`${firstName} ${lastName}`} </p>
        <ProfileButton onClick={handleClick}>Edit Profile</ProfileButton>
      </ProfileFlex>

      {isOpen && (
        <Modal onCloseModal={() => setIsOpen(false)}>
          {editProfile && <UpdateUserDataForm />}
          {changePassword && <UpdatePasswordForm />}
          <Button
            onClick={editProfile ? handlePassword : handleEdit}
            size="small"
            variation="secondary"
          >
            {editProfile ? "Change password" : "Edit profile"}
          </Button>
        </Modal>
      )}
    </>
  );
}

export default Profile;

import { ChangeEvent } from "react";
import { useState } from "react";
import { useUpdateCurrentUser } from "./useUpdateUser";
import { useCurrentUser } from "./useCurrentUser";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import FileInput from "../../ui/FileInput";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const { currentUser } = useCurrentUser();
  const email = currentUser?.email;
  const currentFirstName = currentUser?.user_metadata?.firstName;
  const currentLastName = currentUser?.user_metadata?.lastName;

  const { updateUser, isUpdating } = useUpdateCurrentUser();

  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    if (!firstName && !lastName) return;

    updateUser(
      { firstName, lastName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          //  e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFirstName(currentFirstName);
    setLastName(currentLastName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="First name">
        <Input
          type="text"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          id="firstName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Last name">
        <Input
          type="text"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          id="lastName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e: any) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset"
          variation="danger"
          size="small"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating} variation="primary" size="small">
          Update account
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;

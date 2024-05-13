import styled from "styled-components";
import FileInput from "../FileInput";
import Form from "../Form";
import FormRow from "../FormRow";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { FormDataT, UserTOEditT } from "../../Interfaces";
import Button from "../Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editUser } from "../../services/apiUser";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function EditProfileForm({ userToEdit }: UserTOEditT) {
  const userEDitdata = {
    created_at: userToEdit.created_at,
    email: userToEdit.email,
    first_name: userToEdit.first_name,
    image: userToEdit.image,
    last_name: userToEdit.last_name,
  };

  const editId = userToEdit.id;

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: userEDitdata || {},
  });

  const { errors } = formState;

  const querryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ updateUserData, id }: any) => editUser(updateUserData, id),
    onSuccess: () => {
      toast("User successfully updated");
      querryClient.invalidateQueries({
        queryKey: ["userdata"],
      });
      reset();
    },
    onError: (err: ErrorEvent) => toast.error(err.message),
  } as any);

  function onSubmit(user: any) {
    const image = typeof user.image === "string" ? user.image : user.image[0];
    const updateUserData: FormDataT = { ...user, image: image };
    mutate({ updateUserData: updateUserData, id: editId } as any);
  }

  function onError(errors: any) {}

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          disabled={isPending}
          {...register("first_name", {
            required: "This field is required",
          })}
        />
        {errors?.first_name?.message && (
          <Error>{errors.first_name.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          disabled={isPending}
          {...register("last_name", {
            required: "This field is required",
          })}
        />
        {errors?.last_name?.message && (
          <Error>{errors.last_name.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email Adress</Label>
        <Input
          type="text"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "This field is required",
          })}
        />
        {errors?.email?.message && <Error>{errors.email.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Profile Photo</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: false,
          })}
        />
      </FormRow>

      <FormRow>
        <Button size="small" variation="danger" type="reset">
          Cancel
        </Button>
        <Button size="small" variation="primary" disabled={isPending}>
          {"Edit Profile"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditProfileForm;

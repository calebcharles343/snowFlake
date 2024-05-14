import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

interface FormFieldsT {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } =
    useForm<FormFieldsT>();
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormFieldsT> = ({
    email,
    firstName,
    lastName,
    password,
  }) => {
    signup(
      { firstName, lastName, email, password }
      // ,
      // {
      //   onSettled: reset,
      // }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="First name" error={errors?.firstName?.message}>
        <Input
          width="medium"
          type="text"
          id="firstName"
          disabled={isPending}
          {...register("firstName", { required: "this field is required" })}
        />
      </FormRow>
      <FormRow label="Last name" error={errors?.lastName?.message}>
        <Input
          width="medium"
          type="text"
          id="lastName"
          disabled={isPending}
          {...register("lastName", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          width="medium"
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          width="medium"
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "this field is required",
            minLength: {
              value: 8,
              message: "Password needs to be atleast 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          width="medium"
          type="password"
          id="passwordConfirm"
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "this field is required",
            validate: (value) =>
              value === getValues().password || "passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="danger"
          size="small"
          type="reset"
          disabled={isPending}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isPending} variation="primary" size="small">
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;

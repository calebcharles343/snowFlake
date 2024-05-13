import { ChangeEvent, useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("calebcharles343@gmail.com");
  const [password, setPassword] = useState("11111111");

  const { login, isPending } = useLogin();

  function handleSubmit(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      //if password or email wrong delete input field
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          disabled={isPending}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" variation="primary" disabled={isPending}>
          {!isPending ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;

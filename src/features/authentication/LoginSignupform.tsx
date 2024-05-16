import { useState, useEffect } from "react";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginSignupform() {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isSignupForm, setIsSignupForm] = useState(false);

  useEffect(() => {
    setIsLoginForm(true);
    setIsSignupForm(false);
  }, []);

  function handleLoginForm() {
    setIsLoginForm(true);
    setIsSignupForm(false);
  }
  function handleSignupForm() {
    setIsSignupForm(true);
    setIsLoginForm(false);
  }
  return (
    <>
      <Heading as="h2">
        {isLoginForm ? "Log in to your account" : "Create an account"}
      </Heading>

      {isLoginForm && <LoginForm />}
      {isSignupForm && <SignupForm />}

      {
        <div>
          <span>
            {isLoginForm
              ? `Need an account?. Click here`
              : `Already have an account? click here`}
          </span>
          <Button
            onClick={isLoginForm ? handleSignupForm : handleLoginForm}
            size="small"
            variation="secondary"
          >{`${isLoginForm ? "Sign up" : "Log in"}`}</Button>
        </div>
      }
    </>
  );
}

export default LoginSignupform;

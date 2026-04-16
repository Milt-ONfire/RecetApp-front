import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FormValues as LoginFormValues, } from "./Login";

type GoogleButtonProps = {
  setForm: (data: LoginFormValues) => void;
  onSubmit: () => void;
}

export default function GoogleButton({ setForm, onSubmit }: GoogleButtonProps) {

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) return;
    const { name, email, jti } = jwtDecode(credentialResponse.credential) as { name: string, email: string, jti: string };

    setForm({
      username: { value: name, error: "" },
      email: { value: email, error: "" },
      password: { value: jti, error: "" }
    });
    onSubmit();
  };

  const handleError = () => {
    console.log("Login failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      text="signin_with"
    />
  )
}
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FormValues as RegisterFormValues } from "./Register";

type GoogleButtonProps = {
  setForm: (data: RegisterFormValues) => void;
  onSubmit: () => void;
}

export default function GoogleButton({ setForm, onSubmit }: GoogleButtonProps) {

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      console.log("No credential returned");
      return;
    }
    const { name, email, jti } = jwtDecode(credentialResponse.credential) as { name: string, email: string, jti: string };
    setForm({
      NombreUsuario: { value: name, error: "" },
      Email: { value: email, error: "" },
      Password: { value: jti, error: "" },
      confirmPassword: { value: jti, error: "" }
    });
    onSubmit();
  };

  const handleError = () => {
    console.log("Registration failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      text="signup_with"
    />
  )
}
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FormValues as RegisterFormValues } from "./Register";
import { useState } from "react";

type GoogleButtonProps = {
  setForm: (data: RegisterFormValues) => void;
  onSubmit: (data?: any) => void;
}

export default function GoogleButton({ setForm, onSubmit }: GoogleButtonProps) {
  const [googleToken, setGoogleToken] = useState<string>("");

  const handleSuccess = (credentialResponse: any) => {
    if (!credentialResponse.credential) {
      console.log("No credential returned");
      return;
    }
    const token = credentialResponse.credential;
    console.log("credenciales",token);
    
    const decoded = jwtDecode(token) as any;
    onSubmit({
       username: decoded.name,
       email: decoded.email,
       password: "", // no se usa
       token: token  
    });
  };

  const handleError = () => {
    console.log("Registration failed");
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() =>{console.log("error de google");}
      }
      text="signup_with"
    />
  )
}
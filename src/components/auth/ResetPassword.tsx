import { dottedShape, logoAuth } from "@/assets";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";



interface InputValues {
    value: string;
    error: string;
}

type FormValues = Record<string, InputValues>

const defaultValue: InputValues = {
    value: "",
    error: "",
}

const defaultForm: FormValues = {
    newPassword: defaultValue,
    confirmNewPassword: defaultValue,
}



function ResetPassword() {
  const [form, setForm] = useState<FormValues>(defaultForm);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: {
        value,
        error: "",
      }
    });
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <div className="w-full py-3 px-4 xsm:px-8 xsm:py-12">

      <div className="bg-card_background w-full max-w-lg m-auto shadow-custom rounded-lg relative px-4 py-6 xsm:px-8 xsm:py-12 sm:px-[60px] sm:py-[70px]">
        <div className="flex flex-col items-center gap-6 relative z-20">
          <img src={logoAuth} alt="logo" className="w-[200px] h-[168px]a sm:w-[258px]" />

          <div className="w-full">
            <div className="mb-6 text-center">
              <h1 className="text-lg text-body_text font-semibold mb-2">Creá tu nueva contraseña</h1>
              <p className="text-sm text-subtitle_text">Requerimientos contraseña</p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <Input
                type="password"
                name="newPassword"
                value={form.newPassword.value}
                onChange={handleChange}
                placeholder="Nueva contraseña"
              />
              <Input
                type="password"
                name="confirmNewPassword"
                value={form.confirmNewPassword.value}
                onChange={handleChange}
                placeholder="Confirmar nueva contraseña"
              />
              <Button
                type="filled"
                className="bg-accent"
                onClick={() => {}}
                disabled={isLoading}
              >
                {isLoading ? "Cambiando..." : "Confirmar"}
              </Button>
            </form>
          </div>
        </div>
        <img src={dottedShape} className="absolute z-10 top-1 right-1"/>
        <img src={dottedShape} className="absolute z-10 bottom-[-20px] left-[-20px]"/>
      </div>
    </div>
  );
}

export default ResetPassword;

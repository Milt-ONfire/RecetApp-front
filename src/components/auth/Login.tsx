import { Link, useNavigate } from "react-router-dom";
import { verduras, logoAuth, dottedShape } from "@/assets";
import axios from 'axios';
import { ResponseErrorMessage, UserLoginResponse } from "@/models";
import { login } from "@/services/auth";
import { useState } from "react";
import { isEmailValid } from "@/helpers/format";
import {ERROR_RESPONSE} from "@/constants";
import Input from "../Input";
import Button from "../Button";

interface InputValues {
    value: string;
    error: string;
}

type InputTypes =
    | "username"
    | "email"
    | "password"

type FormValues = Record<InputTypes, InputValues>

const defaultValue: InputValues = {
    value: "",
    error: "",
}

const defaultValues: FormValues = {
    username: defaultValue,
    email: defaultValue,
    password: defaultValue
}


export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<FormValues>(defaultValues);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: {
                value: value,
            }
        });
    }

    const onSubmit = async () => {

        const email = isEmailValid(form.email.value);

        const user = email ?
            {
                email: form.email.value ? form.email.value : '',
                password: form.password.value,
            }
            :
            {
                username: form.email.value ? form.email.value : '',
                password: form.password.value,
            }

        try {
            setIsLoading(true);
            const data: { data: UserLoginResponse } = await login(user);
            setIsLoading(false);
            console.log("data:", data);
            navigate("/navigation/Profile");

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (Array.isArray(error.response?.data)) {
                    error.response?.data.forEach(e => {
                        setForm(prevForm => ({
                            ...prevForm,
                            [e.validation[0]]: {
                                ...prevForm[e.validation[0] as InputTypes],
                                error: ERROR_RESPONSE[e.message as ResponseErrorMessage]
                            }
                        }));
                    })
                }
                console.log(error.response?.data)
                alert(ERROR_RESPONSE[error.response?.data.description as ResponseErrorMessage]);
            }
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-screen flex h-full py-8 items-center">
                <div className="flex mx-auto lg:mx-auto lg:shadow-md">
                    <div className="bg-card_background flex-shrink-0 items-start gap-10 max-w-[500px] lg:shadow-md relative">
                        <div className="absolute end-0 lg:hidden">
                            <img src={dottedShape} />
                        </div>
                        <div className="lg:items-center lg:hidden">
                            <img src={logoAuth} className="lg:w-28 lg:h-28 mx-auto" />
                        </div>
                        <div className="flex-col mx-20 lg:mx-16 lg:mb-6 items-start gap-10">
                            <h1 className="w-full text-4xl font-semibold pt-10 mb-10 text-head_text lg:text-xl">
                                Iniciar sesión
                            </h1>
                            <div className="flex flex-col gap-5">
                              <Input
                                  type="email"
                                  name="email"
                                  placeholder="Ej: maled o male12@gmail.com"
                                  value={form.email.value}
                                  onChange={handleChange}
                                  label="Email o nombre de usuario"
                              />
                              <Input
                                  type="password"
                                  name="password"
                                  placeholder="Nueva contraseña"
                                  value={form.password.value}
                                  onChange={handleChange}
                                  label="Contraseña"
                              />
                              <Button type="filled" className="bg-accent" onClick={onSubmit} >
                                {isLoading ? "Cargando..." : "Iniciar sesión"}
                              </Button>
                            </div>
                            <Link to='/recuperarContraseña' className="w-full">
                                <p className="text-body_text text-center mt-10">  Olvidaste tu contraseña?</p>
                            </Link>
                            <div className="w-full flex-row mt-4 text-center mb-16">
                                <p className="text-">Aun no eres miembro?
                                    <Link to='/Register'>
                                        <span className="text-accent pl-2 mb-16">Registrate</span>
                                    </Link>
                                </p>
                            </div>
                            <div className="absolute bottom-[-20px] left-[-20px] lg:hidden">
                                <img src={dottedShape} className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 hidden lg:block">
                        <img src={verduras} className="w-full h-full rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login; //160

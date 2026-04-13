import { Link } from "react-router-dom";
import { media } from "@/assets";

const Login = () => {
    return (
        <>
            <div className="bg-gray-400 w-screen flex h-screen items-center">
                <div className="w-[1232px] h-[550px] bg-white flex flex-row mx-auto">
                    <div className="w-[556px] h-[550px]  flex-shrink-0  items-start gap-10">
                        <div className="flex-col w-[421px] mx-[80px] items-start gap-10">
                            <p className="font-sans w-full text-[32px] font-semibold leading-[56px] pt-10 text-gray-800">
                                Iniciar sesión
                            </p>
                            <p className="h-[30px] w-full gap-[5px] text-gray-950 mt-10">
                                Correo electrónico
                            </p>
                            <input type="email" className="h-[24px] w-full border p-[12px_16px_12px_20px] items-center gap-[10px] rounded-sm border-gray-400 mt-2 flex-[1_0_0]">

                            </input>
                            <p className="h-[30] w-full gap-[5px] text-gray-950 mt-10">
                                Contraseña
                            </p>
                            <input type='password' className="h-[24px] w-full border border-gray-400 p-[12px_16px_12px_20px] rounded-sm items-center gap-[10px] mt-2 flex-[1_0_0]">

                            </input>
                            <Link to='/*'>
                                <button className='bg-gray-500 w-full  text-center py-2 px-20 text-white mt-6 rounded-sm'>
                                    Iniciar sesión
                                </button>
                            </Link>
                            <Link to='/recuperarContraseña' className="w-full">
                                <p className="text-gray-800 text-center mt-10">  Olvidaste tu contraseña?</p>
                            </Link>
                            <div className="w-full flex-row mt-4 text-center">
                                <p className="text-gray-500">Aun no eres miembro?
                                    <Link to='/Register'><span className="text-black pl-2">Registrate</span></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[676px] h-[550px] flex-shrink-0">
                        <img src={media} className="w-full h-full rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
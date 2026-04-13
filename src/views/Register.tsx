import { Link } from "react-router-dom";
import { dottedShape, facebook, twitter, google } from '@/assets';


const Register = () => {
    return (
        <div className="w-screen h-screen items-center m-auto flex bg-slate-200">
            <div className="w-[520px] h-[618px] flex-shrink-0 bg-white m-auto flex-col items-center gap-10">
                <div className="relative m-0">
                    <img src={dottedShape} className="absolute top-0 right-1" />
                </div>
                <div className="w-[400px] h-[454px] mx-auto items-center">
                    <div className="w-full mt-[60px] items-center">
                        <div className="w-[291px] h-[87.1px] mb-[40px] flex mx-auto items-center text-center py-auto bg-slate-300 px-auto">
                            <p className="items-center flex-col mx-auto text-black">LOGO</p>
                        </div>
                        <input type="email" className="py-[12px] pl-[20px] pr-[16px] text-[16px] font-normal leading-[24px] w-[400px] mt-[22px] h-[50px] flex mx-auto items-center border border-gray-400 rounded-lg" placeholder="Correo electrónico" />
                        <input type="email" className="py-[12px] pl-[20px] pr-[16px] text-[16px] font-normal leading-[24px] w-[400px] mt-[22px] h-[50px] flex mx-auto items-center border border-gray-400 rounded-lg" placeholder="Contraseña" />
                        <Link to='/*'>
                            <button className='bg-gray-500 w-[400px] h-[50px]  text-center py-2 px-20 text-white mt-6 rounded-sm'>
                                Registrarse
                            </button>
                        </Link>
                        <div className="flex items-center mt-[35px]">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">O registrarte con</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="flex flex-row mt-[25px]">
                            <button className="w-[120px] h-[40px] mr-[20px] bg-slate-300 rounded-lg">
                                <img src={facebook} className="mx-auto" />
                            </button>
                            <button className="w-[120px] h-[40px] mr-[20px] bg-slate-300 rounded-lg">
                                <img src={twitter} className="mx-auto" />
                            </button>
                            <button className="w-[120px] h-[40px] bg-slate-300 rounded-lg">
                                <img src={google} className="mx-auto" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[100px]">
                    <img src={dottedShape} className="absolute bottom-1 left-1" />
                </div>
            </div>
        </div>
    )
}

export default Register;
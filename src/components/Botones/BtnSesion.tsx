import useAuthStore from "@/store/authStore";
import { MouseEventHandler } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IBtnSesionProps {
    action: MouseEventHandler;
    imgSrc?: string;
}

export const BtnSesion = (props: IBtnSesionProps) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const onLogout = () => {
        const { logout } = useAuthStore.getState();
        logout();
        navigate('/')
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={(e) => {
                    if (props.action) props.action(e); // ejecuta la acción pasada como prop
                }}
                className="flex items-center min-w-max p-2 gap-3 rounded-lg h-1/2 my-auto focus:outline-none relative bg-colorbeig">
                <img
                    src={props.imgSrc}
                    className="max-w-12 h-10 rounded-md"
                />
                <p className="text-colorencabezados"><i className="fa-solid fa-angle-down" onClick={()=>toggleDropdown()}></i></p>
            </button>

            {isOpen && (
                <div className="fixed right-10 top-24 w-48 bg-white rounded-lg shadow-custom z-10">
                    <a href="/navigation/profile" onClick={()=>toggleDropdown()} className="block px-4 py-2 rounded-lg text-colorencabezados hover:bg-coloracento">Perfil</a>
                    <a href="/" onClick={onLogout} className="block px-4 py-2 rounded-lg text-colorencabezados hover:bg-coloracento">Cerrar sesión</a>
                </div>
            )
            }
        </>
    )
}

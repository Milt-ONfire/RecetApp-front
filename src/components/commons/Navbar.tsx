
import { SeccionNavBar } from "../SeccionesNavbar/SeccionNavBar";
import { BotonSecondary } from "../Botones/BotonSecondary";
import { BotonPrimary } from "../Botones/BotonPrimary";
import { logoWText } from "@/assets";
import { Link, useNavigate } from "react-router-dom";
import { BtnSesion } from "../Botones/BtnSesion";
import useAuthStore from "@/store/authStore";
import { useEffect, useState } from "react";
import useUserStore from "@/store/userStore";
import api from "@/services/axios";

const userImage = "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";


export default function Navbar() {
  return (
    <div className="lg:flex min-w-full border-b">
      <NavBarWeb />
    </div>
  )
}

export interface INavBarWebProps {
  className?: string;
}

export const NavBarWeb = ({
  className,
}: INavBarWebProps): JSX.Element => {
  const [userData, setUserData] = useState();

  const [open, setOpen] = useState(false);
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const token = useAuthStore(state => state.token);
  const userStore = useUserStore(state => state.user);
  const imagen = useUserStore(state => state.img)
  const imgSrc = imagen && imagen !== "string"? `${SERVER_URL}${imagen}`
  : userImage;


  useEffect(() => {
    const { setUser, clearUser } = useUserStore.getState();
    const getUser = async () => {
      const app = api;
      try {
        const res = await app.get('/Usuarios/buscarUsuarioActual');
        setUser({
          description: null,
          img: res.data.imagen,
          user: {
            email: res.data.email,
            username: res.data.nombreUsuario
          }
        });
        // setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (token) getUser();
  }, [token]);


  return (
    <div
      className={
        "bg-colorprimario px-1 lg:px-20 py-2 lg:py-0 sm:block lg:flex lg:flex-grow lg:h-[100px] h-20 lg:w-screen w-full" +
        className
      }
    >

      <div className="bg-colorprimario lg:w-1/4 w-full h-full flex items-center lg:justify-center justify-around pr-2 lg:pr-0">
        <Link className="flex" to="/"><img src={logoWText} className="h-auto w-1/2 lg:w-11/12" /></Link>
        {token ?
          <div className="flex lg:hidden items-center w-1/3 justify-end">
            <BtnSesion
              imgSrc={imgSrc}
              action={() => navigate('/navigation/Profile')}
            />
          </div>
          :
          <>
          </>
        }
        <div onClick={() => setOpen(!open)} className="lg:hidden text-colorblancoprincipal text-2xl cursor-pointer">
          <i className={`rigth-0 ${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}>
          </i>
        </div>
      </div>

      <div className={`lg:flex fixed z-30 right-0 left-0 lg:right-8 w-screen lg:static lg:z-auto items-center bg-colorprimario lg:w-3/4 ${open ? 'items-center' : 'hidden'} `}>
        <div className="lg:flex lg:flex-row px-0 lg:w-3/4 md:items-center lg:items-center lg:justify-end lg:pr-20 h-max">
          <SeccionNavBar className="!shrink-0 py-4 lg:my-0 px-0 lg:w-1/2 hover:bg-coloracento lg:hover:bg-transparent" linkTo="/recipes/categories" nameSection="CATEGORIAS"></SeccionNavBar>
          <SeccionNavBar className="!shrink-0 py-4 lg:my-0 px-0 lg:w-1/2 hover:bg-coloracento lg:hover:bg-transparent" linkTo="/recipes/personalized" nameSection="RECETA PERSONALIZADA"></SeccionNavBar>
        </div>

        {!token ?
          <div className="lg:flex lg:flex-row gap-3 items-center w-full lg:w-1/3 lg:justify-end">
            <BotonSecondary
              className="lg:!shrink-0 lg:border-2 lg:border-colorsecundario hover:bg-coloracento mx-auto"
              btnText="Registrarse"
              action={() => navigate('/register')}
            ></BotonSecondary>
            <BotonPrimary
              className="bg-colorprimario lg:!shrink-0 hover:bg-coloracento shadow-custom mx-auto text-[12px]"
              textBtn="Iniciar sesión"
              action={() => navigate('/login')}
            />
          </div>
          :
          <div className="hidden lg:flex lg:flex-row gap-3 items-center w-1/3 justify-end">
            <BtnSesion
              imgSrc={imgSrc}
              action={() => navigate('/navigation/Profile')}
            />
          </div>
        }

      </div>
    </div>

  );
};

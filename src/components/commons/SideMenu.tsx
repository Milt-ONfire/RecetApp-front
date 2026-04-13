
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';
import { MouseEventHandler} from 'react';


interface MenuItem {
  title: string;
  subTitle?: string;
  href: string;
}

interface SideMenuProps{
  icon?:string;
  action?:MouseEventHandler;
}

const menuItems: MenuItem[] = [
  { title: 'Datos personales', href: '/navigation/Profile' },
  { title: 'Mis recetas', href: '/navigation/Receps' },
  { title: 'Recetas guardadas', href: '/navigation/RecepsSaved' }
];

export const SideMenu = (props:SideMenuProps) => {

  return (
    <div id="menu" className='bg-colorbeig min-h-screen lg:static flex-col flex-grow z-10 w-60 py-10 left-0'>

      <div className=' relative cursor-pointer text-coloracento text-3xl -right-4 text-right py-3 lg:hidden' onClick={props.action}>
        <i className={props.icon + "border-4 border-colorprimario rounded-full bg-white"}></i>
      </div>

      {/* Menu Items */}
      <nav id="nav" className="w-full top-52">

        {
          menuItems.map(item => (
            <SideMenuItem key={item.href} {...item} />
          ))
        }

        <NavLink to={'/login'}>
          <div className="flex flex-col mt-3 border-t-2  pt-5 w-10/12 mx-auto">
            <span className="text-lg text-colortextosubtitulos font-bold leading-5" onClick={() => localStorage.clear()}>Cerrar sesión</span>
          </div>
        </NavLink>

      </nav>
    </div>
  );
};
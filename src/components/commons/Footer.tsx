import { logo } from "@/assets";
import { Link } from "react-router-dom";


interface IFooterItems {
  to: string;
  label: string;
}

const footerItems: IFooterItems[] = [
  { to: "/", label: "INICIO" },
  { to: "/recipes/categories", label: "CATEGORÍAS" },
  { to: "/recipes/personalized", label: "RECETA PERSONALIZADA" },
  { to: "/contacto", label: "CONTACTO" },
];


export default function Footer() {
  return (
    <footer className="bg-head_text w-full py-1 md:px-8 px-2 flex items-center justify-between relative">
      <img src={logo} alt="logo" className="lg:w-16 lg:h-16 w-7 h-7 sm:w-10 sm:h-10"/>
      <div className="lg:py-2 md:flex-row sm:flex-col justify-between w-full md:w-11/12">
          <ul className="flex justify-end md:gap-7 gap-2 text-white w-full w-rap">
            {footerItems.map(({to, label}, index) => 
              <FooterItem key={index} to={to} label={label} />
            )}
          </ul>      
        <div className="border-t border-white flex justify-end items-end text-white md:text-xs text-[8px] pt-5 w-full">
          <p className="w-full text-center">
            © 2024 Retrueque - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}


interface IFooterProps {
  to: string;
  label: string;
}


function FooterItem({ to, label }: IFooterProps) {
  return (
    <li className="md:text-xs text-[8px] text-wrap">
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
}

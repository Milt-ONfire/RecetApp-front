import { Link } from "react-router-dom";

export interface ISeccionesNavbarProps {
    className?: string;
    nameSection?: string;
    linkTo: string;
  }
  
  export const SeccionNavBar = ({
    className,
    nameSection,
    linkTo,
  }: ISeccionesNavbarProps): JSX.Element => {
  
    return (  
        <Link
          to={linkTo}
          className={"text-colorsecundario lg:hover:text-black text-center h-full flex items-center justify-center " + className}
        >
          {nameSection}
        </Link>
    );
  };
  
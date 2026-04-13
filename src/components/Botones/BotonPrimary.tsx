import { MouseEventHandler } from "react";

export interface IBotonPrimaryProps {
    className?: string;
    textBtn?: string;
    action:MouseEventHandler;
  }
  
  export const BotonPrimary = ({
    className,
    textBtn,
    action
  }: IBotonPrimaryProps): JSX.Element => {
  
    return (
      <button
        type="submit" onClick={action}
        className={
          "lg:rounded-lg py-3 lg:px-5 lg:border lg:border-colorprimario flex flex-row items-center justify-center w-full lg:w-1/2 h-[50px]" +
          className
        }
      >
        <div
          className="text-colorsecundario flex items-center justify-start"
        >
          {textBtn}
        </div>
      </button>
    );
  };
  
import { MouseEventHandler } from "react";

export interface IBotonSecondaryProps {
    className?: string;
    btnText: string;
    action:MouseEventHandler;
  }
  
  export const BotonSecondary = ({
    className,
    btnText = "",
    action
  }: IBotonSecondaryProps): JSX.Element => {
  
    return (
      <button
        type="submit" onClick={action}
        className={
          "lg:rounded-xl py-3 lg:px-4 flex flex-row items-center justify-center w-full lg:w-1/2 h-[50px] md:my-0 my-2 " +
          className
        }
      >
        <div
          className="text-colorsecundario flex items-center justify-start"
        >
          {btnText}
        </div>
      </button>
    );
  };
  
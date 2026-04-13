import { visibilityOff, visibilityOn } from "@/assets";
import { useState } from "react";

interface InputProps {
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    label?: string;
}

function Input({ type = "text", name, value, onChange, placeholder, disabled, error, label }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="flex flex-col gap-2 text-subtitle_text">
      {label && (
        <label htmlFor={name} className="font-bold text-black">
          {label}
        </label>
      )}
      <div className={`border-[1px] rounded-md px-5 py-3 flex gap-2.5 ${disabled ? "bg-white border-primary border-opacity-40 " : "border-primary"}`}>
        <input
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="text-body_text w-full focus:outline-none bg-transparent"
        />
        {type === "password" && (
          <img
            src={isVisible ? visibilityOff : visibilityOn}
            alt="mostrar contraseña"
            height={24}
            width={24}
            onClick={changeVisibility}
            className="cursor-pointer"
          />
        )}
      </div>
      {error &&
        <p className="text-primary text-sm">{error}</p>
      }
    </div>
  );
}

export default Input;

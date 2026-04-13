interface IButton {
  type: "bordered" | "filled" | "bordered-rounded";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}


function Button ({ children, type, disabled, onClick, className } : IButton) {
  const borderedGlobal = "border-2 disabled:border-[#A8A8A8] disabled:text-[#A8A8A8]";
  const filled = "rounded-lg text-white disabled:bg-[#A8A8A8]";
  const bordered = `rounded-lg text-white border-white ${borderedGlobal}`;
  const borderedRounded = `rounded-full border-[#66002F] text-[#66002F] ${borderedGlobal}`;

  const typeStyles = type === "bordered" 
    ? bordered 
    : type === "bordered-rounded"
      ? borderedRounded
      : filled


  return (
    <button
      className={`py-3 px-10 font-bold shadow-custom ${typeStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

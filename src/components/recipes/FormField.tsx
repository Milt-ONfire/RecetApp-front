
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
}
 
export function FormField({
  label,
  error,
  required = false,
  optional = false,
  children,
  htmlFor,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className={[
          "block text-xs uppercase tracking-widest text-[#9B1255] font-semibold font-sans",
          required ? "after:content-['_*'] after:text-red-500" : "",
        ].join(" ")}
      >
        {label}
        {optional && (
          <span className="normal-case text-gray-400 font-normal tracking-normal text-xs ml-1">
            (opcional)
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 font-sans">{error}</p>}
    </div>
  );
}

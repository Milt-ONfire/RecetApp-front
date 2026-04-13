
interface TextAreaProps {
  name: string;
  rows: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
}




function TextArea({ name, value, onChange, placeholder, disabled, error, label, rows }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2 text-subtitle_text">
      {label && (
        <label htmlFor={name} className="font-bold text-black">
          {label}
        </label>
      )}
      <textarea 
        name="description"
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="border-[1px] border-primary focus:outline-none rounded-md w-full resize-none px-4 py-3 disabled:bg-gray-200 disabled:border-gray-500"
      />
      {error &&
        <p className="text-primary text-sm">{error}</p>
      }
    </div>
  );
}

export default TextArea;

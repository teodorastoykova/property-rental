import { cva } from "class-variance-authority";

const inputFieldStyles = cva("border rounded w-full py-2 px-3 mb-2", {
  variants: {
    intent: {
      default: "border-gray-300 ",
      error: "border-red-500",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

const labelStyles = cva("block text-gray-300 font-bold mb-2");
const containerStyles = cva("mb-4");

const InputField = ({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  intent,
}) => {
  return (
    <div className={containerStyles()}>
      <label htmlFor={id} className={labelStyles()}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={inputFieldStyles({ intent })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;

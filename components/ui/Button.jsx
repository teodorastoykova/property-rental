import { cva } from "class-variance-authority";

const buttonStyles = cva("", {
  variants: {
    intent: {
      primary:
        "rounded-3xl px-1 py-1 mr-2 text-white w-48 font-xs bg-blue-500 hover:bg-blue-600",
      primaryLarge:
        "rounded-3xl px-4 py-2 text-white font-bold w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline",
      secondary:
        "rounded-lg px-4 py-2 text-white bg-gray-700 hover:bg-gray-800",
      tertiary:
        "block mx-auto bg-black text-white text-center py-3 px-32 rounded-xl hover:bg-gray-700 focus:outline-none",
      quaternary:
        "rounded-3xl px-1 py-1 mr-2 text-white w-48 font-xs bg-gray-500 hover:bg-gray-600",
      danger:
        "rounded-3xl px-1 py-1 mr-2 text-white w-48 font-xs bg-red-500 hover:bg-red-600",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

function Button({ intent = "primary", text, ...props }) {
  return (
    <button className={buttonStyles({ intent })} {...props}>
      {text}
    </button>
  );
}

export default Button;

import clsx from "clsx";

const BUTTON_VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-green-600 hover:bg-green-700 text-white",
  "ghost-primary":
    "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
  "ghost-secondary":
    "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
};

const SIZES = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-md",
  large: "px-6 py-3 text-lg",
};

export function Button(props) {
  const {
    children,
    variant = "primary",
    className,
    disabled,
    onClick,
    type,
    label,
    size = "medium",
    ...rest
  } = props;

  const classes = clsx(
    "rounded",
    "button",
    SIZES[size],
    `Button--${variant}`,
    {
      [BUTTON_VARIANTS[variant]]: !disabled,
      "Button--disabled": disabled,
      "text-gray-50 bg-gray-300 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {label || children}
    </button>
  );
}

import clsx from "clsx";

const BUTTON_VARIANTS = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-green-600 hover:bg-green-700 text-white",
  "ghost-primary":
    "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
  "ghost-secondary":
    "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
};

export function Button(props) {
  const {
    children,
    variant = "ghost-secondary",
    className,
    disabled,
    onClick,
    type,
    ...rest
  } = props;

  const classes = clsx(
    "rounded",
    "button",
    "px-4",
    "py-2",
    BUTTON_VARIANTS[variant],
    {
      "button--disabled": disabled,
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
      {children}
    </button>
  );
}

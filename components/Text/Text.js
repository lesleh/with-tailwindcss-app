import clsx from "clsx";

export function Text({
  element: Element = "p",
  children,
  className,
  ...props
}) {
  return (
    <Element {...props} className={clsx("my-2", className)}>
      {children}
    </Element>
  );
}

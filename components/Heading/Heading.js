import clsx from "clsx";

const CLASSES = {
  h1: "font-roboto uppercase text-5xl font-bold my-7",
  h2: "font-roboto uppercase text-4xl font-bold my-6",
  h3: "font-roboto uppercase text-3xl font-bold my-5",
  h4: "font-roboto uppercase text-2xl font-bold my-4",
  h5: "font-roboto uppercase text-xl font-bold my-3",
  h6: "font-roboto uppercase text-lg font-bold my-2",
};

export function Heading({
  element: Element = "h1",
  variant,
  children,
  className,
  ...props
}) {
  return (
    <Element
      {...props}
      className={clsx(CLASSES[variant || Element], className)}
    >
      {children}
    </Element>
  );
}

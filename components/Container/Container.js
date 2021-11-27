import clsx from "clsx";

export function Container({ className, children, ...props }) {
  return (
    <div className={clsx("container mx-auto px-5 pb-5", className)}>
      {children}
    </div>
  );
}

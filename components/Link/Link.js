import NextLink from "next/link";

export function Link({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <a className="text-blue-600 underline visited:text-purple-600" {...props}>
        {children}
      </a>
    </NextLink>
  );
}

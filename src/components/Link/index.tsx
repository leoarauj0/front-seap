import NextLink from "next/link";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";

interface Ilink {
  children: any;
  href: any;
}

export function Link({ href, children, ...props }: Ilink) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

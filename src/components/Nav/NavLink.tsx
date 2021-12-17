import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { Link } from "../Link/index";

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

interface IProps {
  children: any;
  href: any;
  exact: any;
  className: any;
}

//children: any, href: string | null | undefined, exact: any, ...props: any[]

export function NavLink({ children, href, exact, ...props }: IProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

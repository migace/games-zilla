import { Link as RouterLink } from "react-router-dom";

import classname from "./link.module.css";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  dataCy?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Link = ({ children, href, iconLeft, iconRight, dataCy = "" }: LinkProps) => {
  return (
    <RouterLink to={href} className={classname.link} data-cy={dataCy}>
      {iconLeft ? iconLeft : null}
      {children}
      {iconRight ? iconRight : null}
    </RouterLink>
  );
};

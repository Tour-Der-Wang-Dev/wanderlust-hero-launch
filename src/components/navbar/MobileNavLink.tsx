
import React from "react";
import { Link } from "react-router-dom";
import { NavbarLink } from "./types";

interface MobileNavLinkProps {
  link: NavbarLink;
  onNavClick: () => void;
}

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  link,
  onNavClick,
}) => {
  return (
    <li>
      <Link
        to={link.href}
        className="block px-4 py-2 rounded hover:bg-primary/10 focus:bg-primary/20 transition-colors"
        tabIndex={0}
        onClick={onNavClick}
      >
        {link.text}
      </Link>
    </li>
  );
};

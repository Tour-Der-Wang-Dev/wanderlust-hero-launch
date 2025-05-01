
import React from "react";
import { NavbarLink, User } from "./types";
import { MobileNavDropdown } from "./MobileNavDropdown";
import { MobileNavLink } from "./MobileNavLink";
import { MobileNavUser } from "./MobileNavUser";

interface MobileNavProps {
  links: NavbarLink[];
  user?: User;
  openDropdown: string | null;
  setOpenDropdown: (href: string | null) => void;
  onNavClick: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  links,
  user,
  openDropdown,
  setOpenDropdown,
  onNavClick,
}) => {
  return (
    <div
      className="fixed top-16 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-lg animate-fade-in"
      role="menu"
    >
      <ul className="flex flex-col space-y-2 py-4">
        {links.map((link) =>
          link.children && link.children.length > 0 ? (
            <MobileNavDropdown
              key={link.href}
              link={link}
              isOpen={openDropdown === link.href}
              onToggle={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
              onNavClick={onNavClick}
            />
          ) : (
            <MobileNavLink 
              key={link.href} 
              link={link} 
              onNavClick={onNavClick} 
            />
          )
        )}
        {user && <MobileNavUser user={user} />}
      </ul>
    </div>
  );
};

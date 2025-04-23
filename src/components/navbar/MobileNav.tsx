
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavbarLink, User } from "./types";

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
            <li key={link.href} className="relative group">
              <Button
                variant="ghost"
                className={`w-full flex justify-between items-center px-4 py-2 ${
                  openDropdown === link.href ? "bg-primary/10" : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={openDropdown === link.href}
                onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                tabIndex={0}
              >
                <span>{link.text}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === link.href ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {openDropdown === link.href && (
                <ul className="pl-4 py-1">
                  {link.children.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        to={sublink.href}
                        className="block px-4 py-2 hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                        role="menuitem"
                        tabIndex={0}
                        onClick={onNavClick}
                      >
                        {sublink.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.href}>
              <Link
                to={link.href}
                className="block px-4 py-2 rounded hover:bg-primary/10 focus:bg-primary/20 transition-colors"
                tabIndex={0}
                onClick={onNavClick}
              >
                {link.text}
              </Link>
            </li>
          )
        )}
        {user && (
          <li className="px-4 pt-2">
            <div className="flex items-center space-x-2">
              <img src={user.avatar} alt={user.name} className="h-7 w-7 rounded-full border object-cover" />
              <span className="font-medium">{user.name}</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

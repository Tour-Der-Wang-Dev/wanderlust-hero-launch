
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavbarLink } from "./types";

interface DesktopNavItemProps {
  link: NavbarLink;
  isActive: boolean;
  openDropdown: string | null;
  onDropdownOpen: (href: string) => void;
  onDropdownLeave: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>, href: string, hasChildren: boolean) => void;
  onNavClick: () => void;
  dropdownRef: (el: HTMLButtonElement | null) => void;
}

export const DesktopNavItem: React.FC<DesktopNavItemProps> = ({
  link,
  isActive,
  openDropdown,
  onDropdownOpen,
  onDropdownLeave,
  onKeyDown,
  onNavClick,
  dropdownRef
}) => {
  if (link.children && link.children.length > 0) {
    return (
      <li className="relative group">
        <Button
          variant="ghost"
          className={`flex items-center gap-1 px-4 py-2 hover:bg-primary/10 focus:bg-primary/20 aria-[expanded=true]:bg-primary/10 ${
            isActive ? "font-bold text-orange-600" : ""
          }`}
          aria-haspopup="menu"
          aria-expanded={openDropdown === link.href}
          ref={dropdownRef}
          onClick={() => onDropdownOpen(openDropdown === link.href ? null : link.href)}
          onKeyDown={e => onKeyDown(e, link.href, true)}
          tabIndex={0}
          aria-controls={`dropdown-${link.href}`}
        >
          <span>{link.text}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              openDropdown === link.href ? "rotate-180" : ""
            }`}
          />
        </Button>
        {openDropdown === link.href && (
          <ul
            id={`dropdown-${link.href}`}
            className="absolute left-0 mt-2 min-w-48 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md shadow-lg border animate-fade-in"
            role="menu"
            aria-label={link.text}
            onMouseLeave={onDropdownLeave}
          >
            {link.children.map((sublink) => (
              <li key={sublink.href}>
                <Link
                  to={sublink.href}
                  className="block px-4 py-2 hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                  tabIndex={0}
                  role="menuitem"
                  onClick={onNavClick}
                >
                  {sublink.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        to={link.href}
        className={`inline-block px-4 py-2 rounded transition-colors hover:bg-primary/10 focus:bg-primary/20 ${
          isActive ? "font-bold text-orange-600" : "text-gray-900 dark:text-white"
        }`}
        tabIndex={0}
        onClick={onNavClick}
      >
        {link.text}
      </Link>
    </li>
  );
};

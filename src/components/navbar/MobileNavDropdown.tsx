
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { NavbarLink } from "./types";

interface MobileNavDropdownProps {
  link: NavbarLink;
  isOpen: boolean;
  onToggle: () => void;
  onNavClick: () => void;
}

export const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({
  link,
  isOpen,
  onToggle,
  onNavClick,
}) => {
  return (
    <li className="relative group">
      <Button
        variant="ghost"
        className={`w-full flex justify-between items-center px-4 py-2 ${
          isOpen ? "bg-primary/10" : ""
        }`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={onToggle}
        tabIndex={0}
      >
        <span>{link.text}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>
      {isOpen && (
        <ul className="pl-4 py-1">
          {link.children?.map((sublink) => (
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
  );
};

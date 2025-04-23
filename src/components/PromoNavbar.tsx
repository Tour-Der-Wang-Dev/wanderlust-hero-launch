
import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarLink {
  text: string;
  href: string;
  children?: NavbarLink[];
}

interface User {
  name: string;
  avatar: string; // URL
}

interface Logo {
  src: string;
  alt: string;
}

interface PromoNavbarProps {
  links: NavbarLink[];
  user?: User;
  logo?: Logo;
}

const PromoNavbar: React.FC<PromoNavbarProps> = ({ links, user, logo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{[key: string]: HTMLButtonElement | null}>({});
  const location = useLocation();

  // Keyboard navigation for dropdown menus
  const handleButtonKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    link: NavbarLink
  ) => {
    if (link.children?.length) {
      if(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpenDropdown(link.href);
        e.preventDefault();
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    }
  };

  // Mouse leave to close dropdown
  const handleDropdownLeave = () => setOpenDropdown(null);

  // Mobile overlay close on nav
  const handleNavClick = () => setMobileOpen(false);

  // ARIA navigation helpers
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 shadow transition-all"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" aria-label="Home" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
            {logo ? (
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
            ) : (
              <span className="text-lg font-bold text-primary">Tour Wang Sam Mo</span>
            )}
          </Link>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-2">
          {links.map((link) =>
            link.children && link.children.length > 0 ? (
              <li key={link.href} className="relative group">
                <Button
                  variant="ghost"
                  className={`flex items-center gap-1 px-4 py-2 hover:bg-primary/10 focus:bg-primary/20 aria-[expanded=true]:bg-primary/10 ${
                    isActive(link.href) ? "font-bold text-orange-600" : ""
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === link.href}
                  ref={el => (dropdownRefs.current[link.href] = el)}
                  onClick={() => setOpenDropdown(openDropdown === link.href ? null : link.href)}
                  onKeyDown={e => handleButtonKeyDown(e, link)}
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
                {/* Dropdown menu */}
                {openDropdown === link.href && (
                  <ul
                    id={`dropdown-${link.href}`}
                    className="absolute left-0 mt-2 min-w-48 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md shadow-lg border animate-fade-in"
                    role="menu"
                    aria-label={link.text}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.children.map((sublink) => (
                      <li key={sublink.href}>
                        <Link
                          to={sublink.href}
                          className="block px-4 py-2 hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                          tabIndex={0}
                          role="menuitem"
                          onClick={handleNavClick}
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
                  className={`inline-block px-4 py-2 rounded transition-colors hover:bg-primary/10 focus:bg-primary/20 ${
                    isActive(link.href) ? "font-bold text-orange-600" : "text-gray-900 dark:text-white"
                  }`}
                  tabIndex={0}
                  onClick={handleNavClick}
                >
                  {link.text}
                </Link>
              </li>
            )
          )}
          {/* Optionally authenticated user */}
          {user && (
            <li>
              <div className="flex items-center space-x-2 ml-4">
                <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover border" />
                <span className="font-medium text-gray-800 dark:text-white">{user.name}</span>
              </div>
            </li>
          )}
        </ul>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {/* Mobile nav overlay */}
      {mobileOpen && (
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
                            onClick={handleNavClick}
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
                    onClick={handleNavClick}
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
      )}
    </nav>
  );
};

export default PromoNavbar;

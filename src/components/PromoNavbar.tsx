
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { DesktopNavItem } from "./navbar/DesktopNavItem";
import { MobileNav } from "./navbar/MobileNav";
import { useNavbarDropdown } from "@/hooks/use-navbar-dropdown";
import type { PromoNavbarProps } from "./navbar/types";

const PromoNavbar: React.FC<PromoNavbarProps> = ({ links, user, logo }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { 
    openDropdown, 
    setOpenDropdown, 
    dropdownRefs, 
    handleDropdownLeave, 
    handleButtonKeyDown 
  } = useNavbarDropdown();

  const handleNavClick = () => setMobileOpen(false);
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 shadow transition-all"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Link to="/" aria-label="Home" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
            {logo ? (
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
            ) : (
              <span className="text-lg font-bold text-primary">Tour Wang Sam Mo</span>
            )}
          </Link>
        </div>
        
        <ul className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <DesktopNavItem
              key={link.href}
              link={link}
              isActive={isActive(link.href)}
              openDropdown={openDropdown}
              onDropdownOpen={setOpenDropdown}
              onDropdownLeave={handleDropdownLeave}
              onKeyDown={handleButtonKeyDown}
              onNavClick={handleNavClick}
              dropdownRef={el => (dropdownRefs.current[link.href] = el)}
            />
          ))}
          {user && (
            <li>
              <div className="flex items-center space-x-2 ml-4">
                <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full object-cover border" />
                <span className="font-medium text-gray-800 dark:text-white">{user.name}</span>
              </div>
            </li>
          )}
        </ul>

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
      
      {mobileOpen && (
        <MobileNav
          links={links}
          user={user}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          onNavClick={handleNavClick}
        />
      )}
    </nav>
  );
};

export default PromoNavbar;

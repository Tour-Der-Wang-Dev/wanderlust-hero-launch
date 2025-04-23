
import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  sections: { title: string; link: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (link: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle smooth scrolling
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/47873bb0-51cd-4862-a6bd-b47e89255fbe.png"
            alt="Tour Der Wang Logo"
            className="h-10 md:h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {sections.map((section) => (
              <NavigationMenuItem key={section.link}>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 transition-colors text-sm font-medium",
                    isScrolled ? "text-gray-800 hover:text-orange-500" : "text-white hover:text-orange-300"
                  )}
                  onClick={() => handleNavClick(section.link)}
                >
                  {section.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {sections.map((section) => (
                <a
                  key={section.link}
                  className="text-gray-800 hover:text-orange-500 font-medium"
                  onClick={() => handleNavClick(section.link)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

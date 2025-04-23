
import React, { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  sections: { title: string; link: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    if (window) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
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

  // Translate section titles
  const translatedSections = sections.map(section => ({
    ...section,
    translatedTitle: t(`nav.${section.title.toLowerCase()}`) || section.title
  }));

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
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
            {translatedSections.map((section) => (
              <NavigationMenuItem key={section.link}>
                <NavigationMenuLink
                  className={cn(
                    "px-4 py-2 transition-colors text-sm font-medium",
                    isScrolled 
                      ? "text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-300" 
                      : "text-white hover:text-orange-300"
                  )}
                  onClick={() => handleNavClick(section.link)}
                >
                  {section.translatedTitle}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme and Language Toggles */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"} />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {translatedSections.map((section) => (
                <a
                  key={section.link}
                  className="text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-300 font-medium"
                  onClick={() => handleNavClick(section.link)}
                >
                  {section.translatedTitle}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

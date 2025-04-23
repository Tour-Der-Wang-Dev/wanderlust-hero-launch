
import React from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun 
        size={18} 
        className={`transition-opacity ${theme === 'light' ? 'text-orange-500' : 'text-gray-400'}`}
      />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme} 
        aria-label="Toggle theme" 
      />
      <Moon 
        size={18} 
        className={`transition-opacity ${theme === 'dark' ? 'text-blue-400' : 'text-gray-400'}`}
      />
    </div>
  );
};

export default ThemeToggle;

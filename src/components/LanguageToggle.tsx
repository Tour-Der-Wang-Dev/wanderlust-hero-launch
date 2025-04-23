
import React from "react";
import { Globe } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLanguage, Language } from "@/context/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const handleLanguageChange = (value: string) => {
    if (value && (value === "en" || value === "th")) {
      setLanguage(value as Language);
    }
  };
  
  return (
    <div className="flex items-center space-x-2">
      <Globe size={18} className="text-gray-500" />
      <ToggleGroup 
        type="single" 
        value={language} 
        onValueChange={handleLanguageChange}
        aria-label="Language"
      >
        <ToggleGroupItem value="en" aria-label="English" size="sm">
          EN
        </ToggleGroupItem>
        <ToggleGroupItem value="th" aria-label="Thai" size="sm">
          TH
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default LanguageToggle;

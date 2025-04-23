
import { useState, useRef } from "react";

export function useNavbarDropdown() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{[key: string]: HTMLButtonElement | null}>({});

  const handleDropdownLeave = () => setOpenDropdown(null);
  
  const handleButtonKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    href: string,
    hasChildren: boolean
  ) => {
    if (hasChildren) {
      if(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpenDropdown(href);
        e.preventDefault();
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
      }
    }
  };

  return {
    openDropdown,
    setOpenDropdown,
    dropdownRefs,
    handleDropdownLeave,
    handleButtonKeyDown
  };
}

import { useState, useEffect, useRef } from "react";

import type { DropdownMenuProps } from "./DropdownMenu.types";

const DropdownMenu = ({ buttonLabel, options }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleOptionClick = () => {
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-blue-500 flex items-center px-4 py-2 rounded-md transition-colors h-16 leading-4"
      >
        {buttonLabel}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-48 bg-[#fff] border border-gray-300 rounded-md shadow-lg flex flex-col">
          {options.map(({ label, href }) => (
            <li key={label} className="hover:bg-gray-100">
              <a
                key={label}
                href={href}
                className="block px-4 py-2 text-gray-700 transition-colors h-16 leading-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;

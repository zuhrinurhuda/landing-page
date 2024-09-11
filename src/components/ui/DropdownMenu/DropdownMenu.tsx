import { useState } from "react";

import flames from "@/assets/icons/flames.svg";
import Chevron from "@/components/icons/Chevron";
import { cn } from "@/utils/mergeClassNames";

import type { DropdownMenuProps } from "./DropdownMenu.types";

const DropdownMenu = ({
  buttonLabel,
  isPopular,
  options,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-ioh-neutral-500 hover:text-ioh-red-600 font-bold"
      >
        {buttonLabel}
        {isPopular && (
          <img src={flames.src} alt="fire" className="size-4 ml-2" />
        )}
        <Chevron
          className={cn(
            "size-3 ml-2 rotate-90 transition-transform",
            isOpen && "-rotate-90"
          )}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-50 mt-2 w-48 bg-[#fff] shadow-lg flex flex-col">
          {options.map(({ label, href }) => (
            <li key={label} className="border-b border-ioh-neutral-300">
              <a
                key={label}
                href={href}
                className="block px-3 py-2 text-ioh-neutral-500 hover:text-ioh-red-600 font-bold"
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

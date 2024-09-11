import { useState } from "react";

import Dropdown from "@/components/ui/DropdownMenu";
import { cn } from "@/utils/mergeClassNames";

import type { MenuItem } from "./NavigationMenu.types";
import Burger from "@/components/icons/Burger";

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "SIM Card",
    subMenu: [
      {
        label: "IM3 Postpaid",
        href: "/order-postpaid",
      },
      {
        label: "Prepaid",
        href: "/order",
      },
    ],
  },
  {
    label: "eSim",
    isPopular: true,
    subMenu: [
      {
        label: "Buy eSIM",
        href: "/esim",
      },
      {
        label: "Upgrade to eSIM",
        href: "/esim/swap/fromsim",
      },
      {
        label: "Change eSIM to SIM Card",
        href: "/esim/swap/tosim",
      },
      {
        label: "eSIM to eSIM",
        href: "/esim/swap/toesim",
      },
    ],
  },
  {
    label: "Promos",
    href: "/promos",
  },
  {
    label: "Track order",
    href: "/track",
  },
  {
    label: "Activation",
    subMenu: [
      {
        label: "Activate Postpaid",
        href: "/activate",
      },
      {
        label: "Prepaid Registration",
        href: "/registration",
      },
    ],
  },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="hidden md:flex items-center space-x-6">
        {menuItems.map(({ label, href, subMenu, isPopular }) => (
          <li key={label} className="relative group">
            {subMenu ? (
              <Dropdown
                buttonLabel={label}
                isPopular={isPopular}
                options={subMenu}
              />
            ) : (
              <a
                href={href}
                className="block px-3 py-2 text-ioh-neutral-500 hover:text-ioh-red-600 font-bold"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <button
        className="md:hidden flex items-center"
        onClick={toggleDropdown}
        aria-label="Menu"
      >
        <Burger className="size-5" />
      </button>
      <div className={cn("md:hidden bg-[#fff]", isOpen ? "block" : "hidden")}>
        <ul className="flex flex-col">
          {menuItems.map(({ label, href, subMenu }) => (
            <li key={label} className="relative">
              {subMenu ? (
                <Dropdown buttonLabel={label} options={subMenu} />
              ) : (
                <a
                  href={href}
                  className="block px-3 py-2 text-ioh-neutral-500 hover:text-ioh-red-600 font-bold"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;

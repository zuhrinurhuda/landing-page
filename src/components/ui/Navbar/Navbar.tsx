import { useState } from "react";

import logoIM3 from "@/assets/icons/logo-IM3.svg";
import Dropdown from "@/components/ui/DropdownMenu";
import { cn } from "@/utils/mergeClassNames";

import type { MenuItem } from "./Navbar.types";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#fff] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <img src={logoIM3.src} alt="logo" />
        </a>
        <ul className="hidden md:flex md:items-center space-x-6">
          {menuItems.map(({ label, href, subMenu }) => (
            <li key={label} className="relative group">
              {subMenu ? (
                <Dropdown buttonLabel={label} options={subMenu} />
              ) : (
                <a
                  href={href}
                  className="block text-gray-700 hover:text-blue-500 transition-colors px-3 py-2 rounded-md h-16 leading-4"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-blue-500"
          onClick={toggleDropdown}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={cn(
          "md:hidden bg-[#fff] shadow-md",
          isOpen ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col">
          {menuItems.map(({ label, href, subMenu }) => (
            <li key={label} className="relative">
              {subMenu ? (
                <Dropdown buttonLabel={label} options={subMenu} />
              ) : (
                <a
                  href={href}
                  className="block text-gray-700 hover:text-blue-500 px-4 py-2"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

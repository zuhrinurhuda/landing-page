import type { MenuItem } from "@/components/ui/NavigationMenu/NavigationMenu.types";

export interface DropdownMenuProps {
  buttonLabel: string;
  options: MenuItem[];
  isPopular?: boolean;
}

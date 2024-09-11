export interface MenuItem {
  label: string;
  href?: string;
  subMenu?: MenuItem[];
  isPopular?: boolean;
}

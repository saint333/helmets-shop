import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "/shop",
    subMenu: [
      {
        name: "Helmets",
        href: "/shop/helmets",
      },
      {
        name: "Gloves",
        href: "/shop/gloves",
      },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

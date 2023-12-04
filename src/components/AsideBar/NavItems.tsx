"use client";

import {
  BarChart3,
  CarFront,
  Inbox,
  Layout,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemsListType = {
  name: string;
  path: string;
  Icon: LucideIcon;
}[];
const ItemsList: ItemsListType = [
  {
    name: "Dashboard",
    path: "/",
    Icon: LayoutDashboard,
  },
  {
    name: "Cars in stock",
    path: "/stock",
    Icon: CarFront,
  },
  {
    name: "Performance",
    path: "/performance",
    Icon: BarChart3,
  },
  {
    name: "Dealer Site",
    path: "/dealer-site",
    Icon: Layout,
  },
  {
    name: "Messages",
    path: "/messages",
    Icon: Inbox,
  },
];

export default function NavItems() {
  const pathName = usePathname();

  return (
    <>
      <nav className="pl-5">
        <ul className="space-y-4">
          {ItemsList.map(({ name, path, Icon }, index) => {
            const isActive = pathName === path;

            return (
              <li
                key={index}
                className={`relative group font-medium text-sm ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                <Link href={path} className="flex items-center gap-2 px-4 py-2">
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </Link>

                <hr
                  hidden
                  aria-hidden
                  className={`absolute right-0 bottom-0 w-1 h-full bg-red-500 rounded-full ${
                    isActive ? "block" : "hidden group-hover:block"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

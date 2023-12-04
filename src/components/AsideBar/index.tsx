import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import NavItems from "./NavItems";

export default function AsideBar() {
  return (
    <>
      <aside className="space-y-10 shadow-md py-8 w-full max-w-[250px]">
        {/* Logo */}
        <Link href={`/`} className="flex items-center gap-1.5 px-8">
          <Image
            alt="Logo"
            className="cursor-pointer"
            height="35"
            width="35"
            src="/logo.png"
          />

          <span
            translate="no"
            className="hidden md:block text-xl text-rose-500 font-extrabold"
          >
            Bilsida.se
          </span>
        </Link>

        {/* New Car */}
        <div className="px-6 text-sm">
          <Link
            href={`/new-car`}
            className="flex items-center justify-center gap-1.5 bg-mint hover:bg-mint-hover transition-colors rounded-xl font-medium py-2 px-4 dark:text-black"
          >
            <PlusCircle className="w-5 h-5" />
            <span>New Car</span>
          </Link>
        </div>

        <NavItems />
      </aside>
    </>
  );
}

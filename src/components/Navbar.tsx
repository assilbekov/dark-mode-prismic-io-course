"use client";

import { WordMark } from "@/components/WordMark";
import { navigationItems } from "@/navigationItems";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-4 py-4 md:px-6 md:py-6" aria-label="main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home page</span>
        </Link>
        <ul className="flex gap-6">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex min-h-11 items-center">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

import { WordMark } from "@/components/WordMark";
import { navigationItems } from "@/navigationItems";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">Glisten.ai Home page</span>
      </Link>
      <nav aria-label="footer">
        <ul className="flex gap-6">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex min-h-11 items-center">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
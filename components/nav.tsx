"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { Navbar } from "@/config/navigation";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

export function Nav() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav
      className="w-full bg-lighter dark:bg-dark"
      role="navigation"
      aria-label="Header Navigation"
    >
      <div className="justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" aria-label="Choubari's Home Page">
            <Logo />
          </Link>
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={() => setNavbar(!navbar)}
              aria-label="navigation menu button"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-darker dark:text-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id="navbar-multi-level"
          className={`pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-4 select-none md:flex md:space-x-6 md:space-y-0">
            {Navbar.map((link) => (
              <li
                className={`group font-serif ${
                  pathname == link.href
                    ? "text-darker dark:text-light"
                    : "text-grey"
                } font-bold text-xl hover:text-darker dark:hover:text-light`}
                key={link.label}
              >
                <Link href={link.href} onClick={() => setNavbar(false)}>
                  {link.label}
                  <span
                    className={`text-4xl leading-3 ${
                      pathname == link.href ? "text-accent" : ""
                    } group-hover:text-accent`}
                  >
                    .
                  </span>{" "}
                </Link>
              </li>
            ))}
            <li
              className="cursor-pointer"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              <MdLightMode
                className="text-accent hidden dark:block"
                id="toggle-light-mode"
                size={20}
              />
              <MdDarkMode
                className="text-accent dark:hidden"
                id="toggle-dark-mode"
                size={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

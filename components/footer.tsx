import {
  FooterAbout,
  FooterSocials,
  FooterProjects,
  github,
  githubrepo,
  twitter,
} from "@/config/navigation";
import { Logo } from "./logo";
import Link from "next/link";
import NewsletterBox from "./newsletter-box";
import { SiGithub, SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-lighter dark:bg-dark text-darker dark:text-light py-4 mt-20 w-full"
    >
      <div className="mx-auto px-8 pt-5 lg:px-8 lg:max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 md:space-y-4">
          <Link href="/" aria-label="Choubari's Home Page">
            <Logo />
          </Link>
          <p className="pb-3">
            I turn ideas into reality with the power of software engineering,
            and I share my stories as a content creator.
          </p>
          <NewsletterBox type={"slim"} />
        </div>
        <div className="hidden md:block md:col-span-2 space-y-4"></div>
        <div className="md:col-span-2 md:space-y-4">
          <h2 className="font-serif text-xl font-bold mb-2">
            General
            <span className="text-4xl leading-3 text-accent">.</span>
          </h2>
          <ul>
            {FooterAbout.map((link) => (
              <li
                key={link.label}
                className="hover:underline hover:text-accent"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 md:space-y-4">
          <h2 className="font-serif text-xl font-bold mb-2">
            Projects
            <span className="text-4xl leading-3 text-accent">.</span>
          </h2>
          <ul>
            {FooterProjects.map((link) => (
              <li
                key={link.label}
                className="hover:underline hover:text-accent"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 md:space-y-4">
          <h2 className="font-serif text-xl font-bold mb-2">
            Socials
            <span className="text-4xl leading-3 text-accent">.</span>
          </h2>
          <ul>
            {FooterSocials.map((link) => (
              <li
                key={link.label}
                className="hover:underline hover:text-accent"
              >
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="h-px border-0 opacity-30 bg-grey mt-8 mb-4" />
      <div className="flex flex-wrap px-5 gap-1 text-center items-center justify-center">
        © {new Date().getFullYear()} Copyright. Made with ❤ by
        <Link href={twitter} className="text-accent font-mono hover:underline">
          @choubari_
        </Link>
        <p> using</p>
        <div className="flex gap-1 items-center">
          <SiNextdotjs />
          <SiTailwindcss />
          <SiGithub />
          <SiVercel />
          <p>. </p>
        </div>
        <div className="flex gap-1 items-center">
          Open sourced →
          <Link className="hover:underline hover:text-accent" href={github}>
            soon
          </Link>
        </div>
      </div>
    </footer>
  );
}

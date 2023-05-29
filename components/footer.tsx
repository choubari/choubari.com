import {
  FooterAbout,
  FooterSocials,
  FooterProjects,
  githubrepo,
  twitter,
} from "@/config/navigation";
import { Logo } from "./logo";
import Link from "next/link";
import NewsletterBox from "./newsletter-box";
import { SiGithub, SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-lighter dark:bg-dark text-darker dark:text-light py-4 w-full">
      <div className="mx-auto px-4 lg:px-8 lg:max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 md:space-y-4">
          <Logo />
          <p className="pb-3">
            I turn ideas into reality with the power of software engineering,
            and I share my knowledge & passion using content creation.
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
      <div className="flex flex-col md:flex-row gap-1 text-center items-center justify-center">
        <p>
          © {new Date().getFullYear()} Copyright. Made with ❤ by{" "}
          <Link
            href={twitter}
            className="text-accent font-mono hover:underline"
          >
            @choubari_
          </Link>
        </p>
        <div className="flex flex-row gap-1 text-center items-center justify-center">
          <p> using</p>
          <SiNextdotjs />
          <SiTailwindcss />
          <SiGithub />
          <SiVercel />
          <p>. </p>
        </div>
        <p>
          Open Sourced{" "}
          <Link className="text-grey italic hover:underline" href={githubrepo}>
            {"(soon)"}
          </Link>
        </p>
      </div>
    </footer>
  );
}

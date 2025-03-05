"use client";
import ProjectCard from "@/components/project-card";
import { CodingProjects } from "@/content/work";
import { useState } from "react";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";

export default function Work() {
  const [isCurrentJobOpen, setIsCurrentJobOpen] = useState(false);

  return (
    <div className="mx-5 my-10 ">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Projects
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Various projects I've worked on. (updates coming soon)</p>
      </div>

      <div className="space-y-4">
        {/* Current Job Section */}
        <div>
          <button
            onClick={() => setIsCurrentJobOpen(!isCurrentJobOpen)}
            className="w-full flex items-center justify-between p-4 bg-lighter dark:bg-dark rounded-lg"
          >
            <h2 className="text-xl font-bold">Current Job</h2>
            <FaChevronDown
              className={`transform transition-transform duration-300 ${
                isCurrentJobOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isCurrentJobOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-lighter/50 dark:bg-dark/50 rounded-b-lg space-y-4">
              <p>
                Currently working full time as a Full-Stack Engineer at a
                startup in Paris. You can check the changelog of what we shipped{" "}
                <a
                  href="https://www.alobees.com/en/changelog"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline inline-flex items-center gap-1"
                >
                  here
                  <FaExternalLinkAlt className="text-xs" />
                </a>
                .
              </p>
              <p>
                My main tech stack is Javascript, Typescript, React and React
                Native.
              </p>
              <div>
                <p className="mb-2">
                  My missions include but not restricted to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Building new features and fixing bugs</li>
                  <li>Maintaining legacy debt and conducting code reviews</li>
                  <li>
                    Introducing guidelines and best practices to support team
                    growth
                  </li>
                  <li>Performance optimizations and refactoring</li>
                  <li>Writing specifications and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* new tab links */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
          {[
            { title: "Newsletter", href: "/newsletter" },
            { title: "Open Source", href: "/oss" },
            { title: "Content Creation", href: "/creator" },
            {
              title: "Digital Products",
              href: "https://choubari.gumroad.com/",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              className="flex items-center justify-between p-4 bg-lighter dark:bg-dark rounded-lg hover:bg-accent/10 transition-colors hover:underline"
            >
              <h2 className="text-xl font-bold">{item.title}</h2>
              <FaExternalLinkAlt className="text-sm" />
            </a>
          ))}
        </div>

        {/* Legacy Projects, to be removed */}
        <div>
          <div className="w-full flex items-center justify-between p-4 bg-lighter dark:bg-dark rounded-lg">
            <h2 className="text-xl font-bold">
              Legacy Coding Projects (Pre-2023)
            </h2>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden max-h-[2000px] opacity-100`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
              {CodingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

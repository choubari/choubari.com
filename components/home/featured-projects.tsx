import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { CodingProjects } from "@/content/work";

export default function FeaturedProjects() {
  return (
    <div className="mx-4 my-6 md:px-20">
      <div className="flex flex-col mb-5">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Featured Work
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>
          Here are some of the projects I've worked on, utilizing a variety of
          technologies and frameworks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {CodingProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/work">
          <p className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-accent to-accentgrad text-white text-sm font-semibold">
            View All Projects
          </p>
        </Link>
      </div>
    </div>
  );
}
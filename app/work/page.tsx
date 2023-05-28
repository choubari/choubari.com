import ProjectCard from "@/components/project-card";
import { CodingProjects } from "@/content/work";

export default function Work() {
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Coding Projects
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>
          Here are some of the projects I've worked on, utilizing a variety of
          technologies and frameworks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CodingProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

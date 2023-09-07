import ProjectCard from "@/components/project-card";
import { CodingProjects } from "@/content/work";
import Button from "../ui/button";

export default function FeaturedProjects() {
  return (
    <div className="mx-8 my-6 mb-20 md:px-20">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {CodingProjects.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="my-10">
        <Button route={"/work"} label={"View All Projects"} />
      </div>
    </div>
  );
}

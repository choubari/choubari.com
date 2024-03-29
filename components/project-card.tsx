import { FiGithub, FiLink } from "react-icons/fi";

import Image from "next/image";
import { CodingProject } from "@/types";
import techIconMap from "@/lib/techIconMap";
import classNames from "classnames";

type ProjectCardProps = {
  project: CodingProject;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const chipStyle =
    "inline-flex items-center px-3 py-1 rounded-full border hover:border-gray-300 border-gray-500 dark:border-gray-300 hover:dark:border-gray-500 bg-lighter dark:bg-dark hover:bg-gradient-to-r from-accentgrad via-accent to-accent";
  const TechIcon =
    techIconMap[project.technology?.toLowerCase() ?? "undefined"] ||
    techIconMap["none"];
  return (
    <div className="flex flex-col h-full shadow-lg rounded-lg dark:bg-dark bg-lighter p-4 overflow-visible group">
      <div className="relative h-60 w-full rounded-t-lg">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={`/work/coding-projects/${project.thumbnail}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            alt={project.title}
            className="transition-all duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="absolute -bottom-4 right-2 rounded-full bg-darker p-2 text-accent text-xl items-center">
          <TechIcon />
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-lg font-bold mt-4 dark:text-light text-darker">
          {project.title}
        </h2>
        <p className="text-sm mt-2 opacity-80">{project.description}</p>
      </div>
      <div className="mt-4 flex space-x-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={classNames(chipStyle)}
          >
            <FiLink className="mr-2" /> Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={classNames(chipStyle)}
          >
            <FiGithub className="mr-2" /> Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

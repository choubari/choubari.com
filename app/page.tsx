import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { CodingProjects } from "@/content/work";
export function Hero() {
  return (
    <div className="md:flex md:flew-row justify-between py-28 mx-4 md:px-20">
      <div className="basis-7/12 pr-16 bg-dark">
        <h1 className="text-5xl pb-10 font-serif font-bold leading-tight">
          Coding & Storytelling:
          <br />
          That's what I do!
        </h1>
        <div className="my-5">
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Engineering
          </code>
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Educating
          </code>
          <code className="bg-accent p-1.5 mr-4 rounded-sm font-medium text-lighter">
            Entertaining
          </code>
        </div>
        <p className="font-medium text-lg">
          I turn ideas into reality with the power of software engineering, and
          I share my knowledge & passion using content creation.
        </p>
        <p className="text-accent font-mono text-xl font-bold underline">
          <a href="/contact">Let's CHAT!</a>
        </p>
      </div>
      <div className="basis-5/12 bg-accent flex relative w-full justify-center">
        {/* <Image
          src={avatar}
          alt={"avatar"}
          fill
          style={{ objectFit: "contain" }}
        /> */}
      </div>
    </div>
  );
}

export function FeaturedProjects() {
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
          <p className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-accent to-vibrant-blue text-white text-sm font-semibold">
            View All Projects
          </p>
        </Link>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}

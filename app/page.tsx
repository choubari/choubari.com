import FeaturedProjects from "@/components/home/featured-projects";
import FeaturedRepos from "@/components/home/featured-repos";
import FeaturedTalks from "@/components/home/featured-talks";
import Hero from "@/components/home/hero";
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedTalks />
      <FeaturedRepos />
    </>
  );
}

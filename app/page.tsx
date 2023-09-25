import FeaturedProjects from "@/components/home/featured-projects";
import FeaturedRepos from "@/components/home/featured-repos";
import FeaturedTalks from "@/components/home/featured-talks";
import Hero from "@/components/home/hero";
export default function Home() {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const isMyBirthday = todayDay === 26 && todayMonth === 8; // 0-based months (26 September)

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <FeaturedTalks />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedRepos />
      {isMyBirthday && <script src="/confetti.js"></script>}
    </>
  );
}

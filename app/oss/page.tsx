import RepoCard from "@/components/repo-card";
import { fetchGithubRepos } from "@/lib/utils";

export default async function OSS() {
  const repos = await fetchGithubRepos();
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Open Source Contributions
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Here are some of the open sourced projects I've worked on.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

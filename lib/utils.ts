import { Repo } from "@/types";

export const fetchGithubRepos = async () => {
  const response = await fetch("https://api.github.com/users/choubari/repos");
  const data: Repo[] = await response.json();

  // Filter out forked repos
  const originalRepos = data.filter((repo) => !repo.fork);

  // Sort by number of stars
  const sortedData = originalRepos.sort(
    (a, b) => b.stargazers_count - a.stargazers_count
  );

  return sortedData;
};

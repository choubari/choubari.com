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

export const getTwitterFollowers = () => {
  // TODO: fetch API and get Followers count
  return 1430;
};

export const getGithubFollowers = async () => {
  const response = await fetch("https://api.github.com/users/choubari");
  const data = await response.json();
  const followers = data.followers;
  return followers;
};

export const getLinkedinFollowers = async () => {
  // TODO: fetch API and get Followers count
  return 3540;
};

export const getYoutubeFollowers = async () => {
  // TODO: fetch API and get Followers count
  return 1110;
};

export const getInstagramFollowers = async () => {
  // TODO: fetch API and get Followers count
  return 3520;
};

export const getFacebookFollowers = async () => {
  // TODO: fetch API and get Followers count
  return 140;
};

export const getTiktokFollowers = async () => {
  // TODO: fetch API and get Followers count
  return 35;
};

// "use client";
// import { useEffect, useState } from "react"
import Button from "../ui/button";
import RepoCard from "../repo-card";
import { Repo } from "@/types";
import { fetchGithubRepos } from "@/lib/utils";

export default async function FeaturedRepos() {
  const repos = await fetchGithubRepos();
  return (
    <div className="mx-8 my-6 mb-20 md:px-20">
      <div className="flex flex-col mb-5">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Open Source
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>
          Here are some of the popular Open Source Repositories I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {repos.slice(0, 3).map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="my-10">
        <Button route={"/oss"} label={"View All Repos"} />
      </div>
    </div>
  );
}

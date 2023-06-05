import { Repo } from "@/types";
import { VscRepoForked } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import techIconMap from "@/lib/techIconMap";

type RepoCardProps = {
  repo: Repo;
};
const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  // console.log(repo.language);
  const TechIcon =
    techIconMap[repo.language?.toLowerCase() ?? "undefined"] ||
    techIconMap["none"];

  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer">
      <div className="flex flex-col h-full p-4 shadow-lg rounded-lg dark:bg-dark bg-lighter">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2">{repo.name}</h2>
          <p className="mb-2 text-sm opacity-80">{repo.description}</p>
        </div>
        <div className="flex justify-between items-center text-md">
          <div className="flex items-center gap-1">
            <TechIcon />
            <p className="pr-2">{repo.language}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineStar />
            <p className="mr-1 font-semibold">{repo.stargazers_count}</p>
            <VscRepoForked />
            <p className="font-semibold">{repo.forks_count}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepoCard;

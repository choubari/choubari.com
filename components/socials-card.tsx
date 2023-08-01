import { SocialPlatform } from "@/types";
import { findSocialLinkHref } from "@/lib/utils";
import SocialsIcon from "@/lib/socialsIconMap";

type PlatformProps = {
  platform: SocialPlatform;
  title: string;
  followersCount: number;
};
const SocialsCard: React.FC<PlatformProps> = ({
  platform,
  title,
  followersCount,
}) => {
  const SocialIcon =
    SocialsIcon[platform.toLowerCase() ?? "undefined"] || SocialsIcon["none"];
  return (
    <a href={findSocialLinkHref(platform)} target="_blank" rel="noreferrer">
      <div className="flex h-full p-4 shadow-lg rounded-lg dark:bg-dark bg-lighter">
        <div className="flex-grow flex-col">
          <h2 className="text-4xl font-bold font-mono">{followersCount}</h2>
          <p className="mb-2 text-sm opacity-80">{title}</p>
        </div>
        <div className="text-accent text-4xl items-center">
          <SocialIcon />
        </div>
      </div>
    </a>
  );
};

export default SocialsCard;
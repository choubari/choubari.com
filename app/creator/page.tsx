import SocialsCard from "@/components/socials-card";
import {
  getFacebookFollowers,
  getGithubFollowers,
  getInstagramFollowers,
  getLinkedinFollowers,
  getTiktokFollowers,
  getTwitterFollowers,
  getYoutubeFollowers,
} from "@/lib/utils";
import { SocialPlatform } from "@/types";

type PlatformCounts = {
  name: SocialPlatform;
  label: string;
  count: number;
};
async function followersByPlatform(): Promise<PlatformCounts[]> {
  const twitterFollowers = await getTwitterFollowers();
  const githubFollowers = await getGithubFollowers();
  const linkedinFollowers = await getLinkedinFollowers();
  const youtubeFollowers = await getYoutubeFollowers();
  const instagramFollowers = await getInstagramFollowers();
  const facebookFollowers = await getFacebookFollowers();
  const tiktokFollowers = await getTiktokFollowers();

  const platformCounts: PlatformCounts[] = [
    { name: "YouTube", label: "Subscribers", count: youtubeFollowers },
    { name: "Instagram", label: "Total Followers", count: instagramFollowers },
    { name: "Twitter", label: "Total Followers", count: twitterFollowers },
    { name: "Github", label: "Followers", count: githubFollowers },
    { name: "Linkedin", label: "Followers", count: linkedinFollowers },
    { name: "Facebook", label: "Page Likes", count: facebookFollowers },
    { name: "TikTok", label: "Followers", count: tiktokFollowers },
  ];
  return platformCounts;
}

export default async function Creator() {
  const platforms = await followersByPlatform();
  return (
    <div className="mx-5 my-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-serif text-4xl font-bold mb-2">
          Content Creation{" "}
          <span className="text-4xl leading-3 text-accent">.</span>
        </h1>
        <p>Tech Influencer to be XD</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {platforms.map((platform) => (
          <SocialsCard
            platform={platform.name}
            title={platform.label}
            followersCount={platform.count}
          />
        ))}
      </div>
    </div>
  );
}

import {
  getFacebookFollowers,
  getGithubFollowers,
  getInstagramFollowers,
  getLinkedinFollowers,
  getTiktokFollowers,
  getTwitterFollowers,
  getYoutubeFollowers,
} from "@/lib/utils";

export default async function Creator() {
  const twitterFollowers = await getTwitterFollowers();
  const githubFollowers = await getGithubFollowers();
  const linkedinFollowers = await getLinkedinFollowers();
  const youtubeFollowers = await getYoutubeFollowers();
  const instagramFollowers = await getInstagramFollowers();
  const facebookFollowers = await getFacebookFollowers();
  const tiktokFollowers = await getTiktokFollowers();
  return (
    <div>
      <h1 className="font-bold text-2xl">Creator Page</h1>

      <p className="text-xl underline pt-5 pb-3">Followers:</p>
      <ul className="font-mono">
        <li>Twitter: {twitterFollowers}</li>
        <li>Github: {githubFollowers}</li>
        <li>Linkedin: {linkedinFollowers}</li>
        <li>YouTube: {youtubeFollowers}</li>
        <li>Instagram: {instagramFollowers}</li>
        <li>Facebook: {facebookFollowers}</li>
        <li>TikTok: {tiktokFollowers}</li>
      </ul>
    </div>
  );
}

import { FooterSocials } from "@/config/navigation";
import { Repo, SocialPlatform } from "@/types";

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
  // TODO: find a way to get Followers count from Twtter API
  return 2030;
};

export const getGithubFollowers = async () => {
  const response = await fetch("https://api.github.com/users/choubari");
  const data = await response.json();
  const followers = data.followers;
  return followers;
};

export const getLinkedinFollowers = async () => {
  // TODO: find a way to get Followers count from Linkedin API
  return 5134;
};

export const getYoutubeFollowers = async () => {
  // TODO: find a way to get Followers count from YouTube API
  return 1241;
};

export const getInstagramFollowers = async () => {
  // TODO: find a way to get Followers count from Instagram API
  return 3015;
};

export const getFacebookFollowers = async () => {
  // TODO: find a way to get Followers count from Facebook API
  return 374;
};

export const getTiktokFollowers = async () => {
  // TODO: find a way to get Followers count from TikTok API
  return 18;
};

export const getNewsletterFollowers = async () => {
  // TODO: find a way to get Followers count from Beehiiv API
  return 25;
};

export function findSocialLinkHref(label: SocialPlatform): string {
  if (label === "Newsletter") {
    return "/newsletter";
  }
  const socialLink = FooterSocials.find((social) => social.label === label);
  return socialLink ? socialLink.href : "#";
}

export function countFormatter(n: number): string {
  const countFormat = Intl.NumberFormat("en", { notation: "compact" });
  return countFormat.format(n);
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const validateCaptcha = (response_key) => {
  return new Promise((resolve, reject) => {
    const secret_key = process.env.RECAPTCHA_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

    fetch(url, {
      method: "post",
    })
      .then((response) => response.json())
      .then((google_response) => {
        if (google_response.success == true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        resolve(false);
      });
  });
};

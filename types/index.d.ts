export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type NavLink = {
  label: string;
  href: string;
};

export type Presentation = {
  host: string;
  hostLink?: string;
  country: string;
  city: string;
  video?: string;
  slides?: string;
  demoCode?: string;
  demoLink?: string;
  docs?: string;
};

export type Talk = {
  featured?: boolean;
  title: string;
  thumbnail: string;
  date: string;
  duration?: string;
  description: string;
  presentations: Presentation[];
};

export type Technology =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "android"
  | "ionic"
  | "flutter"
  | "java"
  | "c"
  | "unity";

export type CodingProject = {
  featured?: boolean;
  title: string;
  thumbnail: string;
  description: string;
  link?: string;
  technology?: Technology;
  github?: string;
};

export type Testimonial = {
  name: string;
  message: string;
  position: string;
  company?: string;
  photo: string;
};

export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  fork: boolean;
};
export type Dropdown = {
  id: number;
  label: string;
};

export type ContactEntry = {
  fullName: string;
  email: string;
  purpose: string;
  message: string;
};

export type SocialPlatform =
  | "Github"
  | "Linkedin"
  | "YouTube"
  | "Twitter"
  | "Instagram"
  | "Facebook"
  | "TikTok"
  | "Newsletter";

export type SocialLink = {
  label: SocialPlatform;
  href: string;
};

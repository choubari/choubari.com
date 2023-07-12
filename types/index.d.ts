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
  demo?: string;
};

export type Talk = {
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

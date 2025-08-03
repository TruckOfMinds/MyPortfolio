import type { Endpoints } from "@octokit/types";

export type designCardProps = Promise<
  {
    id: bigint;
    name: string;
    date: string;
    bio: string;
    expp: string;
    expn: string;
    image: string;
  }[]
>;

export type skillsProps = Promise<
  {
    id: bigint;
    name: string;
    bg: string;
    logo_name: string;
  }[]
>;

export type codeCardProps = Promise<
  {
    id: bigint;
    repo_name: string;
    image: string;
    tags: string;
    date: string;
  }[]
>;

export type repoProps = Promise<
  {
    id: bigint;
    repo_name: string;
    date: string;
    style: string;
    bio: string;
    links: string;
    images: string;
  }[]
>;

export type topProps = Promise<
  {
    id: bigint;
    repo_name: string;
    image: string;
  }[]
>;

export type linkProps = Promise<
  {
    id: bigint;
    link: string;
    style: string;
    logo_name: string;
  }[]
>;

export type Repo =
  Endpoints["GET /users/{username}/repos"]["response"]["data"][number];

export type dbRepoName = { repo_name: string };

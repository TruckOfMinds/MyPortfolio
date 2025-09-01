import type { codeCardProps, skillProps, topProps } from "@/types";

const server: string = import.meta.env.SERVER_URL;

// Home.tsx
export const fetchSkills = async (): Promise<skillProps[]> =>
  await fetch(`${server}/get-skills`).then((res) => res.json());

export const fetchTopProjects = async (): Promise<topProps[]> =>
  await fetch(`${server}/get-repo/top`).then((res) => res.json());

// Code.tsx
export const fetchCodeCards = async (): Promise<codeCardProps[]> =>
  await fetch(`${server}/get-repo/card`).then((res) => res.json());

import type {
  codeCardProps,
  codeProjectProps,
  designCardProps,
  designProjectTypes,
  skillProps,
  topProps,
} from "@/types";

const server: string = import.meta.env.VITE_SERVER_URL;

// Home.tsx
export const fetchSkills = async (): Promise<skillProps[]> =>
  await fetch(`${server}/get-skills`)
    .then(res => res.json())
    .catch((err: Error) => console.error(err.message));

export const fetchTopProjects = async (): Promise<topProps[]> =>
  await fetch(`${server}/get-repo/top`)
    .then(res => res.json())
    .catch((err: Error) => console.error(err.message));

// Code.tsx
export const fetchCodeCards = async (): Promise<codeCardProps[]> =>
  await fetch(`${server}/get-repo/card`)
    .then(res => res.json())
    .catch((err: Error) => console.error(err.message));

// CodeProject.tsx
export const fetchCodeProject = async (owner: string, project: string): Promise<codeProjectProps> =>
  await fetch([server, "get-repo", owner, project].join("/"))
    .then(res => res.json())
    .catch((err: Error) => console.error(err.message));

// Designs.tsx
export const fetchDesignCards = async (): Promise<designCardProps[]> =>
  await fetch(`${server}/get-designs`)
    .then(res => res.json())
    .catch((err: Error) => console.error(err.message));

// DesignProject.tsx
export const fetchDesignProject = async (project: string): Promise<designProjectTypes> =>
  await fetch(`${server}/get-designs/${project}`)
    .then(res => res.json())
    .catch(err => console.error(err));

import type { codeCardProps, codeProjectProps, skillProps, topProps } from "@/types";

const server: string = import.meta.env.VITE_SERVER_URL;

// Home.tsx
export const fetchSkills = async (): Promise<skillProps[]> =>
	await fetch(`${server}/get-skills`).then(res => res.json());

export const fetchTopProjects = async (): Promise<topProps[]> =>
	await fetch(`${server}/get-repo/top`).then(res => res.json());

// Code.tsx
export const fetchCodeCards = async (): Promise<codeCardProps[]> =>
	await fetch(`${server}/get-repo/card`).then(res => res.json());

// CodeProject.tsx
export const fetchCodeProject = async (project: string): Promise<codeProjectProps> =>
	await fetch(`${server}/get-repo/${project}`).then(res => res.json());

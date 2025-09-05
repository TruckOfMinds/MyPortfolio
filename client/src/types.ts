import type { ReactNode } from "react";

export type gridProps = {
  layout?: string;
  className?: string;
  id: string;
  children: ReactNode;
};

export type codeCardProps = {
  id: bigint;
  repo_name: string;
  image: string;
  tags: string[];
  date: string;
};

export type designCardProps = {
  id: bigint;
  name: string;
  date: string;
  bio: string;
  expp: string;
  expn: string;
  image: string;
};

export type cardProps = {
  variant?: string;
  colour?: "sky" | "pink" | "yellow" | "blue" | "purple" | "gold";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  codeData?: codeCardProps;
  designData?: designCardProps;
};

export type skillProps = {
  id: bigint;
  name: string;
  logo_name: string;
};

export type topProps = {
  id: bigint;
  image: string;
  repo_name: string;
};

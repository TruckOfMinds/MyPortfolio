import type { JSX } from "react";

export type gridProps = {
  layout: string;
  className?: string;
  id: string;
  children: Array<JSX.Element | string>;
};

export type cardProps = {
  variant?: string;
  colour?: "sky" | "pink" | "yellow" | "blue" | "purple" | "gold";
  children: Array<JSX.Element | string> | JSX.Element | string;
  className?: string;
  onClick?: () => void;
};

export type skillProps = {
  id: bigint;
  name: string;
  bg: string;
  logo_name: string;
};

export type topProps = {
  id: bigint;
  image: string;
  repo_name: string;
}[];

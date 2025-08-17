import type { JSX } from "react";

export type gridProps = {
  className?: string;
  id: string;
  children: JSX.Element[];
};

export type cardProps = {
  variant?: string;
  colour?: string;
  children: JSX.Element | string[] | JSX.Element | string;
  className?: string;
};

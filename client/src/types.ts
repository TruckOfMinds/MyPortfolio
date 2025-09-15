import type { CSSProperties, ReactNode, RefObject } from "react";

export type gridProps = {
	layout?: string;
	className?: string;
	id: string;
	children: ReactNode;
};

export type codeCardProps = {
	id: bigint;
	repo_name: string;
	logo: string;
	tags: string[];
	date: string;
};

export type designCardProps = {
	id: bigint;
	name: string;
	date: string;
	bio: string;
	pros: string;
	cons: string;
	logo: string;
};

export type cardProps = {
	variant?: string;
	colour?: "sky" | "pink" | "yellow" | "blue" | "purple" | "gold";
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	onClick?: () => void;
	onEnter?: (e: React.KeyboardEvent<HTMLElement>) => void;
	codeData?: codeCardProps;
	designData?: designCardProps;
	ref?: RefObject<HTMLElement | null>;
	tabIndex?: number;
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

export type Elem = HTMLElement | null;
export type ElemRef = RefObject<Elem>;

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
	// Physical alterations e.g. long — or it's purpose i.e. code or design
	variant?: string;
	colour?: "sky" | "pink" | "yellow" | "blue" | "purple" | "gold" | "mono";
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	onClick?: () => void;
	// Intended for pressing the 'Enter' key but can be any keyup
	onEnter?: (e: React.KeyboardEvent<HTMLElement>) => void;
	// Data needed if it's the code variant
	codeData?: codeCardProps;
	// Data needed if it's the design variant
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
	name: string;
	is_code: boolean;
};

export type topCarouselProps = {
	src?: string;
	alt?: string;
	dataName?: string;
	isCode?: boolean;
};

export type Elem = HTMLElement | null;
export type ElemRef = RefObject<Elem>;

import type { CSSProperties, Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export type gridProps = {
	layout?: string;
	className?: string;
	id: string;
	children: ReactNode;
};

export type codeCardProps = {
	id: bigint;
	name: string;
	logo: string;
	tags: string[][];
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

export type userInputProps = { search: string; sort: "date" | "name"; desc: boolean };
export type setUserInputProps = Dispatch<SetStateAction<userInputProps>>;

export type Status = {
	value: "date" | "name";
	label: "Date" | "Name";
};

import type { cardProps, codeCardProps, designCardProps } from "@/types";

import "./style/Card.css";
import { Link } from "react-router";
import type { JSX } from "react";
import Grid from "./Grid";

export default function Card({
	variant, // Physical alterations e.g. long — or it's purpose i.e. code or design
	colour,
	children,
	className,
	style,
	onClick,
	onEnter, // Intended for pressing the 'Enter' key but can be any keyup
	codeData, // Data needed if it's the code variant
	designData, // Data needed if it's the design variant
	ref,
	tabIndex,
}: cardProps) {
	return (
		<article
			style={style}
			className={[
				"rounded-2xl shadow-iii px-4 py-2 max-h-[50dvh] min-h-fit",
				variant,
				colour,
				className,
			].join(" ")}
			onClick={onClick}
			ref={ref}
			tabIndex={tabIndex}
			onKeyUp={onEnter}>
			{/* render specific content for certain card types,
          otherwise user child elements */}
			{variant === "code" && codeData ? (
				<CodeContent {...codeData} />
			) : variant === "design" && designData ? (
				<DesignContent {...designData} />
			) : (
				children
			)}
		</article>
	);
}

const CodeContent = (props: codeCardProps): JSX.Element => (
	<Link to={props.repo_name} className="card-grid code relative">
		<img src={props.logo} alt="Project image" className="[grid-area:image]" />
		<p className="[grid-area:name]">{props.repo_name}</p>

		<Grid
			layout="pageless one-two"
			id="tags"
			className="overflow-x-clip hide-scrollbar justify-self-start [grid-area:tag]">
			{props.tags.map(t => (
				<p
					className={`tag px-2 py-2 rounded-full ${
						t[1] === "status" ? t[0].toLowerCase() : ""
					} [grid-row:${t[1] === "status" ? 2 : 1}]`}>
					{t[0]}
				</p>
			))}
		</Grid>
	</Link>
);

const DesignContent = (props: designCardProps): JSX.Element => (
	<Link to={props.name} className="card-grid design">
		<img src={props.logo} alt="Project image" className="[grid-area:image]" />
		<p className="[grid-area:name]">{props.name}</p>
		<p className="[grid-area:bio]">{props.bio}</p>
	</Link>
);

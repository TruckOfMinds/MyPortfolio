import type { cardProps, codeCardProps, designCardProps } from "@/types";

import "./style/Card.css";
import { Link } from "react-router";
import type { JSX, ReactNode } from "react";
import Grid from "./Grid";

export default function Card(props: cardProps): JSX.Element {
	const content = (): ReactNode => {
		let content;
		if (props.variant === "code" && props.codeData) {
			content = <CodeContent {...props.codeData} />;
		} else if (props.variant === "design" && props.designData) {
			content = <DesignContent {...props.designData} />;
		} else {
			content = props.children;
		}
		return content;
	};

	return (
		<article
			style={props.style}
			onClick={props.onClick}
			ref={props.ref}
			tabIndex={props.tabIndex}
			onKeyUp={props.onEnter}
			className={[
				"rounded-2xl shadow-iii max-h-[50dvh]",
				content() === props.children ? "px-4 py-3" : "",
				props.variant,
				props.colour,
				props.className,
			].join(" ")}>
			{/* render specific content for certain card types,
          otherwise user child elements */}
			{content()}
		</article>
	);
}

const CodeContent = (props: codeCardProps): JSX.Element => (
	<Link to={props.repo_name} className="card-grid code relative px-4 py-2">
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
	<Link to={props.name} className="card-grid design px-4 py-2">
		<img src={props.logo} alt="Project image" className="[grid-area:image]" />
		<p className="[grid-area:name]">{props.name}</p>
		<p className="[grid-area:bio]">{props.bio}</p>
	</Link>
);

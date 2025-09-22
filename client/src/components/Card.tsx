import type { cardProps, codeCardProps, designCardProps } from "@/types";

import "./style/Card.css";
import { Link } from "react-router";
import { useRef, type JSX, type ReactNode } from "react";
import { createPortal } from "react-dom";

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
			className={[
				"rounded-2xl shadow-iii max-h-[50dvh]",
				content() === props.children ? "px-4 py-3" : "",
				props.variant,
				props.colour,
				props.className,
			].join(" ")}
			style={props.style}
			onClick={props.onClick}
			ref={props.ref}
			tabIndex={props.tabIndex}
			onKeyUp={props.onEnter}>
			{/**/}
			{content()}
		</article>
	);
}

const CodeContent = (props: codeCardProps): JSX.Element => {
	const ref = useRef<HTMLAnchorElement | null>(null);
	return (
		<Link to={props.repo_name} className="card-grid code relative px-4 py-2" ref={ref}>
			<img src={props.logo} alt="Project image" className="[grid-area:image]" />
			<p className="[grid-area:name]">{props.repo_name}</p>

			<section>
				{props.tags.map(t => {
					if (t[1] === "status" && ref.current) {
						return createPortal(
							<svg
								key={t[0]}
								viewBox="0 0 20 20"
								width="18"
								height="18"
								className="absolute top-2 right-2">
								<circle cx="50" cy="50" r="9" fill="red" />
							</svg>,
							ref.current
						);
					}

					return (
						<p key={t[0]} className="text-sm">
							{t[0]}
						</p>
					);
				})}
			</section>
		</Link>
	);
};

const DesignContent = (props: designCardProps): JSX.Element => (
	<Link to={props.name} className="card-grid design px-4 py-2">
		<img src={props.logo} alt="Project image" className="[grid-area:image]" />
		<p className="[grid-area:name]">{props.name}</p>
		<p className="[grid-area:bio]">{props.bio}</p>
	</Link>
);

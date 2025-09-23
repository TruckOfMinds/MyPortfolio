import type { cardProps, codeCardProps } from "@/types";

import "./style/Card.css";
import { Link } from "react-router";
import { type JSX } from "react";

export default function Card(props: cardProps): JSX.Element {
	return (
		<article
			className={[
				"card rounded-2xl shadow-iii max-h-[50dvh] px-4 py-3",
				props.variant,
				props.colour,
				props.className,
			].join(" ")}
			style={props.style}
			onClick={props.onClick}
			ref={props.ref}
			tabIndex={props.tabIndex}
			onKeyUp={props.onEnter}>
			{props.children}
		</article>
	);
}

export const CodeCard = (props: codeCardProps & cardProps): JSX.Element => {
	const StatusTag = ({ status }: { status: string }): JSX.Element => (
		<svg
			width="8"
			height="8"
			viewBox="0 0 8 8"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="absolute top-2 right-2 trans status-tag">
			<circle cx="4.19946" cy="4.04224" r="3.2981" fill="rgb(253 214 255)" className={status} />
		</svg>
	);

	return (
		<Link to={props.repo_name} className={`relative ${props.className}`}>
			<Card variant={props.variant} className="card-grid code" colour={props.colour}>
				<div className="[grid-area:image] code-card-image-container rounded-2xl flex items-center justify-center">
					<img
						src={`${import.meta.env.VITE_BUCKET_URL + props.logo}`}
						alt="Project image"
						className="code-card-image"
					/>
				</div>

				<p className="[grid-area:name] text-xl">{props.repo_name}</p>

				<section className="[grid-area:tags] tags">
					{props.tags.map(t => {
						if (t[1] === "status") {
							return <StatusTag key={t[0]} status={t[0]} />;
						}

						return (
							<p key={t[0]} className="tag text-sm px-3 py-1 rounded-full">
								{t[0]}
							</p>
						);
					})}
				</section>
			</Card>
		</Link>
	);
};

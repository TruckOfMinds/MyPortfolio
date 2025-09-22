import type { JSX } from "react";

export default function Header({
	className,
	Dev,
	Design,
}: {
	className?: string;
	Dev?: boolean;
	Design?: boolean;
}) {
	return (
		<header className={`flex items-center justify-between px-4 ${className}`}>
			<section className="project-title flex items-center gap-4">
				<Title text="My Projects" />
				{Dev ? (
					<div className="text-pri text-2xl rounded-full border-pri border-3 px-7">Dev</div>
				) : Design ? (
					<div className="text-sec text-2xl rounded-full border-sec border-3 px-7">Design</div>
				) : (
					<></>
				)}
			</section>

			<section className="project-filter">{/* search adn filter */}</section>
		</header>
	);
}

export const Title = ({ text }: { text: string }): JSX.Element => (
	<h1 className="orbit text-5xl mb-3">{text}</h1>
);

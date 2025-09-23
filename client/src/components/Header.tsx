import type { JSX } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Sort from "./Sort";

export default function Header({
	className,
	Dev,
	Design,
	text,
}: {
	className?: string;
	Dev?: boolean;
	Design?: boolean;
	text: string;
}) {
	return (
		<header className={`flex items-center justify-between px-4 ${className}`}>
			<TitleSection Dev={Dev} Design={Design} text={text} />
			{Dev || Design ? <SearchAndSort isDev={Dev || Design} /> : <></>}
		</header>
	);
}

const TitleSection = ({
	Dev,
	Design,
	text,
}: {
	Dev?: boolean;
	Design?: boolean;
	text: string;
}): JSX.Element => {
	const Title = ({ text }: { text: string }): JSX.Element => (
		<h1 className="orbit text-5xl mb-3">{text}</h1>
	);

	return (
		<section className="project-title flex items-center gap-4">
			<Title text={text} />

			{Dev ? (
				<div className="text-pri text-2xl rounded-full border-pri border-3 px-7">Dev</div>
			) : Design ? (
				<div className="text-sec text-2xl rounded-full border-sec border-3 px-7">Design</div>
			) : (
				<></>
			)}
		</section>
	);
};

const SearchAndSort = ({ isDev }: { isDev?: boolean }): JSX.Element => {
	return (
		<form className={`project-filter ${isDev ? "dev" : "design"}`}>
			<fieldset>
				<Label htmlFor="search">Search for projects, tags, and statuses!</Label>
				<Input type="text" placeholder="JavaScript" />
			</fieldset>

			<fieldset>
				<Label htmlFor="sort">Sort by</Label>
				<Sort />
			</fieldset>
		</form>
	);
};

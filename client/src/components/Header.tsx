import type { ChangeEvent, JSX } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Sort from "./Sort";
import type { setUserInputProps, userInputProps } from "@/types";
import { Toggle } from "./ui/toggle";

export default function Header({
	className,
	Dev,
	Design,
	text,
	userInput,
	setUserInput,
}: {
	className?: string;
	Dev?: boolean;
	Design?: boolean;
	text: string;
	userInput: userInputProps;
	setUserInput: setUserInputProps;
}) {
	return (
		<header className={`flex items-center justify-between px-4 ${className}`}>
			<TitleSection Dev={Dev} Design={Design} text={text} />
			{Dev || Design ? (
				<SearchAndSort isDev={Dev || Design} userInput={userInput} setUserInput={setUserInput} />
			) : (
				<></>
			)}
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

const SearchAndSort = ({
	isDev,
	userInput,
	setUserInput,
}: {
	isDev?: boolean;
	userInput: userInputProps;
	setUserInput: setUserInputProps;
}): JSX.Element => {
	const updateState = (e: ChangeEvent<HTMLInputElement>) =>
		setUserInput({ ...userInput, search: e.target.value });

	return (
		<form className={`project-filter ${isDev ? "dev" : "design"}`}>
			<fieldset>
				<Label htmlFor="search">Search for projects, tags, and statuses!</Label>
				<Input
					type="text"
					placeholder="e.g. JavaScript"
					name="search"
					id="search"
					value={userInput.search}
					onChange={updateState}
				/>
			</fieldset>

			<fieldset>
				<Label htmlFor="sort">Sort by</Label>
				<Sort userInput={userInput} setUserInput={setUserInput} />
				<Toggle onClick={() => setUserInput({ ...userInput, desc: !userInput.desc })}>
					{userInput.desc ? "Descending" : "Ascending"}
				</Toggle>
			</fieldset>
		</form>
	);
};

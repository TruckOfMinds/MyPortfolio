import { useState, type JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCodeCards } from "@/utils/serverPortal";
import { randomColour } from "@/lib/data";

import Header from "@/components/Header";
import Grid from "@/components/Grid";
import { CodeCard } from "@/components/Card";

import "./style/Code.css";
import type { codeCardProps, userInputProps } from "@/types";

export default function CodePage() {
	const [userInput, setUserInput] = useState<userInputProps>({
		search: "",
		sort: "date",
		desc: true,
	});

	return (
		<>
			<title>Code Projects | RD Portfolio</title>
			<main>
				<Grid id="top" className="with-header w-full mt-4">
					<Header
						text="My Projects"
						Dev
						className="w-full row-start-1 row-end-1 col-start-2 col-end-4"
						userInput={userInput}
						setUserInput={setUserInput}
					/>
					<Projects userInput={userInput} />
				</Grid>
			</main>
		</>
	);
}

const Projects = ({
	className,
	userInput,
}: {
	className?: string;
	userInput: userInputProps;
}): JSX.Element => {
	const { isPending, isError, error, data } = useQuery({
		queryKey: ["code"],
		queryFn: fetchCodeCards,
	});

	if (isPending) return <>loading...</>;
	if (isError) return <>{error}</>;

	const isInSearch = (d: codeCardProps) => {
		if (
			userInput.search === "" ||
			d.name.toLocaleLowerCase().includes(userInput.search.toLocaleLowerCase())
		)
			return true;

		for (const i of d.tags)
			if (i[0].toLocaleLowerCase().includes(userInput.search.toLocaleLowerCase())) return true;

		return false;
	};

	const sortMethod = (a: codeCardProps, b: codeCardProps): number => {
		if (userInput.sort === "date") {
			const aMMDD = a.date.split("/");
			const dateA = [aMMDD[1], aMMDD[0], aMMDD[2]].join("/");
			const bMMDD = b.date.split("/");
			const dateB = [bMMDD[1], bMMDD[0], bMMDD[2]].join("/");

			if (Date.parse(dateA) > Date.parse(dateB)) return 1;
			if (Date.parse(dateA) < Date.parse(dateB)) return -1;
			return 0;
		}

		return a.name.localeCompare(b.name);
	};

	const newData = data
		.sort(sortMethod)
		.map(d =>
			isInSearch(d) ? (
				<CodeCard key={d.id} colour={randomColour()} className="h-48 card-width" {...d} />
			) : (
				<></>
			)
		);

	return (
		<article className={`code-card-container code-projects ${className}`}>
			{userInput.desc ? newData.reverse() : newData}
		</article>
	);
};

import type { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCodeCards } from "@/utils/serverPortal";
import { randomColour } from "@/lib/data";

import Header from "@/components/Header";
import Grid from "@/components/Grid";
import Card from "@/components/Card";

import "./style/Code.css";

export default function CodePage() {
	return (
		<>
			<title>Code Projects | RD Portfolio</title>
			<main>
				<Grid id="top" layout="two-two" className="max-h-fit">
					<Header Dev className="w-full row-start-1 row-end-1 col-start-2 col-end-3" />
					<Projects />
				</Grid>
			</main>
		</>
	);
}

const Projects = ({ className }: { className?: string }): JSX.Element => {
	// ? handle query strings

	const { isPending, isError, error, data } = useQuery({
		queryKey: ["code"],
		queryFn: fetchCodeCards,
	});

	if (isPending) return <>loading...</>;
	if (isError) return <>{error}</>;

	return (
		<Grid
			id="projects"
			layout="two-n"
			className={`in-grid full max-h-fit code-projects ${className}`}>
			{data.map(d => (
				<Card key={d.id} variant="code" codeData={d} colour={randomColour()} className="in-grid" />
			))}
		</Grid>
	);
};

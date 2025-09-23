import type { JSX } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCodeCards } from "@/utils/serverPortal";
import { randomColour } from "@/lib/data";

import Header from "@/components/Header";
import Grid from "@/components/Grid";
import { CodeCard } from "@/components/Card";

import "./style/Code.css";

export default function CodePage() {
	return (
		<>
			<title>Code Projects | RD Portfolio</title>
			<main>
				<Grid id="top" className="with-header w-full">
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
		<article className={`code-card-container code-projects ${className}`}>
			{data.map(d => (
				<CodeCard key={d.id} colour={randomColour()} className="h-48 card-width" {...d} />
			))}
		</article>
	);
};

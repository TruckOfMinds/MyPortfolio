import { useEffect, useState, type JSX } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchTopProjects } from "@/utils/serverPortal";
import { Link } from "react-router";
import type { topCarouselProps, topProps } from "@/types";

export default function TopProjects(): JSX.Element {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [name, setName] = useState("project_name");
	const [isCode, setIsCode] = useState(false);

	const { isPending, isError, error, data } = useQuery({
		queryKey: ["top"],
		queryFn: fetchTopProjects,
	});

	// —————————————————————————————————————————————————————————————————————————————————————

	useEffect(() => {
		if (!api) return;

		const handleSelect = () => {
			const currentIndex = api.selectedScrollSnap();

			const projectName =
				api
					.slideNodes()
					// eslint-disable-next-line no-unexpected-multiline
					[currentIndex]?.firstElementChild?.getAttribute("data-name") || "project_name";

			const projectType = api
				.slideNodes()
				// eslint-disable-next-line no-unexpected-multiline
				[currentIndex]?.firstElementChild?.getAttribute("data-is-code");

			setCurrent(currentIndex);
			setName(projectName);
			setIsCode(Boolean(projectType));
		};
		handleSelect();

		api.on("select", handleSelect);

		return () => {
			api.off("select", handleSelect); // cleanup
		};
	}, [api]);

	// —————————————————————————————————————————————————————————————————————————————————————

	// temporary
	if (isPending) return <>Loading...</>;

	if (isError) return <>{error.message}</>;

	return (
		<>
			<Carousel
				setApi={setApi}
				opts={{ loop: true }}
				className="flex items-center justify-evenly h-3/4 w-[80%]">
				<CarouselContent className="flex items-center w-fit h-full justify-center">
					<Items data={data} />
				</CarouselContent>

				<section className="flex flex-col items-center justify-between gap-4">
					<h1 className="w-fit text-xl">{name}</h1>

					<ViewProject name={name} isCode={isCode} />
				</section>

				{/* absolute */}
				<CarouselPrevious className="text-sec bg-sec-cont transition-opacity hover:opacity-75 active:opacity-50" />
				<CarouselNext className="text-sec bg-sec-cont transition-opacity hover:opacity-75 active:opacity-50" />
			</Carousel>
			<div className="flex items-center gap-1 min-h-2 translate-y-[-0.25rem]">
				{api?.scrollProgress() && api?.scrollProgress() > 1 ? (
					Array.from({ length: api?.scrollProgress() }).map((_, index) => (
						<ScrollMarker key={index} current={index === current} index={index} api={api} />
					))
				) : (
					<svg
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="transition-all ">
						<circle
							cx="4.19946"
							cy="4.04224"
							r="3.2981"
							fill="rgb(253 214 255)"
							stroke="rgb(253 214 255)"
							strokeWidth="1"
							className="opacity-50"
						/>
					</svg>
				)}
			</div>
		</>
	);
}

//* —————————————————————————————————————————————————————————————————————————————————————

const Items = ({ data }: { data: topProps[] }): JSX.Element => {
	if (!data) return <></>;

	if (data.length === 0) {
		return (
			<CarouselItem className="flex items-center px-4 py-2 min-w-fit h-full justify-center">
				<CarouselImage />
			</CarouselItem>
		);
	}

	return (
		<>
			{data.map(d => (
				<CarouselItem
					key={d.id}
					className="flex items-center px-4 py-2 min-w-fit h-full justify-center">
					<CarouselImage
						src={import.meta.env.VITE_BUCKET_URL + d.image}
						alt={d.name}
						dataName={d.name}
						isCode={d.is_code}
					/>
				</CarouselItem>
			))}
		</>
	);
};

//* —————————————————————————————————————————————————————————————————————————————————————

const CarouselImage = ({
	src = "fallback.svg",
	alt = "my project",
	dataName = "project_name",
	isCode,
}: topCarouselProps): JSX.Element => (
	<img
		src={src}
		alt={"Showcase of " + alt}
		data-name={dataName}
		data-is-code={isCode}
		className="carousel-image rounded-2xl min-w-48 h-full"
	/>
);

//* —————————————————————————————————————————————————————————————————————————————————————

const ViewProject = ({ name, isCode }: { name: string; isCode: boolean }): JSX.Element => {
	if (name === "project_name" || !name)
		return (
			<Button
				className="cursor-not-allowed w-full min-w-40 h-10 opacity-50 bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f"
				aria-disabled={true}
				tabIndex={-1}>
				<i>View Project</i>
			</Button>
		);

	return (
		<Link to={`${isCode ? "code-projects" : "design-projects"}/${name}`}>
			<Button className="bg-on-sec-f text-sec-cont transition-all hover:bg-on-sec-f hover:brightness-75">
				<i>View Project</i>
			</Button>
		</Link>
	);
};

//* —————————————————————————————————————————————————————————————————————————————————————

const ScrollMarker = ({
	current,
	index,
	api,
}: {
	current: boolean;
	index: number;
	api: CarouselApi;
}): JSX.Element => (
	<svg
		width="8"
		height="8"
		viewBox="0 0 8 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		onClick={() => api?.scrollTo(index)}
		className="transition-all hover:scale-125">
		<circle
			cx="4.19946"
			cy="4.04224"
			r="3.2981"
			fill="rgb(253 214 255)"
			strokeWidth={current ? "1" : "0"}
			stroke="rgb(253 214 255)"
			className={`cursor-pointer ${!current ? "opacity-50" : ""}`}
		/>
	</svg>
);

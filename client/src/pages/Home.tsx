import { useRef, useState, type JSX } from "react";
import { bgTexts } from "@/lib/data";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import TopProjects from "@/components/TopProjects";
import Skills from "@/components/Skills";

import "./style/Home.css";
import type { Elem } from "@/types";

export default function HomePage(): JSX.Element {
	return (
		<main>
			<Hero />
			<About />
			<Background />
		</main>
	);
}

const Hero = (): JSX.Element => (
	<Grid layout="two-two" className="gradient" id="home">
		<h1 className="[grid-area:a] rotate-[-5deg] orbit text-9xl [line-height:1] text-shadow-v">
			reuben
			<br />
			dubois
		</h1>

		<img
			src="fallback-ter.svg"
			alt="Image of my code!"
			className="image rotate-[8.5deg] [grid-area:b] w-sm min-h-54 bg-ter rounded-4xl text-ter-cont [line-height:13.5rem] shadow-iii"
		/>

		<div className="[grid-area:c] rotate-[-8deg] flex flex-col items-center gap-4">
			<img
				src="/design.jpg"
				alt="Image of my design project!"
				className="w-[18rem] min-h-32 bg-ter rounded-2xl text-ter-cont [line-height:8rem] shadow-iii size"
			/>
			<p>Scroll to see more!</p>
		</div>

		<h2 className="[grid-area:d] rotate-[4deg] text-shadow-v text-[1.6rem]">
			<span className="orbit text-[7rem] [line-height:1.1] ">UI/UX</span>
			<br />
			Design and Developer
		</h2>
	</Grid>
);

const About = (): JSX.Element => {
	const portalRef = useRef<Elem>(null);

	return (
		<Grid layout="three-two" id="about" className="bg-sec">
			<TitleBlock text="Who Am I?" alt="#" className="in-grid [grid-area:a]" />

			<Card variant="long" className="in-grid [grid-area:b/b-start/b-end/c-end]" colour="pink">
				foo bar
			</Card>

			<Card
				className="in-grid relative z-10 overflow-y-clip [grid-area:d]"
				colour="purple"
				ref={portalRef}>
				<Skills portalRef={portalRef} />
			</Card>

			<Card
				className="in-grid [grid-area:e/e-start/e-end/f-end] flex flex-col items-center justify-between"
				variant="long"
				colour="purple">
				<h2 className="text-start w-full orbit [letter-spacing:.1rem] text-xl mt-1">
					Top Projects
				</h2>

				<TopProjects />
			</Card>
		</Grid>
	);
};

const Background = (): JSX.Element => {
	const [bgText, setBgText] = useState("Click a card to hear more about me!");

	return (
		<Grid layout="three-two" id="background" className="bg-pri">
			<TitleBlock text="My Background" alt="#" className="in-grid [grid-area:a]" />

			<Card variant="long" colour="sky" className="in-grid [grid-area:b/b-start/b-end/c-end]">
				{bgText}
			</Card>

			<Card
				colour="mono"
				className={`in-grid transition-all cursor-pointer [grid-area:d] ${
					bgText === bgTexts.one ? "scale-110" : ""
				}`}
				onClick={() => setBgText(bgTexts.one)}>
				one
			</Card>

			<Card
				colour="mono"
				className={`in-grid transition-all cursor-pointer [grid-area:e] ${
					bgText === bgTexts.two ? "scale-110" : ""
				}`}
				onClick={() => setBgText(bgTexts.two)}>
				two
			</Card>

			<Card
				colour="mono"
				className={`in-grid bg-on-pri transition-all cursor-pointer [grid-area:f] ${
					bgText === bgTexts.three ? "scale-110" : ""
				}`}
				onClick={() => setBgText(bgTexts.three)}>
				three
			</Card>
		</Grid>
	);
};

const TitleBlock = ({
	text,
	src = "fallback-ter.svg",
	alt,
	className,
}: {
	text: string;
	src?: string;
	alt: string;
	className?: string;
}): JSX.Element => (
	<header className={`flex flex-col items-center gap-4 ${className}`}>
		<div className="title h-[calc(50%-0.5rem)] min-w-[7rem] w-full bg-ter-cont shadow-iii rounded-2xl flex items-center justify-center">
			<h1 className="orbit text-ter text-center [line-height:1] text-[2.5rem]">{text}</h1>
		</div>

		<img
			src={src}
			alt={alt}
			className="bg-ter h-[calc(50%-0.5rem)] min-w-[7rem] w-full rounded-2xl text-ter-cont shadow-iii flex items-center justify-center object-contain"
		/>
	</header>
);

import "./style/Home.css";

import type { cardProps, Elem } from "@/types";
import { useEffect, useRef, useState, type JSX } from "react";
import { myBackground } from "@/lib/data";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import TopProjects from "@/components/TopProjects";
import Skills from "@/components/Skills";

/* In-File Components =>
  - Hero
  - About
  - Background
  - BackgroundCard
  - TitleBlock
*/

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
  <Grid layout="two-two" className="bg-dark" id="top">
    <section className="w-4/5 min-w-fit max-w-full h-fit min-h-1/2 flex flex-col items-center justify-center gap-10 z-[3] absolute top-1/2 left-1/2 trans">
      <h1 className="orbit title-font text-light text-center [line-height:1] text-shadow-v [letter-spacing:calc((.25dvw+.1rem)*-1)]">
        reuben<span className="[letter-spacing:calc((1dvw+.5rem)*-1)]"> </span>dubois
      </h1>

      <p className="text-light">some creative tagline trust me bro</p>

      <div className="flex items-center flex-wrap w-full justify-center gap-12">
        <Card colour="sky" className="shadow-v">
          UI/UX Designer
        </Card>
        <Card colour="yellow" className="px-5 py-4 shadow-v text-xl">
          Software Engineer
        </Card>
        <Card colour="pink" className="shadow-v">
          Web Developer
        </Card>
      </div>
    </section>

    <img
      src="/wireframeCodeGradient.svg"
      alt="App Wireframe & JSX Code fading from transparent to white"
      loading="eager"
      className="w-dvw row-[-1] col-span-full self-end z-[2]"
    />

    <div id="heroGradient" className="absolute w-full h-full top-0 left-0" />
  </Grid>
);

const About = (): JSX.Element => {
  const portalRef = useRef<Elem>(null);

  return (
    <Grid layout="three-two" id="about" className="bg-sec z-20 home-shadow">
      <TitleBlock text="Who Am I?" alt="#" className="in-grid [grid-area:a]" />

      <Card variant="long" className="in-grid [grid-area:b/b-start/b-end/c-end]" colour="pink">
        foo bar
      </Card>

      <Card
        className="in-grid relative z-10 overflow-y-clip [grid-area:d]"
        colour="purple"
        ref={portalRef}>
        <h2 className={`w-fit orbit [letter-spacing:.1rem] text-xl mt-1 pb-1 `}>Technical Stack</h2>
        <Skills portalRef={portalRef} />
      </Card>

      <Card
        className="in-grid [grid-area:e/e-start/e-end/f-end] flex flex-col items-center justify-start"
        variant="long"
        colour="purple">
        <h2 className="text-start w-full orbit [letter-spacing:.1rem] text-xl mt-1 pb-3">
          Top Projects
        </h2>

        <TopProjects />
      </Card>
    </Grid>
  );
};

const Background = (): JSX.Element => {
  const [bgText, setBgText] = useState("");
  const refOne = useRef<HTMLElement | null>(null);
  const refTwo = useRef<HTMLElement | null>(null);
  const refThree = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (bgText === "") return;

    const handleClick = (e: Event) => {
      const target = e.target;

      const refs = [refOne.current, refTwo.current, refThree.current];

      if (refs.includes(target as HTMLElement)) return;

      setBgText("");
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [bgText]);

  return (
    <Grid layout="three-two" id="background" className="bg-pri">
      <TitleBlock text="My Background" alt="#" className="in-grid [grid-area:a]" />

      <Card variant="long" colour="sky" className="in-grid [grid-area:b/b-start/b-end/c-end]">
        {myBackground[bgText]?.text || "Click a card to read more about me!"}
      </Card>

      <BackgroundCard
        ref={refOne}
        index={"one"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "one" ? "" : "one")}
        className="[grid-area:d]"
      />
      <BackgroundCard
        ref={refTwo}
        index={"two"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "two" ? "" : "two")}
        className="[grid-area:e]"
      />
      <BackgroundCard
        ref={refThree}
        index={"three"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "three" ? "" : "three")}
        className="[grid-area:f]"
      />
    </Grid>
  );
};

const BackgroundCard = ({
  ref,
  className,
  index,
  bgText,
  onClick,
  ...props
}: cardProps & {
  index: "one" | "two" | "three";
  bgText: string;
  onClick: () => void;
}) => (
  <Card
    className={`w-4/5 transition-all cursor-pointer h-2/3 min-h-fit max-h-full [user-select:none] ${className} ${
      bgText === index ? "scale-110" : ""
    }`}
    colour="blue"
    onClick={onClick}
    ref={ref}
    {...props}>
    {myBackground[index].image && (
      <img src={myBackground[index].image} alt="Image For a 'My Background' section" />
    )}
    <p>{myBackground[index].title}</p>
  </Card>
);

const TitleBlock = ({
  text,
  src = "placeholder.svg",
  alt,
  className,
}: {
  text: string;
  src?: string;
  alt: string;
  className?: string;
}): JSX.Element => (
  <header className={`flex flex-col items-center gap-4 min-h-fit max-h-4/5 ${className}`}>
    <Card className="h-[calc(40%-0.5rem)] min-w-[7rem] w-full shadow-iii rounded-2xl flex items-center justify-center card yellow">
      <h1 className="orbit text-center [line-height:1] text-[2.5rem]">{text}</h1>
    </Card>

    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="bg-ter h-[calc(60%-0.5rem)] min-w-[7rem] w-full rounded-2xl text-ter-cont shadow-iii flex items-center justify-center object-contain"
    />
  </header>
);

import "./style/Home.css";

import type { cardProps, Elem } from "@/types";
import { forwardRef, useEffect, useRef, useState, type JSX } from "react";
import { myBackground } from "@/lib/data";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import TopProjects from "@/components/TopProjects";
import Skills from "@/components/Skills";
import Markdown from "react-markdown";

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
  <Grid layout="two-two" className="bg-dark hero" id="top">
    <section className="w-4/5 min-w-fit max-w-full h-fit min-h-1/2 flex flex-col items-center justify-between thou:justify-center gap-10 z-[3] absolute top-1/2 left-1/2 trans">
      <h1 className="orbit title-font text-light text-center [line-height:1] text-shadow-v [letter-spacing:calc((.25dvw+.1rem)*-1)]">
        reuben<span className="[letter-spacing:calc((1dvw+.5rem)*-1)]"> </span>dubois
      </h1>

      <p className="text-light">some creative tagline trust me bro</p>

      <div className="flex items-center flex-wrap max-mob:flex-col w-full justify-center gap-x-12 gap-y-8">
        <Card colour="sky" className="shadow-v">
          UI/UX Designer
        </Card>
        <Card colour="yellow" className="shadow-v">
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
      className="min-w-dvw min-h-[40dvh] object-bottom object-cover row-[-1] col-span-full self-end z-[2]"
    />

    <div id="heroGradient" className="absolute w-full h-full top-0 left-0" />
  </Grid>
);

const About = (): JSX.Element => {
  const portalRef = useRef<Elem>(null);

  return (
    <Grid layout="three-two" id="about" className="bg-sec z-20 home-shadow">
      <TitleBlock text="Who Am I?" alt="#" className="w-[93%] mob:in-grid [grid-area:a]" />

      <p className="outline-card text-ter-cont">foo bar</p>

      <Card
        className="in-grid relative z-10 overflow-y-clip [grid-area:c] thou:[grid-area:d]"
        colour="purple"
        ref={portalRef}>
        <h2 className={`w-fit orbit [letter-spacing:.1rem] text-xl text-center mt-1 pb-1 `}>
          Technical Stack
        </h2>
        <Skills portalRef={portalRef} />
      </Card>

      <Card
        className="in-grid flex flex-col items-center justify-start [grid-area:d/d-start/d-end/e-end] thou:[grid-area:e/e-start/e-end/f-end]"
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

    document.getElementById("background")?.scrollIntoView({ block: "start" });

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
      <TitleBlock
        text="My Background"
        alt="#"
        className="w-[93%] [grid-area:a] center-title-block-text"
      />

      <div
        className={`outline-card ${
          bgText === "" ? "" : "focused"
        } text-ter-cont transition-all [grid-area:b] thou:[grid-area:b/b-start/b-end/c-end]`}
        id="backgroundInfo">
        <Markdown>{myBackground[bgText]?.text || "Click a card to read more about me!"}</Markdown>
      </div>

      <BackgroundCard
        ref={refOne}
        index={"one"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "one" ? "" : "one")}
        className="[grid-area:c] thou:[grid-area:d]"
      />
      <BackgroundCard
        ref={refTwo}
        index={"two"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "two" ? "" : "two")}
        className="[grid-area:d] thou:[grid-area:e]"
      />
      <BackgroundCard
        ref={refThree}
        index={"three"}
        bgText={bgText}
        onClick={() => setBgText(bgText === "three" ? "" : "three")}
        className="[grid-area:e] thou:[grid-area:f]"
      />
    </Grid>
  );
};

type backgroundCardProps = cardProps & {
  index: "one" | "two" | "three";
  bgText: string;
  onClick: (e: MouseEvent) => void;
};
const BackgroundCard = forwardRef<HTMLElement, backgroundCardProps>(
  ({ className, index, bgText, ...props }, ref) => (
    <Card
      {...props}
      className={`w-4/5 transition-all cursor-pointer h-2/3 min-h-fit max-h-full text-xl orbit flex flex-col items-center justify-center gap-4 max-w-full [user-select:none] ${className} ${
        bgText === index ? "scale-105 brightness-125" : ""
      }`}
      colour="blue"
      ref={ref}
      onClick={e => {
        e.stopPropagation();
        props.onClick(e);
      }}>
      {myBackground[index].image && (
        <img src={myBackground[index].image} alt="Image For a 'My Background' section" />
      )}
      <p>{myBackground[index].title}</p>
    </Card>
  )
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
  <header
    className={`flex flex-col items-center gap-4 min-h-fit h-80 max-thou:mb-4 max-w-[90dvw] min-[1001px]:w-4/5 min-[1001px]:h-[88%] ${className}`}>
    <Card className="h-[calc(40%-0.5rem)] min-h-fit min-w-[7rem] w-full shadow-i rounded-2xl flex items-center justify-center card yellow px-8">
      <h1 className="orbit text-center [line-height:1] text-[calc(2dvw+1rem)]">{text}</h1>
    </Card>

    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="bg-ter h-[calc(60%-0.5rem)] min-w-[7rem] w-full rounded-2xl text-ter-cont shadow-i  flex items-center justify-center object-contain"
    />
  </header>
);

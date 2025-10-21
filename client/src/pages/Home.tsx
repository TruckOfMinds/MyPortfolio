import "./style/Home.css";

import type { cardProps, Elem } from "@/types";
import { useEffect, useRef, useState, type JSX, type SetStateAction } from "react";
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
  <Grid layout="two-two" className="gradient" id="home">
    <section className="[grid-area:a/a-start/d-end/d-end] flex flex-col items-center justify-between gap-8">
      <h1 className="orbit text-9xl [line-height:1] text-shadow-v">reuben dubois</h1>

      <p>some creative tagline trust me bro</p>

      <div className="flex items-center flex-wrap justify-center gap-4">
        <Card colour="sky" className="shadow-v">
          UI/UX Designer
        </Card>
        <Card colour="yellow" className="px-6 py-5 shadow-v">
          Software Engineer
        </Card>
        <Card colour="pink" className="shadow-v">
          Web Developer
        </Card>
      </div>
    </section>

    {/* STRETCH => make the svgs gradient animate */}
    <img
      src="/wireframeCodeGradient.svg"
      alt="App Wireframe & JSX Code fading from transparent to white"
      loading="eager"
      className="w-dvw row-start-2 row-end-3 col-span-3 self-end"
    />
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
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);

  useEffect(() => {
    if (!bgText) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target;

      const card1 = refOne.current;
      const card2 = refTwo.current;
      const card3 = refThree.current;

      if (target === card1 || target === card2 || target === card3) return;

      setBgText("");
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [bgText]);

  return (
    <Grid layout="three-two" id="background" className="bg-pri">
      <TitleBlock text="My Background" alt="#" className="in-grid [grid-area:a]" />

      <Card variant="long" colour="sky" className="in-grid [grid-area:b/b-start/b-end/c-end]">
        {myBackground[bgText].text || "Click a card to read more about me!"}
      </Card>

      {Array.from({ length: 3 }).map((_, count) => (
        <BackgroundCard
          ref={count == 0 ? refOne : count == 1 ? refTwo : refThree}
          index={count == 0 ? "one" : count == 1 ? "two" : "three"}
          bgText={bgText}
          setBgText={setBgText}></BackgroundCard>
      ))}
    </Grid>
  );
};

const BackgroundCard = ({
  ref,
  className,
  index,
  bgText,
  setBgText,
  ...props
}: cardProps & {
  index: "one" | "two" | "three";
  bgText: string;
  setBgText: (val: SetStateAction<string>) => void;
}) => (
  <Card
    className={`in-grid bg-on-pri transition-all cursor-pointer [grid-area:f] ${className} ${
      bgText === index ? "scale-110" : ""
    }`}
    onClick={() => setBgText(index)}
    ref={ref}
    {...props}>
    <img src={myBackground[index].image} alt="Image For a 'My Background' section" />
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
  <header className={`flex flex-col items-center gap-4 ${className}`}>
    <div className="title h-[calc(50%-0.5rem)] min-w-[7rem] w-full bg-ter-cont shadow-iii rounded-2xl flex items-center justify-center px-2">
      <h1 className="orbit text-ter text-center [line-height:1] text-[2.5rem]">{text}</h1>
    </div>

    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="bg-ter h-[calc(50%-0.5rem)] min-w-[7rem] w-full rounded-2xl text-ter-cont shadow-iii flex items-center justify-center object-contain"
    />
  </header>
);

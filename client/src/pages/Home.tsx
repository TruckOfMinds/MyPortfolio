import { Suspense, useState, type JSX } from "react";

import "./style/Home.css";

import Card from "@/components/Card";
import Grid from "@/components/Grid";
import TopProjects from "@/components/TopProjects";
import Skills from "@/components/Skills";
import { bgTexts } from "@/lib/data";

export default function HomePage(): JSX.Element {
  return (
    <>
      <title>RD Portfolio</title>
      <main>
        <Hero />
        <About />
        <Background />
      </main>
    </>
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
      src="#"
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

const About = (): JSX.Element => (
  <Grid layout="three-two" id="about" className="bg-sec">
    <TitleBlock text="Who Am I?" src="#" alt="#" className="[grid-area:a]" />

    <Card
      className="[grid-area:b/b-start/b-end/c-end]"
      variant="in-grid"
      colour="pink"
    >
      foo bar
    </Card>

    <Card className="[grid-area:d]" colour="purple" variant="in-grid">
      <h2>Skills</h2>
      <Suspense fallback={""}>
        <Skills
          skills={[
            { id: BigInt(1), bg: "green", name: "one", logo_name: "logo" },
            { id: BigInt(2), bg: "blue", name: "two", logo_name: "logo" },
          ]}
        />
      </Suspense>
    </Card>

    <Card
      className="[grid-area:e/e-start/e-end/f-end] flex justify-center"
      variant="in-grid"
      colour="purple"
    >
      <Suspense fallback={""}>
        <TopProjects
          data={[
            { id: BigInt(1), image: "react.svg", repo_name: "a" },
            { id: BigInt(2), image: "vite.svg", repo_name: "b" },
          ]}
        />
      </Suspense>
    </Card>
  </Grid>
);

const Background = (): JSX.Element => {
  const [bgText, setBgText] = useState("Click a card to hear more about me!");

  return (
    <Grid layout="three-two" id="background" className="bg-pri">
      <TitleBlock
        text="My Background"
        src="#"
        alt="#"
        className="[grid-area:a]"
      />

      <Card
        variant="in-grid long"
        colour="sky"
        className="[grid-area:b/b-start/b-end/c-end]"
      >
        {bgText}
      </Card>

      <Card
        variant="in-grid"
        className="bg-on-pri [grid-area:d]"
        onClick={() => setBgText(bgTexts.one)}
      >
        one
      </Card>

      <Card
        variant="in-grid"
        className="bg-on-pri [grid-area:e]"
        onClick={() => setBgText(bgTexts.two)}
      >
        two
      </Card>

      <Card
        variant="in-grid"
        className="bg-on-pri [grid-area:f]"
        onClick={() => setBgText(bgTexts.three)}
      >
        three
      </Card>
    </Grid>
  );
};

const TitleBlock = ({
  text,
  src,
  alt,
  className,
}: {
  text: string;
  src: string;
  alt: string;
  className?: string;
}): JSX.Element => (
  <header
    className={`flex flex-col items-center gap-4 w-[80%] h-[80%] ${className}`}
  >
    <div className="title h-[calc(50%-0.5rem)] min-w-[7rem] w-full bg-ter-cont shadow-iii rounded-2xl">
      <h1 className="orbit text-ter">{text}</h1>
    </div>

    <div className="bg-ter h-[calc(50%-0.5rem)] min-w-[7rem] w-full rounded-2xl text-ter-cont [line-height:5rem] shadow-iii">
      <img src={src} alt={alt} className="object-cover" />
    </div>
  </header>
);

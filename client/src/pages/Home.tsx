import type { JSX } from "react";
import type { gridProps } from "../types";

import "./style/Home.css";

import Card from "../components/Card";

export default function HomePage(): JSX.Element {
  const Grid = ({ className, id, children }: gridProps): JSX.Element => (
    <section className={`grid ${className}`} id={id}>
      {children}
    </section>
  );

  // const Title = ({text}: {text: string}): JSX.Element => ();

  // const ThinImage = ({src}: {src: string}): JSX.Element => ();

  return (
    <>
      <title>RD Portfolio</title>
      <main>
        <Grid className="gradient" id="home">
          <h1 className="[grid-area:a] rotate-[-5deg] orbit text-[5.5rem] [line-height:1] text-shadow-v">
            reuben
            <br />
            dubois
          </h1>

          <img
            src="#"
            alt="Image of my code!"
            className="image rotate-[8.5deg] [grid-area:b] w-2xs min-h-40 bg-ter rounded-4xl text-ter-cont [line-height:10rem] shadow-iii"
          />

          <div className="[grid-area:c] rotate-[-8deg] flex flex-col items-center gap-4">
            <img
              src="/design.jpg"
              alt="Image of my design project!"
              className="w-[14rem] min-h-32 bg-ter rounded-2xl text-ter-cont [line-height:8rem] shadow-iii"
            />
            <p className="text-sm">Scroll to see more!</p>
          </div>

          <h2 className="[grid-area:d] rotate-[4deg] text-shadow-v">
            <span className="orbit text-[4.5rem] [line-height:1]">UI/UX</span>
            <br />
            Design and Developer
          </h2>
        </Grid>

        <Grid id="about">
          <div className="flex flec-col items-center gap-2">
            {/* <Title text="Who Am I?" /> */}
            {/* <ThinImage src="#" /> */}
          </div>

          <Card>fd</Card>

          {/* <SkillSet /> */}

          {/* <Carousel /> */}
        </Grid>

        {/* <Grid id="background"></Grid> */}
      </main>
    </>
  );
}

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
      <title>RD Portfolio</title>
      <main>
        <Grid id="top" className="max-h-fit">
          <Header variant="Dev" />
          <Projects />
        </Grid>
      </main>
    </>
  );
}

const Projects = (): JSX.Element => {
  // ? handle query strings

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["code"],
    queryFn: fetchCodeCards,
  });

  if (isPending) return <></>;
  if (isError) return <>{error}</>;

  return (
    <section className="in-grid full max-h-fit">
      {data.map((d) => (
        <Card variant="code" codeData={d} colour={randomColour()} />
      ))}
    </section>
  );
};

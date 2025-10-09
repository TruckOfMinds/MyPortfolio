import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCodeCards } from "@/utils/serverPortal";
import { getCardColour } from "@/lib/data";

import Header, { SearchAndSort } from "@/components/Header";
import Grid from "@/components/Grid";
import { CodeCard } from "@/components/Card";

import "./style/Code.css";
import type { codeCardProps, userInputProps } from "@/types";
import { Error, Loading } from "@/components/fallbacks";

export default function CodePage() {
  const [userInput, setUserInput] = useState<userInputProps>({
    search: "",
    sort: "date",
    desc: true,
  });

  return (
    <>
      <title>Code Projects | RD Portfolio</title>
      <main>
        <Grid id="top" className="with-header w-full pt-4 grows">
          <Header
            text="My Projects"
            isDev
            children={<SearchAndSort isDev userInput={userInput} setUserInput={setUserInput} />}
          />
          <Projects userInput={userInput} />
        </Grid>
      </main>
    </>
  );
}

const Projects = ({ className, userInput }: { className?: string; userInput: userInputProps }) => {
  const { isPending, isError, isFetching, error, data, refetch } = useQuery({
    queryKey: ["code"],
    queryFn: fetchCodeCards,
  });

  if (isPending)
    return (
      <article className={`code-card-container code-projects self-center`}>
        <Loading />
      </article>
    );

  if (isError)
    return (
      <article className={`absolute trans top-[50dvh] left-[50dvh]`}>
        <Error error={error} refetch={refetch} />
      </article>
    );

  // —————————————————————————————————————————————————————————————————————————————————————

  const isInSearch = (d: codeCardProps) => {
    if (
      userInput.search === "" ||
      d.name.toLocaleLowerCase().includes(userInput.search.toLocaleLowerCase())
    )
      return true;

    for (const i of d.tags)
      if (i[0].toLocaleLowerCase().includes(userInput.search.toLocaleLowerCase())) return true;

    return false;
  };

  // —————————————————————————————————————————————————————————————————————————

  const sortMethod = (a: codeCardProps, b: codeCardProps): number => {
    if (userInput.sort === "date") {
      const aMMDD = a.date.split("/");
      const dateA = [aMMDD[1], aMMDD[0], aMMDD[2]].join("/");
      const bMMDD = b.date.split("/");
      const dateB = [bMMDD[1], bMMDD[0], bMMDD[2]].join("/");

      if (Date.parse(dateA) > Date.parse(dateB)) return 1;
      if (Date.parse(dateA) < Date.parse(dateB)) return -1;
      return 0;
    }

    return a.name.localeCompare(b.name);
  };

  // —————————————————————————————————————————————————————————————————————————

  const newData = data
    .filter(isInSearch)
    .sort(sortMethod)
    .map(d => (
      <CodeCard key={d.id} colour={getCardColour(d.id)} className="h-48 card-width" {...d} />
    ));

  // —————————————————————————————————————————————————————————————————————————————————————

  return (
    <article
      className={`code-card-container code-projects ${isFetching ? "opacity-75" : ""} ${className}`}
    >
      {userInput.desc ? newData.reverse() : newData}
    </article>
  );
};

import "./style/Designs.css";

import type { userInputProps } from "@/types";
import { useState } from "react";
import { fetchDesignCards } from "@/utils/serverPortal";
import { Error, Loading } from "@/components/fallbacks";
import { getCardColour, sortMethod } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { DesignCard } from "@/components/Card";

import Header, { SearchAndSort } from "@/components/Header";

import Grid from "@/components/Grid";

/* In-File Components =>
  - Projects
*/

export default function DesignsPage() {
  const [userInput, setUserInput] = useState<userInputProps>({
    search: "",
    sort: "date",
    desc: true,
  });

  return (
    <>
      <title>Design Projects | RD Portfolio</title>
      <main>
        <Grid id="top" className="with-header w-full pt-4 grows">
          <Header
            children={<SearchAndSort userInput={userInput} setUserInput={setUserInput} />}
            text="Projects"
            isDesign
          />

          <Projects userInput={userInput} />
        </Grid>
      </main>
    </>
  );
}

//* —————————————————————————————————————————————————————————————————————————————————————

// ? changing inputs while data loads
const Projects = ({ userInput }: { userInput: userInputProps }) => {
  const { isPending, isError, isFetching, error, data, refetch } = useQuery({
    queryKey: ["design"],
    queryFn: fetchDesignCards,
  });

  if (isPending)
    return (
      <section className={`project-card-container self-center`}>
        <Loading />
      </section>
    );

  if (isError)
    return (
      <article className={`absolute trans top-[50dvh] left-[50dvh]`}>
        <Error error={error} refetch={refetch} />
      </article>
    );

  const newData = data
    .filter(
      d =>
        userInput.search === "" ||
        d.name.toLocaleLowerCase().includes(userInput.search.toLocaleLowerCase())
    )
    .sort((a, b) => sortMethod(a, b, userInput))
    .map(d => <DesignCard key={d.id} colour={getCardColour(d.id)} {...d} />);

  return (
    <section className={`project-card-container ${isFetching ? "" : null}`}>
      {userInput.desc ? newData.reverse() : newData}
    </section>
  );
};

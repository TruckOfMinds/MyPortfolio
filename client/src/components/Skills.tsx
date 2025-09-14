import type { skillProps } from "@/types";

import { fetchSkills } from "@/utils/serverPortal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState, type JSX } from "react";

import Card from "./Card";

import "./style/Skills.css";

export default function Skills(): JSX.Element {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isPending) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <>
      <h2 className="w-fit orbit [letter-spacing:.1rem] text-xl mt-1">
        Technical Skills
      </h2>
      <section className="w-full h-[86%] pb-2 pt-4 flex flex-wrap items-center content-evenly justify-center gap-x-4 gap-y-2 scroller background">
        {data.map((d) => (
          <SkillCard key={d.name} d={d} />
        ))}
      </section>
    </>
  );
}

const SkillCard = ({ d }: { d: skillProps }): JSX.Element => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShow(false);
      }
    };

    if (show) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [show, ref]);

  return (
    <section className="relative">
      <Card
        onClick={() => setShow(!show)}
        className="skill rounded-lg flex items-center justify-center h-16 w-16 transition-all hover:brightness-110 hover:scale-110 active:brightness-90 active:scale-95"
        colour="purple"
        data-skill={d.name}
        ref={ref}
      >
        <img
          src={
            [import.meta.env.VITE_BUCKET_URL, d.logo_name].join("/skills/") ||
            "/noSkill.svg"
          }
          alt="logo"
          className="h-9/10"
        />
      </Card>

      {show ? (
        <Card className="skill-name absolute left-[50%] top-0 logo-name rounded-md z-10 shadow-v bg-bg text-on-sec-cont">
          {d.name || "n/a"}
        </Card>
      ) : (
        <></>
      )}
    </section>
  );
};

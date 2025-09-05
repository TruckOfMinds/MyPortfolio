import type { skillProps } from "@/types";
import { fetchSkills } from "@/utils/serverPortal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState, type JSX } from "react";

import Card from "./Card";

export default function Skills(): JSX.Element {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  if (isPending) return <>Loading...</>;

  if (isError) return <>{error}</>;

  return (
    <section className="w-full flex flex-wrap items-center content-center justify-evenly">
      {data.map((d) => (
        <SkillCard key={d.id} d={d} />
      ))}
    </section>
  );
}

const SkillCard = ({ d }: { d: skillProps }): JSX.Element => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) setTimeout(() => setShow(false), 3000);
  }, [show]);

  return (
    <section className="relative">
      <Card
        onClick={() => setShow(true)}
        className="rounded-lg flex items-center justify-center h-20 w-20"
      >
        <img
          src={[import.meta.env.VITE_BUCKET_URL, d.logo_name].join("/skills")}
          alt="logo"
          className="h-9/10"
        />
      </Card>
      {show ? (
        <Card className="absolute left-[50%] top-0 logo-name rounded-2xl">
          {d.name}
        </Card>
      ) : (
        <></>
      )}
    </section>
  );
};

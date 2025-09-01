import { fetchSkills } from "@/utils/serverPortal";
import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react";

export default function Skills(): JSX.Element {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  if (isPending) return <>Loading...</>;

  if (isError) return <>{error}</>;

  return (
    <section className="w-full">
      {data.map((d) => (
        <div
          key={d.id}
          style={{ backgroundColor: d.bg }}
          className="rounded-2xl flex items-center justify-center gap-1"
        >
          <img
            src={[import.meta.env.VITE_BUCKET_URL, d.logo_name].join("/")}
            alt={`logo`}
          />
          <h2 className="orbit">{d.name}</h2>
        </div>
      ))}
    </section>
  );
}

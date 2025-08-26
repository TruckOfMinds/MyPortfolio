import type { skillProps } from "@/types";
import type { JSX } from "react";

export default function Skills({
  skills,
}: {
  skills: skillProps[];
}): JSX.Element {
  return (
    <section className="w-full">
      {skills.map((s) => (
        <div
          key={s.id}
          style={{ backgroundColor: s.bg }}
          className="rounded-2xl flex items-center justify-center gap-1"
        >
          <img
            src={[import.meta.env.VITE_BUCKET_URL, s.logo_name].join("/")}
            alt={`logo`}
          />
          <h2 className="orbit">{s.name}</h2>
        </div>
      ))}
    </section>
  );
}

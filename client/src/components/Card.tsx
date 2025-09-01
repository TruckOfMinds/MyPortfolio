import type { cardProps, codeCardProps, designCardProps } from "@/types";
import type { JSX } from "react";

import "./style/Card.css";

export default function Card({
  variant,
  colour,
  children,
  className,
  onClick,
  codeData,
  designData,
}: cardProps) {
  return (
    <article
      className={[
        "card rounded-2xl shadow-iii px-4 py-2 max-h-[50dvh] min-w-fit min-h-fit",
        variant,
        colour,
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {variant === "code" && codeData ? (
        <CodeContent {...codeData} />
      ) : variant === "design" && designData ? (
        <DesignContent {...designData} />
      ) : (
        children
      )}
    </article>
  );
}

const CodeContent = (props: codeCardProps): JSX.Element => (
  <div className="card-grid code">
    <img src={props.image} alt="Project image" className="[grid-area:image]" />
    <p className="[grid-area:name]">{props.repo_name}</p>
    <section className="flex items-center overflow-x-clip hide-scrollbar justify-self-start [grid-area:tag]">
      {props.tags.map((t) => (
        <p className="tag px-2 py-2 rounded-full">{t}</p>
      ))}
    </section>
  </div>
);

const DesignContent = (props: designCardProps): JSX.Element => (
  <div className="card-grid design">
    <img src={props.image} alt="Project image" className="[grid-area:image]" />
    <p className="[grid-area:name]">{props.name}</p>
    <p className="[grid-area:bio]"></p>
  </div>
);

import type { cardProps, codeCardProps, designCardProps } from "@/types";
import type { JSX } from "react";

import "./style/Card.css";
import { Link } from "react-router";

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
        "rounded-2xl shadow-iii px-4 py-2 max-h-[50dvh] min-h-fit",
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
  <Link to={props.repo_name} className="card-grid code">
    <img src={props.image} alt="Project image" className="[grid-area:image]" />
    <p className="[grid-area:name]">{props.repo_name}</p>
    <section className="flex items-center overflow-x-clip hide-scrollbar justify-self-start [grid-area:tag]">
      {props.tags.map((t) => (
        <p className="tag px-2 py-2 rounded-full">{t}</p>
      ))}
    </section>
  </Link>
);

const DesignContent = (props: designCardProps): JSX.Element => (
  <Link to={props.name} className="card-grid design">
    <img src={props.image} alt="Project image" className="[grid-area:image]" />
    <p className="[grid-area:name]">{props.name}</p>
    <p className="[grid-area:bio]"></p>
  </Link>
);

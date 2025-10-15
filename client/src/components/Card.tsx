import type { cardProps, codeCardProps, designCardProps } from "@/types";

import "./style/Card.css";
import { Link } from "react-router";
import { memo, useState, type JSX } from "react";

export default function Card({ variant, colour, className, ...props }: cardProps): JSX.Element {
  return (
    <article
      className={[
        "card rounded-2xl shadow-iii max-h-[50dvh] px-4 py-3",
        variant,
        colour,
        className,
      ].join(" ")}
      {...props}
    />
  );
}

//* —————————————————————————————————————————————————————————————————————————————————————

const StatusTag = ({ status }: { status: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`status ${status.toLowerCase()} absolute top-2 right-2 text-xs text-right rounded-full h-5 w-fit min-w-5 py-2 ${
        show ? "px-2" : null
      }`}
      tabIndex={0}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
      onKeyUp={e => (e.key === "Enter" ? setShow(!show) : null)}>
      {show ? status : null}
    </div>
  );
};

//* —————————————————————————————————————————————————————————————————————————————————————

export const CodeCard = memo(
  ({ name, logo, tags, date, owner, ...props }: codeCardProps & cardProps): JSX.Element => {
    return (
      <Link
        to={encodeURI(`/code-projects/${owner}/${name}`)}
        className={`relative ${props.className}`}>
        <Card variant={props.variant} className="card-grid code pr-8" colour={props.colour}>
          <div className="[grid-area:image] code-card-image-container image-cont rounded-md flex items-center justify-center">
            <img
              src={`${import.meta.env.VITE_BUCKET_URL + logo}`}
              alt={`${name} Logo Image`}
              className="card-image"
              loading="lazy"
            />
          </div>

          <p className="[grid-area:name] text-xl w-full overflow-auto flex items-baseline justify-between">
            {name} <span className="text-xs">{date}</span>
          </p>

          <section className="[grid-area:tags] tags">
            {tags.map(t => {
              if (t[1] === "status") {
                return <StatusTag key={t[0]} status={t[0]} />;
              }

              return (
                <p key={t[0]} className="tag text-sm px-3 py-1 rounded-full">
                  {t[0]}
                </p>
              );
            })}
          </section>
        </Card>
      </Link>
    );
  }
);

//* —————————————————————————————————————————————————————————————————————————————————————

export const DesignCard = memo(
  ({ name, className, logo, date, ...props }: designCardProps & cardProps) => {
    return (
      <Link to={`/design-projects/${name}`} className="design-card">
        <Card {...props} className={`card-grid design py-4 ${className}`}>
          <div className="image-cont w-full [grid-area:image] justify-self-center rounded-md flex items-center justify-center">
            <img
              src={`${import.meta.env.VITE_BUCKET_URL}/${logo}`}
              alt={`${name} Logo Image`}
              className="h-3/4"
            />
          </div>

          <h1 className="[grid-area:name] text-xl">{name}</h1>
          <p className="[grid-area:date] text-xs">{date}</p>
        </Card>
      </Link>
    );
  }
);

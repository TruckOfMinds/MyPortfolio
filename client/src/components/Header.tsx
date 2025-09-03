import type { JSX } from "react";

export default function Header({
  className,
  variant,
}: {
  className?: string;
  variant: string;
}) {
  return (
    <header className={`${className}`}>
      <section>
        <Title text="My Projects" />
        <div>{variant}</div>
      </section>

      <section>
        <search></search>
        <filter></filter>
      </section>
    </header>
  );
}

export const Title = ({ text }: { text: string }): JSX.Element => (
  <h1>{text}</h1>
);

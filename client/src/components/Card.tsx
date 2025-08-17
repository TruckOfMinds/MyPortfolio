import type { cardProps } from "../types";

export default function Card({
  variant,
  colour,
  children,
  className,
}: cardProps) {
  return (
    <section className={[variant, colour, className].join("")}>
      {children}
    </section>
  );
}

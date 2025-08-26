import type { cardProps } from "@/types";
import "./style/Card.css";

export default function Card({
  variant,
  colour,
  children,
  className,
  onClick,
}: cardProps) {
  return (
    <section
      className={[
        "card rounded-2xl shadow-iii px-4 py-2 max-w-[75dvw] max-h-[50dvh] min-w-fit min-h-fit",
        variant,
        colour,
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </section>
  );
}

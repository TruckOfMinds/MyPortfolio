import "./style/Grid.css";

import type { JSX } from "react";
import type { gridProps } from "@/types";

export default function Grid({
  layout = "two-two",
  className,
  id,
  children,
}: gridProps): JSX.Element {
  return (
    <section className={`${layout} grid ${className ? className : ""}`} id={id}>
      {children}
    </section>
  );
}

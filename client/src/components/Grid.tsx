import "./style/Grid.css";

import type { JSX } from "react";
import type { gridProps } from "@/types";

export default function Grid({ layout = "two-two", className, ...props }: gridProps): JSX.Element {
  return (
    <section className={`${layout} grid min-h-fit ${className ? className : ""}`} {...props} />
  );
}

import "./style/Grid.css";

import type { gridProps } from "@/types";

export default function Grid({ layout = "two-two", className, ...props }: gridProps) {
  return (
    <section className={`${layout} grid min-h-fit ${className ? className : ""}`} {...props} />
  );
}

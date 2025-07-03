import type { JSX } from "react";
import "./style/Navbar.css";
import {
  Chevron,
  HomeIcon,
  CodeIcon,
  DesignsIcon,
  ContactIcon,
  LightIcon,
  DarkIcon,
} from "./NavIcons";
import { Link } from "react-router";

export default function Navbar(): JSX.Element {
  const getTheme = (): string => {
    const theme: string | null | undefined = document
      .querySelector(":root")
      ?.getAttribute("data-theme");
    return theme || "light";
  };

  return (
    <nav
      className="w-fit h-dvh sticky left-0 top-0
        flex flex-col items-center justify-evenly
        rounded-r-2xl bg-on-pri-f-var"
    >
      <Chevron />

      <Link to={"/"}>
        <HomeIcon />
        <p>Home</p>
      </Link>

      <Link to={"/code-projects"}>
        <CodeIcon />
        <p>Dev Projects</p>
      </Link>

      <Link to={"/design-projects"}>
        <DesignsIcon />
        <p>Design Projects</p>
      </Link>

      <Link to={"/contact-me"}>
        <ContactIcon />
        <p>Contact Me</p>
      </Link>

      <div>
        {getTheme() === "light" ? <DarkIcon /> : <LightIcon />}
        <p>Change Theme</p>
      </div>
    </nav>
  );
}

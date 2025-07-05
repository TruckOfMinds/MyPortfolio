import { useState, type JSX } from "react";
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
import { Link, useMatch } from "react-router";
import { getTheme } from "../utils/theming";

export default function Navbar(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const usePath = (path: string): boolean => {
    return Boolean(useMatch(path));
  };

  return (
    <nav
      className="w-fit h-dvh sticky left-0 top-0
        flex flex-col items-center justify-evenly
        rounded-r-2xl bg-on-pri-f-var"
    >
      <Chevron onClick={() => setExpanded(!expanded)} />

      <Link to={"/"} className={`nav-link ${usePath("/") ? `active` : ``}`}>
        <HomeIcon />
        <p>Home</p>
      </Link>

      <Link
        to={"/code-projects"}
        className={`nav-link ${usePath("/code-projects") ? `active` : ``}`}
      >
        <CodeIcon />
        <p>Dev Projects</p>
      </Link>

      <Link
        to={"/design-projects"}
        className={`nav-link ${usePath("/design-projects") ? `active` : ``}`}
      >
        <DesignsIcon />
        <p>Design Projects</p>
      </Link>

      <Link
        to={"/contact-me"}
        className={`nav-link ${usePath("/contact-me") ? `active` : ``}`}
      >
        <ContactIcon />
        <p>Contact Me</p>
      </Link>

      <div id="themeChanger">
        {getTheme() === "light" ? <DarkIcon /> : <LightIcon />}
        <p>Change Theme</p>
      </div>
    </nav>
  );
}

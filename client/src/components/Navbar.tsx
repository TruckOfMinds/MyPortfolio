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
      className={`navbar
        w-[6rem] h-dvh fixed left-0 top-0 ${expanded ? `w-[10rem]` : ``}
        flex flex-col items-center justify-evenly
        rounded-r-2xl bg-on-pri-f-var pl-3 pr-3 shadow-v`}
    >
      <Chevron
        onClick={() => setExpanded(!expanded)}
        className={`nav-toggle transition-transform cursor-pointer ${
          expanded ? `rotate-180` : ``
        }`}
      />

      <div className="nav-links h-3/5 flex flex-col items-center justify-between gap-1">
        <Link to={"/"} className={`nav-link ${usePath("/") ? `active` : ``}`}>
          <HomeIcon />
          <p className={!expanded ? `hide-text` : `closed`}>Home</p>
        </Link>

        <Link
          to={"/code-projects"}
          className={`nav-link ${usePath("/code-projects") ? `active` : ``}`}
        >
          <CodeIcon />
          <p className={!expanded ? `hide-text` : `closed`}>Dev Projects</p>
        </Link>

        <Link
          to={"/design-projects"}
          className={`nav-link ${usePath("/design-projects") ? `active` : ``}`}
        >
          <DesignsIcon />
          <p className={!expanded ? `hide-text` : `closed`}>Design Projects</p>
        </Link>

        <Link
          to={"/contact-me"}
          className={`nav-link ${usePath("/contact-me") ? `active` : ``}`}
        >
          <ContactIcon />
          <p className={!expanded ? `hide-text` : `closed`}>Contact Me</p>
        </Link>
      </div>

      <div id="themeChanger">
        {getTheme() === "light" ? <DarkIcon /> : <LightIcon />}
        <p
          className={
            !expanded ? `hide-text text-xs mt-1` : `text-xs mt-1 closed`
          }
        >
          Change Theme
        </p>
      </div>
    </nav>
  );
}

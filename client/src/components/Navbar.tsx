import "./style/Navbar.css";

import type { contextType } from "@/types";
import { useContext, useState, type JSX, type KeyboardEvent } from "react";
import { Link, useMatch } from "react-router";
import { ThemeContext } from "@/lib/context";
import {
  Chevron,
  HomeIcon,
  CodeIcon,
  DesignsIcon,
  ContactIcon,
  LightIcon,
  DarkIcon,
} from "./icons";

export default function Navbar(): JSX.Element {
  const { theme, setTheme }: contextType = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  const usePath = (path: string): boolean => Boolean(useMatch(path));

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        localStorage.setItem("theme", "dark");
        setTheme("dark");
        break;
      case "dark":
        localStorage.setItem("theme", "light");
        setTheme("light");
        break;
    }
  };

  return (
    <nav
      className={`navbar
        w-[6rem] h-dvh fixed left-0 top-0 text-light
        flex flex-col items-center justify-evenly z-10
        rounded-r-2xl bg-on-pri-f-var pl-3 pr-3 shadow-v
        ${expanded ? `w-[10rem]` : ``}`}>
      <Chevron
        onClick={() => setExpanded(!expanded)}
        onKeyUp={(e: KeyboardEvent<SVGSVGElement>) => e.key === "Enter" && setExpanded(!expanded)}
        className={`nav-toggle transition-transform cursor-pointer ${expanded ? `rotate-180` : ``}`}
        tabIndex={0}
      />

      <div className="nav-links h-3/5 flex flex-col items-center justify-between gap-1">
        <Link to={"/"} className={`nav-link ${usePath("/") ? `active` : ``}`}>
          <HomeIcon />
          <p className={expanded ? `open` : `closed`}>Home</p>
        </Link>

        <Link
          to={"/code-projects"}
          className={`nav-link ${usePath("/code-projects") ? `active` : ``}`}>
          <CodeIcon />
          <p className={expanded ? `open` : `closed`}>Dev Projects</p>
        </Link>

        <Link
          to={"/design-projects"}
          className={`nav-link ${usePath("/design-projects") ? `active` : ``}`}>
          <DesignsIcon />
          <p className={expanded ? `open` : `closed`}>Design Projects</p>
        </Link>

        <Link to={"/contact-me"} className={`nav-link ${usePath("/contact-me") ? `active` : ``}`}>
          <ContactIcon />
          <p className={expanded ? `open` : `closed`}>Contact Me</p>
        </Link>
      </div>

      <div
        id="themeChanger"
        onClick={toggleTheme}
        onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && toggleTheme()}
        tabIndex={0}>
        {theme !== "dark" ? <DarkIcon /> : <LightIcon />}

        <p className={`text-xs mt-1 ${expanded ? `open` : `closed`}`}>Change Theme</p>
      </div>
    </nav>
  );
}

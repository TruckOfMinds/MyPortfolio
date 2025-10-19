import { useState, type Dispatch, type JSX, type SetStateAction } from "react";
import "./style/Navbar.css";
import {
  Chevron,
  HomeIcon,
  CodeIcon,
  DesignsIcon,
  ContactIcon,
  LightIcon,
  DarkIcon,
} from "./icons";
import { Link, useMatch } from "react-router";
import { isDark } from "@/lib/data";

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const usePath = (path: string): boolean => Boolean(useMatch(path));

  const toggleTheme = () => {
    // fallback to state if no local storage, e.g. mannually deleted
    const currentTheme = isDark() ?? theme === "dark";

    setTheme(!currentTheme ? "dark" : "light");
    localStorage.setItem("isDark", String(theme === "dark"));
  };

  return (
    <nav
      className={`navbar
        w-[6rem] h-dvh fixed left-0 top-0 ${expanded ? `w-[10rem]` : ``}
        flex flex-col items-center justify-evenly
        rounded-r-2xl bg-on-pri-f-var pl-3 pr-3 shadow-v`}>
      <Chevron
        onClick={() => setExpanded(!expanded)}
        className={`nav-toggle transition-transform cursor-pointer ${expanded ? `rotate-180` : ``}`}
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

      <div id="themeChanger" onClick={toggleTheme}>
        {theme === "dark" ? <DarkIcon /> : <LightIcon />}

        <p className={` text-xs mt-1 ${expanded ? `open` : `closed`}`}>Change Theme</p>
      </div>
    </nav>
  );
}

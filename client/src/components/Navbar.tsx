import "./style/Navbar.css";

import type { contextType } from "@/types";
import { useContext, useState, type KeyboardEvent, type ReactNode } from "react";
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
import { useMediaQuery } from "@/hooks/use-media-query";

type NavLinkProps = {
  className?: string;
  to: string;
  children: ReactNode;
};
const NavLink = ({ className, ...props }: NavLinkProps) => (
  <Link {...props} className={`${useMatch(props.to) && `active`} ${className}`} />
);

export default function Navbar() {
  const { theme, setTheme }: contextType = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1000px)");

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

  return isDesktop ? (
    <nav
      className={`navbar
        w-24 h-dvh fixed left-0 top-0 text-light
        flex flex-col items-center justify-evenly z-10
        rounded-r-2xl bg-on-pri-f-var pl-3 pr-3 shadow-v dark-border
        ${expanded && `w-40`}`}
    >
      <Chevron
        onClick={() => setExpanded(!expanded)}
        onKeyUp={(e: KeyboardEvent<SVGSVGElement>) => e.key === "Enter" && setExpanded(!expanded)}
        className={`nav-toggle transition-transform cursor-pointer ${expanded ? `rotate-180` : ``}`}
        tabIndex={0}
      />

      <div className="nav-links w-full h-3/5 max-h-[30rem] flex flex-col items-center justify-between gap-1">
        <NavLink className="nav-link" to={"/"}>
          <HomeIcon />
          <p className={expanded ? `open` : `closed`}>Home</p>
        </NavLink>

        <NavLink className="nav-link" to={"/code-projects"}>
          <CodeIcon />
          <p className={expanded ? `open` : `closed`}>Dev Projects</p>
        </NavLink>

        <NavLink className="nav-link" to={"/design-projects"}>
          <DesignsIcon />
          <p className={expanded ? `open` : `closed`}>Design Projects</p>
        </NavLink>

        <NavLink className="nav-link" to={"/contact-me"}>
          <ContactIcon />
          <p className={expanded ? `open` : `closed`}>Contact Me</p>
        </NavLink>
      </div>

      <div
        id="themeChanger"
        onClick={toggleTheme}
        onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && toggleTheme()}
        tabIndex={0}
      >
        {theme !== "dark" ? <DarkIcon /> : <LightIcon />}

        <p className={`text-xs mt-1 ${expanded ? `open` : `closed`}`}>Change Theme</p>
      </div>
    </nav>
  ) : (
    <nav
      className={`
      w-[94dvw] mobile-navbar shadow-v dark-border
      fixed bottom-3.5 left-[50dvw] translate-x-[-50%] 
      flex items-center justify-evenly
      bg-on-pri-f-var text-light
      px-1 py-4 rounded-2xl z-1000
      `}
    >
      <NavLink
        to="/"
        className="mobile-nav-link flex flex-col gap-1 items-center justify-center text-sm h-9/10"
      >
        <HomeIcon />
        <p className="min-w-8 max-w-10 text-center">Home</p>
      </NavLink>

      <NavLink
        to="/code-projects"
        className="mobile-nav-link flex flex-col gap-1 items-center justify-center text-sm h-9/10"
      >
        <CodeIcon />
        <p className="w-12 text-center flex justify-center">Dev</p>
      </NavLink>

      <div
        id="themeChanger"
        onClick={toggleTheme}
        onKeyUp={(e: KeyboardEvent<HTMLDivElement>) => e.key === "Enter" && toggleTheme()}
        tabIndex={0}
      >
        {theme !== "dark" ? <DarkIcon /> : <LightIcon />}
      </div>

      <NavLink
        to="/design-projects"
        className="mobile-nav-link flex flex-col gap-1 items-center justify-center text-sm h-9/10"
      >
        <DesignsIcon />
        <p className="w-12 text-center flex justify-center">Design</p>
      </NavLink>

      <NavLink
        to="/contact-me"
        className="mobile-nav-link flex flex-col gap-1 items-center justify-center text-sm h-9/10"
      >
        <ContactIcon />
        <p className="w-12 text-center flex justify-center">Contact</p>
      </NavLink>
    </nav>
  );
}
